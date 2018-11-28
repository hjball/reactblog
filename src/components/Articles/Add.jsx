import React from "react";

import Form from "../Forms/Form";

const fields = [
    { name: "title", label: "Title", value: "" },
    { name: "article", label: "Article", value: "" },
];

const Add = ({ onSubmit }) => (
    <React.Fragment>
        <h2>Add Article</h2>

        <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Add Article" />
    </React.Fragment>
);

export default Add;
