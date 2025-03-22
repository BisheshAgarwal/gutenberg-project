import { NavLink } from "react-router";

import Pattern from "@/assets/Pattern.svg";
import Fiction from "@/assets/Fiction.svg";
import Drama from "@/assets/Drama.svg";
import Humour from "@/assets/Humour.svg";
import Politics from "@/assets/Politics.svg";
import Philosophy from "@/assets/Philosophy.svg";
import History from "@/assets/History.svg";
import Adventure from "@/assets/Adventure.svg";

import GenreCard from "@/components/custom/genre-card";

const GENRES = [
  {
    name: "Fiction",
    slug: "fiction",
    icon: Fiction,
  },
  {
    name: "Drama",
    slug: "drama",
    icon: Drama,
  },
  {
    name: "Humor",
    slug: "humor",
    icon: Humour,
  },
  {
    name: "Politics",
    slug: "politics",
    icon: Politics,
  },
  {
    name: "Philosophy",
    slug: "philosophy",
    icon: Philosophy,
  },
  {
    name: "History",
    slug: "history",
    icon: History,
  },
  {
    name: "Adventure",
    slug: "adventure",
    icon: Adventure,
  },
];

const Home = () => {
  return (
    <div className="bg-secondary h-screen">
      <div
        className="pt-20 pb-5 px-5"
        style={{
          backgroundImage: `url(${Pattern})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h1>Gutenberg Project</h1>
          <p className="text-lg">
            A social cataloging website that allows you to freely search its
            database of books, annotations, and reviews.
          </p>
        </div>
      </div>
      <div className="gap-x-20 gap-y-8 grid grid-cols-1 md:grid-cols-2 container px-5 lg:px-0 mt-7">
        {GENRES.map((genre) => (
          <NavLink
            to={`/${genre.slug}`}
            key={genre.slug}
            className="hover:scale-105 transition-transform"
          >
            <GenreCard genre={genre.name} icon={genre.icon} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
