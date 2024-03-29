import styled, { css } from 'styled-components';

const ButtonStyles = css`    
    background-color: black;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
    }
`

const GoogleSignInStyles = css`
    background-color: #4285f4;
    color: aliceblue;
    outline: none;
    border: none;
    &:hover {
        background-color: #357ae8;
    }
`

function getButtonStyles(props){
    // console.log('Button Props:', props);
    if(props.isGoogle) return GoogleSignInStyles;
    if(props.inverted) return InvertedButtonStyles;
    return ButtonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
`
