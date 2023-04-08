import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../../api/api';
import { Product } from '../../../react-app-env';
import './Categories.scss';

export const Categories: React.FC = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [errorMsg, setErrorMsg] = useState('');
  const oilsAll = allProducts.filter(item => item.type === 'oil');
  const gelsAll = allProducts.filter(item => item.type === 'gel');
  const scrubsAll = allProducts.filter(item => item.type === 'scrub');

  useEffect(() => {
    try {
      const result = getProducts();
      setAllProducts(result);
    } catch (error) {
      setErrorMsg(`${error}`);
    }
  },
  []);

  return (
    <div className="category">
      <h1 className="category__title">Categories</h1>
      <div className="category__box-content">
        {errorMsg.length !== 0
        && <p className="oilspage__error">{errorMsg}</p>}
        <div className="category__box-category">
          <IconButton
            size="small"
            sx={{ padding: 0 }}
            className="category__icon-button"
            onClick={() => {
              navigate('/oils');
            }}
          >
            <div className="category__image" />
          </IconButton>
          <h3 className="category__subtitle">Oils</h3>
          <p className="category__counter">
            {`${oilsAll.length} kinds`}
          </p>
        </div>

        <div className="category__box-category">
          <IconButton
            size="small"
            sx={{ padding: 0 }}
            className="category__iconbutton"
            onClick={() => {
              navigate('/gels');
            }}
          >
            <div className="category__image category__image--gels" />
          </IconButton>
          <h3 className="category__subtitle">Gels</h3>
          <p className="category__counter">
            {`${gelsAll.length} kinds`}
          </p>
        </div>

        <div className="category__box-category">
          <IconButton
            size="small"
            sx={{ padding: 0 }}
            className="category__iconbutton"
            onClick={() => {
              navigate('/scrubs');
            }}
          >
            <div
              className="category__image category__image--scrubs"
            />
          </IconButton>
          <h3 className="category__subtitle">Scrubs</h3>
          <p className="category__counter">
            {`${scrubsAll.length} kinds`}
          </p>
        </div>
      </div>
    </div>
  );
};
