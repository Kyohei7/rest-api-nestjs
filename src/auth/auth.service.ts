import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signUp() {
    return { msg: 'Sign UP' };
  }
  signIn() {
    return { msg: 'Sign In' };
  }
}
