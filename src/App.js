import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchData } from './redux/AppSlice';
import WeatherData from './component/WeatherData';
import TownInfo from './component/townInfo';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="App">

      <Routes>
        <Route index element={<WeatherData />} />
        <Route path="/city/:townName" element={<TownInfo />} />
      </Routes>

    </div>
  );
}

export default App;
