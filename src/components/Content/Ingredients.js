import React from 'react';
import styled from 'styled-components';

const StyledIngredients = styled.div`
    padding: 1rem;
`;

const Heading = styled.p`
    text-align: center;
    color: #fda085;
`;

const IngredientsList = styled.div`
    padding: .5rem 0;

    p{
        font-size: 12px;
        margin: 10px 0px;

        i{
            color: #fda085;
            opacity: .5;
            margin-right: 5px;
        }
    }
    
`;

const Ingredients = ({currentRecipe}) => {

    return (
        <StyledIngredients>
            <Heading>Recipe Ingredients</Heading>
            <IngredientsList>
                {
                    currentRecipe.recipe.ingredientLines.map((ing, index) => <p key={index}><i className='fas fa-caret-right'></i>{ing}</p>)
                }        
            </IngredientsList>
        </StyledIngredients>
        );
};

export default Ingredients;
