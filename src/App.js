import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CreateApartment from "./components/CreateApartment";
import ApartmentDetails from "./components/ApartmentDetails";
import ApartmentsList from "./components/ApartmentsList";

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [apartmentsList, setApartmentsList] = useState()

  useEffect(() => {
    getApartmentsApi();
  }, []);

  const getApartmentsApi = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/apartments")
      .then((response) => {
        setApartmentsList(response.data);
      })
      .catch((error) => {
        console.log('Error getting apartments from API',error);
      });
  };

  //update list of apartments
  const createApartment = (newApartmentObject) => {
    setApartmentsList( (prevApartments) => {
      const newListing = [newApartmentObject, ...prevApartments];
      return newListing;
    });
  }

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList apartmentsList={apartmentsList} />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails apartmentsList={apartmentsList} />} />
        <Route path="/apartments/create" element={<CreateApartment createCallback={createApartment}/>} />

        <Route path="*" element={<h2>404: sorry, this route does not exist</h2>} />
      </Routes>
    </div>
  );
}

export default App;
