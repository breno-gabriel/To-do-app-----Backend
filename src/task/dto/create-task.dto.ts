import { IsEnum, IsString, Max, Min } from "class-validator"

export class CreateTaskDto {

    @IsString()
    @Min(5)
    @Max(50)
    nome:string

    @Max(140)
    @IsString()
    descricao:string 

    @IsString()
    prioridade: string

}
