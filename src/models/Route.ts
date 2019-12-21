import { ComponentType } from 'react'
export interface Routes {
    path: string,
    exact: boolean,
    component: ComponentType
}