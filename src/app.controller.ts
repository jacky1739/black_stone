import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './modules/user.service';
import { User } from './modules/user/models/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.create({
      name: '水滴管理員',
      desc: '管理員',
      tel: '8800888',
      password: '123456',
      account: 'admin',
    });
  }

  @Get('/del')
  async del(): Promise<boolean> {
    return await this.userService.del('096a3429-483c-4931-b8ad-1d9d1a728f57');
  }

  @Get('/update')
  async update(): Promise<boolean> {
    return await this.userService.update(
      '5d0b9d68-4ff4-42b2-87d6-39075e0ef9a6',
      {
        name: '水滴管理員1111',
      }
    );
  }

  @Get('/find')
  async find(): Promise<User> {
    return await this.userService.find('5d0b9d68-4ff4-42b2-87d6-39075e0ef9a6');
  }
}
