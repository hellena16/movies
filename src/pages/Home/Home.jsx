import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionMovies } from "../../store/actions/moviesActions";

function Home() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(actionMovies.getMovies(page));
  }, [page]);

  const handlePage = (e) => {
    setPage(e.target.textContent)
  }

  return (
    <>
      <div>
        {movies.map((i) => {
          return (
            <div>
              <p> title:{i.title}</p>
              <p>rating:{i.vote_average}</p>
              <p> date: {i.release_date}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${i.poster_path}`}
                alt="image"
                width="250"
              />
            </div>
          );
        })}
      </div>
      <button onClick={handlePage}>1</button>
      <button onClick={handlePage}>2</button>
      <button onClick={handlePage}>3</button>
    </>
  );
}

export default Home;
