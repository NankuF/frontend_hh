import React, { useEffect, useState } from 'react';
import { fetchData } from '../api'; // ← это твоя утилита из api.js

function UserInfo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 👇 Переименовал, чтобы не конфликтовать с импортом
    const loadUserData = async () => {
      try {
        // ✅ Используем импортированную fetchData
        const response = await fetchData('/api/v1/users/me'); // ← обрати внимание: fetchData из api.js НЕ принимает options!
        if (!response) throw new Error('Нет ответа от сервера');

        // ✅ fetchData из api.js уже возвращает JSON, а не Response!
        // Значит, response — это уже объект (если сервер вернул JSON)
        setData(response); // ← не нужно делать .json()!
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (!data) return <p>Данные не получены</p>;

  return (
    <div>
      <h2>Информация о пользователе</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default UserInfo;