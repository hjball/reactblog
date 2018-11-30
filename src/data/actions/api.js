// import our axios config file
import axios from "../../axios";

import { setTitles, addArticle } from "./state";
import history from "../../history";


export const getTitles = () => dispatch => {
    axios.get("/articles").then(({ data }) => {
        const articles = data.data;

        // dispatch the setTitles action, passing along the articles List
        dispatch(setTitles(articles));
    });
};

export const postArticle = (data) => dispatch => {
	axios.post("/articles", {
		title: data.title,
		article: data.article,
	}).then(data => {
		dispatch(addArticle(data.data));
		console.log(data.data);
        history.push("/");
    });
};

