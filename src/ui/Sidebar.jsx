import React from "react";
import styled from "styled-components";
import MainNav from "./MainNav.jsx";
import Logo from "./Logo.jsx";
import log from "eslint-plugin-react/lib/util/log.js";
import useCabins from "../features/cabins/useCabins.js";


const StyledSidebar = styled.aside`

  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;



`

const Sidebar = () => {


    const data=useCabins();

    console.log("DATA OF SAHAN ",data.cabins)

    return (


        <StyledSidebar>
            <Logo/>
            <MainNav/>
        </StyledSidebar>
    )
}

export default Sidebar