import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
    timeout: 6000,
    headers: {
        Authorization: 'basic 9e5fc5b7-3a82-4062-994a-b37db8e56e0e'
        //773873e6-abda-4788-8da1-8f8c5445f90d
    }
});

export default instance;