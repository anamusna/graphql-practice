import React, { Component } from 'react';

class Book extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		const title = e.target.value;

		// Here below, the app use "title" value to determine which book to be removed.
		// This is due to the fact that when non-react Graphql app was developed previously, there is no easy way to find out "_id".
		// In practical app, "_id" must be used to identify which book to be removed.
		this.props.onRemove(title);
	}

	render() {
		return (
			<div className="book">
				<li className="list-group-item " key={this.props._id}>
					<span>{this.props.title}</span>
					<span>{this.props.author}</span>
					<button
						style={{ position: 'absolute', right: '10px', top: '5px' }}
						className="btn btn-danger"
						type="button"
						value={this.props.title}
						onClick={this.handleClick}
					>
						x
					</button>
				</li>
			</div>
		);
	}
}

export default Book;
