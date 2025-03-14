import { HttpModule } from '@nestjs/axios'
import { CacheModule } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module';
import ApplicationModule from './application/application.module'
import BankModule from './bank/bank.module'
import BranchModule from './branch/branch.module'
import PrismaModule from './prisma/prisma.module'

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    HttpModule,
    BankModule,
    BranchModule,
    ApplicationModule,
    AuthModule,
  ],
})
export default class AppModule {}
