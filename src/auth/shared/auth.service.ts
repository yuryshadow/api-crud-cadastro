import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/shared/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    async validateUser(usuario: string, senha: string): Promise<any> {
    const user = await this.usersService.findOne(usuario);
    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }
 }
