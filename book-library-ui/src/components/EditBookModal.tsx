import React, { useState, ChangeEvent, FormEvent } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMediaQuery } from "usehooks-ts";
import { Pencil } from "lucide-react";

interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
}

interface EditBookModalProps {
  book: Book;
}

export const EditBookModal: React.FC<EditBookModalProps> = ({ book }) => {
  const [open, setOpen] = useState(false);
  const [updatedBook, setUpdatedBook] = useState<Book>(book);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedBook({
      ...updatedBook,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/books/${book.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBook)
      });

      if (response.ok) {
        console.log('Book updated:', await response.json());
        // Close the modal after successful submission
        setOpen(false);
      } else {
        console.error('Failed to update book');
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Pencil className='cursor-pointer h-5 text-gray-600 hover:text-black duration-100' />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Edit Book</DialogTitle>
            <DialogDescription>
              Click save changes when you're done.
            </DialogDescription>
          </DialogHeader>
          <form className={cn("grid items-start gap-4")} onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="title">Book Title</Label>
              <Input
                id="title"
                name="title"
                value={updatedBook.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                name="author"
                value={updatedBook.author}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                value={updatedBook.price}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Pencil className='cursor-pointer h-5 text-gray-600 hover:text-black duration-100' />
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit Book</DrawerTitle>
          <DrawerDescription>
            Click save changes when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <form className={cn("px-4", "grid items-start gap-4")} onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="title">Book Title</Label>
            <Input
              id="title"
              name="title"
              value={updatedBook.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              name="author"
              value={updatedBook.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              value={updatedBook.price}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
