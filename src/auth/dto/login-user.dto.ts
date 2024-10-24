import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class LoginUser {

    @ApiProperty({
        example: "breno2019@gmail.com", 
        description: "Email do usário que irá tentar logar no sistema."
    })
    @IsEmail()
    email: string 

    @ApiProperty({
        example: "12345678", 
        description: "Senha que o usuário irá utilizar para tentar logar no sistema."
    })
    @IsString()
    senha: string     

}