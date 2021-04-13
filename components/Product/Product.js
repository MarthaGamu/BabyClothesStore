import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import { MdAddShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CardContainer = styled.div`
  background: white;
  position: relative;
  z-index: 0;
  h3 {
    margin: 0;
    padding: 0;
  }

  .ImageWrapper {
    width: 20rem;
    height: 28rem;
    margin: auto;
    position: relative;
    text-align: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .viewText {
      width: 18rem;
      height: 3rem;
      background: white;
      margin: auto;
      border: 2px solid black;
      position: absolute;
      font-weight: 600;
      top: 80%;
      left: 5%;
      cursor: pointer;
      display: block;
      display: grid;
      place-items: center;
      letter-spacing: 0.29px;
      visibility: hidden;
    }
  }
  .ImageWrapper:hover {
    border: 0.2px solid #494746;
    .viewText {
      visibility: visible;
    }
  }
`;
const ImageWrapper = styled.div``;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #494746;

  .addToCart {
    font-size: 1.8rem;
    margin: 1rem;
  }
  .addToCart:hover {
    transform: translateY(5px);
    transition: transform 500ms;
  }
`;

const Product = ({ price }) => {
  const productDetails = price.product;
  const [modalData, setModalData] = useState(undefined);
  const [toggle, setToggle] = useState(false);

  const HandleModalData = () => {
    setModalData(price);
  };
  return (
    <>
      <CardContainer key={price.id}>
        <div className="ImageWrapper">
          <Link href={`/product/${price.id}`}>
            <img src={productDetails.images[0]} alt="product image" />
          </Link>

          <div className="viewText" onClick={HandleModalData}>
            {/*  */}
            <span>QUICK VIEW</span>
            {/* </Link> */}
          </div>
        </div>
        <Footer>
          <div>
            <p>{productDetails.name}</p>

            <h3>£{price.unit_amount / 100}.00</h3>
          </div>
          <div>
            <MdAddShoppingCart className="addToCart" />
          </div>
        </Footer>
      </CardContainer>
      {modalData ? <Modal modalData={modalData} /> : null}
    </>
  );
};

export default Product;
