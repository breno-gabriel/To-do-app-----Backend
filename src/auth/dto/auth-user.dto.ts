import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

export class AuthUser {

    @ApiProperty({
        example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJiZ21sQGNpbi51ZnBlLmJyIiwibm9tZSI6IkJyZW5vIEdhYnJpZWwgZGUgTWVsbyBMaW1hIiwiaWF0IjoxNzI5NzI3MTg0LCJleHAiOjE3Mjk3MzA3ODR9.JhJQH9p0png1VSUMtIWKPHvePiUxZFyyG4Gii3-Pqtg", 
        description: "Token de acesso para o sistema."
    })
    access_token: string;

    @ApiProperty({
        type: User,
        description: "Informações do usuário autenticado."
    })
    user: User;

}
