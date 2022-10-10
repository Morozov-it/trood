import React from 'react'
import { Sort } from '../models'

export const getSortedArrows = (sort: Sort | null, name: string): React.ReactNode => {
    switch (sort) {
        case name:
            return <span><span style={{ color: 'red' }}> &#8595;</span><>&#8593;</></span>
        case `-${name}`:
            return <span><span> &#8595;</span><span style={{ color: 'red' }}>&#8593;</span></span>
        default:
            return <span><span> &#8595;</span><span>&#8593;</span></span>
    }
}