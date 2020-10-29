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

export const getCard = cardId => {
    return axios.get(`/api/cards/${cardId}`)
}

export const getUserCards = userId => {
    return axios.get(`/api/users/${userId}/cards`)
};

// export const getCategoryCards = catId => {
//     return axios.get(`/api/categories/${catId}`)
// }

// /:user_id/cards

// export const writeTweet = data => {
//     return axios.post('/api/tweets/', data)
// }