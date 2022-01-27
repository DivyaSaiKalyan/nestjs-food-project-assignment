import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Column } from 'typeorm';

/**
 * This is a maintenance entity all maintanance related columns are avaliable here
 */
export class Maintenance {
  /**
   * generates isActive column
   */
  @Column({ default: true })
  isActive: boolean;
  /**
   *generates updatedAt column
   */
  @Column({ default: ' ' })
  updatedAt: string;
  /**
   *generates createdAt column
   */
  @Column()
  createdAt: string;
  /**
   *generates updatedTime column
   */
  @Column({ default: ' ' })
  updatedDate: string;
  /**
   * generates createTime column
   */
  @Column({ default: new Date().toLocaleString() })
  createDate: string;
}
