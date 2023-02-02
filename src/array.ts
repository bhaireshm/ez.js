interface Array<T> {
  remove(index: number): Array<T>;
}

Array.prototype.remove = function (index: number) {
  return this.splice(index, 1);
};
