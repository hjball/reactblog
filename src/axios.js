import axios from "axios";

export default axios.create({
	baseURL: "http://henry.restful.training/api/",
	params: {"key": "57344f5891200f626f8f30dde41f620a71824f36"},
	headers: {"Accept": "application/json"},

});