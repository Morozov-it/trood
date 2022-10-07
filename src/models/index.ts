export interface BarItem {
    name: string
    color: string
    value: number
}

export type Status = 'red' | 'green' | 'yellow'
export type Type = 'TRST' | 'THT' | 'THC'
export type Sort = 'name' | 'type' | 'conditions' | 'volume' | '-name' | '-type' | '-conditions' | '-volume'

export interface Filters {
    type: Type | null
    status: Status | null
}

export interface TableItem {
    id: number
    name: string
    status: Status
    type: Type
    conditions: string
    volume: number
    roi: number
    free: number
    hedge: number
}