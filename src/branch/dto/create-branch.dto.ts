import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export default class CreateBranchDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  bankId: number
}
