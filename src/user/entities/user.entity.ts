import { Task } from "src/task/entities/task.entity"

export class User {

    id: number 
    nome: string 
    email: string
    senha: string 
    tasks?: Task[]

}
