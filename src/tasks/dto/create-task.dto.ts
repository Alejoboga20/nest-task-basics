import { IsNotEmpty } from 'class-validator';

/* 
DTO: Allows us to share data shapes between layers
*/
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
