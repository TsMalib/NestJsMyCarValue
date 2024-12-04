import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { Reports } from '../entities/reports.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reports])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
