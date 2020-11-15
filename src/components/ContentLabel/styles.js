import styled from 'styled-components';

export const Main = styled.p`
    font-family:'${(props) => props.theme.fonts.regular}';
    font-size:${(props) => props.theme.font_sizes.text}; 
    color:${(props) => props.theme.colors.primary};
`;