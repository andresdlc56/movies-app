import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

//Components and Custom Hooks
import { MovieCard, NoResultsView, useGetMovies } from "../";
import { Spinner, TopButton } from "../../ui";


export const HomeView = ({ search = '' }) => {

    //Custom Hook
    const { startGetMovies, startGetMoviesByName, setPage, movies, page, isLoading, hasMore } = useGetMovies();

    //Efecto que se va a ejecutar cada vez que el numero de la pagina cambie
    useEffect(() => {
        (search) ? ( startGetMoviesByName(search, page) ) : ( startGetMovies( page ) );
    }, [search, page]);
    
    
    if( !isLoading && movies.length === 0 ) {
        return <NoResultsView />
    }

    return (
        <>
            <InfiniteScroll
                dataLength={ movies.length }
                next={ () => setPage( prevPage => prevPage + 1 ) }
                hasMore={ hasMore }
                loader={ <Spinner /> }
            >
                <div className="row">
                    {
                        movies.map((movie) => (
                            <div className="col-lg-3 col-md-4 mb-4" key={ movie?.id }>
                                <MovieCard movie={ movie } maxTitleLength={25} />
                            </div>
                        ))
                    }
                </div>
            </InfiniteScroll>
            
            <TopButton />
        </>
    )
}
