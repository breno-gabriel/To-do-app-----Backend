import { ApiProperty } from "@nestjs/swagger";

export class Task {

    @ApiProperty({
        example: 1,
        description: "Identificador único da tarefa."
    })
    id: number;

    @ApiProperty({
        example: "Estudar para a prova",
        description: "Nome ou título da tarefa."
    })
    nome: string;

    @ApiProperty({
        example: "Estudar os tópicos de algoritmos e estrutura de dados.",
        description: "Descrição detalhada da tarefa."
    })
    descricao: string;

    @ApiProperty({
        example: false,
        description: "Indica se a tarefa foi finalizada."
    })
    finalizada: boolean;

    @ApiProperty({
        example: "2024-10-31T23:59:59.999Z", // Formato ISO 8601
        description: "Data e hora em que a tarefa deve ser finalizada."
    })
    data_termino: Date;

    @ApiProperty({
        example: "alta", // Pode ser "baixa", "media", "alta"
        description: "Prioridade da tarefa."
    })
    prioridade: string;
}
