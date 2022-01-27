import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfig } from './Common/TypeOrm/typeorm.config';
import { UserModule } from './Modules/user/user.module';
import { RestaurentModule } from './Modules/restaurent/restaurent.module';
import { CartModule } from './Modules/cart/cart.module';
import { LoggerMiddleware } from './Common/MiddleWare/logger.middleware';
import { PaymentModule } from './Modules/payment/payment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: TypeOrmConfig.host,
      port: TypeOrmConfig.port,
      username: TypeOrmConfig.username,
      password: TypeOrmConfig.password,
      database: TypeOrmConfig.database,
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule,
    RestaurentModule,
    CartModule,
    PaymentModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
