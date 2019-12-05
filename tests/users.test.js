const test = require('ava');

const request = require('supertest');
const bodyParser = require('body-parser');
const express = require('express');


test('users', () => {
    request(app)
        .get('/users')
        .expect(200);
});
