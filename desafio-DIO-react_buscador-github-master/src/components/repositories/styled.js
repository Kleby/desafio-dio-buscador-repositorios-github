import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    margin-top: 1em;  
`;

export const WrapperTabList = styled(TabList)`
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    position: relative; top: .2px;
    user-selected: none;
    border-radius: .3em;
    padding: .5em;
    margin: .6em .2em 1em .2em;
    background-color: #ddd;
    color: #00F;
    border: .1em solid #BBB ;
    user-selected: none;    
    cursor: pointer;
    &:hover{
        background-color: #123DF4;
        color: #fff;
        border-radius: 1.2em;
    }
    &:focus{
        outline: none;
    }
    &.is-selected{
        border-radius: 1.2em;  
        background-color: #38E984;
        border-top-left-radius: 1em;
        border-top-right-radius: 1em;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        margin-bottom: 0;
        border: .1em solid #000;
        border-bottom: .1em solid transparent;        
        color: #000;
    }

`;


export const WrapperTabPanel = styled(TabPanel)`
    width:100% ;    
    h4,a{
        margin-left: 1.5em;
        padding: .1em;    
    }
}
    h2{
        display:flex;
        align-items: center;
    }
    h2::before{
        content: '  ';
        background-color: #049641;
        border-radius: 50%;
        margin: .3em .2em  .3em .2em;
        width: .5em;
        height: .5em;
    }
    &.is-selected{
        background-color: #38E984;
        padding: .2em;
        margin-left: .2em;  
        border: 1px solid #000;    
    }
    
    `;
    

    export const WrapperList = styled.div`
    padding-bottom: 1em;
        div{
            border: 1px outset #ddd;
            display:flex;
            flex-shrink: 1;
            flex-direction: column;
            width: 16em;
            margin: 1em;  
            padding: .2em;  
            box-shadow: 5px 10px 8px #666666;
            background-color: #22d212 ;
        }
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
    `;
