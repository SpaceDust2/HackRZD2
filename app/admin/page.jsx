'use client'
import React, { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RailwayStats = () => {
  // Сгенерировать случайные данные для графиков
  const generateData = (n) => {
    const data = [];
    for (let i = 0; i < n; i++) {
      data.push({
        month: `2023-${Math.floor(Math.random() * 12) + 1}`,
        revenue: Math.floor(Math.random() * 10000),
        profit: Math.floor(Math.random() * 5000),
        expense: Math.floor(Math.random() * 8000),
        passengers: Math.floor(Math.random() * 10000),
        longDistance: Math.floor(Math.random() * 5000),
        shortDistance: Math.floor(Math.random() * 5000),
        activeUsers: Math.floor(Math.random() * 1000),
        activeFlights: Math.floor(Math.random() * 100),
        plannedFlights: Math.floor(Math.random() * 200),
        trains: Math.floor(Math.random() * 500),
        trainsInRepair: Math.floor(Math.random() * 50),
        // Добавить еще шесть статистических метрик
        ticketsSold: Math.floor(Math.random() * 100000),
        ticketsRefunded: Math.floor(Math.random() * 10000),
        ticketsAvailable: Math.floor(Math.random() * 200000),
        customerSatisfaction: Math.floor(Math.random() * 100) + '%',
        averageDelay: Math.floor(Math.random() * 60) + ' мин',
        averageSpeed: Math.floor(Math.random() * 200) + ' км/ч',
      });
    }
    return data;
  };

  // Сгенерировать данные для четырех графиков
  const [data, setData] = useState(generateData(12));

  // Обновлять только статистику каждые 2-3 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((d) => ({
          ...d,
          activeUsers: Math.floor(Math.random() * 1000),
          activeFlights: Math.floor(Math.random() * 100),
          plannedFlights: Math.floor(Math.random() * 200),
          trainsInRepair: Math.floor(Math.random() * 50),
          ticketsSold: Math.floor(Math.random() * 100000),
          ticketsRefunded: Math.floor(Math.random() * 10000),
          ticketsAvailable: Math.floor(Math.random() * 200000),
          customerSatisfaction: Math.floor(Math.random() * 100) + '%',
          averageDelay: Math.floor(Math.random() * 60) + ' мин',
          averageSpeed: Math.floor(Math.random() * 200) + ' км/ч',
        }))
      );
    }, Math.floor(Math.random() * 1000) + 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap bg-white p-5 rounded-lg shadow-lg w-full h-full">
      <div className="m-auto mb-5">
        <h2 className="text-xl font-bold">Пассажирооборот</h2>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="passengers" stroke="#10b981" />
          <Line type="monotone" dataKey="longDistance" stroke="#f59e0b" />
          <Line type="monotone" dataKey="shortDistance" stroke="#3b82f6" />
        </LineChart>
      </div>

      <div className="m-auto mb-5">
        <h2 className="text-xl font-bold">Чистая прибыль</h2>
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="profit" fill="#f59e0b" />
        </BarChart>
      </div>

      <div className="w-full mb-5">
        <h2 className="text-xl font-bold">Статистика</h2>
        <div className="flex flex-wrap justify-around">
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Активные пользователи</p>
            <p>{data.reduce((sum, d) => sum + d.activeUsers, 0)}</p>
          </div>
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Активные рейсы</p>
            <p>{data.reduce((sum, d) => sum + d.activeFlights, 0)}</p>
          </div>
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Запланированные рейсы</p>
            <p>{data.reduce((sum, d) => sum + d.plannedFlights, 0)}</p>
          </div>
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Количество поездов</p>
            <p>{data.reduce((sum, d) => sum + d.trains, 0)}</p>
          </div>
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Поезда в ремонте</p>
            <p>{data.reduce((sum, d) => sum + d.trainsInRepair, 0)}</p>
          </div>
          {/* Добавить еще шесть статистических метрик */}
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Проданные билеты</p>
            {/* Округлить значения до двух знаков после запятой */}
            <p>{(data.reduce((sum, d) => sum + d.ticketsSold, 0) / 100).toFixed(2)}</p>
          </div>
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Возвращенные билеты</p>
            {/* Округлить значения до двух знаков после запятой */}
            <p>{(data.reduce((sum, d) => sum + d.ticketsRefunded, 0) / 100).toFixed(2)}</p>
          </div>
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Доступные билеты</p>
            {/* Округлить значения до двух знаков после запятой */}
            <p>{(data.reduce((sum, d) => sum + d.ticketsAvailable, 0) / 100).toFixed(2)}</p>
          </div>
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Удовлетворенность клиентов</p>
            {/* Округлить значения до двух знаков после запятой */}
            <p>{(data.reduce((sum, d) => sum + parseInt(d.customerSatisfaction), 0) / data.length).toFixed(2) + '%'}</p>
          </div>
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Средняя задержка</p>
            {/* Округлить значения до двух знаков после запятой */}
            <p>{(data.reduce((sum, d) => sum + parseInt(d.averageDelay), 0) / data.length).toFixed(2) + ' мин'}</p>
          </div>
          <div className="p-3 m-3 bg-gray-100 rounded-lg shadow-lg">
            <p>Средняя скорость</p>
            {/* Округлить значения до двух знаков после запятой */}
            <p>{(data.reduce((sum, d) => sum + parseInt(d.averageSpeed), 0) / data.length).toFixed(2) + ' км/ч'}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RailwayStats;
