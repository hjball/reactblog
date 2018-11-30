// react redux's connect function
import { connect } from "react-redux";

import { getTitles } from "../../data/actions/api";

// import in the Articles component
import Articles from "../../components/Articles/Articles";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        // convert the articles object into an array
        articles: state.titles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getTitles()),
    };
};

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Articles);