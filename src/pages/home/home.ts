// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { GamePage } from '../game/game';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {
//   pushPage;
//   constructor(public navCtrl: NavController) {
//     this.pushPage=GamePage;
//   }

// }
import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { NavController } from 'ionic-angular';


import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class HomePage {
  /**
  * 'plug into' DOM canvas element using @ViewChild
  */
  @ViewChild('canvas') canvasEl: ElementRef;
  @ViewChild('img5') img5: ElementRef;
  


  /**
    * Reference Canvas object
    */
  public _CANVAS: any;
  public ctx: any;



  /**
    * Reference  the context for the Canvas element
    */
  private _CONTEXT: any;

  public posX = 25;
  public posY = 25;
  constructor(public navCtrl: NavController,  public screenOrientation: ScreenOrientation, private deviceMotion: DeviceMotion) {
    // set to landscape
    console.log(this.screenOrientation.type);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY)

    const options = {
      frequency: 500
    };
    // // Get the device current acceleration
    // this.deviceMotion.getCurrentAcceleration().then(
    //   (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
    //   (error: any) => console.log(error)
    // );

    // // Watch device acceleration
    // var subscription = this.deviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {

    //   if(acceleration.y > 2){
    //     //postive and not still
    //     console.log('positive');
    //     if(this.posX >= 50){
    //       this.posX -= 50;
    //     }

    //   }else if (acceleration.y < -2){ 
    //     //negative and not still
    //     console.log('negative')
    //     if(this.posX <= (window.innerWidth-50)){
    //       this.posX += 50;
    //     }
    //   }


    //   // if(acceleration.x > 2){
    //   //   //postive and not still
    //   //   console.log('positive');
    //   //   if(this.posY >= 50){
    //   //     this.posY -= 50;
    //   //   }
    //   // }else if (acceleration.x < -2){ 
    //   //   //negative and not still
    //   //   console.log('negative')
    //   //   if(this.posY <= (200-50)){
    //   //     this.posY += 50;
    //   //   }
    //   // }
    // });
  }

  ionViewDidLoad() {
    console.log('canvas');
    var _CANVAS = this.canvasEl.nativeElement;
    var ctx = _CANVAS.getContext("2d");

    function resizeCanvas() {
      _CANVAS.width = window.innerWidth;
      _CANVAS.height = window.innerHeight;

      /**
       * Your drawings need to be inside this function otherwise they will be reset when 
       * you resize the browser window and the canvas goes will be cleared.
       */
      draw();
    }

    var particles = [];
    for (var i = 0; i < 1; i++) {
      //This will add 50 particles to the array with random positions
      particles.push(new create_particle());
    }

    //Lets create a function which will help us to create multiple particles
    function create_particle() {
      //Random position on the canvas
      this.x = Math.random() * 500;
      this.y = Math.random() * 500;
      //Random velocity
      this.vx = 0.5;
      this.vy = 1;
      //Random colors
      var r = 255
      var g = 0;
      var b = 0;
      this.color = "rgba(" + r + ", " + g + ", " + b + ", 0.5)";

      //Random size
      this.radius = 15;
    }

    var draw = () => {

      ctx.fillStyle = "#F5FFED";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      //Lets draw particles from the array now
      for (var t = 0; t < particles.length; t++) {
        var p = particles[t];

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
        ctx.fill();

        const options = {
          frequency: 500
        };
        var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {

          if (acceleration.y > 2) {
            //postive and not still
            
            p.x -= 7;


          } else if (acceleration.y < -2) {
            //negative and not still
            
            p.x += 7;
          }

          else if (acceleration.x > 2) {
            //postive and not still
            
            p.y -= 7;

          } else if (acceleration.x < -2) {
            //negative and not still
            
            p.y += 7;
          }

          console.log(p.y);


        });


        if ((p.x + p.radius) > window.innerWidth) {

          p.x = window.innerWidth - p.radius;
          console.log('reset');
        } else if ((p.x - p.radius) < 0) {

          p.x = p.radius;

        }

        if ((p.y + p.radius) > window.innerHeight) {

          p.y = window.innerHeight - p.radius;
          console.log('reset');
        } else if ((p.y - p.radius) < 0) {
          p.y = p.radius;
        }

      }

      // draw tubes homie


      const img5 = document.getElementById("5");
      ctx.drawImage(img5, (window.innerWidth/2 -50), -10, 100, 100);
      
      const img4 = document.getElementById("4");
      ctx.drawImage(img4, (window.innerWidth/2 -50), window.innerHeight-100, 100, 100);

      const img3 = document.getElementById("3");
      ctx.drawImage(img3, (window.innerWidth - 80), (window.innerHeight/2 -50), 100, 100);

      const img2 = document.getElementById("2");
      ctx.drawImage(img2, -10, (window.innerHeight/2 -50), 100, 100);
    }

    resizeCanvas();
    setInterval(draw, 63);

  }
}
