
const utils = require('../libs/utils');
describe('Utils Module',() => {
    test('it should be add 2 numbers correctly', () => {
        const a = 1;
        const b = 2;
        const c = a + b;
        expect(utils.add(a,b)).toBe(3);
    })
    
  
});
