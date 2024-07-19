import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "src/modules/user.service";
import { UserInput } from "../dto/user-input.type";
import { UserType } from "../dto/user.type";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean)
  async create(@Args('params') params: UserInput): Promise<boolean> {
    return await this.userService.create(params)
  }
  
  @Query(() => Boolean)
  async find(@Args('id') id: string): Promise<UserType> {
    return await this.userService.find(id);
  }
}