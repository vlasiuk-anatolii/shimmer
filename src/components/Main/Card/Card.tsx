import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Card.scss';
import {
  delFavorites, delFromCart, setFavorites, setSelectedCart,
} from '../../../store/actions';
import {
  getFavoritesSelector,
  getSelectedCartSelector,
} from '../../../store/selectors';
import { ObjectForCart, Product } from '../../../react-app-env';

type Props = {
  id: number,
  type: string,
  imageUrl: string,
  name: string,
  price: number,
  discount: number,
  color: string,
  capacity: string,
  vitamins: string,
  aroma: string,
};

export const Card: React.FC<Props> = ({
  id,
  type,
  imageUrl,
  name,
  price,
  discount,
  color,
  capacity,
  vitamins,
  aroma
}) => {
  const dispatch = useDispatch();
  const currentFavorite = useSelector(getFavoritesSelector);
  const currentSelectedCart = useSelector(getSelectedCartSelector);
  const currentPrice = price * (1 - discount / 100);
  const [isSelected, setIsSelected] = useState(false);
  const [isAddedProduct, setIsAddedProduct] = useState(false);

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

  const isProductInCart = (id:number, arr: ObjectForCart[]): boolean => {
    return arr.some(item => item.id === id);
  }

  const isProductFavorite = (id:number, arr:number[]): boolean => {
    return arr.some(item => item === id);
  }

  const handlerAddOrDelete = (index: number) => {
    if (currentFavorite.includes(index)) {
      dispatch(delFavorites(index));
    } else {
      dispatch(setFavorites(index));
    }
  };

  return (
    <div data-cy="cardsContainer" className="card">
      <NavLink to={`/product/${id}`}>
        <div className="card__box-image">
          <img
            src={imageUrl}
            alt={name}
            className="card__image"
          />
        </div>
      </NavLink>

      <div className="card__name-product">
        <p className="card__name">{name}</p>
      </div>

      <div className="card__box-price-product">
        <h2 className="card__current-price">
          $
          {currentPrice}
        </h2>
        <h2 className={discount === 0
          ? 'card__prev-price--none'
          : 'card__prev-price'}
        >
          $
          {price}
        </h2>
      </div>

      <div className="card__divider" />

      <div className="card__box-info">
        <div className="card__color-name">
          <p className="card__text-features">Color</p>
          <p className="card__value-features">{color}</p>
        </div>

        <div className="card__capacity-name">
          <p className="card__text-features">Capacity</p>
          <p className="card__value-features">{capacity}</p>
        </div>

        <div className="card__type-name">
          <p className="card__text-features">type</p>
          <p className="card__value-features">{type}</p>
        </div>
      </div>

      <div className="card__box-buttons">
        <button
          type="button"
          className={isProductInCart(id, currentSelectedCart)
            ? 'card__add-to-cart--pressed card__text-add-to-cart--pressed'
            : 'card__add-to-cart'}
          onClick={() => {
            const obj = {
              id,
              type,
              imageUrl,
              name,
              price,
              discount,
              color,
              capacity,
              vitamins,
              aroma
            };

            setIsAddedProduct(!isAddedProduct);
            handlerSelectedToCart(obj, id);
          }}
        >
          {isAddedProduct ? 'Added to cart' : 'Add to cart'}
        </button>
        <IconButton
          size="small"
          sx={{ padding: 0 }}
          onClick={() => {
            setIsSelected(!isSelected);
            handlerAddOrDelete(id);
          }}
        >
          <div className="card__rectangle">
            <div
              id="heart"
              className={isProductFavorite(id, currentFavorite)
                ? 'card__favorites-selected'
                : 'card__favorites'}
            />
          </div>
        </IconButton>
      </div>
    </div>
  );
};
