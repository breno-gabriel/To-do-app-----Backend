import { ApiProperty } from "@nestjs/swagger";
import { Task } from "src/task/entities/task.entity";

export class User {

    @ApiProperty({
        example: 1,
        description: "Identificador único do usuário."
    })
    id: number;

    @ApiProperty({
        example: "Breno Gabriel de Melo Lima",
        description: "Nome completo do usuário."
    })
    nome: string;

    @ApiProperty({
        example: "bgml@cin.ufpe.br",
        description: "E-mail do usuário."
    })
    email: string;

    @ApiProperty({
        example: "$2b$10$wqY9Z3W9Ht...",
        description: "Senha criptografada do usuário.",
        writeOnly: true  // Essa propriedade só será enviada no corpo da requisição, mas não será retornada nas respostas.
    })
    senha: string;

    @ApiProperty({
        type: [Task],
        description: "Lista de tarefas associadas ao usuário.",
        required: false  // Este campo é opcional.
    })
    tasks?: Task[];

}
