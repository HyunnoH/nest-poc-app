import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NoticeModule } from './notice/notice.module';
import { BoardModule } from './board/board.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, NoticeModule, BoardModule],
})
export class AppModule {}
