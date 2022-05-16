import React from 'react'

import { Category } from '../category'
import { List, Item } from './styles';

import db from '../../../api/db.json'

const categories = db.categories;

export const ListOfCategories = ({ }) => {
    return (
        <List>
            {categories.map((category) => <Item key={`cat_${category.id}`}>
                <Category {...category} />
            </Item>)}
        </List>
    );
}