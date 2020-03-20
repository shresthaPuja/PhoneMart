import React, { Component } from "react";
import { Link } from "react-router-dom";
import navlogo from "../../logo.svg";
import {ButtonContainer} from "./Button";
import styled from "styled-components";

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm bg-light navbar-dark px-sm-5">
              
            <img src={navlogo} alt="store" className="navbar-brand"/>
            <h1 style ={{color:'white'}}>PHONE MART</h1>
           
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="fas  fa-home nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item ml-8">
              <Link to="/productList" className="nav-link">
                Products
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-link">
                <i className="fas fa-phone-volume"> Contact</i>
              </Link>
            </li>
          </ul>
          <ul className="nav-link ml-auto">
            <Link to="./shoppingCart">
              <ButtonContainer>
                <span className="mr-2">
                  <i className="fas fa-cart-plus"> Cart Items</i>
                </span>
              </ButtonContainer>
            </Link>
          </ul>
        </NavWrapper>
      </div>
    );
  }
}

const NavWrapper= styled.nav`
background: var(--mainBlue) !important;
.nav-link{
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform:capitalize;
  }
`
export default NavBar;
