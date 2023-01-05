// MovieDetail

import { Link } from "react-router-dom";
import Favourite from "../components/Favourite";
import { formatDate } from "../utils/dates";
import { imageFolderPath } from '../globals/globals';
import { calculateRating } from "../utils/rating";
import { useDispatch } from "react-redux";
import { addFavourite, deleteFavourite } from "../features/favourites/favouritesSlice";

function MovieDetail({ movie, isFavourite, images }) {

  const dispatch = useDispatch();

  function handleFavouriteClick(addToFav, movie) {
    if (addToFav === true) {
      dispatch(addFavourite(movie));
    } else {
      dispatch(deleteFavourite(movie));
    }
  }

  return (
    <>  <h2 className="page-header">Movie Info - {movie.title}</h2>
        <div className="info-container">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={`Backdrop for movie ${movie.title}`}></img>
            {movie.poster_path ? (
              <img className="poster" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster for movie ${movie.title}`}></img>
            ) : (
              <img className="poster" src={`${imageFolderPath}placeholder.jpg`} alt={`No poster available for movie ${movie.title}`}></img>
            )} 
            <div className="favourite-container2">
                <div className="favourite-open2">
                    <Favourite
                        movie={movie}
                        fav={isFavourite}
                        handleFavouriteClick={handleFavouriteClick}
                        classText={"tooltiptext2"}
                    />
                </div>
            </div>
            <div className="movie-details">
                <p className="movie-title">{movie.title}</p>
                <img className="rating2" src={`${imageFolderPath}${calculateRating(movie.vote_average)}`} alt={`Rating for movie ${movie.title}`}></img>
                <p>{movie.tagline !== "" && `"${movie.tagline}"`}</p>
            </div>
            <div className="movie-details2">
                <p>{movie.overview}</p>
                <p>Release date: {formatDate(movie.release_date)}</p>
                <div className="genres">
                    <p>Genres: </p>
                    <ul className="genre-list">
                        {movie.genres && movie.genres.map(genre => (
                            <li key={genre.id}> 
                                {genre.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to={"/"}>
                    <button className="back-home">Back to home</button>
                </Link>
            </div>
        </div>
        <div className="movie-images">
            {images && images.map((movieImage,i) => (
                <div className="movie-image" key={i}>
                    <img src={`https://image.tmdb.org/t/p/original${movieImage.file_path}`} alt={`Scene from movie ${movie.title}`}></img>
                </div>
            ))} 

        </div>
        </>
    );
}
  
export default MovieDetail;