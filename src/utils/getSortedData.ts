import { Sort, TableItem } from '../models'

export const getSortedData = (sort: Sort | null, data: TableItem[]): TableItem[] => {
    switch (sort) {
        case 'name':
            return [...data].sort((a, b) => a.name.localeCompare(b.name))
        case '-name':
            return [...data].sort((a, b) => b.name.localeCompare(a.name))
        case 'type':
            return [...data].sort((a, b) => a.type.localeCompare(b.type))
        case '-type':
            return [...data].sort((a, b) => b.type.localeCompare(a.type))
        case 'volume':
            return [...data].sort((a, b) => a.volume - b.volume)
        case '-volume':
            return [...data].sort((a, b) => b.volume - a.volume)
        case 'conditions':
            return [...data].sort((a, b) => a.conditions.localeCompare(b.conditions))
        case '-conditions':
            return [...data].sort((a, b) => b.conditions.localeCompare(a.conditions))
        default:
            return data
    }
}