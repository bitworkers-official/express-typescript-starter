import { app } from './app';
import * as request from 'supertest';

function done(error: Error | undefined) {
  if (error) {
    throw error
  }
  console.log('done')
}

request(app)
  .get('/')
  .expect(/Hello from express/i, done)