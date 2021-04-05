import React, { useState } from 'react';
import styled from 'styled-components';
import { data } from './data';
import { TiShoppingCart } from 'react-icons/ti';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';

const TopNavbar = styled.div`
  width: 100%;
  background: #54c8d7;

  .navWrapper {
    width: 90%;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    margin: auto;
    .iconTopbar {
      font-size: 1.7rem;
      margin-right: 1px;
      padding-top: 0.7rem;
    }
    @media (min-width: 1800px) {
      width: 60%;
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const BottomNavbar = styled.div`
  width: 100%;
  padding: 1rem 1.3rem;
  z-index: 1;

  @media (max-width: 1000px) {
    display: none;
  }
  .navWrapper {
    width: 90%;
    margin: auto;
    display: flex;

    @media (min-width: 1800px) {
      width: 60%;
    }
  }
  .logo {
    flex: 1;
    display: grid;
    place-items: center;
  }
  .toggleContainer {
    position: absolute;
  }
  .navLinks {
    flex: 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul,
    li {
      list-style: none;
      font-weight: 500;
    }
  }

  .cartIcon {
    flex: 0.5;
    font-size: 1.5rem;
    display: grid;
    place-items: center;
  }
`;
const MobileNavbar = styled.div`
  .logo {
    background: salmon;
    display: grid;
    place-items: center;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    font-size: 1.5rem;
    position: relative;

    span {
      font-size: 1rem;
    }
  }
  ul,
  li {
    list-style: none;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <TopNavbar>
        <div className="navWrapper">
          <div>
            <HiOutlineMail className="iconTopbar" />
            marthagmandizvidza@gmail.com
          </div>
          <div>
            <FaPhoneAlt className="iconTopbar" />
            +44 7752723808
          </div>
        </div>
      </TopNavbar>
      <BottomNavbar>
        <div className="navWrapper">
          <div className="logo">
            {' '}
            <Image
              src="/logoo.png"
              alt="logo"
              className="imageLogo"
              width={150}
              height={80}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <nav className="navLinks">
            {data.map((linkName) => (
              <ul key={linkName.id}>
                <li>{linkName.name}</li>
              </ul>
            ))}
          </nav>
          <div className="cartIcon">
            <TiShoppingCart />
          </div>
        </div>
      </BottomNavbar>
      <MobileNavbar>
        <div className="logo">
          <Image
            src="/clotheslogo.png"
            alt="logo"
            className="imageLogo"
            width={100}
            height={70}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <nav className="menu">
          <div className="toggleContainer">
            {!toggle ? (
              <FiMenu onClick={() => setToggle(!toggle)} />
            ) : (
              <FiX onClick={() => setToggle(!toggle)} Menu />
            )}
            {toggle && (
              <nav className="navLinks">
                {data.map((linkName) => (
                  <ul key={linkName.id}>
                    <li>{linkName.name}</li>
                  </ul>
                ))}
              </nav>
            )}
          </div>
          <div>
            <TiShoppingCart />
          </div>
        </nav>
      </MobileNavbar>
    </>
  );
};

export default Navbar;