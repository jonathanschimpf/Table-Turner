import React, { Component } from "react";
import API from "../utils/API";

class ViewForm extends Component {
	state = {
		title: "",
		author: "",
		body: ""
	}

	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		}, () => {
			console.log(`${name}: ${value}`);
		});
	}

	handleFormSubmit = event => {
		event.preventDefault();

		console.log(this.state);

		const newPost = {
			title: this.state.title,
			author: this.state.author,
			body: this.state.body
		}

		API.savePost(newPost)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<form method="POST">
				<div className="form-group">
					<label for="title">Title:</label>
					<input type="text" className="form-control" id="title" name="title" onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label for="author">Author:</label>
					<input type="text" className="form-control" id="author" name="author" onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label for="body">Body:</label>
					<textarea className="form-control" id="body" name="body" onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<button className="btn btn-primary" onClick={this.handleFormSubmit}>Add New Post</button>
				</div>
			</form>
		);
	}
}

export default ViewForm;