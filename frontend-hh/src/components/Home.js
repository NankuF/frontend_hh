import React, { useEffect, useState } from 'react';
import { fetchData } from '../api';
import '../styles/Home.css';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadHomeData = async () => {
      const result = await fetchData('/');
      setData(result);
    };
    loadHomeData();
  }, []);

  return (
    <div className="home-container">
      <h1>Главная страница</h1>
      {data ? (
        <div>
          <p><strong>Сообщение от сервера:</strong> {data.message}</p>
        </div>
      ) : (
        <p>Загрузка данных с сервера...</p>
      )}
    </div>
  );
}

export default Home;
