const enhancer = require('./enhancer.js');
// test away!


// describe('func', () => {
    it('Reapair = 100', () => {
        const item = {
            name: 'car',
            durability: 50
        }
    
        expect(enhancer.repair(item.durability)).toBe(100)
    })
// })


