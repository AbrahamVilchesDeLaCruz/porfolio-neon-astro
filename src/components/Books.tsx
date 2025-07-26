import React, { useState, useEffect } from "react";
import { books } from "./books/data/books";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface IBook {
  title: string;
  id: number;
  image: string;
  author: string;
  summary: string;
  amazonUrl?: string;
}

const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Books: React.FC = () => {
  const isMobile = useBreakpoint();

  const [selectedBook, setSelectedBook] = useState<null | IBook>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickedBook = (book: IBook) => {
    setSelectedBook(book);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? books.length - 1 : prev - 1));
  };

  const visibleSlides = isMobile ? 1 : 3;
  const displayBooks = [];

  for (let i = 0; i < visibleSlides; i++) {
    const index = (currentIndex + i) % books.length;
    displayBooks.push(books[index]);
  }

  return (
    <>
      {isMobile ? (
        // 🔄 Modo Carrusel en sm
        <div className="relative w-full flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute bg-transparent left-0 z-10 p-2 rounded-full shadow-lg hover:bg-gray-100 transform -translate-x-1/2 top-1/2"
          >
            <FaChevronLeft className="text-2xl text-mariner-400" />
          </button>

          <div className="w-full px-12">
            {displayBooks.map((book) => (
              <div
                key={book.id}
                className="border-2 border-mariner-400 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center h-[440px]"
              >
                <div className="flex items-center justify-center h-[250px] w-full">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="object-contain max-h-full max-w-full p-6"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between w-full">
                  <h3 className="text-xl font-semibold mb-2 text-mariner-300 text-center">
                    {book.title}
                  </h3>
                  <p className="text-mariner-600 mb-4 text-center">{book.author}</p>
                  <button className="bg-mariner-900 text-mariner-300 px-4 py-2 rounded-lg">
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                    >
                      📖 Más información
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-transparent p-2 rounded-full shadow-lg hover:bg-gray-100 transform translate-x-1/2 top-1/2"
          >
            <FaChevronRight className="text-2xl text-mariner-400" />
          </button>
        </div>
      ) : (
        // 🧱 Modo Librería en md+
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="max-w-7xl h-auto flex justify-center items-center flex-wrap gap-2">
            {books.map((book) => (
              <div
                key={book.id}
                className="w-20 h-64 p-1 hover:w-auto hover:z-10 flex justify-center items-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer"
                onClick={() => handleClickedBook(book)}
              >
                {book.image ? (
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform transform group-hover:scale-110 group-hover:w-36"
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center w-full h-full p-4 bg-gray-100 group-hover:scale-105 transition-transform">
                    <h2 className="text-md font-semibold mb-2 text-center">{book.title}</h2>
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectedBook && (
            <div className="w-full md:max-w-2xl flex flex-col md:flex-row justify-center items-center h-auto bg-mariner-950 border-2 border-mariner-400 rounded-lg p-8 shadow-lg gap-4">
              <img
                src={selectedBook.image}
                alt={selectedBook.title}
                className="w-64 h-auto object-cover shadow-neon"
              />
              <article className="flex flex-col justify-center text-center items-center gap-y-6">
                <header>
                  <h2 className="text-xl font-semibold text-mariner-100 mb-1 text-center">
                    {selectedBook.title}
                  </h2>
                  <p className="text-sm text-mariner-300 mb-1 text-center">
                    Autor: {selectedBook.author}
                  </p>
                </header>
                <p className="text-sm text-mariner-100 neon-effect mb-1 text-center">
                  {selectedBook.summary}
                </p>
                <button className="bg-mariner-900 text-mariner-300 px-4 py-2 rounded-lg text-sm">
                  <a
                    href={selectedBook.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                  >
                    📖 Más información
                  </a>
                </button>
              </article>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Books;
