const {test, describe}=require('node:test')
const assert=require('node:assert')

const reverse=require('../utils/for_testing').reverse

describe('reverse',()=>{
test('reverse of hello',()=>{
    const result=reverse('hello')
    assert(result==='olleh')
})

test('reverse of empty string',()=>{
    const result=reverse('')
    assert(result==='')
})
})
