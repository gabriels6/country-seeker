import styled from 'styled-components';

export const Main = styled.div`

    width: 40%;
    height: 100%;
    box-sizing:border-box;
    padding-left:42px;
    border: solid 15px ${(props) => props.theme.colors.primary};
    
    margin-top:auto;
    margin-bottom:auto;
    margin-left:50px;

    box-sizing:border-box;

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        margin-left:0px;
        width:100%;
    }
`;