/* eslint-disable spellcheck/spell-checker */
import request from 'supertest';
import jest from 'jest-mock';
import app from '../src/app.js';
import { errHandler } from '../src/middleware/errorMiddleware.js';

let mockRequest;
let mockResponse;
const nextFunction = jest.fn();
const err = new Error('testLocalHost', { stack: ' this is test ' });
const error = {
 data: {
  msg: 'testLocalHost',
  stack: err,
  response: null,
 },
};
describe('-> App Basic and first routes', () => {
 beforeEach(() => {
  mockRequest = {};
  mockResponse = {
   status: jest.fn().mockReturnThis(),
   statusCode: 500, // This line
   json: jest.fn(), // also mocking for send function
  };
 });

 test('-> Error handler when it includes statusCode', async () => {
  errHandler(err, mockRequest, mockResponse, nextFunction);
  expect(mockResponse.status).toHaveBeenCalledWith(500);
  expect(mockResponse.json).toHaveBeenCalledWith(error);
  expect(nextFunction).not.toHaveBeenCalled();
 });

 test('-> Server Api Route api/', async () => {
  const res = await request(app).get('/');
  expect(res.headers['x-application-identifier']).toBe('efarmly-test');
  expect(res.statusCode).toBe(200);
  expect(res.body).not.toBeUndefined();
  expect(res.body.status).toBe('SUCCESS');
 });

 test('-> The ping Route should give the response pong', async () => {
  const res = await request(app).get('/ping').send({
   location: 'Philadelphia',
  });
  expect(res.statusCode).toBe(200);
  expect(res.body).not.toBeUndefined();
  expect(res.body.status).toBe('SUCCESS');
  expect(res.body.data.pongDetails).toBe('This is the the pong response');
 });

 test('-> With wrong route', async () => {
  const res = await request(app).get('/pi');
  expect(res.statusCode).toBe(404);
  expect(res.body.data.message).toBe('Error');
  expect(res.body.data.err).toBe(' 🔍 Not Found -/pi');
 });
});
