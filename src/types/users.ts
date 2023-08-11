export enum Gender {
    male = 'MALE',
    female = 'FEMALE',
    other = 'OTHER',
}

export interface User {
    uid: string // no update
    email: string // no update
    fullname: string
    bio: string
    phone: string
    dialCode: string
    age: number
    image: string // no update
    verified: boolean // no update
    gender: Gender
}
