import axios from "axios";

export default {
	getPosts: () => {
		return axios.get("/api/post");
	},
	savePost: newPost => {
		return axios.post("/api/post/", newPost)
	}
}