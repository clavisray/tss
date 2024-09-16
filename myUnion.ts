let wynik: number | string = 33

wynik = 54

wynik = '53'

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let mateusz: User | Admin = {name: "mateusz", id: 240}

mateusz = {username: "clavis", id: 240}

function getDbId(id: number | string){
    // kod
    console.log(`DB id is: ${id}`);
}

getDbId(3)
getDbId('3')

//arays
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (number | string)[] = [1, 2, 3, "4"]
const data4: (number | string | boolean)[] = [1, 2, 3, "4", true]

