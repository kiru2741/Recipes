import { useContext } from 'react';
import './App.css';
import RecipeCard from './components/Content/RecipeCard';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BreakPointContext, DeviceWidthContext, SideBarContext } from './Context';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 90vh;
  width: 90vw;
  padding: 0 40px;
  background-color: rgba(255,255,255,0.85);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  @media (max-width:${props => props.breakPoint}px){
    padding: 0 10px;
  }
`;

function App() {

  const [sideBar] = useContext(SideBarContext)
  const [deviceWidth, setDeviceWidth] = useContext(DeviceWidthContext)
  const breakPoint = useContext(BreakPointContext)

  window.addEventListener("resize", (e)=>{
    setDeviceWidth(window.innerWidth)
  })

  return (
    <StyledContainer breakPoint={breakPoint}>
      <Navbar/>
      <div className="hero-section">
        {(deviceWidth < breakPoint) ? (sideBar && <Sidebar/>) : <Sidebar/>}
        {(deviceWidth < breakPoint) ? ((!sideBar) && <RecipeCard/>) : <RecipeCard/>}
      </div>
    </StyledContainer>
  );
}

export default App;
