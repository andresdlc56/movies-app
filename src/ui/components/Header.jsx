import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';


export const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [searchText, setSearchText] = useState('');

    //Capturando y parsiando los datos obtenidos desde la url
    const { search = '' } = queryString.parse( location.search );

    useEffect(() => {
        if( !search ) {
            setSearchText('');
            return    
        }

        return
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Agregar datos de busqueda a la url
        navigate(`/?search=${ searchText }`);
    }


    return (
        <header className="container">
            <div className="row">
                    
                <div className="col-md-12 text-center">
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff', marginBottom: '20px' }}>
                        <Link
                            to="/movie"
                            style={{ color: 'inherit', textDecoration: 'inherit'}}
                        >
                            Movies
                        </Link>
                    </h1>
                </div>
                            
                <form onSubmit={ handleSubmit } >
                    <div className="col-md-12 d-flex justify-content-center flex-column align-items-center">
                        <div className="input-group mb-3" style={{ maxWidth: '300px' }} >
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Title Movie" 
                                value={ searchText }
                                onChange={ (e) => {
                                    //Capturando el valor del input 
                                    const value = e.target.value
                                    setSearchText( value );

                                    //Agregar datos de busqueda a la url
                                    navigate(`/?search=${ value }`);
                                } }
                            />
                        </div>
                    </div>
                </form>
                    
            </div>
        </header>
    )
}
