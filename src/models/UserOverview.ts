import { ReactNode } from 'react'
export interface IUserOverview {
    id?: number;
    userAvatar?: string
    name?: string,
    addedDay?: string | Date,
    addedTime?: string | Date,
    children?: ReactNode,
    email?: string,
    phoneNumber?: string | number,
    instagram?: string

}