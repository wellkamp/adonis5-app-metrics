import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class PersonalComputer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public motherboard: string

  @column()
  public ram: string

  @column()
  public gpu: string

  @column()
  public core: string

  @belongsTo(() => User)
  author: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
