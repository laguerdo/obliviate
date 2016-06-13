var color = require(__dirname + '/../lib/index');
var expect = require('chai').expect;

describe("colorIt ForeGround -  Synchronous", function(){

  it("should produce black by default", function(done){
    expect('colorify').equals(color.colorItSync('colorify'));
    done();
  });

  it("should produce black", function(done){
    expect('\x1b[30mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'fColor': 'black'}));
    done();
  });

  it("should produce red", function(done){
    expect('\x1b[31mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'fColor': 'red'}));
    done();
  });

  it("should produce green", function(done){
    expect('\x1b[32mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'fColor': 'green'}));
    done();
  });

  it("should produce yellow", function(done){
    expect('\x1b[33mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'fColor': 'yellow'}));
    done();
  });

  it("should produce blue", function(done){
    expect('\x1b[34mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'fColor': 'blue'}));
    done();
  });

  it("should produce magenta", function(done){
    expect('\x1b[35mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'fColor': 'magenta'}));
    done();
  });

  it("should produce cyan", function(done){
    expect('\x1b[36mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'fColor': 'cyan'}));
    done();
  });

  it("should produce white", function(done){
    expect('\x1b[37mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'fColor': 'white'}));
    done();
  });

});

describe("colorIt BackGround -  Synchronous", function(){

  it("should produce black by default", function(done){
    expect('colorify').equals(color.colorItSync('colorify'));
    done();
  });

  it("should produce black", function(done){
    expect('\x1b[40mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'bColor': 'black'}));
    done();
  });

  it("should produce red", function(done){
    expect('\x1b[41mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'bColor': 'red'}));
    done();
  });

  it("should produce green", function(done){
    expect('\x1b[42mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'bColor': 'green'}));
    done();
  });

  it("should produce yellow", function(done){
    expect('\x1b[43mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'bColor': 'yellow'}));
    done();
  });

  it("should produce blue", function(done){
    expect('\x1b[44mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'bColor': 'blue'}));
    done();
  });

  it("should produce magenta", function(done){
    expect('\x1b[45mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'bColor': 'magenta'}));
    done();
  });

  it("should produce cyan", function(done){
    expect('\x1b[46mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'bColor': 'cyan'}));
    done();
  });

  it("should produce white", function(done){
    expect('\x1b[47mcolorify\x1b[0m').equals(color.colorItSync('colorify', {'bColor': 'white'}));
    done();
  });

});
