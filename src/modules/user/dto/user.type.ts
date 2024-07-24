import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserType {
  @Field({ description: 'id' })
  id?: string;

  @Field({ description: '姓名' })
  name?: string;

  @Field({ description: '描述' })
  desc: string;

  @Field({ description: '帳號' })
  account: string;
}