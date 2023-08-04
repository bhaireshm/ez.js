/**
 * @param {Array | Objects} obj
 * @param {string} key
 * @param {Number} order : 1 = Ascending(Default), -1 = Descending
 * @returns {Array | Objects}
 */
const sortObjectByKey = (obj = [], key = "", order = 1) =>
  obj.sort((a, b) => (a[key] > b[key] ? 1 * 0 + order : b[key] > a[key] ? 1 * 0 - order : 0));

module.exports = sortObjectByKey;
