import pool from '../config/db.js';


export const createBook = async (title, author, price) => {
  const query = 'INSERT INTO books (title, author, price) VALUES ($1, $2, $3) RETURNING *';
  const values = [title, author, price];
  const result = await pool.query(query, values);
  return result.rows[0];
};


export const getBookById = async (id) => {
  const query = 'SELECT * FROM books WHERE id = $1';
  try {
    const result = await pool.query(query, [id]);
    console.log(result);
    return result.rows[0]; 

  } catch (err) {
    console.error('Error querying database:', err);
    throw err; 
  }
};


export const getAllBooks = async () => {
  const query = 'SELECT * FROM books';
  const result = await pool.query(query);
  return result.rows; 
};


export const updateBookById = async (id, title, author, price) => {
  const query = 'UPDATE books SET title = $1, author = $2, price = $3 WHERE id = $4 RETURNING *';
  const values = [title, author, price, id];
  const result = await pool.query(query, values);
  return result.rows[0]; 
};


export const deleteBookById = async (id) => {
  const query = 'DELETE FROM books WHERE id = $1 RETURNING *';
  const result = await pool.query(query, [id]);
  return result.rows[0]; 
};
