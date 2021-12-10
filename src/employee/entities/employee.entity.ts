import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("EMPLOYEES")
export class Employee {

  @PrimaryColumn()
  @Column({name: "EMPLOYEE_ID", type:"number", nullable: false, primary: true })
  employeeId: number;

  @Column({ name: "FIRST_NAME", type: "varchar2", length: 20, nullable: true })
  firstName?: string;

  @Column({ name: "LAST_NAME", type: "varchar2", length: 25, nullable: true })
  lastName?: string;
  
  @Column({ name: "EMAIL", type: "varchar2", length: 25, nullable: false })
  email: string;
  
  @Column({ name: "PHONE_NUMBER", type: "varchar2", length: 20, nullable: true })
  phoneNumber?: string;

  @Column({ name: "HIRE_DATE", type: "date", nullable: true })
  hireDate: string;

  @Column({ name: "JOB_ID", type: "varchar2", nullable: false })
  jobId: number;

  @Column({ name: "SALARY", type: "number", nullable: false, precision: 2 })
  salary?: number;

  @Column({ name: "COMMISSION_PCT", type: "number", nullable: true, precision: 2 })
  commissionPct?: number;

  @Column({ name: "MANAGER_ID", type: "number", nullable: false })
  managerId?: number;

  @Column({ name: "DEPARTMENT_ID", type: "number", nullable: false })
  departmentId?: number;
}