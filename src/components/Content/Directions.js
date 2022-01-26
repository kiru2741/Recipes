import React from 'react';
import styled from 'styled-components';

const StyledDirections = styled.div`
    background-color: rgb(245,245,245);
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content: space-evenly;
    height: auto;
    width: 100%;
    padding: 1rem .5rem;

    span{
        font-weight: 700;
    }
    a{
        background-image:linear-gradient(120deg, #f6d465 0%, #fda085 100%);
        color: white;
        text-decoration:none;
        padding: .5rem 1rem;
        border-radius: 5rem;
        font-size:12px;

        &:hover i{
            margin-left:10px;
        }

        i{
            color:white;
            margin-left: 5px;
            transition:all 0.3s ease-in-out;
        }
    }
    
`;

const Header = styled.p`
    color: #fda085;
`;

const Content = styled.p`
    font-size: 12px;
    margin: 1rem 0;
    text-align: center;
`;

const Directions = ({currentRecipe}) => {
    return (
        <StyledDirections>
            <Header>How to cook it</Header>
            <Content>This recipe was carefully designed and tested by <span>{currentRecipe.recipe.source}</span>. Please check out directions at their website.</Content>
            <a href={currentRecipe.recipe.url} target='_blank'>Directions<i className='fas fa-arrow-right'></i></a>
        </StyledDirections>
    );
};

export default Directions;
