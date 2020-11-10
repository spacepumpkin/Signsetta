import axios from 'axios';


export const getCategory = catId => {
    return axios.get(`/api/categories/${catId}`)
}

export const getCategories = () => {
    return axios.get('/api/categories')
}