import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTaskDto {

    @ApiProperty({
        example: "Estudar para a prova de matemática", 
        description: "Nome ou título da tarefa."
    })
    @IsString()
    @MinLength(3, { message: 'O nome da tarefa deve ter pelo menos 3 caracteres.' })
    @MaxLength(50, { message: 'O nome da tarefa não pode ter mais de 50 caracteres.' })
    nome: string;

    @ApiProperty({
        example: "Revisar os conceitos de cálculo e álgebra.", 
        description: "Descrição detalhada da tarefa."
    })
    @IsString()
    @MaxLength(140, { message: 'A descrição não pode ter mais de 140 caracteres.' })
    descricao: string;

    @ApiProperty({
        example: "alta", 
        description: "Prioridade da tarefa. Pode ser 'baixa', 'média' ou 'alta'."
    })
    @IsString()
    prioridade: string;

    @ApiProperty({
        example: 1, 
        description: "Identificador do usuário que está criando a tarefa. Deve ser um número inteiro."
    })
    @IsInt({ message: 'O ID do usuário deve ser um número inteiro.' })
    user_id: number;
}
