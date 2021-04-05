import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';

const CardContainer = styled.div`
  background: white;
  position: relative;
  z-index: 0;
  h3 {
    margin: 0;
    padding: 0;
  }
`;
const ImageWrapper = styled.div`
  width: 20rem;
  height: 28rem;
  background: red;
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
    display: grid;
    place-items: center;
    position: absolute;
    font-weight: 600;
    top: 80%;
    left: 5%;
    cursor: pointer;
  }
`;
// const Modal = styled.div`
//   width: 100%;
//   height: 340%;
//   top: 0;
//   position: absolute;
//   background: rgba(145, 145, 149, 0.4);
//   color: white;
//   z-index: 1;
// `;

const Product = ({ price }) => {
  const productDetails = price.product;
  const [modalData, setModalData] = useState({});
  const [toggle, setToggle] = useState(false);
  console.log('i received data', modalData);
  console.log(' i am toggle set', toggle);
  const HandleModalData = () => {
    setModalData(price);
  };
  return (
    <>
      <CardContainer key={price.id}>
        <ImageWrapper>
          <img src={productDetails.images[0]} alt="product image" />
          <div className="viewText" onClick={HandleModalData}>
            <span onClick={() => setToggle(!toggle)}>QUICK VIEW</span>
          </div>
        </ImageWrapper>
        <p>{productDetails.name}</p>

        <h3>£{price.unit_amount / 100}.00</h3>
      </CardContainer>
      {toggle && <Modal modalData={modalData} toggle={toggle} />}
    </>
  );
};

export default Product;
