import React, { useEffect, useState } from 'react';
import { fetchData } from '../api';
import '../styles/About.css';

function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ← новое состояние

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        const result = await fetchData('/about');
        if (result === null) {
          // fetchData возвращает null при ошибке → считаем, что 401 или другая ошибка
          setError("unauthorized"); // или можно передавать статус, если api.js его возвращает
        } else {
          setData(result);
        }
      } catch (err) {
        setError("unknown");
      } finally {
        setLoading(false);
      }
    };

    loadAboutData();
  }, []);

  if (loading) {
    return <p>Загрузка информации с сервера...</p>;
  }

  if (error) {
    if (error === "unauthorized") {
      return (
        <div className="about-container error-unauthorized">
          <h2>⛔ Требуется авторизация</h2>
          <p>Чтобы посмотреть эту страницу, войдите в систему.</p>
          <a href="/auth" className="auth-link">
            Перейти к авторизации
          </a>
        </div>
      );
    } else {
      return <p>Произошла ошибка при загрузке данных.</p>;
    }
  }

  return (
    <div className="about-container">
      <h1>О нас</h1>
      {data ? (
        <div>
          <p><strong>Информация:</strong> {data.info}</p>
        </div>
      ) : (
        <p>Нет данных для отображения.</p>
      )}
    </div>
  );
}

export default About;