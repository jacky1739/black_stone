import { Module, ConsoleLogger } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./user.service";
import { User } from "./user/models/user.entity";
import { UserResolver } from "./user/models/user.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 透過這個語法把User引入進來
  providers: [ConsoleLogger, UserService, UserResolver],  // providers裡要加UserService
  exports: [UserService],  // 記得exports出去 app.controller.ts裡才能調用到UserService
})

export class UserModule{}