import React, { useState, useEffect } from 'react';
import { useBasket } from '../ContextApi/Context';
import styled from 'styled-components';
import { data } from './data';
import { TiShoppingCart } from 'react-icons/ti';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
const TopNavbar = styled.div`
  width: 100%;
  background: #333333;
  font-size: 1rem;

  .navWrapper {
    width: 90%;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    margin: auto;

    .iconWrapper {
      display: flex;
      align-items: center;
    }
    .iconTopbar {
      font-size: 1.3rem;
      margin-right: 1px;
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
  position: absolute;

  @media (max-width: 1000px) {
    display: none;
  }
  .navWrapper {
    width: 90%;
    margin: auto;
    display: flex;
    cursor: pointer;

    @media (min-width: 1800px) {
      width: 60%;
    }
  }
  .logo {
    flex: 1;
    display: grid;
    place-items: center;
    font-size: 2rem;
    color: white;
    font-style: italic;
    border-bottom: #265c7e;
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
      display: flex;
      margin-left: 1rem;
      cursor: pointer;
      color: white;
    }
  }

  .cartIcon {
    flex: 0.5;
    font-size: 1.5rem;
    display: grid;
    place-items: center;
    color: white;
  }
`;
const MobileNavbar = styled.div`
  border-bottom: 1px solid #54c8d7;
  .logo {
    background: #54c8d7;
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
  const { basket, totalBasket } = useBasket();

  return (
    <>
      {/* <TopNavbar>
        <div className="navWrapper">
          <div className="iconWrapper">
            <HiOutlineMail className="iconTopbar" />
            babyfashion@info.com
          </div>
          <div className="iconWrapper">
            <FaPhoneAlt className="iconTopbar" />
            +44 7752723808
          </div>
        </div>
      </TopNavbar> */}
      <BottomNavbar>
        <div className="navWrapper">
          <Link href="/">
            <div className="logo">
              {' '}
              {/* <Image
                src="/logoo.png"
                alt="logo"
                className="imageLogo"
                width={150}
                height={80}
                style={{ objectFit: 'cover' }}
              /> */}
              KidsCorner
            </div>
          </Link>
          <nav className="navLinks">
            {
              <ul>
                <Link href="/products">
                  <li>
                    <a>BABY CLOTHES</a>
                  </li>
                </Link>
                <Link href="/Contact">
                  <li>
                    <a>CONTACT US</a>
                  </li>
                </Link>
              </ul>
            }
          </nav>
          <Link href="/CartList">
            <div className="cartIcon">
              <span>
                <TiShoppingCart />({totalBasket})
              </span>
            </div>
          </Link>
        </div>
      </BottomNavbar>
      <MobileNavbar>
        <div className="logo">
          <Image
            src="/logoo.png"
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
                {
                  <ul>
                    <Link href="/products">
                      <li>
                        <a>BABY CLOTHES</a>
                      </li>
                    </Link>
                    <Link href="/Contact">
                      <li>
                        <a>CONTACT US</a>
                      </li>
                    </Link>
                  </ul>
                }
              </nav>
            )}
          </div>
          <Link href="/CartList">
            <div className="cartIcon">
              <TiShoppingCart />({totalBasket})
            </div>
          </Link>
        </nav>
      </MobileNavbar>
    </>
  );
};

export default Navbar;
