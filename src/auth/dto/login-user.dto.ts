import { IsEmail, IsString } from "class-validator";

export class LoginUser {

    @IsEmail()
    email: string 

    @IsString()
    senha: string     

}