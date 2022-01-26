import React,{useContext} from 'react';
import styled from 'styled-components';
import { RecipeContext, DeviceWidthContext, SideBarContext, BreakPointContext } from '../../Context';
import Directions from './Directions';
import Ingredients from './Ingredients';
import RecipeHeader from './RecipeHeader';

const StyledRecipeCard = styled.div`
    width: ${props => props.width}%;
    height: 95%;
    background-color:white;
    overflow: auto;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.075);

    section{
      background-color: rgb(245,245,245);
      width:100%;
      height:20%;
      display: flex;
      align-items:center;
      justify-content: center;

      button{
        border:none;
        outline:none;
        background-image:linear-gradient(120deg, #f6d465 0%, #fda085 100%);
        border-radius: 5rem;
        text-align:center;
        color: white;
        font-size: 12px;
        padding: .5rem 1rem;
        cursor:pointer;
        
        &:hover i{
          margin-right:10px;
        }
        
        i{
          color: white;
          font-size: 12px;
          margin-right: 5px;
          transition: all 0.3s ease-in-out;
        }
      }
    }
    
    
    
    &::-webkit-scrollbar{
        width:0;
    }
`;

const RecipeCard = () => {

  const [currentRecipe, setCurrentRecipe] = useContext(RecipeContext)
  const [deviceWidth, setDeviceWidth] = useContext(DeviceWidthContext)
  const [sideBar, setSideBar] = useContext(SideBarContext)
  const breakPoint = useContext(BreakPointContext)


  if(!currentRecipe) return null

  return (
    <StyledRecipeCard width={(deviceWidth < breakPoint) ? '100' : '60'}>
      {(deviceWidth < breakPoint) && <section><button onClick={e => setSideBar(!sideBar)}><i className='fas fa-arrow-left'></i> Go Back</button></section>}
      <RecipeHeader currentRecipe={currentRecipe}/>
      <Ingredients currentRecipe={currentRecipe} />
      <Directions currentRecipe={currentRecipe} />
    </StyledRecipeCard>
  );
};

export default RecipeCard;
