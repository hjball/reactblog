import React from "react";
import { Link } from "react-router-dom";

// show each tag - tags passed in by parent
const Tags = ({ tags }) => (
    <React.Fragment>
        { tags.map((tag, i) => (
            <Link to={ "/tags/" + tag } className="label label-primary" key={ i }>{ tag }</Link>
        ))}
    </React.Fragment>
);

export default Tags;
