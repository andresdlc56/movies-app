import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { FaArrowUp } from "react-icons/fa";


export const TopButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Escucha el evento de desplazamiento
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
            // Muestra u oculta el botón según la posición de desplazamiento
            setIsVisible(scrollTop > 20);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Función para desplazarse al inicio de la página cuando se hace clic en el botón
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };
    

    return (
        <Button
            id="scrollTopButton"
            variant="primary"
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                display: isVisible ? 'block' : 'none',
            }}
        >
            <FaArrowUp />
        </Button>
    )
}
