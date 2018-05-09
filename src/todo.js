const packageJson = require("./../package.json");
import React from 'react'

/**
 * Created by oskmkr on 2018-04-09.
 */
class Todo {
	constructor() {

		console.log('hello react todo....!!!!!1');
	}

	getVersion() {
		return packageJson.version;
	}
}

export default Todo;
