var color = require(__dirname + '/../lib/index');
var expect = require('chai').expect;

describe("styleIt - Synchronous", function(){

  it("should return text without styleting", function(done){
    expect('colorify').equals(color.styleItSync('colorify'));
    done();
  });

  it("should produce bold", function(done){
    expect('\x1b[1mcolorify\x1b[0m').equals(color.styleItSync('colorify', ['bold']));
    done();
  });

  it("should produce light", function(done){
    expect('\x1b[2mcolorify\x1b[0m').equals(color.styleItSync('colorify', ['light']));
    done();
  });

  it("should produce uline", function(done){
    expect('\x1b[4mcolorify\x1b[0m').equals(color.styleItSync('colorify', ['uline']));
    done();
  });

  it("should produce blink", function(done){
    expect('\x1b[5mcolorify\x1b[0m').equals(color.styleItSync('colorify', ['blink']));
    done();
  });

  it("should produce inverse", function(done){
    expect('\x1b[7mcolorify\x1b[0m').equals(color.styleItSync('colorify', ['inverse']));
    done();
  });

  it("should produce hide", function(done){
    expect('\x1b[8mcolorify\x1b[0m').equals(color.styleItSync('colorify', ['hide']));
    done();
  });

});
