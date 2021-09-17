import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'UsersController.login')

Route.group(() => {
  Route.get('/', 'UsersController.index')
  Route.get('/me', 'UsersController.me')
  Route.post('/register', 'UsersController.store')
  Route.post('/update/:id', 'UsersController.update')
}).prefix('/v1').middleware('auth')

