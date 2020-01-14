import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleRemove(title) {
		this.props.onRemove(title);
	}

	render() {
		return (
			<div className="bookList">
				<ol>
					{this.props.books.map((book) => (
						<Book key={book._id} title={book.title} author={book.author} onRemove={this.handleRemove} />
					))}
				</ol>
			</div>
		);
	}
}

export default BookList;
