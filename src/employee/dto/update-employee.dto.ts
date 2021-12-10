import { Field, Float, InputType, Int } from "@nestjs/graphql";
import { IsDecimal, IsEmail, IsInt, IsOptional, IsString } from "class-validator";

export class UpdateEmployee {
  
  @IsOptional()
  employeeId?: number;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  hireDate?: string;

  @IsInt()
  @IsOptional()
  jobId?: number;

  @IsDecimal()
  @IsOptional()
  salary?: number;

  @IsDecimal()
  @IsOptional()
  commissionPct?: number;

  @IsDecimal()
  @IsOptional()
  managerId?: number;

  @IsInt()
  @IsOptional()
  departmentId?: number;
}