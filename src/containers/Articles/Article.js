import { connect } from "react-redux";
import Article from "../../components/Articles/Article";
import { deleteArticle } from "../../data/actions/state";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
    return {
        // this is why storing articles in an object is useful
        article: state.articles[id],
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        handleDelete: () => {
        	dispatch(deleteArticle(id))
        },
    };
};

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Article);