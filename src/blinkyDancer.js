var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
   MakeDancer.call(this, top, left, timeBetweenSteps);

   this.$node = $('<img class="blinkyDancer" src="https://arcadedanceparty.s3.us-east-2.amazonaws.com/UFO+(1).png"></img>');
  
   this.setPosition(top, left);
};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype)

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;


MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this)
  // this.$node.toggle();
};