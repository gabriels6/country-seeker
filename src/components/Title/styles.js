import React from 'react';
import styled from 'styled-components';

export const Main = styled.p`
    font-family:'${(props) => props.theme.fonts.title}';
    font-size:${(props) => props.theme.font_sizes.title};
    color:${(props) => props.theme.colors.primary};
`;