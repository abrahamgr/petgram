import React from "react";

import { GlobalStyle } from "./GlobalStyles";
import { ListOfCategories } from './components/list-of-categories'
import { ListOfPhotocards } from "./components/list-of-photocards";
import { Logo } from "./components/logo";

export const App = () => (
    <>
        <Logo />
        <GlobalStyle />
        <ListOfCategories />
        <ListOfPhotocards />
    </>
)