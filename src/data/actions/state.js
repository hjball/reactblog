export const addArticle = ({ title, article, tags, id }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
        tags: tags,
        id: id,
    };
};

export const deleteArticle = id => {
	return {
		type: "deleteArticle",
		id: id,
	};
};

export const editArticle = ({ title, article, tags }, id ) => {
    return {
        type: 'editArticle',
        title: title,
        article: article,
        id: id,
        tags: tags.split(','),
    };
};

export const setTitles = titles => {
    return {
        type: "setTitles",
        titles: titles,
    };
};	