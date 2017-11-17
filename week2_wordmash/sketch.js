var pehla = '';
var dusra = '';
var errorMessageBox;

function setup() {
  var word1 = select("#input1");
  word1.input(word1Event);

  var word2 = select("#input2");
  word2.input(word2Event);

  var errorMessageBox = select("#errorMessageBox");
  errorMessageBox.hide();
}

function draw() {

}

function word1Event() {
  var inVal = this.value();
  if(inVal.indexOf(' ') >= 0) {
    // show error message
    select("#errorMessageBox").show();
  } else {
    //console.log("Word 1 typed. " + this.value());
    pehla = this.value();
    select("#errorMessageBox").hide();
  }
}

function word2Event() {
  var inVal = this.value();
  if(inVal.indexOf(' ') >= 0) {
    // show error message
    select("#errorMessageBox").show();
  } else {
    //console.log("Word 1 typed. " + this.value());
    dusra = this.value();
    select("#errorMessageBox").hide();
  }
}

function masher() {
  var part1 = "";
  var part2 = "";

  if(pehla.indexOf('a') >=2) {
    var parts = split(pehla, "a");
    part1 = parts[0] + "a";
  } else if(pehla.indexOf('e') >=2) {
    var parts = split(pehla, "e");
    part1 = parts[0] + "e";
  } else if(pehla.indexOf('i') >=2) {
    var parts = split(pehla, "i");
    part1 = parts[0] + "i";
  } else if(pehla.indexOf('o') >=2) {
    var parts = split(pehla, "o");
    part1 = parts[0] + "e";
  } else if(pehla.indexOf('u') >=2) {
    var parts = split(pehla, "u");
    part1 = parts[0] + "u";
  }
  //console.log("Part1 : " + part1);

  if(dusra.indexOf('a') >=2) {
    var parts = split(dusra, "a");
    part2 = parts[parts.length - 1];
  } else if(dusra.indexOf('e') >=2) {
    var parts = split(dusra, "e");
    part2 = parts[parts.length - 1];
  } else if(dusra.indexOf('i') >=2) {
    var parts = split(dusra, "i");
    part2 = parts[parts.length - 1];
  } else if(dusra.indexOf('o') >=2) {
    var parts = split(dusra, "o");
    part2 = parts[parts.length - 1];
  } else if(dusra.indexOf('u') >=2) {
    var parts = split(dusra, "u");
    part2 = parts[parts.length - 1];
  }
  //console.log("Part2 : " + part2);

  var result = part1 + part2;
  select("#resultBox").html(result.toUpperCase());
}
