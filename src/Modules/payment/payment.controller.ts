import { Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';

/**
 * This is a payment controller
 */
@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  /**
   * This is addPayment method
   * @param email
   * @returns
   */
  @Post('Payment/:email')
  async addPayment(@Param('email') email: string) {
    return await this.paymentService.makePayment(email);
  }
}
