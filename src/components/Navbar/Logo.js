import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    i{
        margin-right: 5px;
        color: white;
        background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    p{
        font-family: 'Pacifico', cursive;
        font-size: 24px;
        letter-spacing: 1px;
    }
`;

const Logo = () => {

    return (
        <StyledLogo>
            <i className="fas fa-utensils"></i>
            <p>Recipes</p>
        </StyledLogo>
    );
};

export default Logo;
