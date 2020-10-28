import axios from 'axios';

// export const getTweets = () => {
//     return axios.get('/api/tweets')
// };

// export const getCategory = id => {
//     return 
// }

export const getCards = () => {
    return axios.get(`/api/cards`)
}

export const getCard = id => {
    return axios.get(`/api/cards/${id}`)
}

export const getUserCards = id => {
    return axios.get(`/api/users/${id}/cards`)
};

// export const getCategoryCards = catId => {
//     return axios.get(`/api/categories/${catId}`)
// }

// /:user_id/cards

// export const writeTweet = data => {
//     return axios.post('/api/tweets/', data)
// }