import React from 'react';
import styled from 'styled-components';
import { GiPositionMarker } from 'react-icons/gi';
import { HiOutlineMail } from 'react-icons/hi';
import { ImFacebook2 } from 'react-icons/im';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';
import { AiFillGooglePlusSquare } from 'react-icons/ai';
import { FaYoutubeSquare } from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';
import logoo from '../../public/logoo.png';
import Link from 'next/link';

const Container = styled.div`
  width: 100%;
  margin-top: 6rem;
  background: #333333;
  color: white;
  .Whiteline {
    width: 2rem;
    height: 0.2rem;
    background: white;
    margin: auto;
  }
  .lowerBanner {
    width: 100%;
    background: black;
    padding-top: 1rem;
    padding-bottom: 1rem;
    .bannerWrapper {
      width: 90%;
      margin: 2rem auto;
      font-size: 0.8rem;
      padding-left: 4rem;

      @media (min-width: 1800px) {
        width: 70%;
      }
    }
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 1800px) {
    width: 70%;
  }

  .about {
    flex: 1;

    h2 {
      text-align: center;
    }
    p {
      padding: 1rem 6rem;
      line-height: 1.5;
      @media (max-width: 1500px) {
        padding: 0.5rem 4rem;
      }
    }
    .logoo {
      width: 120px;
      height: 60px;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .storeInfo {
    display: grid;
    justify-content: center;
    @media (min-width: 1000px) {
      flex: 1;
    }
    .icon {
      font-size: 1.8rem;
    }
  }
  .socialLinks {
    display: grid;
    justify-content: center;
    cursor: pointer;

    @media (min-width: 1000px) {
      flex: 1;
    }
    .icon {
      font-size: 1.8rem;
      margin-left: 0.4rem;
    }
    .socialIcons {
      color: #54c8d7;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <div className="about">
          <h2>ABOUT</h2>
          <div className="Whiteline"></div>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
          <Link href="/">
            <div className="logoo">
              <img src={logoo} alt="footer logo" />
            </div>
          </Link>
        </div>

        <div className="storeInfo">
          <h2>STORE INFORMATION</h2>
          <div className="Whiteline"></div>
          <p>
            <GiPositionMarker className="icon" />
            62 Camden Road,Sevenoaks
          </p>
          <p>
            <HiOutlineMail className="icon" />
            kidzfashion@kid.com
          </p>
          <p>
            <BiPhoneCall className="icon" />
            0775338654
          </p>
        </div>
        <div className="socialLinks">
          <h2>OPENING HRS</h2>
          <div className="Whiteline"></div>
          <p>Monday-Saturday</p>
          <p>09:00am - 5:00PM</p>
          <p>Sunday-Closed</p>
          <h3 className="socialIcons">Social Links</h3>

          <p>
            <ImFacebook2 className="icon" />
            <AiFillTwitterSquare className="icon" />
            <TiSocialInstagram className="icon" />
            <AiFillGooglePlusSquare className="icon" />
            <FaYoutubeSquare className="icon" />
          </p>
        </div>
      </InnerContainer>
      <div className="lowerBanner">
        <div className="bannerWrapper">
          <span>&#169;</span>2021 Designed &Developed by Martha G Mandizvidza
        </div>
      </div>
    </Container>
  );
};

export default Footer;
