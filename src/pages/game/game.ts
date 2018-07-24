import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { Platform } from 'ionic-angular';
import { GameDonePage } from '../game-done/game-done';

declare var Phaser: any;
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  public startGame2Flag = false;
  public startGame3Flag = false;
  public startGame4Flag = false;
  public startGameDone = false;
  public incorrect = false;
  public game: any;
  public sprite;
  public tunnel2;
  public tunnel3;
  public tunnel5;
  public tunnel4;

  constructor(public navCtrl: NavController, public screenOrientation: ScreenOrientation, public deviceMotion: DeviceMotion, public platform: Platform) {
    this.platform.ready().then(() => {
      // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY)
      this.game1(this.deviceMotion);
    });
  }
  // START GAME
  game1(deviceMotion) {
    var self = this;
    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example',
      {
        preload: preload,
        create: create,
        update: update
      });

    function preload() {
        //LOAD IMAGES
        this.game.load.image('phaser', 'assets/circle.png');
        this.game.load.image('2', 'assets/imgs/2.png');
        this.game.load.image('3', 'assets/imgs/3.png');
        this.game.load.image('4', 'assets/imgs/4.png');
        this.game.load.image('5', 'assets/imgs/5.png');
      }

    function update() {
      const options = {
        frequency: 200
      };

      deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
        if (acceleration.y > 2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(-200, 0);
          //sprite.body.velocity.x = -200;
        } else if (acceleration.y < -2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(200, 0);
          //sprite.body.velocity.x = 200;
        }
        else if (acceleration.x > 2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(0, -200);
          //sprite.body.velocity.y = -200;
        } else if (acceleration.x < -2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(0, 200);
          //sprite.body.velocity.y = 200;
        }
      })

      // check for collisions
      if (this.game.physics.arcade.overlap(self.sprite, this.tunnel2, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel3, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel4, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel5, null, null, this)) {
        this.game.paused = true;
        self.startGame2Flag = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      }
    }

    function create(){
      // enable arcade physics
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      // adds background color
      this.game.stage.backgroundColor = '#fff';

      // adds ball sprite to the game
      self.sprite = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'phaser');

      // enable physics on the sprite
      this.game.physics.arcade.enable(self.sprite);

      // turn on wall bounce
      self.sprite.body.collideWorldBounds = true;

      //  This sets the image bounce energy for the horizontal 
      //  and vertical vectors. "1" is 100% energy return
      self.sprite.body.bounce.set(1);

      //  This gets it moving
      self.sprite.body.velocity.setTo(0, 0);

      // manipulate the hiehgt and width of our sprite
      self.sprite.height = 25;
      self.sprite.width = 25;

      this.tunnel2 = this.game.add.sprite(0, window.innerHeight / 2 - 28, '2');
      this.game.physics.arcade.enable(this.tunnel2);
      this.tunnel2.height = 75;
      this.tunnel2.width = 75;

      this.tunnel3 = this.game.add.sprite(window.innerWidth - 75, window.innerHeight / 2 - 28, '3');
      this.game.physics.arcade.enable(this.tunnel3);
      this.tunnel3.height = 75;
      this.tunnel3.width = 75;

      this.tunnel4 = this.game.add.sprite(window.innerWidth / 2 - 28, window.innerHeight - 75, '4');
      this.game.physics.arcade.enable(this.tunnel4);
      this.tunnel4.height = 75;
      this.tunnel4.width = 75;

      this.tunnel5 = this.game.add.sprite(window.innerWidth / 2 - 28, 0, '5');
      this.game.physics.arcade.enable(this.tunnel5);
      this.tunnel5.height = 75;
      this.tunnel5.width = 75;

      var style = { font: "32px Arial", align: "center" };

      var text = this.game.add.text(window.innerWidth / 2 - 45, window.innerHeight / 2 + 45, "5x = 25", style);
      this.game.world.bringToTop(text);
    }
  }

  // START GAME
  game2(deviceMotion) {
    var self = this;
    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example',
      {
        preload: preload,
        create: create,
        update: update
      });

    function preload() {
        //LOAD IMAGES
        this.game.load.image('phaser', 'assets/circle.png');
        this.game.load.image('2', 'assets/imgs/13.png');
        this.game.load.image('3', 'assets/imgs/11.png');
        this.game.load.image('4', 'assets/imgs/12.png');
        this.game.load.image('5', 'assets/imgs/14.png');
      }

    function update() {
      const options = {
        frequency: 200
      };

      deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
        if (acceleration.y > 2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(-200, 0);
          //sprite.body.velocity.x = -200;
        } else if (acceleration.y < -2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(200, 0);
          //sprite.body.velocity.x = 200;
        }
        else if (acceleration.x > 2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(0, -200);
          //sprite.body.velocity.y = -200;
        } else if (acceleration.x < -2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(0, 200);
          //sprite.body.velocity.y = 200;
        }
      })

      // check for collisions
      if (this.game.physics.arcade.overlap(self.sprite, this.tunnel2, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel5, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel4, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel3, null, null, this)) {
        this.game.paused = true;
        self.startGame3Flag = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      }
    }

    function create(){
      // enable arcade physics
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      // adds background color
      this.game.stage.backgroundColor = '#fff';

      // adds ball sprite to the game
      self.sprite = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'phaser');

      // enable physics on the sprite
      this.game.physics.arcade.enable(self.sprite);

      // turn on wall bounce
      self.sprite.body.collideWorldBounds = true;

      //  This sets the image bounce energy for the horizontal 
      //  and vertical vectors. "1" is 100% energy return
      self.sprite.body.bounce.set(1);

      //  This gets it moving
      self.sprite.body.velocity.setTo(0, 0);

      // manipulate the hiehgt and width of our sprite
      self.sprite.height = 25;
      self.sprite.width = 25;

      this.tunnel2 = this.game.add.sprite(0, window.innerHeight / 2 - 28, '2');
      this.game.physics.arcade.enable(this.tunnel2);
      this.tunnel2.height = 75;
      this.tunnel2.width = 75;

      this.tunnel3 = this.game.add.sprite(window.innerWidth - 75, window.innerHeight / 2 - 28, '3');
      this.game.physics.arcade.enable(this.tunnel3);
      this.tunnel3.height = 75;
      this.tunnel3.width = 75;

      this.tunnel4 = this.game.add.sprite(window.innerWidth / 2 - 28, window.innerHeight - 75, '4');
      this.game.physics.arcade.enable(this.tunnel4);
      this.tunnel4.height = 75;
      this.tunnel4.width = 75;

      this.tunnel5 = this.game.add.sprite(window.innerWidth / 2 - 28, 0, '5');
      this.game.physics.arcade.enable(this.tunnel5);
      this.tunnel5.height = 75;
      this.tunnel5.width = 75;

      var style = { font: "32px Arial", align: "center" };

      var text = this.game.add.text(window.innerWidth / 2 - 45, window.innerHeight / 2 + 45, "1/2 + 1/3", style);
      this.game.world.bringToTop(text);
    }
  }

  // START GAME
  game3(deviceMotion) {
    var self = this;
    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example',
      {
        preload: preload,
        create: create,
        update: update
      });

    function preload() {
        //LOAD IMAGES
        this.game.load.image('phaser', 'assets/circle.png');
        this.game.load.image('2', 'assets/imgs/10.png');
        this.game.load.image('3', 'assets/imgs/9.png');
        this.game.load.image('4', 'assets/imgs/8.png');
        this.game.load.image('5', 'assets/imgs/7.png');
      }

    function update() {
      const options = {
        frequency: 200
      };

      deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
        if (acceleration.y > 2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(-200, 0);
          //sprite.body.velocity.x = -200;
        } else if (acceleration.y < -2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(200, 0);
          //sprite.body.velocity.x = 200;
        }
        else if (acceleration.x > 2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(0, -200);
          //sprite.body.velocity.y = -200;
        } else if (acceleration.x < -2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(0, 200);
          //sprite.body.velocity.y = 200;
        }
      })

      // check for collisions
      if (this.game.physics.arcade.overlap(self.sprite, this.tunnel2, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel3, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel5, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel4, null, null, this)) {
        this.game.paused = true;
        self.startGame4Flag = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      }
    }

    function create(){
      // enable arcade physics
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      // adds background color
      this.game.stage.backgroundColor = '#fff';

      // adds ball sprite to the game
      self.sprite = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'phaser');

      // enable physics on the sprite
      this.game.physics.arcade.enable(self.sprite);

      // turn on wall bounce
      self.sprite.body.collideWorldBounds = true;

      //  This sets the image bounce energy for the horizontal 
      //  and vertical vectors. "1" is 100% energy return
      self.sprite.body.bounce.set(1);

      //  This gets it moving
      self.sprite.body.velocity.setTo(0, 0);

      // manipulate the hiehgt and width of our sprite
      self.sprite.height = 25;
      self.sprite.width = 25;

      this.tunnel2 = this.game.add.sprite(0, window.innerHeight / 2 - 28, '2');
      this.game.physics.arcade.enable(this.tunnel2);
      this.tunnel2.height = 75;
      this.tunnel2.width = 75;

      this.tunnel3 = this.game.add.sprite(window.innerWidth - 75, window.innerHeight / 2 - 28, '3');
      this.game.physics.arcade.enable(this.tunnel3);
      this.tunnel3.height = 75;
      this.tunnel3.width = 75;

      this.tunnel4 = this.game.add.sprite(window.innerWidth / 2 - 28, window.innerHeight - 75, '4');
      this.game.physics.arcade.enable(this.tunnel4);
      this.tunnel4.height = 75;
      this.tunnel4.width = 75;

      this.tunnel5 = this.game.add.sprite(window.innerWidth / 2 - 28, 0, '5');
      this.game.physics.arcade.enable(this.tunnel5);
      this.tunnel5.height = 75;
      this.tunnel5.width = 75;

      var style = { font: "32px Arial", align: "center" };

      var text = this.game.add.text(window.innerWidth / 2 - 45, window.innerHeight / 2 + 45, "12 * 11", style);
      this.game.world.bringToTop(text);
    }
  }

  // START GAME
  game4(deviceMotion) {
    var self = this;
    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example',
      {
        preload: preload,
        create: create,
        update: update
      });

    function preload() {
        //LOAD IMAGES
        this.game.load.image('phaser', 'assets/circle.png');
        this.game.load.image('2', 'assets/imgs/17.png');
        this.game.load.image('3', 'assets/imgs/16.png');
        this.game.load.image('4', 'assets/imgs/15.png');
        this.game.load.image('5', 'assets/imgs/18.png');
      }

    function update() {
      const options = {
        frequency: 200
      };

      deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
        if (acceleration.y > 2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(-200, 0);
          //sprite.body.velocity.x = -200;
        } else if (acceleration.y < -2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(200, 0);
          //sprite.body.velocity.x = 200;
        }
        else if (acceleration.x > 2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(0, -200);
          //sprite.body.velocity.y = -200;
        } else if (acceleration.x < -2) {
          //  This gets it moving
          self.sprite.body.velocity.setTo(0, 200);
          //sprite.body.velocity.y = 200;
        }
      })

      // check for collisions
      if (this.game.physics.arcade.overlap(self.sprite, this.tunnel5, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel3, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel4, null, null, this)) {
        this.game.paused = true;
        self.incorrect = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      } else if (this.game.physics.arcade.overlap(self.sprite, this.tunnel2, null, null, this)) {
        this.game.paused = true;
        self.startGameDone = true;
        self.sprite.x = window.innerWidth / 2;
        self.sprite.y = window.innerHeight / 2;
      }
    }

    function create(){
      // enable arcade physics
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      // adds background color
      this.game.stage.backgroundColor = '#fff';

      // adds ball sprite to the game
      self.sprite = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'phaser');

      // enable physics on the sprite
      this.game.physics.arcade.enable(self.sprite);

      // turn on wall bounce
      self.sprite.body.collideWorldBounds = true;

      //  This sets the image bounce energy for the horizontal 
      //  and vertical vectors. "1" is 100% energy return
      self.sprite.body.bounce.set(1);

      //  This gets it moving
      self.sprite.body.velocity.setTo(0, 0);

      // manipulate the hiehgt and width of our sprite
      self.sprite.height = 25;
      self.sprite.width = 25;

      this.tunnel2 = this.game.add.sprite(0, window.innerHeight / 2 - 28, '2');
      this.game.physics.arcade.enable(this.tunnel2);
      this.tunnel2.height = 75;
      this.tunnel2.width = 75;

      this.tunnel3 = this.game.add.sprite(window.innerWidth - 75, window.innerHeight / 2 - 28, '3');
      this.game.physics.arcade.enable(this.tunnel3);
      this.tunnel3.height = 75;
      this.tunnel3.width = 75;

      this.tunnel4 = this.game.add.sprite(window.innerWidth / 2 - 28, window.innerHeight - 75, '4');
      this.game.physics.arcade.enable(this.tunnel4);
      this.tunnel4.height = 75;
      this.tunnel4.width = 75;

      this.tunnel5 = this.game.add.sprite(window.innerWidth / 2 - 28, 0, '5');
      this.game.physics.arcade.enable(this.tunnel5);
      this.tunnel5.height = 75;
      this.tunnel5.width = 75;

      var style = { font: "32px Arial", align: "center" };

      var text = this.game.add.text(window.innerWidth / 2 - 45, window.innerHeight / 2 + 45, "20x = 80", style);
      this.game.world.bringToTop(text);
    }
  }

  restart() {
    console.log('restart');
    this.game.paused = false;
    this.sprite.body.velocity.setTo(0, 0);
    this.incorrect = false;
  }

  startGame2() {
    this.game.destroy();
    this.incorrect = false;
    this.startGame2Flag = false;
    this.game2(this.deviceMotion);
  }

  startGame3() {
    this.game.destroy();
    this.incorrect = false;
    this.startGame3Flag = false;
    this.game3(this.deviceMotion);
  }

  startGame4() {
    this.game.destroy();
    this.incorrect = false;
    this.startGame4Flag = false;
    this.game4(this.deviceMotion);
  }

  gameDone(){
    this.game.destroy();
    this.incorrect = false;
    this.startGameDone = false;
    this.navCtrl.push(GameDonePage)
  }
}
