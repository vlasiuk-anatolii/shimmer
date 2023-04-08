/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './ProductDetailsPage.scss';
import { Product } from '../../react-app-env';
import { NotFound } from '../../components/NotFound/NotFound';

import {
  getFavoritesSelector,
  getSelectedCartSelector,
  getError,
} from '../../store/selectors';

import {
  delFavorites,
  delFromCart,
  setFavorites,
  setSelectedCart,
} from '../../store/actions';
import { MayLike } from '../../components/Main/MayLike/MayLike';
import { getDetails } from '../../api/api';
import { CONSTS } from '../../const/const';

export const ProductDetailsPage = () => {
  let localStorageAllProducts: Product[] = [];
  const getAllProducts: string | null = localStorage.getItem('allProducts');
  if (getAllProducts) {
    localStorageAllProducts = JSON.parse(getAllProducts);
  }
  const errorMsg = useSelector(getError);
  const { id } = useParams<{ id: string }>();
  const [
    currentProductDetails,
    setCurrentProductDetails,
  ] = useState<Product | undefined>(undefined);
  const [isSelected, setIsSelected] = useState(false);
  const [isAddedProduct, setIsAddedProduct] = useState(false);
  const [urlImage, setUrlImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentFavorite = useSelector(getFavoritesSelector);
  const currentSelectedCart = useSelector(getSelectedCartSelector);
  let currentPrice = 0;
  let currentProduct: Product | undefined;
  if (id) {
    currentProduct = localStorageAllProducts.find(item => item.id === +id);
    if (currentProduct) {
      currentPrice = currentProduct.price
        * (1 - currentProduct.discount / 100);
    }
  }

  const handlerSelectedToCart = (obj: Product, index: number) => {
    if (currentSelectedCart.some(item => item.id === index)) {
      dispatch(delFromCart({
        id: obj.id,
        quantity: 1,
        product: obj,
      }));
    } else {
      dispatch(setSelectedCart({
        id: obj.id,
        quantity: 1,
        product: obj,
      }));
    }
  };

  const handlerAddOrDelete = () => {
    if (currentProduct?.id) {
      if (currentFavorite.includes(currentProduct?.id)) {
        dispatch(delFavorites(currentProduct?.id));
      } else {
        dispatch(setFavorites(currentProduct?.id));
      }
    }
  };

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    const result = getDetails(+id);
    setCurrentProductDetails(result);
  }, [id]);

  return (
    <>
      <div className="sticky">
        <Header />
      </div>
      <div className="product-details">
        <div className="product-details__container">
          <div className="product-details__box-img-home-arrow">
            <IconButton
              color="inherit"
              sx={{
                padding: '0',
              }}
              onClick={() => {
                navigate('/');
              }}
            >
              <div className="product-details__img-home" />
            </IconButton>
            <div className="product-details__arrow" />
            <a href={`#/${currentProduct?.type}s`} className="product-details__link">
              <div
                className="product-details__name-category"
              >
                {currentProduct?.type}
              </div>
            </a>
            <div className="product-details__arrow" />
            {errorMsg.length !== 0
              && <p className="product-details__error">{errorMsg}</p>}
            {!currentProduct && <NotFound />}
            <div className="product-details__name-page">
              {currentProduct?.name}
            </div>
          </div>
          <div className="product-details__box-arrow-back">
            <div className="product-details__arrow--back" />
            <a
              href="#/"
              className="product-details__link"
              data-cy="backButton"
            >
              <div
                className="product-details__name-page"
              >
                Back
              </div>
            </a>
          </div>
          <h1 className="product-details__title">
            {currentProduct?.name}
          </h1>
          <div className="product-details__box-left-right">
            <div className="product-details__box-left">
              <div className="product-details__box-img">
                <div>
                  <ul className="product-details__list">
                    {CONSTS.IMAGES.map((item, i) => (
                      <IconButton
                        sx={{
                          padding: 0,
                          marginBottom: '16px',
                        }}
                        onClick={() => {
                          setUrlImage(item);
                        }}
                        key={i}
                      >
                        <li className="product-details__little-img">
                          <img
                            src={item}
                            alt={item}
                          />
                        </li>
                      </IconButton>
                    ))}
                  </ul>
                </div>
                <div className="product-details__box-main-img">
                  <img
                    src={urlImage.length === 0
                      ? `${CONSTS.IMAGES[0]}`
                      : `${urlImage}`}
                    alt={currentProductDetails?.name}
                    className="product-details__main-img"
                  />
                </div>
              </div>
              <div className="product-details__box-text">
                <h2
                  className="product-details__about-title"
                >
                  About
                </h2>
                <div className="product-details__divider" />
                <h3 className="product-details__about-subtitle">
                  Description
                </h3>
                <p className="product-details__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam tempora commodi quam iusto fugit quae repellendus inventore, placeat cum eveniet blanditiis vero voluptatibus id ullam nulla enim quisquam velit nostrum necessitatibus ad impedit a exercitationem non sed! Unde debitis veritatis, dicta vitae omnis, beatae tempore distinctio quisquam quo harum quis aperiam saepe deleniti! Ducimus impedit tempora voluptatibus sit, explicabo architecto
                </p>
                <h3 className="product-details__about-subtitle">
                  Additional Features
                </h3>
                <p className="product-details__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem impedit magnam at provident officiis voluptate cumque minus fuga, dolorem maxime debitis totam, ducimus dignissimos quo vitae ullam nisi rem culpa est error ipsum! Cupiditate molestiae error consequuntur exercitationem possimus soluta ipsa nulla et vel expedita vero fugiat beatae reprehenderit eaque tempore excepturi, temporibus, doloremque magni aliquam quod quia laudantium
                </p>
              </div>
            </div>
            <div className="product-details__box-right">
              <div className="product-details__box-price-product">
                <h2 className="product-details__current-price">
                  $
                  {currentPrice}
                </h2>
                <h2 className={currentProduct?.discount === 0
                  ? 'product-details__prev-price--none'
                  : 'product-details__prev-price'}
                >
                  $
                  {currentProduct?.price}
                </h2>
              </div>
              <div className="product-details__box-buttons">
                <button
                  type="button"
                  className={isAddedProduct
                    // eslint-disable-next-line max-len
                    ? 'product-details__add-to-cart--pressed product-details__text-add-to-cart--pressed'
                    : 'product-details__add-to-cart'}
                  onClick={() => {
                    setIsAddedProduct(!isAddedProduct);
                    if (currentProduct) {
                      handlerSelectedToCart(currentProduct, currentProduct.id);
                    }
                  }}
                >
                  {isAddedProduct ? 'Selected' : 'Add to cart'}
                </button>
                <IconButton
                  size="small"
                  sx={{ padding: 0 }}
                  onClick={() => {
                    setIsSelected(!isSelected);
                    handlerAddOrDelete();
                  }}
                >
                  <div className="product-details__rectangle">
                    <div className={(currentProduct?.id
                      && isSelected)
                      ? 'product-details__favorites_selected'
                      : 'product-details__favorites'}
                    />
                  </div>
                </IconButton>
              </div>
              <div className="product-details__box-info">
                <div className="product-details__color-name">
                  <p className="product-details__text-features">Color</p>
                  <p className="product-details__value-features">
                    {currentProduct?.color}
                  </p>
                </div>
                <div className="product-details__capacity-name">
                  <p className="product-details__text-features">Capacity</p>
                  <p className="product-details__value-features">
                    {currentProduct?.capacity}
                  </p>
                </div>
                <div className="product-details__type-name">
                  <p className="product-details__text-features">Type</p>
                  <p className="product-details__value-features">
                    {currentProduct?.type}
                  </p>
                </div>
              </div>
              <h2 className="product-details__about-title">Details</h2>
              <div className="
                product-details__divider
                product-details__divider--right"
              />
              <div className="product-details__tech-specs">
                <div className="product-details__tech-specs-name">
                  <p className="product-details__text-tech-specs">
                    Some quality
                  </p>
                  <p className="product-details__value-tech-specs">
                    Some value
                  </p>
                </div>
                <div className="product-details__tech-specs-name">
                  <p className="product-details__text-tech-specs">
                    Some quality
                  </p>
                  <p className="product-details__value-tech-specs">
                    Some value
                  </p>
                </div>
                <div className="product-details__tech-specs-name">
                  <p className="product-details__text-tech-specs">
                    Some quality
                  </p>
                  <p className="product-details__value-tech-specs">
                    {['value1', 'value2', 'value3'].map(item => (
                      <div key={item}>{item}</div>
                    ))}
                  </p>
                </div>
                <div className="product-details__tech-specs-name">
                  <p className="product-details__text-tech-specs">
                    Some quality
                  </p>
                  <p className="product-details__value-tech-specs">
                    Some value
                  </p>
                </div>
                <div className="product-details__tech-specs-name">
                  <p className="product-details__text-tech-specs">
                    Some quality
                  </p>
                  <p className="product-details__value-tech-specs">
                    Some value
                  </p>
                </div>
                <div className="product-details__tech-specs-name">
                  <p className="product-details__text-tech-specs">
                    Some quality
                  </p>
                  <p className="product-details__value-tech-specs">
                    Some value
                  </p>
                </div>
                <div className="product-details__tech-specs-name">
                  <p className="product-details__text-tech-specs">
                    Some quality
                  </p>
                  <p className="product-details__value-tech-specs">
                    {['value1', 'value2', 'value3', 'value4'].map(item => (
                      <div key={item}>{item}</div>
                    ))}
                  </p>
                </div>
                <div className="product-details__tech-specs-name">
                  <p className="product-details__text-tech-specs">
                    Some quality
                  </p>
                  <p className="product-details__value-tech-specs">
                    Some value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!currentProduct && <NotFound />}
      </div>
      <div className="product-details__may-like-wrapper">
        <MayLike />
      </div >
      <Footer />
    </>
  );
};
