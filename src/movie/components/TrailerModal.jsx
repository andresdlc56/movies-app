import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Modal, Button } from 'react-bootstrap';
import YouTube from "react-youtube";


import moviesApi from "../../api/moviesApi";


export const TrailerModal = ({ title, show, handleClose }) => {

    const { movieId } = useParams();

    //Estados del componente
    const [trailer, setTrailer] = useState({});

    //Metodo para traer la info del trailer al componente
    const startGetTrailer = async(id) => {
        const { data } = await moviesApi.get(`/movie/${ id }/videos`);
        //console.log( data );

        if( data.results.length === 0 ) {
            return console.log('Esta peli no tiene Trailers');
        }

        //Seleccionando solo el trailer oficial o el 1er trailer
        const trailer = ( (data.results.find((video) => video.name === 'Official Trailer')) || (data.results[0]));
        //console.log( trailer );

        setTrailer( trailer );
        return;
    }

    useEffect(() => {
        startGetTrailer( movieId );
    }, []);
    

    return (
        <>
            <Modal 
                show={show} 
                onHide={handleClose}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "black" }}>{ title } - { trailer.name }</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <YouTube 
                        videoId={ trailer.key }    
                        opts={{
                                height: '500px',
                                width: '100%',
                                playerVars: {
                                    autoplay: 1,
                                    controls: 0,
                                    cc_load_policy: 0,
                                    fs: 0,
                                    iv_load_policy: 0,
                                    modesbranding: 0,
                                    rel: 0,
                                    showinfo: 0
                                }
                        }}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}
