import React from 'react'

import { ListOfCategories } from '../components/list-of-categories'
import { ListOfPhotocards } from '../components/list-of-photocards'

export const Home = ({ categoryId }) => (
  <>
    <ListOfCategories />
    <ListOfPhotocards categoryId={categoryId} />
  </>
)
