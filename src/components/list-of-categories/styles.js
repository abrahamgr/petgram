import styled, { css } from 'styled-components'

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    /* padding-bottom: 50px; */
    // use props instead of adding classes directly to component
    ${props => props.fixed && css`
        background: #FFF;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, .3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        /* padding-bottom: 50px; */
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;    
    `}
`

export const Item = styled.li`
    padding: 0 8px;
`
