import styled from 'styled-components';

export const Main = styled.input`
    width:100%;
    border:none;
    border-bottom:solid 2px white;
    background:none;
    margin-bottom: 20px;
    padding-bottom:5px;
    font-family:${(props) => props.theme.fonts.regular};
    font-size:${(props) => props.theme.font_sizes.placeholder};
    color:#EEEEEE;

    ::placeholder{
        color:${(props) => props.theme.colors.placeholder};
    }
`;