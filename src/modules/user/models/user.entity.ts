import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({
    comment: '名子',
    default: '',
  })
  @IsNotEmpty()
  name: string;

  @Column({
    comment: '描述訊息',
    default: '',
  })
  desc: string;

  @Column({
    comment: '手機號碼',
    nullable: true,
  })
  tel: string;

  @Column({
    comment: '密碼',
    nullable: true,
  })
  password: string;

  @Column({
    comment: '帳號',
    nullable: true,
  })
  account: string;
}