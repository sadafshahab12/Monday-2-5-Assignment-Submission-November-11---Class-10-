import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-slate-800 py-4 px-10">
        <nav className="flex justify-between items-center">
          <div className="logo text-yellow-500 text-3xl font-bold">
            Book Hub
          </div>
          <ul className=" text-yellow-500 md:flex hidden justify-center items-center gap-10">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <Link href="/" className="cursor-pointer">
              About
            </Link>
            <Link href="/" className="cursor-pointer">
              All Books
            </Link>
          </ul>
        </nav>
      </header>
      <section>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:p-5 p-0">
          <div className='bg-[url("/images/bd.jpg")] lg:h-auto h-[30rem] bg-center bg-cover w-full md:rounded-lg rounded-none md:block hidden'></div>
          <div className="content p-10 md:space-y-5 space-y-7  md:text-left text-center">
            <h1 className="lg:text-5xl text-4xl font-bold lg:leading-[4rem] leading-[3rem]">
              Organize Your Books, Simplify Your Reading
            </h1>
            <p className="lg:text-lg text-sm">
              Effortlessly manage your book collection and keep track of your
              reading journey.
            </p>
            <div className='bg-[url("/images/bd.jpg")] lg:h-auto h-[25rem] bg-center bg-cover w-full  md:hidden block'></div>
            <p className="text-[0.75rem] lg:text-sm lg:leading-8 leading-6 text-gray-500">
              Our intuitive book management system lets you add, edit, and
              organize your books with ease. Whether you are an avid reader, a
              library manager, or a bookstore owner, we offer a seamless
              solution to track availability, prices, descriptions, and much
              more. Take control of your book collection today
            </p>
            <button className="bg-slate-700 text-white py-3 px-8 hover:bg-slate-900 duration-300 mx-auto md:mx-0 block">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
