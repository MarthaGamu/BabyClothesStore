import React, { useState } from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import { ImStarFull } from 'react-icons/im';
import { MdAddShoppingCart } from 'react-icons/md';
import { GrFavorite } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';

const ModalContainer = styled.div`
  width: 100%;
  height: auto;
  color: white;
  position: absolute;
  z-index: 1;
  display: grid;
  place-items: center;
`;

const CenterContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 70%;

  @media (min-width: 1800px) {
    width: 55%;
  }
  margin: auto;
  color: black;
  display: flex;
  .ModalImage {
    flex: 1;
    img {
      width: 100%;
    }
  }
  .productDescription {
    flex: 2;
    text-align: center;
    line-height: 2;

    .icon {
      color: #ffb136;
    }
    .quantityCounter {
      padding: 0.6rem 3rem;
      margin-right: 1rem;
      font-size: 1.5rem;
      border: 1px solid #23232c;
      display: flex;
      justify-content: space-between;
    }
    .decrement,
    .actualPrice,
    .increment {
      flex: 1;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .closeModal {
      font-size: 2rem;
      display: flex;
      justify-content: flex-end;
    }
    .addToCart {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
    .cart {
      background: #23232c;
      color: white;
      padding: 0.6rem 2rem;
      font-size: 1.5rem;
    }
    .favorite {
      padding: 0.6rem 2rem;
      border: 1px solid #23232c;
      margin-left: 1rem;
      font-size: 1.5rem;
    }
    .line {
      width: 80%;
      height: 0.1rem;
      background: #eaebee;
      margin: 3rem auto;
    }

    .categoryTag {
      padding: 0;
      margin: 0;
      font-size: 0.6rem;
      span {
        color: grey;
      }
    }
    .price {
      font-size: 2rem;
    }
  }
`;
const Modal = ({ modalData }) => {
  const [close, setClose] = useState(true);
  const [favorite, setfavorite] = useState(false);
  console.log('[Modal] modalData ', modalData);

  return modalData ? (
    <>
      {close && (
        <ModalContainer>
          <CenterContainer>
            <div className="ModalImage">
              <img src={modalData.product.images} />
            </div>
            <div className="productDescription">
              <div className="closeModal">
                <FiX onClick={() => setClose(false)} />
              </div>
              <h2>{modalData.product.name}</h2>
              <p>{modalData.product.description}</p>
              <div className="customerReviews">
                <p>
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                </p>
                <span>(0 customer reviews)</span>
              </div>
              <span className="price">£{modalData.unit_amount / 100}.00</span>
              <div className="addToCart">
                <div className="quantityCounter">
                  <div className="decrement">-</div>
                  <div className="actualPrice">1</div>
                  <div className="increment">+</div>
                </div>
                <div className="cart">
                  <MdAddShoppingCart className="cartIcon" />
                  Add To Cart
                </div>
                <div className="favorite">
                  {!favorite ? (
                    <GrFavorite onClick={() => setfavorite(!favorite)} />
                  ) : (
                    <MdFavorite onClick={() => setfavorite(!favorite)} />
                  )}
                </div>
              </div>
              <div className="line"></div>
              <p className="categoryTag">
                <span>CATEGORY:</span> BABY CLOTHES
              </p>
            </div>
          </CenterContainer>
        </ModalContainer>
      )}
    </>
  ) : null;
};

export default Modal;
