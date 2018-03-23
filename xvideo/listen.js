let ctrl = require('./ctrl.js');
let keypress = require('keypress');
let mkl = require('../menu/menuKeyListener.js');

keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume()

process.stdin.on('keypress',(ch,key)=>{
	if(key && key.ctrl &&key.name=='c'){
		process.stdin.pause();
	}
})


let home = ctrl.homepage();
let keyword = ctrl.keypage('');
exports.kkk = keyword;
exports.homes = home;
exports.keywords = keyword;

function homeChoose(ch,key){
	switch(key.name){
		case 'up':
			home.up();
			break;
		case 'down':
			home.down();
			break;
		case 'left':
			process.stdin.removeListener('keypress',homeChoose);
			mkl.all(0);
			break;
		case 'right':
			home.right()
			break;
	}
}

function keyChoose(ch,key){
	switch(key.name){
		case 'up':
			keyword.up();
			break;
		case 'down':
			keyword.down();
			break;
		case 'left':
			process.stdin.removeListener('keypress',keyChoose);
			mkl.all(1);
			break;
		case 'right':
			keyword.right();
			break;
	}	
}

exports.hchoose = homeChoose;
exports.kchoose = keyChoose;
