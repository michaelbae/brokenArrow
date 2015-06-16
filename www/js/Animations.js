
var data = {
	images: ["images/BOMB_ENEMY.png"],
	frames: {width:38, height:28, count:2, regX: 19, regY: 14},
	animations: {run:[0,1,true,3]}
};
var spriteSheet = new createjs.SpriteSheet(data);
var BOMB_ENEMY_ANIMATION = new createjs.BitmapAnimation(spriteSheet);


data = {
	images: ["images/SHIELD_ENEMY.png"],
	frames: {width:55, height:40, count:2, regX: 27.5, regY: 20},
	animations: {run:[0,1,true,5]}
};
spriteSheet = new createjs.SpriteSheet(data);
var SHIELD_ENEMY_ANIMATION = new createjs.BitmapAnimation(spriteSheet);


data = {
	images: ["images/NINJA.png"],
	frames: {width:50, height:30, count:2, regX: 25, regY: 15},
	animations: {run:[0,1,true,5]}
};
spriteSheet = new createjs.SpriteSheet(data);
var NINJA_ANIMATION = new createjs.BitmapAnimation(spriteSheet);