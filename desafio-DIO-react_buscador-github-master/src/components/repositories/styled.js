import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    widdth: 100%;
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
    user-selected: none;
    border-radius: .3em;
    padding: .5em;
    margin: .6em .2em;
    background-color: #ddd;
    color: #00F;
    border: .1em solid #BBB ;
    user-selected: none;    
    cursor: pointer;
    &:hover{
        background-color: #123DF4;
        color: #fff;
        border-radius: 1.2em;
        transition: border-radius .1s;
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
    padding: 0 8px;
    &.is-selected{
        background-color: #38E984;
        padding: .2em;
        margin-left: .2em
    }
    `;
