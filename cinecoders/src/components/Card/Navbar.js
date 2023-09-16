import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY"
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  return (
    <nav>
      <div>
        <label htmlFor="genres">Genres:</label>
        <select id="genres">
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      {/* Other Navbar components */}
    </nav>
  );
};

export default Navbar;
