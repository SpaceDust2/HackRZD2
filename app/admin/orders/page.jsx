import React from 'react';
import { FaTrain } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '@/data/data';

const workers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <h2>Сотрудники</h2>
        <h2>Добро пожаловать, Андрей</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>ФИО</span>
            <span className='sm:text-left text-right'>Должность</span>
            <span className='hidden md:grid'>Стаж</span>
            <span className='hidden sm:grid'>Отдел</span>
          </div>
          <ul>
            {data.map((worker, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='bg-red-100 p-3 rounded-lg'>
                    <FaTrain className='text-red-800' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      {worker.name.first} {worker.name.last}
                    </p>
                    <p className='text-gray-800 text-sm'>{worker.email}</p>
                  </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  {worker.position}
                </p>
                <p className='hidden md:flex'>{worker.experience} лет</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{worker.department}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default workers;
