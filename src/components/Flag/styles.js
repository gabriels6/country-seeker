import styled from 'styled-components';

export const Main = styled.div`
    width:100%;
    height:200px;
    background:url('${(props) => props.flag}');
    background-size:100% 100%;
    border-radius:5px;
    transition: all .5s;
    :hover{
        box-shadow: 0px 0px 20px ${(props) => props.theme.colors.primary};
        transition: all .5s;
    }

    
`;