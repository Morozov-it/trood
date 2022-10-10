import { Filters } from '../models'

export const getFilteredData = <T extends { type: string, status: string },>(filters: Filters, data?: T[]): T[] => {
    if (!data) return [] as T[]

    const activeFilters = Object.entries(filters)
        .filter(group => !!group[1])
        .map(group => group[1])
    if (!activeFilters.length) return data

    return data
        .filter((item) => filters.type ? activeFilters.includes(item.type) : true)
        .filter((item) => filters.status ? activeFilters.includes(item.status) : true)
}