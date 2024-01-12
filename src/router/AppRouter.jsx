import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import queryString from "query-string";

//Componets
import { Header } from "../ui";
import { HomeView, MovieDetailView } from "../movie";

//Custom Hooks
import { useDebounce } from "../hooks";


export const AppRouter = () => {

    const location = useLocation();

    //Capturando y parsiando los datos obtenidos desde la url
    const { search = '' } = queryString.parse( location.search );
    
    const debounceSearch = useDebounce(search, 1000);

    return (
        <>
            <Header />

            <main className="container mt-3">
                <Routes>
                    <Route path="/" element={ <HomeView key={ debounceSearch } search={ debounceSearch } /> } />
                    <Route path="/movie/:movieId" element={ <MovieDetailView /> } />

                    <Route path="/*" element={ <Navigate to="/" /> } />
                </Routes>
            </main>
        </>
    )
}
