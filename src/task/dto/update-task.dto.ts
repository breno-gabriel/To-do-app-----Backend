import { CreateTaskDto } from './create-task.dto';
import { IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @ApiProperty({
        example: false, 
        description: "Valor booleano que determina se a tarefa está finalizada."
    })
    @IsBoolean()
    finalizada: boolean 

}
