import axios from 'axios';

export const authenticate = (username, password) => {
    axios.defaults.withCredentials = true;
    return axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/signin`,
            {
                username,
                password,
            }
    );
}

export const isAuthenticated = () => {
    axios.defaults.withCredentials = true;
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/validate`);
}
