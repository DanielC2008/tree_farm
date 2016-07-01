(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function Plant() {
	this.height = null;
}

Plant.prototype.increaseHeight = function(growth){
	this.height = this.height + growth;
};

Plant.prototype.decreaseHeight = function(shrink){
  this.height = this.height - shrink;
};

function Tree() {
	this.branches = null;
}
Tree.prototype = new Plant();

Tree.prototype.grow = function(grow){
	this.increaseHeight(grow);
	this.branches = this.branches + 1;
};

Tree.prototype.trim = function(trim){
	this.decreaseHeight(trim);
	this.branches = this.branches - 1;
};

// Create a PearTree instance of Tree. var PearTree = new Tree();
// Pear tree is now 23cm tall and has 2 branches
let PearTree = new Tree();
PearTree.height = 23;
PearTree.branches =2;

// Create an OakTree instance of Tree.
// Oak tree is now 57cm tall and has 4 branches
let OakTree = new Tree();
OakTree.height = 57;
OakTree.branches = 4;



// Also output the current height of each tree and how many branches it has to the DOM.
let counter = 0;
let pearCheck =  PearTree.height + 10;
let oakCheck =  OakTree.height + 10;
function growTrees() {
	$("#output").append(`<div>Pear tree is now ${PearTree.height}cm tall, and has ${PearTree.branches} branches</div>`);
	$("#output").append(`<div>Oak tree is now ${OakTree.height}cm tall, and has ${OakTree.branches} branches</div>`);
	$("#output").append(`<div>    </div>`);
	// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
	PearTree.increaseHeight(3);
	OakTree.increaseHeight(5);
	counter++;
	// Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
	if (counter % 10 == 0) {
		PearTree.trim(6);
		OakTree.trim(10);
	}
// Each time the height of a tree increases by 10, the value of branch should increase by one.
	if (PearTree.height > pearCheck) {
		PearTree.branches = PearTree.branches + 1;
		pearCheck = pearCheck + 10;
	}
	if (OakTree.height > oakCheck) {
		OakTree.branches = OakTree.branches + 1;
		oakCheck = oakCheck + 10;
	}
// Stop growing the trees after they have grown 30 times.
	if (counter === 30) {
		window.clearInterval(intervalID);
	}	
}

let intervalID = window.setInterval(growTrees, 1000);



},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
