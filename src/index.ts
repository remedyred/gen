#!/usr/bin/env node
import {$out, defaultConfig} from './common'
import {version} from '../package.json'
import cli from '@snickbit/node-cli'

cli()
	.name('@remedyred/gen')
	.version(version)
	.config(defaultConfig)
	.run().then(async (/* argv */) => {
		$out.info('Hello, world!')
		$out.done('Done!')
	}).catch(err => $out.fatal('Error:', err))
