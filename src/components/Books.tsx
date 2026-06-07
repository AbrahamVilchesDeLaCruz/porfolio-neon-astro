import React, { useState, useEffect, useMemo } from "react";
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
    setSelectedBook((prev) => (prev?.id === book.id ? null : book));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? books.length - 1 : prev - 1));
  };

  const visibleSlides = 1;
  const displayBooks = [];

  for (let i = 0; i < visibleSlides; i++) {
    const index = (currentIndex + i) % books.length;
    displayBooks.push(books[index]);
  }

  // Chunk books into rows so each row has its own shelf base
  const BOOKS_PER_ROW = 11;
  const shelfRows = useMemo(() => {
    const rows: IBook[][] = [];
    for (let i = 0; i < books.length; i += BOOKS_PER_ROW) {
      rows.push(books.slice(i, i + BOOKS_PER_ROW));
    }
    return rows;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      {isMobile ? (
        // 🔄 Modo Carrusel en mobile
        <div className="relative w-full flex items-center justify-center bg-indigo-950/80 shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),0_0_30px_rgba(99,102,241,0.25)] rounded-xl p-4">
          <button
            onClick={prevSlide}
            className="absolute left-2 z-10 p-2 rounded-full bg-transparent hover:bg-indigo-900/50 transition-all duration-300 top-1/2 -translate-y-1/2"
            aria-label="Libro anterior"
          >
            <FaChevronLeft className="text-2xl text-indigo-400" />
          </button>

          <div className="w-full px-12">
            {displayBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => handleClickedBook(book)}
                className="border-2 border-indigo-400/60 rounded-lg overflow-hidden flex flex-col items-center justify-center h-[440px] bg-indigo-950/40 cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center justify-center h-[250px] w-full">
                  <img
                    src={book.image}
                    alt={book.title}
                    loading="lazy"
                    className="object-contain max-h-full max-w-full p-6"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between w-full">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-300 text-center">
                    {book.title}
                  </h3>
                  <p className="text-indigo-400 mb-4 text-center">{book.author}</p>
                  <button className="bg-indigo-900 text-indigo-300 px-4 py-2 rounded-lg">
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
            className="absolute right-2 z-10 p-2 rounded-full bg-transparent hover:bg-indigo-900/50 transition-all duration-300 top-1/2 -translate-y-1/2"
            aria-label="Libro siguiente"
          >
            <FaChevronRight className="text-2xl text-indigo-400" />
          </button>
        </div>
      ) : (
        // 🪵 Estantería tipo IKEA en desktop — mueble con laterales, repisas sólidas y neón
        <div className="w-fit max-w-full mx-auto">
          <div className="inline-block relative bg-indigo-950/90 border-2 border-indigo-400/30 rounded-lg py-3 px-[3px] shadow-[0_0_25px_rgba(99,102,241,0.2)]">
            {/* Iluminación neón ambiental interior */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-indigo-950/0 via-indigo-950/0 to-indigo-950/60 pointer-events-none" />

            {/* Estantería: repisas sólidas alternando con filas de libros */}
            <div className="relative">
              {shelfRows.map((row, rowIndex) => (
                <div key={rowIndex}>
                  {/* Repisa (estante) sobre la que se apoyan los libros */}
                  {rowIndex > 0 && (
                    <div className="relative my-1.5">
                      {/* Canto de la repisa con glow neón */}
                      <div className="h-3 bg-gradient-to-b from-indigo-800/40 to-indigo-900/60 rounded-sm border-t border-indigo-400/40 shadow-[0_2px_8px_rgba(99,102,241,0.12)]" />
                      {/* Sombra difusa debajo de la repisa */}
                      <div className="absolute -bottom-[2px] left-[2%] right-[2%] h-[5px] bg-indigo-950/40 blur-sm rounded-full" />
                    </div>
                  )}

                  {/* Fila de libros — se ve ~25% del ancho (lomo), hover expande al 100% */}
                  <div className="flex justify-center items-end gap-[2px]">
                    {row.map((book) => (
                      <div
                        key={book.id}
                        onClick={() => handleClickedBook(book)}
                        className={`
                          w-12 hover:w-44 h-56
                          transition-all duration-300 ease-out cursor-pointer
                          overflow-hidden rounded-sm relative
                          hover:-translate-y-1 hover:z-10 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
                          ${
                            selectedBook?.id === book.id
                              ? "ring-2 ring-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.8)] z-10"
                              : ""
                          }
                        `}
                      >
                        <img
                          src={book.image}
                          alt={book.title}
                          loading="lazy"
                          className="h-full object-cover object-left transition-all duration-300 ease-out"
                          style={{ width: "176px" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Repisa inferior (cierre del mueble) */}
              <div className="relative mt-1.5">
                <div className="h-3 bg-gradient-to-b from-indigo-800/40 to-indigo-900/60 rounded-sm border-t border-indigo-400/40 shadow-[0_2px_8px_rgba(99,102,241,0.12)]" />
                <div className="absolute -bottom-[2px] left-[2%] right-[2%] h-[5px] bg-indigo-950/40 blur-sm rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}

      {!selectedBook && (
        <p className="text-sm text-indigo-700 text-center mt-2">← Hacé clic en un libro para ver más →</p>
      )}

      {selectedBook && (
        <div className="w-full md:max-w-2xl flex flex-col md:flex-row justify-center items-center h-auto bg-indigo-950/80 border-2 border-indigo-400 rounded-lg p-8 shadow-lg shadow-indigo-500/20 gap-6 mx-auto mt-4">
          <img
            src={selectedBook.image}
            alt={selectedBook.title}
            className="w-48 h-auto object-cover rounded-lg shadow-lg"
          />
          <article className="flex flex-col justify-center text-center items-center gap-y-6">
            <header>
              <h2 className="text-xl font-semibold text-indigo-100 mb-1 text-center">
                {selectedBook.title}
              </h2>
              <p className="text-sm text-indigo-300 mb-1 text-center">
                Autor: {selectedBook.author}
              </p>
            </header>
            <p className="text-sm text-indigo-100/90 leading-relaxed text-center">
              {selectedBook.summary}
            </p>
            <button className="bg-indigo-900 text-indigo-300 px-4 py-2 rounded-lg text-sm">
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
  );
};

export default Books;
