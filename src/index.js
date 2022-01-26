import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { APIProvider, BreakPointProvider, DeviceWidthProvider, ErrMessageProvider, RecipeProvider, RecipesProvider, SideBarProvider, SpinnerProvider } from './Context';

ReactDOM.render(
  <RecipesProvider>
    <APIProvider>
      <RecipeProvider>
        <DeviceWidthProvider>
          <SideBarProvider>
            <BreakPointProvider>
              <SpinnerProvider>
                <ErrMessageProvider>
                  <App />
                </ErrMessageProvider>
              </SpinnerProvider>
            </BreakPointProvider>
          </SideBarProvider>
        </DeviceWidthProvider>
      </RecipeProvider>
    </APIProvider>
  </RecipesProvider>,
  document.getElementById('root')
);