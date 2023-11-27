import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://gametrackerapi.azurewebsites.net'
})

// apiClient.interceptors.response.use(
//     response => response,
//     error => {
//         // Handle global errors
//         if (error.response.status === 401) {
//             // Handle unauthorized access
//         }
//         return Promise.reject(error);
//     }
// );

export default apiClient