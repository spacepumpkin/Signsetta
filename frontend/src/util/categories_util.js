import axios from 'axios';
export const getCategoryCards = catId => {
    return axios.get(`/api/categories/${catId}`)
}

export const getCategories = () => {

    return axios.get('/api/categories')
}