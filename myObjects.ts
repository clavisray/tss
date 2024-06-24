// const user = {
//     name: "name",
//     email: "email@mail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){

// }

// createUser({name: "mateusz", isPaid: false})

// function createCourse():{name: string, price: number}{
//     return {name: "react.js", price: 399}
// }

type User = {
    name: string;
    surname: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User{
    return {name: "", surname: "", email: "", isActive: true}
}

createUser({name: "", surname: "", email: "", isActive: true})


export {}
// git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"