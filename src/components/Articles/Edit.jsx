import React from "react";

import Form from "../Forms/Form";
import FourOhFour from "../FourOhFour";

// the edit article component
const Edit = ({ article }) => !article ? <FourOhFour /> : (
    <React.Fragment>
        <h2>Edit Article</h2>

        <Form className="panel-body"
        	fields={[
        		{ name: "title", label: "Title", value: article.title }, 
        		{ name: "article", label: "Article", value: article.article },
        		{ name: "tags", label: "Tags", value: article.tags } 
        	]}
        	button="Edit Article" />
    </React.Fragment>
);

export default Edit;