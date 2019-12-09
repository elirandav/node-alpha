
var rewire = require('rewire');


var app = rewire('../services/services.js');
const sumUsers = app.__get__('sumUsers');

test('users' , () => {

    expect(sumUsers('Moo', 'Maa')).toBe('Moo Maa')
});
