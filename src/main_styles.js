import styled from 'styled-components';

export const Main = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:3%;
    height:95%;
    width:100%;
    box-sizing:border-box;

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        flex-direction:column;
        
    }
  `;