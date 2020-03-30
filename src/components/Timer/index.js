import Timer from "./Timer";
import {connect} from "react-redux";

import { loadSymbol } from "../../store";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onTimer: () => {
        //console.log(ownProps.symbol);
        dispatch(loadSymbol(ownProps.symbol || ""));
    }
});

export default connect(null, mapDispatchToProps)(Timer);