import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const Nav = styled.nav`
    min-height: 20%;
    width: 100%;
    flex-shrink:0;
    flex-grow:0;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-evenly;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo/>
            <SearchBar/>
        </Nav>
    );
};

export default Navbar;
