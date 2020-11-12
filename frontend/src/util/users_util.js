import axios from "axios";

export const getAllUsers = () => {
    return axios.get("/api/users/all");
};

export const addCardsToUser = (id, cards) => {
    return axios.post(`/api/users/${id}/cards`,  {cards: cards});
};

export const deleteUserCards = (id, cards) => {
    return axios.delete(`/api/users/${id}/cards`, {cards: cards});
};