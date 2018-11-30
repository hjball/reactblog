const addArticle = (state, action) => {
	let newArticle = buildArticleFromData(action);

	return {
		...state,
		articles: {
			...state.articles,
			[newArticle.id]: newArticle,
		},
	};
};

const buildArticleFromData = ({ title, article, id, tags }) => {

    return {
	    id: id,
	    title: title,
	    article: article,
	    comments: [],
	    tags: tags,
    };
};

const editArticle = (state, { id, title, article, tags }) => {
    let newState = {
        ...state,
        articles: {
            ...state.articles,
            [id]: {
                ...state.articles[id],
                title: title,
                article: article,
                tags: tags,
            }
        }
    };

    return newState
};

const setTitles = (state, { titles }) => {
    return {
        ...state,
        titles: titles,
    };
};

const deleteArticle = (state, action) => {
	let newState = {...state, articles: {...state.articles}}
	delete newState.articles[action.id];
	return newState;
};

const reducer = (state, action) => {
    switch(action.type) {
    	case "addArticle": return addArticle(state, action);
    	case "deleteArticle": return deleteArticle(state, action);
    	case "editArticle": return editArticle(state, action);
    	case "setTitles": return setTitles(state, action);
        default: return state;
    }
}

export default reducer;