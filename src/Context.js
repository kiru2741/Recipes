import React,{useState, createContext} from 'react';

//RECIPES CONTEXT
export const RecipesContext = createContext();

export const RecipesProvider = (props) => {
    
    const [recipes, setRecipes] = useState()

    return (
        <RecipesContext.Provider value={[recipes, setRecipes]}>
            {props.children}
        </RecipesContext.Provider>
    );
};

//RECIPE CONTEXT
export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
    
    const [currentRecipe, setCurrentRecipe] = useState()

    return (
        <RecipeContext.Provider value={[currentRecipe, setCurrentRecipe]}>
            {props.children}
        </RecipeContext.Provider>
    );
};

//API CONTEXT
export const APIContext = createContext()

export const APIProvider = (props) =>{
    const APIInfo = {
        ID:'60de064a',
        KEY:'912ed26a9e58a9225e92095923b2f26c',
        URL:'https://api.edamam.com/api/recipes/v2?type=public'
    }

    return(
        <APIContext.Provider value={APIInfo}>
            {props.children}
        </APIContext.Provider>
    )
};

//DEVICE WIDTH
export const DeviceWidthContext = createContext()

export const DeviceWidthProvider = (props) =>{
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)

    return(
        <DeviceWidthContext.Provider value={[deviceWidth, setDeviceWidth]}>
            {props.children}
        </DeviceWidthContext.Provider>
    )
};

//SHOW/HIDE SIDEBAR
export const SideBarContext = createContext()

export const SideBarProvider = (props) =>{
    const [sideBar, setSideBar] = useState(false)
    
    return(
        <SideBarContext.Provider value={[sideBar, setSideBar]}>
            {props.children}
        </SideBarContext.Provider>
    )
};

//BREAKPOINT MOBILE VIEW
export const BreakPointContext = createContext()

export const BreakPointProvider = (props) =>{
    const breakPoint = 960;
    
    return(
        <BreakPointContext.Provider value={breakPoint}>
            {props.children}
        </BreakPointContext.Provider>
    )
};

//SPINNER
export const SpinnerContext = createContext()

export const SpinnerProvider = (props) =>{
    const [spinner, setSpinner] = useState(false);
    
    return(
        <SpinnerContext.Provider value={[spinner, setSpinner]}>
            {props.children}
        </SpinnerContext.Provider>
    )
};

//ERR MESSAGE
export const ErrMessageContext = createContext()

export const ErrMessageProvider = (props) =>{
    const [errMessage, setErrMessage] = useState(false);
    
    return(
        <ErrMessageContext.Provider value={[errMessage, setErrMessage]}>
            {props.children}
        </ErrMessageContext.Provider>
    )
};


