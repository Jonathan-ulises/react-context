export interface InitStateUser {
    users: User[],
    selectedUser: User|null
}

export interface UsrContext {
    users?: User[],
    selectedUser?: User|null,
    getUsers?: () => {},
    getProfile?: (id: number) => {}
}

export interface User {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}
