import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useReducer } from 'react';

import { ServicesContext, servicesObject } from '../contexts/ServicesContext';
import servicesReducer from '../reducers/servicesReducer';
import MapData from '../components/services/MapDataComponent';
import { AddService, AddServiceModal } from '../components/services/AddComponent';
import DeleteModal from '../components/services/DeleteComponent';

const initialServicesState = {
    loading: true,
    error: '',
    servicesData: {}
}

console.log(123);
 
const ServicesPage = () => {
  const [services, servicesDispatch] = useReducer(servicesReducer, initialServicesState);
  const [addingService, setAddingService] = useState(servicesObject.addingService);
  const [deleteService, setDeleteService] = useState(servicesObject.deleteService);



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
        <ServicesContext.Provider value={{setAddingService, addingService, servicesDispatch}}>
            <div className="mainPart__main-title"><AddService /></div>
        </ServicesContext.Provider>

        <ServicesContext.Provider value={{servicesDispatch, setAddingService, addingService, deleteService, setDeleteService}}>
            {services.loading ? 'Loading' : <MapData data={services.servicesData} />}
        </ServicesContext.Provider>

        <ServicesContext.Provider value={{setAddingService, addingService, servicesDispatch}}>
            { addingService !== null ? <AddServiceModal /> : null}
        </ServicesContext.Provider>

        <ServicesContext.Provider value={{deleteService, setDeleteService, servicesDispatch}}>
            {deleteService !== null ? <DeleteModal /> : null}
        </ServicesContext.Provider>
    </div>
  )
}

export default ServicesPage