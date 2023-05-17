import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8000" });

const getPets = (params) => instance.get(`/pets${params}`);
const getPet = (id) => instance.get(`/pets/${id}`);
const addPet = (data) => instance.post(`/pets`, data);
const updatePet = (id, data) => instance.put(`/pets/${id}`, data);

const getNotifications = () => instance.get(`/notifications`);
const addNotification = (data) => instance.post(`/notifications`, data);
const deleteNotification = (id) => instance.delete(`/notifications/${id}`);

const getDonations = () => instance.get(`/donations`);
const addDonation = (data) => instance.post(`/donations`, data);
const updateDonation = (id, data) => instance.put(`/donations/${id}`, data);
const deleteDonation = (id) => instance.delete(`/donations/${id}`);

export {
  getPets,
  getPet,
  addPet,
  updatePet,
  getNotifications,
  addNotification,
  deleteNotification,
  getDonations,
  addDonation,
  updateDonation,
  deleteDonation,
};
