import React from 'react'

import { ListOfCategories } from '../components/list-of-categories'
import { ListOfPhotocards } from '../components/list-of-photocards'
import { Layout } from '../components/layout'

const HomeComponent = ({ categoryId }) => (
  <Layout title={'Pet\'s photos'} subtitle={'Here you can find amazin pet\'s photos'}>
    <ListOfCategories />
    <ListOfPhotocards categoryId={categoryId} />
  </Layout>
)

export const Home = React.memo(HomeComponent, (prevProps, nextProps) => prevProps.categoryId === nextProps.categoryId)
