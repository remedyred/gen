import {Out} from '@snickbit/out'

export const $out = new Out('gen')

export interface Config {
	source: string
	output: string
}

export const defaultConfig: Config = {
	source: 'src',
	output: 'dist'
}
