'use client'
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Сгенерировать случайные данные для графика
const generateData = (n, year) => {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      date: `${year}-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
      demand: Math.floor(Math.random() * 10000),
    });
  }
  return data;
};

// Создать компонент графика с подробной информацией
const Chart = ({ title, data }) => {
  // Вычислить средний, максимальный и минимальный спрос
  const average = data.reduce((sum, d) => sum + d.demand, 0) / data.length;
  const max = Math.max(...data.map(d => d.demand));
  const min = Math.min(...data.map(d => d.demand));

  // Создать список рекомендаций на основе спроса
  const recommendations = [];
  if (average > 8000) {
    recommendations.push('Увеличить цену');
    recommendations.push('Расширить ассортимент');
    recommendations.push('Улучшить качество обслуживания');
  } else if (average < 4000) {
    recommendations.push('Снизить цену');
    recommendations.push('Уменьшить ассортимент');
    recommendations.push('Сократить расходы');
  } else {
    recommendations.push('Сохранить цену');
    recommendations.push('Анализировать конкурентов');
    recommendations.push('Проводить акции и скидки');
  }

  return (
    <div className="chart bg-white p-5 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex">
        <div className="w-2/3">
          <LineChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="demand" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="w-1/3 ml-16">
          <h4 className="text-lg font-bold">Рекомендации</h4>
          <ul className="list-disc pl-5">
            {recommendations.map(r => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="details mt-5">
        <p>Средний спрос: {average}</p>
        <p>Максимальный спрос: {max}</p>
        <p>Минимальный спрос: {min}</p>
      </div>
    </div>
  );
};

// Создать компонент страницы с одним графиком
export default function Page() {
  // Создать состояние для выбранного года
  const [year, setYear] = useState(2023);

  // Сгенерировать данные для графика
  const data = generateData(50, year);

  // Создать список доступных лет
  const years = [2020, 2021, 2022, 2023];

  return (
    <div className="container mx-auto p-10 bg-gray-100 flex items-center justify-center">
      <div className="page bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Страничка с графиком</h1>
        <div className="chart mt-10 flex items-start justify-between">
          <Chart title="График спроса" data={data} />
          <div className="year-selector ml-5 bg-white p-5 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold">Выберите год</h4>
            <ul className="list-none pl-0">
              {years.map(y => (
                <li key={y} className={`p-2 rounded-lg cursor-pointer ${y === year ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`} onClick={() => setYear(y)}>{y}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
