var norovirus = Meteor.npmRequire('genoset-norovirus');

var dna = Meteor.require("C:\\Users\\Marmik\\Desktop\\Meteor-Hackathon\\dna.json");

//var dna=HTTP.get(Meteor.absoluteUrl("./dna.json")).data;

var data = norovirus(dna);
console.log("Data and shit     "+data.immune); // true or false 