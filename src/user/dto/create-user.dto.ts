import { IsString, Min } from "class-validator"

export class CreateUserDto {

    @IsString()
    nome: string 

    @Min(5)    
    @IsString()
    email: string
    
    @IsString()
    @Min(3)
    senha: string 

}
