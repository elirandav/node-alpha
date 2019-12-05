const test = require('ava');
const request = require('supertest');
const bodyParser = require('body-parser');
const express = require('express');
const app = express()
    .use(bodyParser.json());

require('../routes')(app);

test('users',async () => {
    await request(app)
        .get('/users')
        .expect(200);
});
