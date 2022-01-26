import React,{useRef, useContext} from 'react';
import styled from 'styled-components';
import { APIContext, ErrMessageContext, RecipesContext, SideBarContext, SpinnerContext} from '../../Context';

const StyledSearchBar = styled.form`
    height: 40px;
    width:100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5rem;
    overflow: hidden;
    max-width: 400px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.075);
    
    input, button{
        border:none;
        outline: none;
        background: none;
        font-size: 14px;
    }
    input[type="text"]{
        width: 80%;
        height: 100%;
        padding: 0 1rem;
    }
    input[type="text"]::placeholder{
        font-size:12px;
        color:lightgray;
    }
    button{
        height: 100%;
        width:20%;
        text-align:center;
        border-radius: 5rem;
        color: white;
        background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
        cursor: pointer;
    }
    i{
        color: white;
    }
`;

const SearchBar = () => {

    const recipeNameRef = useRef()
    const APIInfo = useContext(APIContext)
    const [recipes, setRecipes] = useContext(RecipesContext)
    const [sideBar, setSideBar] = useContext(SideBarContext)
    const [spinner, setSpinner] = useContext(SpinnerContext)
    const [err, setErr] = useContext(ErrMessageContext)

    function handleSubmit(){
        const recipeName = recipeNameRef.current.value;
        getRecipe(recipeName);
        recipeNameRef.current.value = '';
    }

    async function getRecipe(recipeName){
        try{
            await setErr(false)
            await setSideBar(true)
            await setRecipes([])
            await setSpinner(true)
            const response = await fetch(`${APIInfo.URL}&q=${recipeName}&app_id=${APIInfo.ID}&app_key=${APIInfo.KEY}`)
            const data = await response.json()
            await setSpinner(false)
            setRecipes(data.hits)
        }catch(err){
            setSpinner(false)
            setErr(true)
        }
    }

    return (
        <StyledSearchBar onSubmit={e =>{
            e.preventDefault()
            handleSubmit()
        }}>
            <input type="text" title='Search for Recipes or Ingredients' ref={recipeNameRef} required placeholder='Search for Recipes, Ingredients ...'/>
            <button title='Search' type="submit"><i className="fas fa-search"></i></button>
        </StyledSearchBar>
    );
};

export default SearchBar;
