export interface NavItem<T> {
    path: T,
    name: T,
    exact?:boolean
}