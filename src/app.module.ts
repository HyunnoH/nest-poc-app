import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { NoticesModule } from './notices/notices.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule, BoardsModule, NoticesModule],
})
export class AppModule {}
