import { connect } from "react-redux";
import Actions from "../../components/Articles/Actions";
import { deleteArticle } from "../../data/actions/state";
import history from "../../history";

const mapDispatchToProps = dispatch => {
    return {
        onClick: data => { 
        	dispatch(deleteArticle(data));

        	history.push("/");
        },
    };
};

export default connect(null, mapDispatchToProps)(Actions);