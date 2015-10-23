#!/usr/bin/env node
'use strict';

var ugrid = require('ugrid');

var uc = new ugrid.Context();

function reducer(a, b) {
	return a = a + b;
}

var res = uc.parallelize([['hello', 1], ['world', 2], ['hello', 3]])
	.reduceByKey(reducer, 0)
	.collect();

res.on('data', console.log);
res.on('end', uc.end);		
