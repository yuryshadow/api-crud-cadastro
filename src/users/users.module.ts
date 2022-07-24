import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './shared/user.providers';
import { UsersService } from './shared/users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        ...userProviders,
        UsersService
    ],
    exports: [UsersService]

})
export class UsersModule {}
