import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import moviesApi from "../../api/moviesApi";

//Image placeholder
import placeholder from '../images/placeholder.png';

//Components
import { TrailerModal } from "../components/TrailerModal";


export const MovieDetailView = () => {

    const { movieId } = useParams();

    const [movie, setMovie] = useState({});
    const [isOpen, setIsOpen] = useState(false);


    //Metodo para obtener los datos de la movie por id
    const startGetMovieById = async( id ) => {
        const { data } = await moviesApi.get(`/movie/${ id }`);
        //console.log( data );

        //Establecer los datos en el estado del componente
        setMovie( data );
    }

    const handleModal = () => {
        setIsOpen( !isOpen );
    }

    //Efecto que se va a ejecutar una vez
    useEffect(() => {
        startGetMovieById( movieId );
    }, []);
    
    //Creando una constante para manejar la imagen
    const imageUrl = (movie.poster_path) ? `https://image.tmdb.org/t/p/w500${ movie.poster_path }` : placeholder;

    return (
        <>
            <div className="row">
                <div className="col-12 justify-content-center mb-4">
                    <h1 className="text-center">{ movie.title }</h1>
                </div>

                <div className="col-5 mx-auto">
                    <img 
                        src={ imageUrl } 
                        className="img-thumbnail float-end" 
                        alt={ movie.title } 
                        style={{ maxWidth: '80%', maxHeight: '80%' }}
                    />
                </div>

                <div className="col-5 mx-auto">
                    <p className="text-justify fs-6 float-start"><strong>Description: </strong>{ movie.overview }</p>
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={ handleModal }
                    >
                        Ver Trailer
                    </button>
                </div>
            </div>

            {
                (isOpen) && <TrailerModal title={ movie.title } show={ isOpen } handleClose={ handleModal } />
            }
            
        </>
    )
}
