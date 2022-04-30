import axios from "axios";

export default axios.create({
    baseURL: 'https://sfc-lekki-property.herokuapp.com/api'
});