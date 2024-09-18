import React, { useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:3005";

function App() {

  const getAllUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      console.log(response.data);  // Tüm kullanıcıları konsola yazdır
    } catch (error) {
      console.error("Error fetching users:", error);  // Hata varsa logla
    }
  }

  const getUserById = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}`);
      console.log(response.data);  // ID'ye göre kullanıcıyı logla
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);  // Hata yönetimi
    }
  }

  const createUser = async (newUser) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, newUser);  // Template string kullanıldı
      console.log("User created:", response.data);  // Yeni kullanıcıyı logla
    } catch (error) {
      console.error("Error creating user:", error);  // Hata varsa logla
    }
  }

  const updateUser = async (userId, updateUser) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${userId}`, updateUser);  // Template string kullanımı düzeltildi
      console.log("User updated:", response.data);  // Güncellenmiş kullanıcıyı logla
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);  // Hata varsa logla
    }
  }

  const deleteUserById = async (userId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${userId}`);  // Template string kullanımı düzeltildi
      console.log("User deleted:", response.data);  // Silinen kullanıcıyı logla
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);  // Hata varsa logla
    }
  }

  useEffect(() => {
    getAllUser();
    deleteUserById(2);
    // Tüm kullanıcıları getir
    // const newUser = {
    //   "username": "bilal",
    //   "password": "pınar"
    // };
    // createUser(newUser);

    // updateUser("d221", {
    //   "username": "yahya",
    //   "password": "4441"
    // });
  }, []);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

export default App;
