import styled from 'styled-components';

export const Main = styled.div`
    width:340px;
    display:flex;
    justify-content:center;
    align-items:center;

    @media(max-width:${(props) => props.theme.limits.screenlimit})
        width:100%;
        text-align:center;
    }
`;