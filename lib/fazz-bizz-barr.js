'use strict';

export const fazzbizzbarr = k => 
	[`${k}`, "Fazz", "Bizz", "Fazz Bizz", "Barr", "Fazz Barr", "Bizz Barr", "Fazz Bizz Barr"]
	[!(k%3) + !(k%5)*2 + !(k%7)*4];

export function FazzBizzBarr(n) {
   	for (const i of Array(n).keys()) console.log(fazzbizzbarr(i + 1));
}