export interface NavItem<T> {
    path: T,
    name: T,
    exact?:boolean
}

export interface NavTab<T> {
    tab: T,
    name: T
}