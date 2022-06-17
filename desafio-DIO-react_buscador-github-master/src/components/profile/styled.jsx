import styled from "styled-components";

export const Wrapper = styled.div `
    display:flex;
    align-items: flex-start;
`;

export const WrapperStatusCoount = styled.div `
    display:flex;
    align-items: center;
    div{
        margin: 0.4em;
        text-align: center;
    }
`;

export const WrapperUserName = styled.div `
    display: flex;
    align-items: center;
    margin-top: .5em;
    h3{
        margin-right: .3em;
    }
    a{
        font-size: 1em;
        font-weight: bold;
        letter-spacing: 1px;
        color: #2112F1;
        background-color: #EFEFEF;
        padding: 0 .2em ;
    }
`;

export const WarpperInfoUser = styled.div `
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: 12em;
    margin-left: .8em;
    h1{
        font-size: 2em;
        font-weight: bold;
    }
    h3{
        font-size: 1.2em;
        font-weight: bold;
    }
    h4{
        font-siza: 1em;
        font-weight: bold;
    }
`;

export const WarpperAvatarImg = styled.img `
    border-radius: 50%;
    width: 10em;
    border: 2px solid #000;
    margin: .5em;
`;