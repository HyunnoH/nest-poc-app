import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NoticeModule } from './notice/notice.module';
import { BoardModule } from './board/board.module';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { NoticesModule } from './notices/notices.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, NoticeModule, BoardModule, UsersModule, BoardsModule, NoticesModule],
})
export class AppModule {}
