import SymbolDisplay from "./SymbolDisplay";
import {connect} from "react-redux";
import { loadSymbol, EURRUB, EURUSD } from "../../store";

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(loadSymbol(EURRUB));
        dispatch(loadSymbol(EURUSD));
    }
});



export default connect(null, mapDispatchToProps)(SymbolDisplay);