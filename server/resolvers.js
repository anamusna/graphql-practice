const Book = require('./MongooseModel/Book');

const resolvers = {
	hello      : (args, context) => {
		return context.greeting;
	},
	books      : async (args, context) => {
		//see on terminal
		console.log('args and context', context);

		return await Book.find();
	},
	addBook    : async (args, context) => {
		console.log('xxx', args.title);
		var newBook = new Book({
			title  : args.title,
			author : args.author
		});

		var err = await newBook.save();

		if (err) return err;
		return newBook;
	},
	removeBook : async (args, context) => {
		console.log('xxxyyy', args.title, args.author);
		var doc = await Book.findOneAndRemove({
			title : args.title
		});

		return doc;
	}
};

module.exports = resolvers;
