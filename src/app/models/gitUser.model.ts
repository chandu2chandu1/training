interface GitUser {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string
}

export class GitUserModel{
    constructor(private gitUserModel:GitUser) {}
}