import React,{useContext} from 'react';
import styled from 'styled-components';
import { BreakPointContext, DeviceWidthContext, ErrMessageContext, RecipesContext, SpinnerContext } from '../../Context';
import ErrMessage from './ErrMessage';
import RecipeLink from './RecipeLink';

const StyledSidebar = styled.div`
    width: ${props => props.width}%;
    height: 95%;
    background-color:white;
    overflow: auto;
    position: relative;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.075);

    &::-webkit-scrollbar{
        width:0;
    }
`;

const Spinner = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

const SpinnerWrapper = styled.div`
    position:relative;
    border-radius:50%;
    height:80px;
    width:80px;
    animation: spin 1s linear infinite;

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;

const Outer = styled.div`
    height:80px;
    width:80px;
    background-image:linear-gradient(120deg, #f6d465 0%, #fda085 100%);
    
    
    &, &>div{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        border-radius:50%;
    }
`;

const Inner = styled.div`
    height:60px;
    width:60px;
    background: white;
`;

const Side = styled.div`
    height:40px;
    width:40px;
    position: absolute;
    background:white;
    top:0;
    left:0;
    z-index:1;
`;

const Sidebar = () => {

    const [recipes, setRecipes] = useContext(RecipesContext)
    const [deviceWidth, setDeviceWidth] = useContext(DeviceWidthContext)
    const breakPoint = useContext(BreakPointContext)
    const [spinner, setSpinner] = useContext(SpinnerContext)
    const [err,setErr] = useContext(ErrMessageContext)
    
    if(!recipes) return null

    return (
        <StyledSidebar width={(deviceWidth < breakPoint) ? '100' : '37.5'}>
            {
                recipes.map((recipe, index) => {
                    return <RecipeLink key={index} recipe={recipe}/>
                })
            }
            {
                spinner && <Spinner>
                    <SpinnerWrapper>
                        <Outer>
                            <Inner></Inner>
                        </Outer>
                        <Side></Side>
                    </SpinnerWrapper>
                </Spinner>
            }
            {
                err && <ErrMessage/>
            }
        </StyledSidebar>
    );
};

export default Sidebar;
