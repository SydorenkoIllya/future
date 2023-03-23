import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import FavouritePage from './components/pages/FavouritePage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/favourite' element={<FavouritePage />} />
      <Route path='*' element={<MainPage />} />
    </Routes>
  );
}
