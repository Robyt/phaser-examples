var BasicGame = {};

BasicGame.Boot = function (game) {

    this.a;
    this.b;

};

BasicGame.Boot.prototype = {

    init: function (a, b) {

        this.a = a;
        this.b = b;
        console.log('Boot is alive');
        console.log('A: ', this.a);
        console.log('B: ', this.b);

    },

    create: function () {

        this.stage.smoothed = false;
        console.log('Boot create');
        this.game.state.start('Preloader', true, false, this.a, this.b);

    }

};

BasicGame.Preloader = function (game) {

    this.a;
    this.b;

};

BasicGame.Preloader.prototype = {

    init: function (a, b) {

        this.a = a;
        this.b = b;
        console.log('Preloader is alive');
        console.log('A: ', this.a);
        console.log('B: ', this.b);

    },

    preload: function () {

        this.load.image('backdrop', 'assets/pics/atari_fujilogo.png');

    },

    create: function () {

        console.log('Preloader create');
        this.game.state.start('MainMenu', true, false, this.a, this.b);

    }

};

BasicGame.MainMenu = function (game) {

    this.a;
    this.b;

};

BasicGame.MainMenu.prototype = {

    init: function (a, b) {

        this.a = a;
        this.b = b;

    },

    create: function () {

        this.game.stage.backgroundColor = 0x2d2d2d;

        console.log('Main Menu is alive');
        console.log('A: ', this.a);
        console.log('B: ', this.b);
        console.log(this.stage.smoothed);

        var s = this.add.sprite(0, 0, 'backdrop');
        s.scale.set(4);

    }

};

// var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'phaser-example', null, false, false);
var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'phaser-example', null, false, true);

game.state.add('Boot', BasicGame.Boot);
game.state.add('Preloader', BasicGame.Preloader);
game.state.add('MainMenu', BasicGame.MainMenu);

game.state.start('Boot', true, false, 'hello', 'world');
