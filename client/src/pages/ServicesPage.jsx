import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useReducer } from 'react';

import servicesReducer from '../reducers/servicesReducer';

import { ServicesContext, servicesObject } from '../contexts/ServicesContext';
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
    axios.get('http://netcentrum.pl/api/services/all')
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
            {JSON.stringify(services.servicesData) === "[]" ? <span className="emptyTable">Brak projektów na ten moment...</span> : null}   
            {services.loading ? <span className="loadingText">Ładowanie...</span> : <MapData data={services.servicesData} />}
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