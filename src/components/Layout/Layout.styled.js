import styled from "styled-components";
import {  NavLink } from 'react-router-dom';

export const ContainerLayout = styled.div`
background-color: red;
`
export const CustomNavLink = styled(NavLink)`
display:  inline-block;
 background-color: white;
 text-align: center;
 min-width: 100px;
 height: 30px;
 padding:10px 0 ;
 border-radius: 30%;
    &:not(:last-child){
    margin-right: 15px;
 }
 &.active {
    background-color: orange;
  }`