var GalagaDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
 
    this.$node = $('<span class="galagaDancer"></span>');
   
    this.setPosition(top, left);
 };
 GalagaDancer.prototype = Object.create(MakeDancer.prototype)
 
 GalagaDancer.prototype.constructor = GalagaDancer;
 
 
 GalagaDancer.prototype.step = function() {
   MakeDancer.prototype.step.call(this)
   this.$node.toggle();
 };