var DonkeyDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
 
    this.$node = $('<img class="donkeyDancer" src="https://collinpersonal.s3.us-east-2.amazonaws.com/alien.png"></img>');
   
    // this.setPosition(top, left);
 };
 DonkeyDancer.prototype = Object.create(MakeDancer.prototype)
 
 DonkeyDancer.prototype.constructor = DonkeyDancer;
 
 
 DonkeyDancer.prototype.step = function() {
   MakeDancer.prototype.step.call(this)
//    this.$node.toggle();
 };