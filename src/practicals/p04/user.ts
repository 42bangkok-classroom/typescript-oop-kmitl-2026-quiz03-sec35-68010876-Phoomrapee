export class User {
    public username: string
    private password: string
    private LOGIN_ATTEMPTS: number = 0

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    public login(password: string): boolean {
        this.LOGIN_ATTEMPTS++

        if (this.validatePassword(password)) {
            return true
        }

        return false
    }

    private validatePassword(password: string): boolean {
        return this.password === password
    }

    public getLoginAttempts(): number {
        return this.LOGIN_ATTEMPTS
    }
}
