import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from 'react-animated-slider';
import ScrollAnimation from "react-animate-on-scroll";
import * as Scroller from 'react-scroll'
import { Link as Scroll } from 'react-scroll'
import 'react-animated-slider/build/horizontal.css';
import './slider.css';
import './animate.css';

import visalogo from './assets/visa-black.svg';
import masterlogo from './assets/master-black.svg';
import payoneerlogo from './assets/payoneer-black.svg';
import paypallogo from './assets/paypal-black.svg';

import arrR from './assets/arr-r.svg';
import wfgLogo from "./assets/wfg-logo.svg";
import heroSvg from "./assets/hero-img.svg";
import missionSvg from "./assets/mission.svg";

import twIcon from './assets/tw-icon.svg';
import igIcon from './assets/ig-icon.svg';
import fbIcon from './assets/fb-icon.svg';
import inIcon from './assets/in-icon.svg';
import phoneImage from "./assets/phone_img.svg";
import cardImage from "./assets/card_img.svg";
import personImage from "./assets/person_img.svg";
import question from './assets/question.svg';
import done from './assets/done.svg';
import lightBulb from "./assets/light-bulb.svg";
import cards from "./assets/cards.svg";
import wcImage from "./assets/wc-image.svg";
import adjust from "./assets/adjust.svg";

import Loader from './assets/grid.js'

