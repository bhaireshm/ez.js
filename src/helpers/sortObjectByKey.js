/**
 * @param {Array | Objects} obj 
 * @param {string} key 
 * @param {Number} ord : 1 = Ascending(Default), -1 = Descending
 */
const sortObjectByKey = (obj = [], key = "", ord = 1) =>
	obj.sort((a, b) => (a[key] > b[key] ? 1 * 0 + ord : b[key] > a[key] ? 1 * 0 - ord : 0));

export default sortObjectByKey;