import { Filters, TableItem } from '../models'

export const getFilteredData = (filters: Filters, data: TableItem[]): TableItem[] => {
    const activeFilters = Object.entries(filters)
        .filter(group => !!group[1])
        .map(group => group[1])
    if (!activeFilters.length) return data

    return data
        .filter((item) => filters.type ? activeFilters.includes(item.type) : true)
        .filter((item) => filters.status ? activeFilters.includes(item.status) : true)
}