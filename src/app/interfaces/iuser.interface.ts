export interface IUser {

    userId?: number, //optional field
    fname: string,
    lname: string,
    email: string,
    dob: string,
    userName: string
    password: string,
    createdDate?: string,//optional field marked with ?
    modifiedDate?: string,//optional field marked with ?
    lastAccessed?: string//optional field marked with ?

}
