import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee/entities/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "oracle",
      host: "localhost",
      port: 1521,
      sid: 'orcl',
      username: "hr",
      password: "Hr",
      database: "orcl",
      entities: [Employee],
      synchronize: false,
      logging: 'all'
    }),
    EmployeeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}