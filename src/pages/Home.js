import React from 'react'
import { Helmet } from 'react-helmet'

import { ListOfCategories } from '../components/list-of-categories'
import { ListOfPhotocards } from '../components/list-of-photocards'

export const Home = ({ categoryId }) => (
  <>
    <Helmet>
      <title>Petgram | Pet's photos</title>
      <meta name='description' content={`Here you can find amazin pet's photos`} />
    </Helmet>
    <ListOfCategories />
    <ListOfPhotocards categoryId={categoryId} />
  </>
)
