describe("the specification for plant growing", function() {

// There should be a Plant function defined.
it("should have a plant function", function(){
	expect(Plant).toBeDefined();
});
// There should be a Tree function defined.
it("should have a tree function", function(){
	expect(Tree).toBeDefined();
});	
// There should be a function named increaseHeight on the prototype of Plant.
it("should have an increase height method", function() {
	expect(Plant.prototype.increaseHeight).toBeDefined();
});
// There should be a function named decreaseHeight on the prototype of Plant.
it("should have an decrease height method", function() {
	expect(Plant.prototype.decreaseHeight).toBeDefined();
});
// There should be a function named grow on the prototype of Tree.
it("should have an decrease height method", function() {
	expect(Tree.prototype.grow).toBeDefined();
});
// There should be a function named trim on the prototype of Tree.
it("should have an decrease height method", function() {
	expect(Tree.prototype.trim).toBeDefined();
});
// There should be a height property on Plant.
it("should have a height property on Plant", function() {
	let Planty = new Plant;
	expect(Planty.height).toBeNull();
})
// When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))
it("should reduce height by x passed to trim", function() {
	let PearTree = new Tree();
	PearTree.height = 12;
	PearTree.trim(2);
	expect(PearTree.height).toBe(10);;
});
// When you invoke the trim method on Tree, the values of the branches property should be decreased by one.
it("should reduce branches by 1", function() {
	let PearTree = new Tree();
	PearTree.branches = 5;
	PearTree.trim(2);
	expect(PearTree.branches).toBe(4);
});
// When you invoke the grow method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. PearTree.grow(2))
it("should increase height by x passed to grow", function() {
	let PearTree = new Tree();
	PearTree.height = 12;
	PearTree.grow(2);
	expect(PearTree.height).toBe(14)
});


	
})



