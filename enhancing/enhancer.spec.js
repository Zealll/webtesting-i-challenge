const enhancer = require('./enhancer.js');
// test away!


// describe('func', () => {
    it('Reapair = 100', () => {
        const item = {
            name: 'car',
            durability: 50,
            enhancement: 17
        }
    
        expect(enhancer.repair(item.durability)).toBe(100)
    })
// })

// describe('success', () => {
    it('success', () => {
        const item = {
            name: 'car',
            durability: 90,
            enhancement: 16
        }
    
        expect(enhancer.succeed(item.enhancement)).toBe(17)
        expect(enhancer.succeed(item.enhancement + 10)).toBe(20)
    })
// })


it('fail', () => {
    const item = {
        name: 'car',
        durability: 90,
        enhancement: 10
    }

    expect(enhancer.fail(item)).toBe(85)
})



