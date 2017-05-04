'use strict';

import assert from 'assert'

import { fazzbizzbarr } from '../lib/fazz-bizz-barr';

describe('fazzbizzbarr operator function Tests', () => {
	describe('Test fazzbizzbarr(1)', () => {
		it('should to 1', () => {
			assert.equal(1,fazzbizzbarr(1));
    	});
  	});
  	describe('Test fazzbizzbarr(9)', () => {
		it('should to Fazz', () => {
			assert.equal("Fazz",fazzbizzbarr(9));
    	});
  	});
  	describe('Test fazzbizzbarr(21)', () => {
		it('should to Fazz Barr', () => {
			assert.equal("Fazz Barr",fazzbizzbarr(21));
    	});
  	});
  	describe('Test fazzbizzbarr(105)', () => {
		it('should to Fazz Bizz Barr', () => {
			assert.equal("Fazz Bizz Barr",fazzbizzbarr(105));
    	});
  	});
});