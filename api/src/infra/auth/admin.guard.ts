// import type { Request } from 'express'
// import {
//   type CanActivate,
//   type ExecutionContext,
//   Inject,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common'
// import { UsersRepository } from '../repository/prisma/users.repository'

// @Injectable()
// export class AdminGuard implements CanActivate {
//   constructor(
//     @Inject(UsersRepository)
//     private readonly usersRepository: UsersRepository,
//   ) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const { user } = context.switchToHttp().getRequest<Request>()

//     if (!user) {
//       throw new UnauthorizedException()
//     }

//     const userFromDatabase = await this.usersRepository.getByEmail(user.email)

//     return true
//   }
// }
