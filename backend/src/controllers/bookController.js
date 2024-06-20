import {
  createBook,
  getBookById,
  getAllBooks,
  updateBookById,
  deleteBookById
} from '../models/book.js';

export const createBookHandler = async (req, res, next) => {
  const { title, author, price } = req.body;
  try {
    const newBook = await createBook(title, author, price);
    res.status(201).json(newBook); 
  } catch (err) {
    next(err);
  }
};


export const getBookByIdHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await getBookById(id); 
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    console.error('Error retrieving book:', err);
    next(err); 
  }
};

export const getAllBooksHandler = async (req, res, next) => {
  try {
    const books = await getAllBooks();
    res.json(books); 
  } catch (err) {
    next(err); 
  }
};


export const updateBookByIdHandler = async (req, res, next) => {
  const { id } = req.params;
  const { title, author, price } = req.body;
  try {
    const updatedBook = await updateBookById(id, title, author, price);
    if (updatedBook) {
      res.json(updatedBook); 
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    next(err); 
  }
};


export const deleteBookByIdHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedBook = await deleteBookById(id);
    if (deletedBook) {
      res.json(deletedBook); 
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    next(err); 
  }
};
