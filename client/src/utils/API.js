import axios from "axios";

export default {
	getTables: () => {
		return axios.get("/api/post");
	},
	saveTables: newTable => {
		return axios.post("/api/post/", newTable)
	}
}