import './App.scss';
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
// import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { OilsPage } from './pages/OilsPage/OilsPage';
import { GelsPage } from './pages/GelsPage/GelsPage';
import { ScrubsPage } from './pages/ScrubsPage/ScrubsPage';
import {
  ProductDetailsPage,
} from './pages/ProductDetailsPage/ProductDetailsPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oils" element={<OilsPage />} />
        <Route path="/gels" element={<GelsPage />} />
        <Route path="/scrubs" element={<ScrubsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
