import { BarItem, TableItem } from "./models"

export const barItems: BarItem[] = [
    { name: 'Sold', color: '#BD1FBE', value: 677 },
    { name: 'Got free', color: '#FC64FF', value: 23 },
    { name: 'Burned', color: '#2bf135', value: 202 },
    { name: 'Free float', color: '#d7d8d7', value: 323 },
]

const items: TableItem[] = [
    { id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20 },
    { id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0 },
    { id: 3, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0 },
    { id: 4, name: '.net', status: 'green', type: 'THC', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20 },
    { id: 5, name: 'NFT', status: 'yellow', type: 'TRST', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0 },
    { id: 6, name: 'Web3 P2P', status: 'red', type: 'THT', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0 },
]

export const tableItems = async (): Promise<TableItem[]> => items

export const tableItem = async (id: number): Promise<TableItem> => {
    const item = items.find((item) => item.id === id)

    return !!item
        ? new Promise((resolve) => resolve(item))
        : new Promise((_, reject) => reject('Project not found'))
}