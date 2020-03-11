var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
   MakeDancer.call(this, top, left, timeBetweenSteps);

   this.$node = $('<span class="blinkyDancer"></span>');
  
   this.setPosition(top, left);
};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype)

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;


MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this)
  this.$node.toggle();
};