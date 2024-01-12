import { useState } from "react";
import moviesApi from "../../api/moviesApi";


export const useGetMovies = () => {

    //Estado para almacenar las movies encontradas 
    const [movies, setMovies] = useState([]);

    //Estado para indicar si esta cargando las movies o no
    const [isLoading, setIsLoading] = useState(true);

    //Estado para indicar la pagina actual
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState( true );

    //Metodo para cargar las movies desde la api
    const startGetMovies = async( page ) => {
        setIsLoading( true );
        const { data } = await moviesApi.get(`/discover/movie?page=${ page }`);
        //console.log( data );

        let prevMovies = [ ...movies ];

        setMovies( prevMovies.concat(data.results) );

        setHasMore( data.page < data.total_pages );        

        //setMovies( data.results );
        setIsLoading( false );
    }

    //Metodo para cargar las movies que coincidan con el name proporcionado
    const startGetMoviesByName = async( name, page = 1 ) => {
        setIsLoading( true );
        const { data } = await moviesApi.get(`/search/movie?query=${ name }&page=${ page }`);
        //console.log( data );

        let prevMovies = [ ...movies ];

        setMovies( prevMovies.concat(data.results) );
        setHasMore( data.page < data.total_pages );
        setIsLoading( false );
    }

    return {
        //methods
        startGetMovies,
        startGetMoviesByName,
        setPage,

        //Props
        movies,
        page,
        isLoading,
        hasMore
    }
}