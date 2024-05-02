'use client'
import React, { useEffect, useState } from 'react';
import './index.css'; // Import CSS for DataTable styling
import Image from 'next/image';

const initialData = [
  
  {
    id: 2,
    photo: 'photo',
    name: 'Burhan',
    subtitle: 'I dont know',
    description: 'yes',
    date: '8/Feb/2024',
    charges: 'Charge B',
  },{
    id: 1,
    photo: 'photo',
    name: 'Ammar',
    subtitle: 'Yes you do',
    description: 'hey',
    date: '25/Feb/2024',
    charges: 'Charge A',
  },
  {
    id: 3,
    photo: 'photo',
    name: 'Ali',
    subtitle: 'May be',
    description: 'nothing',
    date: '8/Feb/2024',
    charges: 'Charge C',
  },
  {
    id: 4,
    photo: 'photo',
    name: 'Ali',
    subtitle: 'May be',
    description: 'nothing',
    date: '8/Feb/2024',
    charges: 'Charge C',
  },
  {
    id: 5,
    photo: 'photo',
    name: 'Ali',
    subtitle: 'May be',
    description: 'nothing',
    date: '8/Feb/2024',
    charges: 'Charge C',
  },
  {
    id: 6,
    photo: 'photo',
    name: 'Ali',
    subtitle: 'May be',
    description: 'nothing',
    date: '8/Feb/2024',
    charges: 'Charge C',
  },
  {
    id: 7,
    photo: 'photo',
    name: 'Ali',
    subtitle: 'May be',
    description: 'nothing',
    date: '8/Feb/2024',
    charges: 'Charge C',
  },
  {
    id: 8,
    photo: 'photo',
    name: 'Ali',
    subtitle: 'May be',
    description: 'nothing',
    date: '8/Feb/2024',
    charges: 'Charge C',
  },
  {
    id: 9,
    photo: 'photo',
    name: 'Ali',
    subtitle: 'May be',
    description: 'nothing',
    date: '8/Feb/2024',
    charges: 'Charge C',
  },
  {
    id: 10,
    photo: 'photo',
    name: 'Ali',
    subtitle: 'May be',
    description: 'nothing',
    date: '8/Feb/2024',
    charges: 'Charge C',
  },
  {
    id: 11,
    photo: 'photo',
    name: 'Ali',
    subtitle: 'May be',
    description: 'nothing',
    date: '8/Feb/2024',
    charges: 'Charge C',
  },
];
const DataTable = () => {
  const [data, setData] = useState(initialData);
  const [sortedarr, setSortedArr] = useState([])

  function searchfromArr(){

  }
  
  function sortArrName() {
    const sortedArray = [...data].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setSortedArr(sortedArray);
  }
  
  function sortArrSubtitles() {
    const sortedArray = [...data].sort((a, b) => {
      if (a.subtitle < b.subtitle) return -1;
      if (a.subtitle > b.subtitle) return 1;
      return 0;
    });
    setSortedArr(sortedArray);
  }
  
  function sortArrDescription() {
    const sortedArray = [...data].sort((a, b) => {
      if (a.description < b.description) return -1;
      if (a.description > b.description) return 1;
      return 0;
    });
    setSortedArr(sortedArray);
  }
  
  function sortArrCharges() {
    const sortedArray = [...data].sort((a, b) => {
      if (a.charges < b.charges) return -1;
      if (a.charges > b.charges) return 1;
      return 0;
    });
    setSortedArr(sortedArray);
  }
  function sortArrSerial() {

    const sortedArray = [...data].sort((a, b) => a.id - b.id);
    setSortedArr(sortedArray);
  }
  return (
    <div className="table-container">
      <table className="data-table">
        <thead className=' bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]  border text-white'>
          <tr>
            <th onClick={()=>sortArrSerial()}>
            {/* {
        pages.map((ele,index) => <p key={index}>{ele}</p>)
        } */}
              S.#
            </th>
            <th onClick={() => sortArrSubtitles()}>
              Department
            </th>
            <th onClick={() => sortArrName()}>
              Name
            </th>
            <th onClick={() => sortArrDescription()}>
              Designation
            </th>
            <th >
              Paper
            </th>
            <th onClick={() => sortArrCharges()}>
            Charges
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedarr.length!=0?sortedarr?.map((item) => ( 
            <tr key={item.id} className=' cursor-pointer border'>
              <td>{item.id}</td>
              <td><Image
              src={'/Ali3.jpg'}
              width={40}
              height={40}
              className='rounded-full'
              /></td>
              <td>{item.name}</td>
              <td>{item.subtitle}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td>{item.charges}</td>
              <td className='flex gap-3'>
                <Image src={'/admin/datatableicons/edit.svg'} height={28} alt={item.id} width={28}/>
                <Image src={'/admin/datatableicons/delete.svg'} height={28} alt={item.id} width={28}/>
                <Image src={'/admin/datatableicons/view.svg'} height={28} alt={item.id} width={28}/>
              </td>
            </tr>
          )):data.map((item) => (
            <tr key={item.id} className=' cursor-pointer border'>
              <td>{item.id}</td>
              
              <td>{item.name}</td>
              <td>{item.subtitle}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td>{item.charges}</td>
              <td className='flex gap-3 cursor-not-allowed'>
                <Image src={'/admin/datatableicons/edit.svg'} height={28} alt={item.id} width={28}/>
                <Image src={'/admin/datatableicons/delete.svg'} height={28} alt={item.id} width={28}/>
                <Image src={'/admin/datatableicons/view.svg'} height={28} alt={item.id} width={28}/>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
};

export default DataTable;
