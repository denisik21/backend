import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { BooksModule } from 'src/books/books.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env'
  }),
  BooksModule,
  AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
