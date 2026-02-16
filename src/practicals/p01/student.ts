export class Student {
    firstname: string
    lastname: string

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname
        this.lastname = lastname
    }
}

const student = new Student('John', 'Doe')

console.log(student.firstname + ' ' + student.lastname)