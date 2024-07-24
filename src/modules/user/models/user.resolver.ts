import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "src/modules/user.service";
import { UserInput } from "../dto/user-input.type";
import { UserType } from "../dto/user.type";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean, { description: '新增用戶' })
  async create(@Args('params') params: UserInput): Promise<boolean> {
    return await this.userService.create(params)
  }
  
  @Query(() => UserType, { description: '使用id查詢用戶' }) // 指定輸出類型
  async find(@Args('id') id: string): Promise<UserType> {
    return await this.userService.find(id);
  }  

  @Query(() => Boolean, { description: '更新用戶' }) // 指定輸出類型
  async update(
    @Args('id') id: string, 
    @Args('params') params: UserInput
  ): Promise<boolean> {
    return await this.userService.update(id, params);
  }

  @Query(() => Boolean, { description: '刪除一個' }) // 指定輸出類型
  async del(
    @Args('id') id: string,
  ): Promise<boolean> {
    return await this.userService.del(id);
  }
}