import React from 'react';
import axios from 'axios';

const hellow = () => {
  return (
    <div>
      <button onClick = {() => { return onDataHandler()}}> Get Data </button>
    </div>
  );
}

function onDataHandler() {
  const axiosSet = axios.create({
    baseURL : "http://3.35.119.216:4000",
    Headers:{
      'Content-Type' : 'application/json; charset=UTF-8'
    },
    responseType : 'json',
    responseEncoding : 'json',
  })
  const res = axiosSet.get('/api/info');
  console.log(res.data);
}

export default hellow;
