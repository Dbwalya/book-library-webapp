import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Book from './components/Book';
import Header from './components/Header';
import { Drawer } from './components/ui/drawer';

interface BookData {
  id: number;
  title: string;
  author: string;
  price: string;
}

const App: React.FC = () => {
  const [books, setBooks] = useState<BookData[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/books/');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const booksData: BookData[] = await response.json();
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleDeleteBook = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
        console.log(`Book with id ${id} deleted successfully`);
      } else {
        console.error('Failed to delete book');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="py-10 w-5/5 mx-auto">
      <Header />
      <Banner />
      <div className="">
        <div className="flex justify-between mx-auto mt-5 w-4/5">
          <h2 className="text-xl font-bold">Popular Now</h2>
          <span className="font-semibold cursor-pointer">View All</span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 py-10 w-4/5 mx-auto">
          {books.map(book => (
            <Book key={book.id} book={book} onDelete={handleDeleteBook} />
          ))}
        </div>
        <Drawer />
      </div>
    </div>
  );
};

export default App;
