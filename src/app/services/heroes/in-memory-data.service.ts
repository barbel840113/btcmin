import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
      { id: 21, name: 'Dynama' },
      { id: 22, name: 'Dr IQ' },
      { id: 23, name: 'Magma' },
      { id: 24, name: 'Sivak' }
    ];

    let users = [
      { username: 'test', password: 'Password' }
    ];

    let token = {
          "access_token": "fdkljaldkfjlajsfdlksd",
          "refresh_token": "43",
          "id_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3NfdG9rZW4iOiJmZGtsamFsZGtmamxhanNmZGxrc2QiLCJyZWZyZXNoX3Rva2VuIjoiNDMiLCJpZF90b2tlbiI6IjEyNjU0ZnNkZnNhZGZzYWRmc2QiLCJleHBpcmVzX2luIjoiMjAxNzAyMDIiLCJ0b2tlbl90eXBlIjoiand0IiwiZXhwaXJhdGlvbl9kYXRlIjoiMjAxODAyMDIiLCJqdGkiOiJkY2ZkODIyZC01Y2IzLTQ1OTgtODM5OS1kZWU4NGQzNDkzODYiLCJpYXQiOjE0OTI0MzI0NzQsImV4cCI6MTQ5MjQzNjA3NH0.E9TgiDhfkp-_2RM9ply7iEFijL57LAmz_wbve3kOvqY",
          "expires_in": "20170202",
          "token_type": "jwt",
          "expiration_date": "20180202",
          "jti": "dcfd822d-5cb3-4598-8399-dee84d349386",
          "iat": 1492432474,
          "exp": 1492436074
        };
      
    


    return { heroes, users, token };
  }

}
