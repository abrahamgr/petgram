import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
    border-radius: 8px;
    box-shadow: 0 0 08px rbga(0, 0, 0, .3);
    display: inline-block;
    margin: 1%;
    overflow: hidden;
    width: 30%;
    position: relative;
    &:after {
        content: '';
        display: block;
        padding-bottom: 100px;
    }
`
export const Grid = styled.div`
    padding-top: 32px;
`

export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
`
