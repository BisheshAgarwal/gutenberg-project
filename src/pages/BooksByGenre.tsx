import { useNavigate, useParams, useSearchParams } from "react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

import Back from "@/assets/Back.svg";
import SearchInput from "@/components/custom/search";
import { useDebounce } from "@/hooks/useDebounce";
import BookCard from "@/components/custom/book-card";

interface BookProps {
  title: string;
  formats: { [x: string]: string };
  authors: { name: string }[];
}

interface BooksState {
  title: string;
  image: string;
  author: string;
  format: string;
}

const BooksByGenre = () => {
  const { genre } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [books, setBooks] = useState<BooksState[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const fetchBooks = useCallback(
    async (url?: string) => {
      try {
        setIsLoading(true);
        const search = searchParams.get("search") || "";
        const result = await axios.get(
          url ||
            `https://gutendex.com/books?topic=${genre}&search=${search}&mime_type=image`
        );
        let allBooks = result.data.results;
        const nextPageUrl = result.data.next;
        allBooks = allBooks.map((book: BookProps) => ({
          title: book.title,
          image: book.formats["image/jpeg"],
          author: book.authors?.[0]?.name,
          format:
            book.formats["text/html"] ||
            book.formats["pdf"] ||
            book.formats["text/plain"] ||
            "",
        }));
        setNextPageUrl(nextPageUrl);
        setBooks((prev) => (url ? [...prev, ...allBooks] : allBooks));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [searchParams, genre]
  );

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const lastPostElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!nextPageUrl || isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
          if (nextPageUrl) {
            await fetchBooks(nextPageUrl);
          } else {
            if (observer.current) observer.current.disconnect();
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchBooks, nextPageUrl, isLoading]
  );

  const updateQueryParam = useDebounce((params: Record<string, string>) => {
    if (!params.search) {
      setSearchParams({});
      return;
    }
    setSearchParams(params);
  }, 300);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    updateQueryParam({ search: value });
  };

  const handleBookClick = (url: string) => {
    if (!url) {
      alert("No viewable version available");
      return;
    }
    window.open(url, "_blank");
  };

  return (
    <div className="bg-secondary min-h-screen pb-10">
      <div className="bg-white px-5 py-5 sticky top-0 z-10">
        <div className="container">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={Back}
              alt="Back"
              className="w-5 h-5 cursor-pointer"
              onClick={() => navigate("/")}
            />
            <h2>{genre && genre.charAt(0).toUpperCase() + genre.slice(1)}</h2>
          </div>
          <SearchInput value={searchValue} onChange={handleSearch} />
        </div>
      </div>
      <div className="py-7 px-5 gap-3 md:gap-x-8 md:gap-y-8 container lg:px-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
        {books.map((book, index) => (
          <div
            className="cursor-pointer"
            key={index}
            ref={books.length === index + 1 ? lastPostElementRef : null}
            onClick={() => handleBookClick(book.format)}
          >
            <BookCard
              author={book.author}
              image={book.image}
              title={book.title}
            />
          </div>
        ))}
      </div>
      {isLoading && <p className="text-center text-xl">Loading...</p>}
    </div>
  );
};

export default BooksByGenre;
