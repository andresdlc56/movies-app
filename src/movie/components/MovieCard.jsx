
import { Link } from 'react-router-dom';
import placeholder from '../images/placeholder.png';

//css
import styles from '../css/movieCard.module.css';


export const MovieCard = ({ movie = {}, maxTitleLength = 25 }) => {

    //Construyecto una constante para almacenar la url de la imagen
    const imageUrl = (movie.poster_path) 
        ? `https://image.tmdb.org/t/p/w300${ movie.poster_path }` 
        : placeholder

    // Limitamos la longitud del título
    const limitedTitle = movie.title.length > maxTitleLength
        ? `${movie.title.substring(0, maxTitleLength)}...`
        : movie.title;

    return (
        <Link
            to={`/movie/${ movie.id }`} 
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div className={`card ${ styles.movieCard }`}>
                <img src={ imageUrl } className="card-img-top" alt="Card"  />
                <div className="card-body">
                    <h5 className="card-title text-center" style={{ fontSize: '1rem' }}>{limitedTitle}</h5>
                </div>
            </div>
        </Link>
    )
}
