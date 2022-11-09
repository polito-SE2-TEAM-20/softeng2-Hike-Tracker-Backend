import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { PointType } from '../enums';

@Entity('points')
export class Point {
  @PrimaryGeneratedColumn('increment')
  id!: string;

  @Column({
    type: 'smallint',
    nullable: false,
    default: PointType.point,
  })
  type!: PointType;

  @Column({
    type: 'geography',
    nullable: false,
  })
  position!: any;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  address!: string | null;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  name!: string | null;

  /**
   * For TypeORM metadata only
   * @deprecated
   */
  __joiner?: any;
}
