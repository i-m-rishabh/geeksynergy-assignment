import { FaCaretUp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import './Movie.css';
function Movie({movie}) {
    let votes = movie.totalVoted;
    let image = movie.poster;
    let title = movie.title;
    let genre = movie.genre;
    let director = movie.director
    let starring = movie.stars;
    let releasedDate = new Date(movie.releasedDate * 1000);
    return (
        <div className="movie-container">
            <div className="movie">
                <div className="movie-votes">
                    <FaCaretUp />
                    <div>{votes}</div>
                    <FaCaretDown />
                    <div>Votes</div>
                </div>
                <div className="movie-image">
                    <img src={image} alt='movie-pic' />
                </div>
                <div className="movie-description">
                    <div className="movie-title">{title}</div>
                    <div><span className="heading">Gener: </span>{genre}</div>
                    <div><span className="heading">Director: </span> {...director}</div>
                    <div><span className="heading">Starring: </span> {...starring}</div>
                    <div>Mins | {movie.language} | {`${releasedDate.getDate()} ${releasedDate.toLocaleString('default', { month: 'short' })}`}</div>
                </div>
            </div>
            <div className="watch-button-div">
                <button className="watch-trailer-button">Watch Trailer</button>
            </div>
        </div>
    )
}

export default Movie;