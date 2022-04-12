import React from 'react';
import axios from 'axios';

const hellow = () => {
  return (
    <div>
      <button onClick = {() => {
        return onDataHandler().then(alert);
      }}> Get Data </button>
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
  try {
    const result = axiosSet.get('/api/info');
    console.log(result);
    return result;
  } catch (error) {
    return error
  }
}

export default hellow;
