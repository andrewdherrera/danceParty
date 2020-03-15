var GalagaDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
 
    this.$node = $('<img class="galagaDancer" src="http://pixelartmaker.com/art/30441119b464b87.png" onclick="GalagaDancer.prototype.laser()"></img>');
   
    this.setPosition(top, left);
 };
 GalagaDancer.prototype = Object.create(MakeDancer.prototype)
 
 GalagaDancer.prototype.constructor = GalagaDancer;
 
 
 GalagaDancer.prototype.step = function() {
   MakeDancer.prototype.step.call(this)
//    this.$node.toggle();

GalagaDancer.prototype.laser = function(){
    // $('GalagaDancer').click()

    var laserBullet = $('<img src="https://lh3.googleusercontent.com/proxy/jG_TK-F8O3XeUtpn2Kk4ICSUeGgwgcxPum083Hw008hldyEtYL_QNJk3bOsTo0Zy9Dar6gfui-VBvQS_U2ExbZcA6AEkTSJs" class="laser"/>')
    var laserBullet2 = $('<img src="https://lh3.googleusercontent.com/proxy/jG_TK-F8O3XeUtpn2Kk4ICSUeGgwgcxPum083Hw008hldyEtYL_QNJk3bOsTo0Zy9Dar6gfui-VBvQS_U2ExbZcA6AEkTSJs" class="laser2"/>')

    $('body').append(laserBullet, laserBullet2);
}
 };