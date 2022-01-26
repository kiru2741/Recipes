import React from 'react';
import styled from 'styled-components';

const StyledRecipeHeader = styled.div`
    width:100%;
    height:50%;
    background-image: linear-gradient(120deg, #f6d46560 0%, #fda08560 100%), url(${props => props.bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    p{
        position:absolute;
        text-align: center;
        width:100%;
        bottom:0;
        left:0;
        background-image: linear-gradient(120deg, #f6d465 0%, #fda085 100%);
        color: white;
        font-size: 20px;
        font-weight: 700;
        padding: .5rem;
    }
`;




const RecipeHeader = ({currentRecipe}) => {
  return (
      <StyledRecipeHeader bgImg={currentRecipe.recipe.image}>
          <p>{(currentRecipe.recipe.label.length > 35) ? `${currentRecipe.recipe.label.slice(0,34)}...` : currentRecipe.recipe.label}</p>
      </StyledRecipeHeader>
  );
};

export default RecipeHeader;
