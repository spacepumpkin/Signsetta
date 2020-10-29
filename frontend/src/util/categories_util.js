import axios from 'axios';

export const getCategoryCards = catId => {
    return axios.get(`/api/categories/${catId}`)
}