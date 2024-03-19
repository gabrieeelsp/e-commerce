import axios from 'axios';

const httpService = axios.create({
    baseURL: 'http://localhost:8080/'
})

httpService.interceptors.request.use(
    (config) => {
        
        const accessToken = localStorage.getItem('accessToken');
        if ( accessToken ) config.headers.Authorization = accessToken;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

// Función para obtener un nuevo token
async function getNewToken() {
    try {
        // Realizar la solicitud para obtener un nuevo token
        const response = await httpService.post('users/refresh');
         // Devuelve el nuevo token
        return response.data.token;
    } catch (error) {
        // Maneja el error al obtener el nuevo token
        throw new Error('No se pudo obtener un nuevo token');
    }
  }

httpService.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalRequest = error.config;
        
        // Verifica si el error es debido a un token expirado (podría ser un código de estado específico)
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
    
            try {
                // Obtener un nuevo token
                const newToken = await getNewToken();

                // Actualizar el token en la solicitud original
                originalRequest.headers.Authorization = newToken;

                localStorage.setItem('accessToken', newToken);
        
                // Reintentar la solicitud original con el nuevo token
                return httpService(originalRequest);
            } catch (error) {

                localStorage.removeItem('accessToken');
                // Maneja el error al obtener un nuevo token
                return Promise.reject(error);
            }
        }
        // Si no es un error relacionado con el token expirado, simplemente rechaza la promesa
        return Promise.reject(error);
    }
);

export default httpService;