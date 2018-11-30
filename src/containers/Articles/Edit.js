// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component  
import Edit from "../../components/Articles/Edit";
import history from "../../history";
import { editArticle } from "../../data/actions/state";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
    return {
        article: state.articles[id]
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        handleSubmit: (article) => {
            dispatch(editArticle(article, id))
            history.push('/');

        },
    };
};



// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Edit); 