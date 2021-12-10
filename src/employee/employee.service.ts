import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployee } from './dto/create-employee.dto';
import { UpdateEmployee } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>) { }

  findAll() {
    return this.employeeRepository.find();
  }

  findOne(id: number) {
    return this.employeeRepository.findOne(id);
  }

  create(input: CreateEmployee) {
    const employeeEntity = this.employeeRepository.create(input);
    return this.employeeRepository.save(employeeEntity);
  }

  async delete(id: number) {
    const employee = await this.employeeRepository.findOne(id);
    await this.employeeRepository.remove(employee);
    employee.employeeId = id;
    return employee;
  }

  async update(id: number, input: UpdateEmployee) {
    const employee = await this.findOne(id);
    Object.assign(employee, input)
    return this.employeeRepository.save(employee);
  }
}