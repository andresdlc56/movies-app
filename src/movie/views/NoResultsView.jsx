
import { FaRegFrown } from "react-icons/fa";

export const NoResultsView = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
            <FaRegFrown  size={200} color="white" />
            <p className="text-center fs-1" style={{ color: "white", marginTop: '10px' }}>
                No se encontraron resultados.
            </p>
        </div>
    )
}
