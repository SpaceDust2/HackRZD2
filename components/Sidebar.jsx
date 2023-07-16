'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import {RxDashboard, RxPerson, RxSketchLogo} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {IoIosArrowDropdown} from'react-icons/io'
import {GiPerspectiveDiceThree} from 'react-icons/gi'
import {BiMoneyWithdraw,BiTrain} from 'react-icons/bi'
import {TbReportSearch} from 'react-icons/tb'
import {BsBarChartLine} from 'react-icons/bs'
import {AiOutlineLineChart} from 'react-icons/ai'



const Sidebar = () => {
  // Создаем хук состояния для активной вкладки
  const [activeTab, setActiveTab] = useState('admin')
  // Создаем функцию для изменения активной вкладки при клике
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }
  return (
    <div className='fixed h-screen  p-4 bg-white border-r-[1px] flex flex-col justify-between w-20'>
        <div className='flex flex-col items-center'>
            {/* <Link href='/admin'>
                <div className='bg-red-500 text-white rounded-lg inline-block p-3' onClick={() => handleTabChange('admin')}>
                    <RxSketchLogo size={20}/>
                </div>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full p-2'></span> */}
            <Link href='/admin'>
                <div className={`bg-gray-100 ${activeTab === 'admin' ? 'bg-red-500 text-white' : 'hover:bg-gray-200'} cursour-pointer my-4 rounded-lg inline-block p-3`} onClick={() => handleTabChange('admin')}>
                    <BsBarChartLine size={20}/>
                </div>
            </Link>
            <Link href='/admin/customers'>
                <div className={`bg-gray-100 ${activeTab === 'customers' ? 'bg-red-500 text-white' : 'hover:bg-gray-200'} cursour-pointer my-4 rounded-lg inline-block p-3`} onClick={() => handleTabChange('customers')}>
                    <TbReportSearch size={20}/>
                </div>
            </Link>
            <Link href='/admin/orders'>
                <div className={`bg-gray-100 ${activeTab === 'orders' ? 'bg-red-500 text-white' : 'hover:bg-gray-200'} cursour-pointer my-4 rounded-lg inline-block p-3`} onClick={() => handleTabChange('orders')}>
                    <RxPerson size={20}/>
                </div>
            </Link>
            <Link href='/admin/ticket'>
                <div className={`bg-gray-100 ${activeTab === 'ticket' ? 'bg-red-500 text-white' : 'hover:bg-gray-200'} cursour-pointer my-4 rounded-lg inline-block p-3`} onClick={() => handleTabChange('ticket')}>
                    <IoIosArrowDropdown size={20}/>
                </div>
            </Link>
            <Link href='/admin/train'>
                <div className={`bg-gray-100 ${activeTab === 'train' ? 'bg-red-500 text-white' : 'hover:bg-gray-200'} cursour-pointer my-4 rounded-lg inline-block p-3`} onClick={() => handleTabChange('train')}>
                    <BiTrain  size={20}/>
                </div>
            </Link>
            <Link href='/admin/demand'>
                <div className={`bg-gray-100 ${activeTab === 'demand' ? 'bg-red-500 text-white' : 'hover:bg-gray-200'} cursour-pointer my-4 rounded-lg inline-block p-3`} onClick={() => handleTabChange('demand')}>
                    <AiOutlineLineChart size={20}/>
                </div>
            </Link>
            <Link href='/admin/settings'>
                <div className={`bg-gray-100 ${activeTab === '' ? 'bg-red-500 text-white' : 'hover:bg-gray-200'} cursour-pointer my-4 rounded-lg inline-block p-3`} onClick={() => handleTabChange('')}>
                    <FiSettings size={20}/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar
