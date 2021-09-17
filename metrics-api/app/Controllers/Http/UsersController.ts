import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StoreValidator from 'App/Validators/User/StoreValidator'
import User from 'App/Models/User'

export default class UsersController {
  public async store(ctx: HttpContextContract) {
    const { email, password } = await ctx.request.validate(StoreValidator)

    const user = await User.create({
      email,
      password,
    })

    return user
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const user = await User.findOrFail(params.id)

    user.merge(data)
    await user.save()

    return user
  }

  public async login({ request, response, auth }) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async me({ auth }) {
    const user = await User.findOrFail(auth.user.id)

    return user
  }
}
