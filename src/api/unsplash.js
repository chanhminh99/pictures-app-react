import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3IlN2zUd-a4Nao10OCyCEKAUODlixPyHn7Ok9lHqsos'
    }
});