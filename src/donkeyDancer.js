var DonkeyDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
 
    this.$node = $('<span class="donkeyDancer"></span>');
   
    this.setPosition(top, left);
 };
 DonkeyDancer.prototype = Object.create(MakeDancer.prototype)
 
 DonkeyDancer.prototype.constructor = DonkeyDancer;
 
 
 MakeBlinkyDancer.prototype.step = function() {
   MakeDancer.prototype.step.call(this)
   this.$node.toggle();
 };