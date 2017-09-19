const {shake, bake} = require('../app/shake');
const assert = require('assert');

describe('Shake', () => {
  it('should add correctly', () => {
    assert.ok(shake);
    assert.ok(bake);
  });
});