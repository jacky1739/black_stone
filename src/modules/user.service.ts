import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial ,Repository } from 'typeorm';
import { User } from "./user/models/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>, // 創建User表的專屬操作工具庫
  ) {}

  // 新增一個用戶
  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity);  // 調用Repository的api
    console.log('res', res);
    if (res && res.raw.affectedRows > 0) {
      return true;
    }
    return false;
  } 

  // 刪除一個用戶
  async del(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id);
    console.log(res);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // 更新一個用戶
  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.update(id, entity);
    console.log(res);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // 查詢一個用戶
  async find(id: string): Promise<User> {
    const res = await this.UserRepository.findOne({
      where: {
        id,
      }
    });
    console.log(res);
    return res;
  }
}