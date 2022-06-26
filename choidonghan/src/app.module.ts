import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserInformationModule } from './user_information/user_information.module';
import { UserStatusModule } from './user_status/user_status.module';
import { UserPaymentModule } from './user_payment/user_payment.module';
import { UserJobModule } from './user_job/user_job.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    UserInformationModule,
    UserJobModule,
    UserPaymentModule,
    UserStatusModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // include: [UserInformationModule,
      //   UserStatusModule,
      //   UserPaymentModule,
      //   UserJobModule]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
