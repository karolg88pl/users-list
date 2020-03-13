import { checkSearchText } from './utils'

describe('utils unit tests', () => {
    it('test checkSearchText function', () => {
        const testName = 'Karol Gucwa'
        const searchText1 = 'cw'
        const searchText2 = 'kk'
        
        expect(checkSearchText(testName, searchText1)).toBeTruthy()
        expect(checkSearchText(testName, searchText2)).toBeFalsy()
    })
})