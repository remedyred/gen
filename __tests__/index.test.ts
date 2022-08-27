import {main} from '../src'

describe('index', () => {
	it('should not throw', () => {
		expect(async () => {
			await main()
		}).not.toThrow()
	})
})
