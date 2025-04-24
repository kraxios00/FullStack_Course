import axios from "axios";

const BASE_URL = "http://localhost:3001/persons";

const getAllContacts = () => {
    return axios.get(BASE_URL);
}

const createContact = newContact => {
    return axios.post(BASE_URL, newContact);
}

const updateContact = (id, updatedContact) => {
    return axios.put(`${BASE_URL}/${id}`, updatedContact);

}

const deleteContact = id => {
    return axios.delete(`${BASE_URL}/${id}`);
}

export default {getAllContacts, createContact, updateContact, deleteContact}