import axios from "axios";

export const getData = async () => {
    return await axios.get('https://api.le-systeme-solaire.net/rest/bodies');
}