import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        console.log('Log From Test')
        await new Promise(r => setTimeout(r, 8000));
    })
})

