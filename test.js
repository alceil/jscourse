var Car = function(maxspeed,driver)
{
    this.maxspeed=maxspeed,
    this.driver=driver,
    this.drive=function(speed,time){console.log(speed*time);},
    this.test=function(){console.log("the driver name is"+this.driver)};
};
var mycar= new Car(50,"kindi");
var mycar1= new Car(70,"kindininja");
mycar.drive(30,50);
mycar.test();

