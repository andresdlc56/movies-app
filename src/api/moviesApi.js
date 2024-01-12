import axios from 'axios';

import { getEnvVariables } from '../helpers/getEnvVariables';

//Importando variable de entorno para conectar con la api
const { VITE_API_URL } = getEnvVariables();

const moviesApi = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTMwMTVhNjI0MWViMjJiOWQzZWI5YzY2MGI2NWQ4YSIsInN1YiI6IjY1OTU3YWI1NTkwN2RlMWJmNDYzYmY3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRLyj_cXEYFTqe9H7f6uQRgqtNQ1o5bGJTmeuFmSMeI'
    }
});

export default moviesApi;