'use client'
import React, { useState } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/data";

const RequestModal = ({ request, onClose, onApprove, onReject }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg max-w-lg">
        <h3 className="text-lg font-bold">{request.topic}</h3>
        <p className="text-gray-600">{request.date}</p>
        <p className="my-2">{request.message}</p>
        <div className="flex justify-between">
          <button
            className="bg-green-800 text-white py-2 px-4 rounded-lg"
            onClick={onApprove}
          >
            Одобрить
          </button>
          <button
            className="bg-red-800 text-white py-2 px-4 rounded-lg"
            onClick={onReject}
          >
            Отклонить
          </button>
        </div>
        <button
          className="bg-purple-800 text-white py-2 px-4 rounded-lg mt-4"
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

const employees = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [requests, setRequests] = useState(data); // добавил хук для хранения обращений

  const handleApprove = () => {
    // функция для одобрения обращения
    setRequests(
      requests.map((request) =>
        request.id === selectedRequest.id
          ? { ...request, status: "approved" }
          : request
      )
    );
    setSelectedRequest(null);
  };

  const handleReject = () => {
    // функция для отклонения обращения
    setRequests(
      requests.map((request) =>
        request.id === selectedRequest.id
          ? { ...request, status: "rejected" }
          : request
      )
    );
    setSelectedRequest(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Сотрудники</h2>
        <h2>Добро пожаловать, Клинт</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>ФИО</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Последнее обращение</span>
            <span className="hidden sm:grid">Тема</span>
          </div>
          <ul>
            {requests.map((request, id) => (
              <li
                key={id}
                // добавил условный стиль в зависимости от статуса обращения
                className={`${
                  request.status === "approved"
                    ? "bg-green-100"
                    : request.status === "rejected"
                    ? "bg-red-100"
                    : "bg-gray-50 hover:bg-gray-100"
                } rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer`}
                onClick={() => setSelectedRequest(request)}
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="pl-4">
                    {request.name.first + " " + request.name.last}
                  </p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {request.name.first}@gmail.com
                </p>
                <p className="hidden md:flex">{request.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{request.topic}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selectedRequest && (
        <RequestModal
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
          onApprove={handleApprove} // передал функцию для одобрения
          onReject={handleReject} // передал функцию для отклонения
        />
      )}
    </div>
  );
};

export default employees;
