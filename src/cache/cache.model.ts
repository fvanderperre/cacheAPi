export interface Cache {
    maxEntries: number
    data: Record<string, Entry>
}

export interface Entry {
    value: any
    ttl: number
}

export interface EntryDTO {
    key: string
    value: any
}
