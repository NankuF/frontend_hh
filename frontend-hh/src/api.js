// src/api.js
const API_BASE = "http://localhost:8001"; // или без порта, если используешь прокси

export const fetchData = async (endpoint, options = {}) => {
  const config = {
    ...options,
    credentials: 'include', // 👈 ОБЯЗАТЕЛЬНО для отправки кук
  };

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка при запросе:", error);
    return null;
  }
};