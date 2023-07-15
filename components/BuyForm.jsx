'use client'
import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const initialFormData = {
    'Тип/Кл.обсл.': 'П/3Э ',
    'Кол-во прод. Мест': 1,
    'Сумма по бил.': 1832.6,
    'Сумма по плац.': 999.6,
    'Сумма серв.усл.': 188.2,
    'Расстояние': 1790,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [ticketCost, setTicketCost] = useState(null);
  const [rSquared, setRSquared] = useState(null);
  const [meanSquaredError, setMeanSquaredError] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Data being sent:', formData);

    try {
      const response = await axios.post('http://10.2.0.78:8000/api/predict_price/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      const imageUrl = `data:image/png;base64,${data.error_histogram}`; // Convert base64 to data URL
      setTicketCost(data.predicted_price);
      setRSquared(data.r_squared);
      setMeanSquaredError(data.mean_squared_error);
      setImageURL(imageUrl);

    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="flex w-full justify-between mt-12 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-wrap">
      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">
          Тип/Кл.обсл.:
        </label>
        <select
          id="type"
          name="Тип/Кл.обсл."
          value={formData['Тип/Кл.обсл.']}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full appearance-none bg-white border border-gray-400 py-2 px-4 rounded shadow focus:outline-none focus:shadow-outline"
        >
          <option value="П/3Э ">П/3Э</option>
          <option value="К/2К ">К/2К</option>
          <option value="Л/1Э ">Л/1Э</option>
          <option value="П/3Б ">П/3Б</option>
          <option value="Л/1Л ">Л/1Л</option>
        </select>

        {/* <span className="text-gray-700">{formData['Тип/Кл.обсл.']}</span> */}
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
          Кол-во прод. Мест:
        </label>
        <input
          type="range"
          id="quantity"
          name="Кол-во прод. Мест"
          min="1"
          max="10"
          value={formData['Кол-во прод. Мест']}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full"
        />
        <span className="text-gray-700">{formData['Кол-во прод. Мест']}</span>
      </div>
      <div className="mb-4">
        <label htmlFor="billSum" className="block text-gray-700 text-sm font-bold mb-2">
          Сумма по бил.:
        </label>
        <input
          type="range"
          id="billSum"
          name="Сумма по бил."
          min="0"
          max="5000"
          step="0.1"
          value={formData['Сумма по бил.']}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full"
        />
        <span className="text-gray-700">{formData['Сумма по бил.']}</span>
      </div>
      <div className="mb-4">
        <label htmlFor="placeSum" className="block text-gray-700 text-sm font-bold mb-2">
          Сумма по плац.:
        </label>
        <input
          type="range"
          id="placeSum"
          name="Сумма по плац."
          min="0"
          max="5000"
          step="0.1"
          value={formData['Сумма по плац.']}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full"
        />
        <span className="text-gray-700">{formData['Сумма по плац.']}</span>
      </div>
      <div className="mb-4">
        <label htmlFor="serviceSum" className="block text-gray-700 text-sm font-bold mb-2">
          Сумма серв.усл.:
        </label>
        <input
          type="range"
          id="serviceSum"
          name="Сумма серв.усл."
          min="0"
          max="5000"
          step="0.1"
          value={formData['Сумма серв.усл.']}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full"
        />
        <span className="text-gray-700">{formData['Сумма серв.усл.']}</span>
      </div>
      <div className="mb-4">
        <label htmlFor="distance" className="block text-gray-700 text-sm font-bold mb-2">
          Расстояние:
        </label>
        <input
          type="range"
          id="distance"
          name="Расстояние"
          min="0"
          max="5000"
          step="0.1"
          value={formData['Расстояние']}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full"
        />
        <span className="text-gray-700">{formData['Расстояние']}</span>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Отправить
      </button>
      
    </form>
    <div className='m-4 flex'>
  <div>
    {ticketCost && (
        <div className="mt-4">
          <h2 className="text-3xl font-bold mb-2">Стоимость билета</h2>
          <p className='text-3xl'>{ticketCost}</p>
        </div>
      )}
      {rSquared && (
        <div className="mt-4">
          <h2 className="text-3xl font-bold mb-2">Коэффициент детерминации</h2>
          <p className='text-3xl'>{rSquared}</p>
        </div>
      )}
      {meanSquaredError && (
        <div className="mt-4">
          <h2 className="text-3xl font-bold mb-2">Средняя квадратичная ошибка</h2>
          <p className='text-3xl'>{meanSquaredError}</p>
        </div>
      )}
  </div>
  <div>
      {imageURL && (
        <div className=" ml-20">
          <img src={imageURL} alt="График" className=' scale-100' />
        </div>
      )}
  </div>
    </div>
    </>
  );
}

export default Form;
