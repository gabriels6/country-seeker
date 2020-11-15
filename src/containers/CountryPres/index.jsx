import React from 'react';
import {Main} from './styles';
import {MainTitle,Flag,Input} from '../../components';
import api from '../../resources/api';

const CountryPres = ({Country,setCountry}) =>{


    let countryName = '';

    async function handleChange({target,key}){
        countryName = target.value;
        
        if(key === 'Enter'){
            let Country = await api.get(countryName);

            setCountry(Country.data[0]);
            //console.log(await api.get(countryName));
        }
    }



    return(
        <Main>
            <MainTitle>Country Seeker<Input  onKeyDown = {handleChange}/><Flag flag = {Country.flag}/></MainTitle>
        </Main>
    )
}

export default CountryPres;