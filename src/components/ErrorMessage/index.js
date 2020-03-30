import ErrorMessage from "./ErrorMessage";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    show: (state.error || {}).showError,
    message: (state.error || {}).info
})

export default connect(mapStateToProps)(ErrorMessage);