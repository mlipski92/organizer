import React, { useEffect } from 'react'
import axios from 'axios';
import { useReducer } from 'react';

import { ServicesContext, servicesObject } from '../contexts/ServicesContext';
import servicesReducer from '../reducers/servicesReducer';
import MapData from '../components/services/MapDataComponent';

const initialServicesState = {
    loading: true,
    error: '',
    servicesData: {}
}

console.log(123);
 
const ServicesPage = () => {
  const [services, servicesDispatch] = useReducer(servicesReducer, initialServicesState);


  useEffect(() => {
    axios.post('http://localhost:8800/services/all')
      .then(response => {
          servicesDispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        console.log("response: "+JSON.stringify(response.data))
      })
      .catch(error => {
          servicesDispatch({ type: 'FETCH_ERROR' })
      })
    },[])

    // console.log(services.loading ? 'Loading' : services.servicesData);
    // const test = "test";
 
  return (
    <div>
        <ServicesContext.Provider value={{servicesDispatch}}>
            {services.loading ? 'Loading' : <MapData data={services.servicesData} />}
        </ServicesContext.Provider>
    </div>
  )
}

export default ServicesPage