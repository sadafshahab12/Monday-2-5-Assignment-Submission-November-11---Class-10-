"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Book } from "@/app/api/books/data";
import Image from "next/image";
import Loading from "./Loading";

const BookList = () => {
  const [book, setBook] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const [newBook, setNewBooks] = useState<Book>({
    id: 0,
    title: "",
    shortIntro: "",
    price: 0,
    availability: false,
    src: "",
  });

  const formRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch("../api/books");
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.log("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, []);

  const handelEditClick = (book: Book) => {
    setEditingBook(book); // Set the book to edit
    setNewBooks(book); // Pre-fill the form with the book's data
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target; // Get the name and value of the input
    setNewBooks((prevBook) => ({
      ...prevBook,
      [name]: value, //Update the form state
    }));
  };

  //   const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     const { name, value } = e.target;
  //     setNewBooks((prevBook) => ({
  //       ...prevBook,
  //       [name]: value,
  //     }));
  //   };
  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBooks((prevBook) => ({
      ...prevBook,
      availability: e.target.checked,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingBook) {
      // Update existing book (PUT request)
      try {
        const response = await fetch("../api/books", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBook),
        });

        if (response.ok) {
          const updateBook = await response.json();
          setBook((prevBook) =>
            prevBook.map((book) =>
              book.id === updateBook.id ? updateBook : book
            )
          );
          resetForm();
        } else {
          console.log("Failed to update book", await response.json());
        }
      } catch (error) {
        console.log("Error updating book:", error);
      }
    } else {
      try {
        const response = await fetch("../api/books", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBook),
        });
        if (response.ok) {
          const addedBook = await response.json();
          setBook((prevBook) => [...prevBook, addedBook]);
          resetForm();
        } else {
          console.log("Failed to add book", await response.json());
        }
      } catch (error) {
        console.log("Error adding book:", error);
      }
    }
  };
  const resetForm = () => {
    setEditingBook(null); // Hide the edit form
    setNewBooks({
      // Clear the form fields
      id: 0,
      title: "",
      shortIntro: "",
      price: 0,
      availability: false,
      src: "",
    });
  };

  const handleDeleteClick = async (bookId: number) => {
    try {
      const response = await fetch("../api/books/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: bookId }),
      });

      if (response.ok) {
        setBook((prevBook) => prevBook.filter((book) => book.id !== bookId));
      } else {
        console.log("Failed to delete book", await response.json());
      }
    } catch (error) {
      console.log("Error deleting book:", error);
    }
  };

  return (
    <>
       <div
        ref={formRef}
        className="newBook lg:px-[10rem] md:px-[8rem] sm:px-[4rem] px-[2rem] space-y-4 py-[3rem]"
      >
        <h2 className="text-3xl font-bold text-center ">
          {editingBook ? "Edit Book" : "Add New Book"}
        </h2>
        <form action="" onSubmit={handleSubmit} className="space-y-5">
          <div className="title flex flex-col justify-start items-start space-y-2">
            <label htmlFor="title">Book Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
              className="border border-slate-600 p-2 rounded-md focus:shadow-lg outline-none duration-200 w-full "
            />
          </div>
          <div className="bookIntro title flex flex-col justify-start items-start space-y-2">
            <label htmlFor="shortIntro">Short Description:</label>
            <textarea
              id="shortIntro"
              name="shortIntro"
              value={newBook.shortIntro}
              onChange={handleInputChange}
              required
              className="border border-slate-600 p-2 rounded-md focus:shadow-lg outline-none duration-200 w-full "
            />
          </div>
          <div className="price title flex flex-col justify-start items-start space-y-2">
            <label htmlFor="price">Book Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={newBook.price}
              onChange={handleInputChange}
              required
              className="border border-slate-600 p-2 rounded-md focus:shadow-lg outline-none duration-200 w-full "
            />
          </div>
          <div className="availability flex justify-start gap-3 items-center  ">
            <label htmlFor="availability">Book Availability:</label>
            <input
              type="checkbox"
              id="availability"
              name="availability"
              checked={newBook.availability}
              onChange={handleAvailabilityChange}
              className="border border-slate-600"
            />
          </div>
          <div className="image-url title flex flex-col justify-start items-start space-y-2">
            <label htmlFor="src">Image URL:</label>
            <input
              type="text"
              id="src"
              name="src"
              value={newBook.src}
              onChange={handleInputChange}
              required
              className="border border-slate-600 p-2 rounded-md focus:shadow-lg outline-none duration-200 w-full "
            />
          </div>
          <div className="btn">
            <button
              type="submit"
              className="bg-slate-800 text-white py-2 px-5 rounded-lg"
            >
              {editingBook ? "Save Changes" : "Add Book"}
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1 className="md:text-3xl text-2xl text-center font-bold pt-10">
          Explore Our Book List
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 p-10 gap-10">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          book.map((book) => (
            <div
              key={book.id}
              className="book-card shadow-lg rounded-lg hover:scale-105 duration-500 "
            >
              <div className="w-full md:h-[20rem] h-[15rem] bg-slate-800 rounded-tr-lg rounded-tl-lg">

            
              <Image
                src={book.src}
                alt={book.title}
                width={800}
                height={500}
                className=" w-full h-full  md:object-center  md:object-contain object-cover rounded-tr-lg rounded-tl-lg"
              />
                </div>

              <div className="md:space-y-3  space-y-1 md:p-5 p-3">
                <h2 className="md:text-xl text-[1rem] font-bold">
                  {book.title}
                </h2>
                <p className="md:text-sm text-[0.75rem] text-wrap text-gray-500">
                  {book.shortIntro}
                </p>
                <p className="md:text-[1.25rem] text-[1rem] font-bold">
                  ${book.price}
                </p>
                <p className="md:text-[1rem] text-[0.8rem]">{book.availability ? "Available" : "Out of Stock"}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handelEditClick(book)}
                    className="bg-slate-800 md:text-lg text-[0.8rem] text-white md:py-2 py-1 md:px-5 px-3 md:rounded-lg rounded-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(book.id)}
                    className="bg-red-500 md:text-lg text-[0.8rem] text-white md:py-2 py-1 md:px-5 px-3 md:rounded-lg rounded-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

   
    </>
  );
};

export default BookList;
