import React from 'react';
import { Trash } from 'lucide-react';
import { EditBookModal } from './EditBookModal';

interface BookProps {
  book: {
    id: number;
    title: string;
    author: string;
    price: string;
  };
  onDelete: (id: number) => void;
}

const Book: React.FC<BookProps> = ({ book, onDelete }) => {
  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div className='flex gap-3 flex-col h-52 pt-10 pb-4 
            px-4 items-center cursor-pointer shadow hover:shadow-xl
             border justify-between duration-200 rounded-lg bg-gray-100 hover:bg-gray-200'>
      <h2 className='font-bold text-xl text-gray-800'>{book.title}</h2>
      <span className='text-md text-gray-600 font-semibold '>{book.author}</span>
      <span className='text-sm font-bold '>K{book.price}</span>

      <div className='flex justify-between w-full self-end'>
        <EditBookModal book={book} />
        <Trash
          className='cursor-pointer h-5 text-gray-600 hover:text-black duration-100'
          onClick={handleDelete} // Attach delete function to onClick event
        />
      </div>
    </div>
  );
};

export default Book;
