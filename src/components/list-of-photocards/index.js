import React from 'react'

import { PhotoCard } from '../photocard'

export const ListOfPhotocards = () => (
    <ul>
        {[1,2,3].map(id => <PhotoCard key={id} />)}
    </ul>
)