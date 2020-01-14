import React, { Component } from 'react';

class AddForm extends Component {
	constructor(props) {
		super(props);
		this.state = { title: '', author: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name] : value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		if (!this.state.title || !this.state.author) return;

		const data = {
			title  : this.state.title,
			author : this.state.author
		};

		this.setState({ title: '', author: '' });
		this.props.onSubmit(data);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group row">
					<label for="inputEmail3" className="col-sm-2 col-form-label">
						Title
					</label>
					<div className="col-sm-10">
						<input
							className="form-control"
							type="text"
							name="title"
							value={this.state.title}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label for="inputPassword3" className="col-sm-2 col-form-label">
						Author
					</label>
					<div className="col-sm-10">
						<input
							className="form-control"
							type="text"
							name="author"
							value={this.state.author}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Add
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default AddForm;
