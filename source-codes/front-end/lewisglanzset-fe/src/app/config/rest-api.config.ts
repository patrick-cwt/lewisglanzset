import { Injectable } from '@angular/core';

@Injectable()
export class RestApiConfig {

  constructor() { }

  getHost(): string {
      return 'http://localhost:8080';
  }

  getApiPath(): string {
      return this.getHost() + '/lgs/api';
  }
}
