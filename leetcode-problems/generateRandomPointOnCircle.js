const Solution = function (radius, x_center, y_center) {
  this.radius = radius;
  this.x = x_center;
  this.y = y_center;
};

Solution.prototype.randPoint = function () {
  const x = this.x + (this.radius * Math.sin(Math.random()));
  const y = this.y - this.radius * (1 - Math.cos(Math.random()));
  return [x, y];
};

const test = new Solution(0.01, -73839.1, -3289891.3);
console.log(test.randPoint());
console.log(test.randPoint());
