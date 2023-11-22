import axios from 'axios';

const instance = axios.create();

export const getEventsList = () => {
    return instance
        .get(`https://run.mocky.io/v3/085041d6-c0a5-4d4c-8ba9-829a0212d75b/`, {})
        .then((response) => response.data)
        .catch((e) => alertError(e));
}

const alertError = (e:any) => alert(e);