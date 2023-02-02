interface Date {
  addHours(hours: number): Date;

  isInstanceOf(d: any): boolean;
}

Date.prototype.addHours = function (hrs) {
  this.setHours(hrs + this.getHours());
  return this;
};

Date.prototype.isInstanceOf = function (d: any) {
  return d instanceof Date;
};
