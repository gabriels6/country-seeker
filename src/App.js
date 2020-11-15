import './App.css';
import { useState } from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {CountryInfo,CountryPres} from './containers';
import {Main} from './main_styles';

function App() {


  

  const [Country,setCountry] = useState(
    {
    name: 'United States of America',
    borders: ['MEX','CAN'],
    population: '323947000',
    currencies:[{
      code: 'USD',
      name: 'United States dollar',
      symbol: '$'
    }],
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
    capital: 'Washington, D.C.'
  });

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    
      <ThemeProvider theme={theme}>
        <Main>
          <CountryPres Country={Country} setCountry={setCountry}/>
          <CountryInfo Country={Country}/>  
        </Main>    
      </ThemeProvider>
    
  );
}

export default App;
