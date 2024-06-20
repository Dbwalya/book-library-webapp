import express from 'express';
import {
  createBookHandler,
  getBookByIdHandler,
  getAllBooksHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler
} from '../controllers/bookController.js';

const router = express.Router();

router.post('/books', createBookHandler);

router.get('/books/:id', getBookByIdHandler);

router.get('/books', getAllBooksHandler);

router.put('/books/:id', updateBookByIdHandler);

router.delete('/books/:id', deleteBookByIdHandler);

export default router;
