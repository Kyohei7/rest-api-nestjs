import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable({})
export class AuthService {
  signUp() {
    return { msg: 'Sign UP' };
  }
  signIn() {
    return { msg: 'Sign In' };
  }
}
