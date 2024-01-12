
export const getEnvVariables = () => {

    //Importando variables de entorno
    //import.meta.env;

    return {
        VITE_API_URL: import.meta.env.VITE_API_URL,
    }
}