import { IsString, Min } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {

    @ApiProperty({
        example: "Breno Gabriel de Melo Lima", 
        description: "Nome do usuário a ser cadastrado."
    })
    @IsString()
    nome: string 

    @ApiProperty({
        example: "breno2019@gmail.com", 
        description: "endereço de email do usuário a ser cadastrado."
    })
    @Min(5)    
    @IsString()
    email: string
    
    @ApiProperty({
        example: "12345678", 
        description: "Senha do usuário a ser cadastrado."
    })
    @IsString()
    @Min(3)
    senha: string 

}
