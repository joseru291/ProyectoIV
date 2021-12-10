import { Field, Float, InputType, Int } from "@nestjs/graphql";
import { IsDecimal, IsEmail, IsInt, IsString } from "class-validator";

export class CreateEmployee {
  @IsInt()
  employeeId: number;

  @IsString()
  firstName?: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  phoneNumber?: string;

  @IsString()
  hireDate: string;

  @IsInt()
  jobId: number;

  @IsDecimal()
  salary?: number;

  @IsDecimal()
  commissionPct?: number;

  @IsDecimal()
  managerId?: number;

  @IsInt()
  departmentId?: number;
}