import axios from 'axios';

export const fetchAllClients = () => {
    axios.defaults.withCredentials = true;
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/client/getall`);
}
