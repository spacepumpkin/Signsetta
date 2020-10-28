import axios from 'axios';

// export const getTweets = () => {
//     return axios.get('/api/tweets')
// };

// export const getCategory = id => {
//     return 
// }

export const getCard = id => {
    return axios.get(`/api/cards/${id}`)
}

export const getUserCards = id => {
    return axios.get(`/api/users/${id}/cards`)
};



// /:user_id/cards

// export const writeTweet = data => {
//     return axios.post('/api/tweets/', data)
// }