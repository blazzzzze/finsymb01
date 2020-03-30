import ExceptionHandler from "./ExceptionHandler";
import {connect} from "react-redux";
import { showError } from "../../store";

const mapDispatchToProps = {
    onException: showError
}

export default connect(null, mapDispatchToProps)(ExceptionHandler);