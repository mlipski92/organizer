import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useReducer } from 'react';

import { ServicesContext, servicesObject } from '../contexts/ServicesContext';
import servicesReducer from '../reducers/servicesReducer';
import MapData from '../components/services/MapDataComponent';
import { AddService, AddServiceModal } from '../components/services/AddComponent';
import DeleteModal from '../components/services/DeleteComponent';
import MessageComponent from '../components/services/MessageComponent';

const initialServicesState = {
    loading: true,
    error: '',
    servicesData: {}
}

 
const ServicesPage = () => {
  const [services, servicesDispatch] = useReducer(servicesReducer, initialServicesState);
  const [addingService, setAddingService] = useState(servicesObject.addingService);
  const [deleteService, setDeleteService] = useState(servicesObject.deleteService);
  const [message, setMessage] = useState(servicesObject.message);



  useEffect(() => {
    axios.post('http://localhost:8800/services/all')
      .then(response => {
          servicesDispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
          servicesDispatch({ type: 'FETCH_ERROR' })
      })
    },[])
 
  return (
    <div>
        <ServicesContext.Provider value={{setAddingService, addingService, servicesDispatch, setMessage}}>
            <div className="mainPart__main-title"><AddService /></div>
        </ServicesContext.Provider>

        <ServicesContext.Provider value={{servicesDispatch, setAddingService, addingService, deleteService, setDeleteService, setMessage}}>
            {services.loading ? 'Loading' : <MapData data={services.servicesData} />}
        </ServicesContext.Provider>

        <ServicesContext.Provider value={{setAddingService, addingService, servicesDispatch, setMessage}}>
            { addingService !== null ? <AddServiceModal /> : null}
        </ServicesContext.Provider>

        <ServicesContext.Provider value={{deleteService, setDeleteService, servicesDispatch, setMessage}}>
            {deleteService !== null ? <DeleteModal /> : null}
        </ServicesContext.Provider>

        <ServicesContext.Provider value={{message, setMessage}}>
            <MessageComponent />
        </ServicesContext.Provider>
    </div>
  )
}

export default ServicesPage