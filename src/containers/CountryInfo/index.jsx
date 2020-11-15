import React from 'react';
import {Main} from './styles';
import {Title,ContentLabel} from '../../components'


const CountryInfo = ({Country}) => {

    return(
        <Main>
            <Title>Country Name</Title>
            <ContentLabel>{Country.name}</ContentLabel>
            <Title>Capital</Title>
            <ContentLabel>{Country.capital}</ContentLabel>
            <Title>Borders</Title>
            <ContentLabel>{
            typeof Country.borders != undefined && Country.borders.join(" | ")}</ContentLabel>
            <Title>Population</Title>
            <ContentLabel>{Country.population}</ContentLabel>
            <Title>Currency</Title>
            <ContentLabel>{Country.currencies[0].code + " , "+ Country.currencies[0].name + " , " + Country.currencies[0].symbol }</ContentLabel>
        </Main>
    )
}

export default CountryInfo;