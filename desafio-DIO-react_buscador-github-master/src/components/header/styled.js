import styled from "styled-components";

export const Wrapper = styled.div`
  width:100%;
  display: flex;  
  padding: .5em;
  align-items: baseline;
  justify-content: space-between;
  button{
    width: 5em;
    padding: .5em .4em;
    text-align: center;
    border: 1px solid #555;
    border-radius: .5em;
    background-color: #0c3acf;
    margin: 0 17em 0 0;
    &:hover{
        background-color: #0c3a8f;
    }
    span{
        font-size: 16px;
        font-weight: 500;
        color: #fff;
    }
  }
  input{
    margin-right: .3em;
    width: 70%;
    padding: .5em .4em;
    border: 1px solid #aaa;
    font-weight: 500;
    &:focus{
        font-weight: 400;
        color: #555;
    }
  }
  `;
