import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

/**
 * This is data transfer object Required property are maintain here
 */
export class LoginDto {
  /**
   * email property
   */
  @IsEmail()
  @ApiProperty()
  email: string;

  /**
   * password property
   */
  @IsString()
  @ApiProperty()
  password: string;
}
