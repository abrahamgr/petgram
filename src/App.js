import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategories } from './components/list-of-categories'
import { ListOfPhotocards } from './components/list-of-photocards'
import { Logo } from './components/logo'
import { PhotocardWithQuery } from './container/PhotocardWithQuery'

export const App = () => {
  const urlParams = new URLSearchParams(location.search)

  const detailId = urlParams.get('detailId')

  return <>
    <a href='/'>      
      <Logo />
    </a>
    <GlobalStyle />
    <ListOfCategories />
    {
      detailId ? 
      <PhotocardWithQuery detailId={detailId} /> :
      <ListOfPhotocards />
    }
  </>
}
