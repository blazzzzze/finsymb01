import { connect } from "react-redux";
import SymbolTable from './SymbolTable';
import {toShortTime} from "../../tools/dateTimeFunctions";

const mapStateToProps = (state, ownProps) => ({
    data: (state[ownProps.symbol] || []).map(item => ({dateTime: toShortTime(item.dateTime), value: item.value}))
});

export default connect(mapStateToProps)(SymbolTable);