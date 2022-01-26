import React,{useContext} from 'react';
import styled from 'styled-components';
import { RecipeContext, SideBarContext } from '../../Context';

const StyledRecipeLink = styled.div`
    display: flex;
    align-items:center;
    justify-content: flex-start;
    width: 100%;
    padding: .5rem;
    cursor: pointer;

    div{
        margin-left: 10px;
    }

    &:hover{
        background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    }
    &:hover p{
        color: white;
    }
`;

const ThumbNail = styled.div`
    height: 40px;
    width: 40px;
    flex-shrink:0;
    border-radius: 50%;
    background-image: url(${props => props.bgImg}), linear-gradient(120deg, #f6d36560 0%, #fda08560 100%);
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
`;

const Source = styled.p`
    font-size: 10px;
    opacity: 0.75;
`;

const Label = styled.p`
    font-size: 14px;
`;

const RecipeLink = ({recipe}) => {

    const [currentRecipe, setCurrentRecipe] = useContext(RecipeContext)
    const [sideBar, setSideBar] = useContext(SideBarContext)

    function viewRecipe(recipe){
        setSideBar(!sideBar)
        setCurrentRecipe(recipe)
    }

    return (
        <StyledRecipeLink onClick={e => viewRecipe(recipe)}>
            <ThumbNail bgImg={recipe.recipe.image}/>
            <div>
                <Label>{(recipe.recipe.label.length > 35) ? `${recipe.recipe.label.slice(0,34)}...` : recipe.recipe.label}</Label>
                <Source>{recipe.recipe.source}</Source>
            </div>
        </StyledRecipeLink>
    );
};

export default RecipeLink;
