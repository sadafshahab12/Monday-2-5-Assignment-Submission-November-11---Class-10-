import { NextResponse } from "next/server";
import { books } from "./data";
// Route handler
export async function GET() {
  try {
    if (!books) {
      throw new Error("Books Data is unavailable");
    }
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    console.log("error in fetching books", error);
    return NextResponse.json(
      { message: "An error occurred while fetching books." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const newBook = await request.json();
    if (
      !newBook.title ||
      !newBook.shortIntro ||
      !newBook.price ||
      newBook.availability === undefined ||
      !newBook.src
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const newBookId = { ...newBook, id: books.length + 1 };
    books.push(newBookId);

    return NextResponse.json(newBookId, { status: 201 });
  } catch (error) {
    console.log("Error adding new book:", error);
    return NextResponse.json(
      { message: "An error occurred while adding the book." },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    // fint the book by id
    const { id, title, shortIntro, price, src, availability } =
      await request.json();
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      return NextResponse.json({ message: "Book Not Found" }, { status: 404 });
    }

    // updating book
    books[bookIndex] = { id, title, shortIntro, price, src, availability };
    return NextResponse.json(books[bookIndex], { status: 200 });
  } catch (error) {
    console.log("Error updating book:", error);
    return NextResponse.json(
      { message: "Error updating the book" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      return NextResponse.json({ message: "Book Not Found" }, { status: 404 });
    }
    books.splice(bookIndex, 1);
    return NextResponse.json(
      { message: "Book deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error deleting book:", error);
    return NextResponse.json(
      { message: "An error occurred while deleting the book." },
      { status: 500 }
    );
  }
}
