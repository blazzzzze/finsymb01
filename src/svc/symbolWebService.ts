import BaseWebService from "./baseWebService";
import { InvalidParameterException } from "../exceptions/InvalidParameterException";
import { CurrencyRate } from "../models/CurrencyRate";
import { ValidateException } from "../exceptions/ValidateException";

export default class SymbolWebService extends BaseWebService {

    constructor(url: string) {
        if (!url) {
            throw new InvalidParameterException("url");
        }
        super(url);
    }

    public async GetCurrentSymbol(symbol: string): Promise<CurrencyRate> {

        if (!symbol){
            throw new InvalidParameterException("symbol");
        }

        const base = symbol.substring(0, 3);
        const second = symbol.substring(3);

        if (!base) throw new ValidateException("symbol", "Validation error. Could not parse base symbol");
        if (!second) throw new ValidateException("symbol", "Validation error. Could not parse second symbol")
        
        //{"rates":{"RUB":78.6935410404},"base":"USD","date":"2020-03-27"}

        const response = await this.sendRequest(`${this.baseUrl}base=${base}&symbols=${second}`, 
            'get', null);
        return {
            base: base,
            slave: second,
            dateTime: new Date(),
            value: response.data.rates[second] as number
        }
    }
}