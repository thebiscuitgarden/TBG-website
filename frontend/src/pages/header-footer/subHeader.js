/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'

//Logo
import logo from "../../images/logo/logo192.png";

//Header Styles:
import { LogoContainer, Logo, HamburgerDiv, MobileNav, MobileNavBar, Nav, Navbar, StyledHeader, SubHeader } from '../../styles/header'

//Components
import NavItem from "./NavItem";

//Options for dropdown menu:
import {
    options
} from './menuOptions'

export default function Header() {
    return (
        <SubHeader>
        </SubHeader>
    )
}
