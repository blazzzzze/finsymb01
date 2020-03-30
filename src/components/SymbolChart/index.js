import SymbolChart from "./SymbolChart";
import { connect } from "react-redux";
import { EURUSD, EURRUB } from "../../store";
import {toShortTime} from "../../tools/dateTimeFunctions";

const mapStateToProps = (state) => ({
    labels: (state[EURUSD] || []).map(item => toShortTime(item.dateTime)),
    data: [
        (state[EURUSD] || []).map(item => item.value),
        (state[EURRUB] || []).map(item => item.value)
    ],
    captions: [EURUSD, EURRUB]
});

export default connect(mapStateToProps)(SymbolChart);