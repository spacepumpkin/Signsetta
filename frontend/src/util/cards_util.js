import axios from 'axios';


export const getCards = () => {
    return axios.get(`/api/cards`)
}

export const getCard = cardId => {
    return axios.get(`/api/cards/${cardId}`)
}

export const getUserCards = userId => {
    return axios.get(`/api/users/${userId}/cards`)
    .catch(err => console.log(err))
 
};

export const getCategoryCards = catId => {
    return axios.get(`/api/categories/${catId}`)
}