function App() {


  const [menu, setMenu] = useState(false)

  const [modal, setModal] = useState(false)

  const [loading, setLoading] = useState(true)

  const [count, setCount] = useState(0)

  const setLoad = () => { setCount(count => count + 1); console.log(count) }

  useEffect(() => {
    setTimeout(() => setLoading(false), 20);

  }, [])


  return (

    loading ?
      <div className="header__inner">
        <Loader wrapperStyle={{
          position: "absolute",
          left: 0, right: 0,
          top: 0, bottom: 0,
          margin: "auto",
          overflow: "auto",
          lineHeight: "initial"
        }} />
      </div>

      :

      <div data-new-gr-c-s-check-loaded="14.1068.0" data-gr-ext-installed="">
        {/* header */}

        <header className="header">
          <div className="header__inner">
            <nav className="nav animated fadeInUp delay00">
              {/* Logo */}
              <div className="logo-container">
                <a href="#" aria-current="page">
                  <img src={wfgLogo} alt="Welcome finance group - Home" />
                </a>
              </div>
              {/* lists */}
              <ul className="nav__lists">
                <li className="nav__list">
                <Scroll to="about" spy={true} smooth={true} className="nav__link">About Us</Scroll>
                </li>
                <li className="nav__list">
                <Scroll to="mission" spy={true} smooth={true} className="nav__link">Our Mission</Scroll>
                </li>
                <li className="nav__list">
                <Scroll to="partners" spy={true} smooth={true} className="nav__link">Partners</Scroll>
                </li>
                <li className="nav__list">
                <Scroll to="products" spy={true} smooth={true} className="nav__link">Products</Scroll>
                </li>
              </ul>

              {/* Mobile navigation */}
              <div className="mobile__nav">
                <div className={`nav-contents ${menu ? "activate" : ""}`}>
                  {/* mobile logo */}
                  <a href="#" aria-current="page">
                    {/* <img src="./assets/logo.svg" className = "mobile-ham-logo" alt="Welcome finance group - Home"> */}
                  </a>
                  {/* end of mobile logo */}
                  {/* mobile lists */}
                  <ul>
                    <li className="mobile__list">
                    <Scroll to="about" spy={true} smooth={true} className="mobile__link">About Us</Scroll>
                      </li>
                    <li className="mobile__list">
                    <Scroll to="mission" spy={true} smooth={true} className="mobile__link">Our Mission</Scroll>
                      </li>
                    <li className="mobile__list">
                    <Scroll to="partners" spy={true} smooth={true} className="mobile__link">Partners</Scroll>
                      </li>
                    <li className="mobile__list">
                    <Scroll to="products" spy={true} smooth={true} className="mobile__link">Products</Scroll>
                      </li>
                  </ul>


                  {/* end of mobile lists */}
                </div>
                {/* mobile hamburger */}
                <div className={`hamburger modal-set ${menu ? "active" : ""}`} onClick={() => setMenu(!menu)}>
                  <span></span>
                  <span></span>
                </div>
                {/* end of mobile hamburger */}
              </div>
              {/* End of mobile navigation */}
            </nav>
          </div>
          <div className="hero-top">
            <div className="hero-section">
              <div className="hero-section-inner">
                <h1 className="hero-section_heading">
                  <span className="colored-text2"> Welcome</span> to<br />your favorite<br />
                  <span className="colored-text"> Finance group</span>.
                </h1>
                <p className="hero-section_intro">
                  We are removing barriers in payment.<br />
                  Cash is the enemy and we are here to eliminate<br /> physical cash across the globe.
                </p>
              </div>
              <div className="hero-section-inner">
                <img src={heroSvg} alt="WFG - Home" />
              </div>
            </div>

            <div id="about" className="hero-section-about">
              <div className="hero-section-about-header">
                <h1>
                  Lorem ipsum,<br />
                  consectetur <span>adipiscing</span>
                </h1>
              </div>
              <div className="hero-section-about-content">
                <div className="hero-section-about-item">
                  <div>
                    <img src={lightBulb} className="wfg-icon" alt="WFG - Home" />
                  </div>
                  <div>
                    <h3 className="hero-section-about-item-head">
                      Lorem ipsum
                    </h3>
                    <p className="hero-section-about-item-body" style={{ width: "100%" }}>
                      Nam in velit malesuada, porta erat a, vestibulum orci.malesuada, volutpat metus ac, laoreet erat.
                    </p>
                  </div>
                </div>
                <div className="hero-section-about-item">
                  <div>
                    <img src={cards} className="wfg-icon" alt="WFG - Home" />
                  </div>
                  <div>
                    <h3 className="hero-section-about-item-head">
                      Lorem ipsum
                    </h3>
                    <p className="hero-section-about-item-body" style={{ width: "100%" }}>
                      Nam in velit malesuada, porta erat a, vestibulum orci.malesuada, volutpat metus ac, laoreet erat.
                    </p>
                  </div>
                </div>
                <div className="hero-section-about-item">
                  <div>
                    <img src={adjust} className="wfg-icon" alt="WFG - Home" />
                  </div>
                  <div>
                    <h3 className="hero-section-about-item-head">
                      Lorem ipsum
                    </h3>
                    <p className="hero-section-about-item-body" style={{ width: "100%" }}>
                      Nam in velit malesuada, porta erat a, vestibulum orci.malesuada, volutpat metus ac, laoreet erat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero */}
          {/* end of Hero */}

        </header>
        {/* end of header */}


        {/* Welcome finance group mission */}
        <section id="mission" className="wfg">
          <figure className="wfg-inner">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeIn"
              duration={0.7}
              delay={0}
            >
              <div className="wfg-img-wrapper">
                <img src={missionSvg} className="wfg-inner__img" aria-hidden="true" width="430" height="400" alt="Travel 2" onLoad={() => setLoad()} />
              </div>
            </ScrollAnimation>
            {/* image caption */}
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInRight"
              duration={0.7}
              delay={0}
            >
              <figcaption className="wfg-caption">
                <h2 className="wfg-caption__heading">Our Mission</h2>
                <p className="wfg-caption__about">
                  Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.
                </p>
                {/* end of wfg btn */}
              </figcaption>
            </ScrollAnimation>
            {/* end of image caption */}
          </figure>
        </section>
        {/* end of Welcome finance group misssion */}


        {/* WFG patners */}
        <section id="partners" className="set--up">
          <div className="set--up_inner">
            {/* set up header */}
            <div className="set--up__header">
              <ScrollAnimation
                animateOnce={true}
                animateIn="fadeInUp"
                duration={1}
                delay={0}
              >
                <h3 className="set--up__title">
                  Our Partners
                </h3>
              </ScrollAnimation>
            </div>
            {/* end of set up header */}
            {/* Actions in wfg */}
            <div className="wfg--actions">
              <div className="wfg--actions-inner">
                {/* 1 */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={1}
                  className="center-anim"
                >
                  <img src={visalogo} className="action--icon" aria-hidden="true" alt="phone img" onLoad={() => setLoad()} />
                </ScrollAnimation>
                {/* 2 */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={2}
                  className="center-anim"
                >
                  <img src={masterlogo} className="action--icon" aria-hidden="true" alt="phone img" onLoad={() => setLoad()} />
                </ScrollAnimation>
                {/* 3 */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={3}
                  className="center-anim"
                >
                  <img src={payoneerlogo} className="action--icon" aria-hidden="true" alt="phone img" onLoad={() => setLoad()} />
                </ScrollAnimation>
                {/* 4 */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={3}
                  className="center-anim"
                >
                  <img src={paypallogo} className="action--icon" aria-hidden="true" alt="phone img" onLoad={() => setLoad()} />
                </ScrollAnimation>
              </div>
            </div>
            {/* end of actions in wfg */}
          </div>
        </section>
        {/* WFG patners */}


        {/* Welcome finance group products */}
        <section id="products" className="wfg">
          <figure className="wfg-inner">

            {/* image caption */}
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInRight"
              duration={0.7}
              delay={0}
            >
              <figcaption className="wfg-caption">
                <h2 className="wfg-caption__heading">Products</h2>
                <p className="wfg-caption__about">
                  Providing solutions through ourr esteemed catalogue of products.
                  Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.

                </p>
                {/* end of wfg btn */}
              </figcaption>
            </ScrollAnimation>
            {/* end of image caption */}

            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeIn"
              duration={0.7}
              delay={0}
            >
              <div className="wfg-product product-1">
                <h3 className="wfg-product__title">
                  WelcomeCard
                </h3>
                <p className="wfg-product__desc">
                  Providing solutions through ourr esteemed catalogue of products.
                  Providing solutions through ourr esteemed catalogue of products.
                </p>
              </div>
              <div className="wfg-product product-2">
                <h3 className="wfg-product__title">
                  WelcomeRemit
                </h3>
                <p className="wfg-product__desc">
                  Providing solutions through ourr esteemed catalogue of products.
                  Providing solutions through ourr esteemed catalogue of products.
                </p>
              </div>
              <div className="wfg-product product-3">
                <h3 className="wfg-product__title">
                  WelcomeBank
                </h3>
                <p className="wfg-product__desc">
                  Providing solutions through ourr esteemed catalogue of products.
                  Providing solutions through ourr esteemed catalogue of products.
                </p>
              </div>
            </ScrollAnimation>
          </figure>
        </section>
        {/* end of Welcome finance group */}


        {/* Welcome finance group product */}
        <section id="wc-section" className="wfg">
          <div className="inner-section-one wfg-inner">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeIn"
              duration={0.7}
              delay={0}
            >
              <div>
                <h2 className="wfg-caption__heading">Local card<br />for international<br />travelers</h2>
              </div>
            </ScrollAnimation>
            {/* image caption */}
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInRight"
              duration={0.7}
              delay={0}
            >
              <figcaption className="wfg-caption">
                <p className="wfg-caption__about">
                  Our prepaid card that you pick up on arrival at your destination country, that allows you spend on any payment channel, hassle free.Just lookout for a welcome card kiosk.
                </p>
                {/* wfg btn */}
                <div>
                  <span className="wfg-product-btn" id="downloadBtn modal-set" onClick={() => setModal(!modal)} > Learn More </span><img src={arrR} />
                </div>
                {/* end of wfg btn */}
              </figcaption>
            </ScrollAnimation>
            {/* end of image caption */}
          </div>
          <figure className="wfg-inner">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeIn"
              duration={0.7}
              delay={0}
            >
              <div className="wfg-img-wrapper">
                <img src={wcImage} className="wfg-inner__img" aria-hidden="true" width="430" height="400" alt="Travel 2" onLoad={() => setLoad()} />
              </div>
            </ScrollAnimation>
            {/* image caption */}
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInRight"
              duration={0.7}
              delay={0}
            >
              <figcaption className="wfg-caption inner-inner-section-one">
                <div className='wc-points'>
                  <img src={question} className="wfg-icon" alt="WFG - Home" />
                  <p className="wfg-caption__about">
                    Have you ever travelled and your bank card didn't work in the destination.
                  </p>
                </div>
                <div className='wc-points'>
                  <img src={question} className="wfg-icon" alt="WFG - Home" />
                  <p className="wfg-caption__about">
                    Are you unable to shop online or use a point of sale when you travel abroad, because you traveled with Cash
                  </p>
                </div>
                <div className='wc-points'>
                  <img src={done} className="wfg-icon" alt="WFG - Home" />
                  <p className="wfg-caption__about">
                    Welcome card is here for you. Exchange your cash for a local card and enjoy shopping like you never left home
                  </p>
                </div>
                {/* end of wfg btn */}
              </figcaption>
            </ScrollAnimation>
            {/* end of image caption */}
          </figure>
        </section>
        {/* end of Welcome finance group misssion */}


        {/* set up */}
        <section className="set-up">
          <div className="set-up_inner">
            {/* set up header */}
            <div className="set-up__header">
              <ScrollAnimation
                animateOnce={true}
                animateIn="fadeInUp"
                duration={0.7}
                delay={0}
              >
                <h3 className="set-up__title">
                  We are your trusted financial partner
                </h3>
              </ScrollAnimation>
            </div>
            {/* end of set up header */}
            {/* Actions in gist */}
            <div className="wfg--actions">
              <div className="wfg--actions-inner">
                {/* 1 */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={1}
                  className="center-anim"
                >
                  <div className="action-container">
                    <img src={phoneImage} className="action-icon" aria-hidden="true" alt="phone img" onLoad={() => setLoad()} />
                    <h3 className="action-title">Mobile Applications</h3>
                    <p className="action-about">
                      Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.<br />
                      {/* With it you have access to varrious appps for different currencies. */}
                    </p>
                  </div>
                </ScrollAnimation>
                {/* 2 */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={2}
                  className="center-anim"
                >
                  <div className="action-container">
                    <img src={cardImage} className="action-icon action-icon--share" aria-hidden="true" alt="card img" onLoad={() => setLoad()} />
                    <h3 className="action-title">Physical cards</h3>
                    <p className="action-about">
                      Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.
                    </p>
                  </div>
                </ScrollAnimation>
                {/* 3 */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={3}
                  className="center-anim"
                >
                  <div className="action-container">
                    <img src={personImage} className="action-icon action-icon--earn" aria-hidden="true" alt="travel img" onLoad={() => setLoad()} />
                    <h3 className="action-title">Customer centric</h3>
                    <p className="action-about">
                      Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            {/* end of actions in gist */}
          </div>
        </section>
        {/* set up ends */}


        {/* Join Us */}
        <section className="set-up join-us">
          <div className="inner-section-one wfg-inner">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeIn"
              duration={0.7}
              delay={0}
            >
              <div>
                <h2 className="wfg-caption__heading">Lorem ipsum, <br />
                  consectetur <span className='colored-text3'>adipiscing</span></h2>
              </div>
            </ScrollAnimation>
            {/* image caption */}
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInRight"
              duration={0.7}
              delay={0}
            >
              <figcaption className="wfg-caption">

                {/* wfg btn */}
                <div className="wfg-btn-wrapper" aria-labelledby="downloadBtn">
                  <span className="wfg-btn modal-btn" id="downloadBtn modal-set" onClick={() => setModal(!modal)} > Contact Us </span>
                </div>
                {/* end of wfg btn */}
              </figcaption>
            </ScrollAnimation>
            {/* end of image caption */}
          </div>
        </section>
        {/* Join Us ends */}


        {/* Welcome finance group footer */}
        <footer className="footer">
          <div>
            <div>
              <img src={wfgLogo} alt="Welcome finance group - Home" />
            </div>
            <div className="footer-icon-wrapper">
              <img src={inIcon} className="wfg-icon img" alt="WFG - Home" />
              <img src={fbIcon} className="wfg-icon img" alt="WFG - Home" />
              <img src={twIcon} className="wfg-icon img" alt="WFG - Home" />
              <img src={igIcon} className="wfg-icon img" alt="WFG - Home" />
            </div>
          </div>
          <div className='footer-lists'>
            <div className='footer-list-one'>
              <ul className='footer-list'>
                <li className='footer-list-head'>Company</li>
                <li className='footer-action'>
                    <Scroll to="about" spy={true} smooth={true} >About Us</Scroll>
                    </li>
                <li className='footer-action'>
                    <Scroll to="mission" spy={true} smooth={true} >Our Mission</Scroll>
                    </li>
                <li className='footer-action'>
                    <Scroll to="partners" spy={true} smooth={true} >Partners</Scroll>
                    </li>
                <li className='footer-action'>
                    <Scroll to="products" spy={true} smooth={true} >Products</Scroll>
                    </li>
              </ul>
            </div>

            <div className='footer-list-two'>
              <ul className='footer-list'>
                <li className='footer-list-head'>Product</li>
                <li className='footer-action'>Welcome Card</li>
                <li className='footer-action'>Welcome Remit</li>
                <li className='footer-action'>Welcome Bank</li>
              </ul>
            </div>
          </div>
          <div className='footer-contact'>
            <p>Have any questions?</p>
            <button className='footer-contact-button' >Contact Support</button>
          </div>

          {/* <div>
            <p className="footer-rights">© Welcome finance group 2022. All rights reserved.</p>
          </div>
          <div className="footer-lists">
            <a href="#"
              className="footer__list">About Us</a>
            <a href="#" className="footer__list">Our Mission</a>
            <a href="#" className="footer__list">Our Products</a>
          </div> */}
        </footer>
        {/* End of Welcome finance group footer */}

      </div >

  );
}

export default App;
