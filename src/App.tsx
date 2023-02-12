import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import EventDetailsPage from './pages/EventDetailsPage';
import SeasonDetailsPage from './pages/SeasonDetailsPage';
import { seasonSetData, selectSeason } from './reducers/seasonSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { calendarRequest } from './requests/calendarRequest';
import { ICalendar } from './models/ICalendar';
import { ContainerWithHeader, WrapperApp } from './components/style/AppStyle';
import Header from './components/Header';

function App() {
  const season = useAppSelector(selectSeason) ;
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (!season.props?.id) {
      calendarRequest().then(response => {
        const seasons: Array<ICalendar> = response.data
        dispatch(seasonSetData(seasons))
      }).catch(e => {
        console.log(e);
      }) 
    }
  }, [season, dispatch]);

  return (
    <WrapperApp>
      <Header />
      <ContainerWithHeader maxWidth="xl">
        <Routes>
            <Route path="/" element={<SeasonDetailsPage/>} />
            <Route path="/event/:id" element={<EventDetailsPage/>} />
          </Routes>
      </ContainerWithHeader>
    </WrapperApp>
  );
}

export default App;
