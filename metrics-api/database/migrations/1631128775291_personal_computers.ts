import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PersonalComputers extends BaseSchema {
  protected tableName = 'personal_computers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('motherboard')
      table.string('gpu')
      table.string('ram')
      table.string('core')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE') // delete post when user is deleted
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
