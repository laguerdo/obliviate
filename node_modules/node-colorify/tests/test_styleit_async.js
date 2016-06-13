var color = require(__dirname + '/../lib/index');
var expect = require('chai').expect;

describe("styleIt - Asynchronous", function(){

  it("should return text without styleting", function(done){
    color.styleIt('colorify',function(styletedText){
      expect('colorify').equals(styletedText);
      done();
    });
  });

  it("should produce bold", function(done){
    color.styleIt('colorify', ['bold'], function(styletedText){
      expect('\x1b[1mcolorify\x1b[0m').equals(styletedText);
      done();
    });
  });

  it("should produce light", function(done){
    color.styleIt('colorify', ['light'], function(styletedText){
      expect('\x1b[2mcolorify\x1b[0m').equals(styletedText);
      done();
    });
  });

  it("should produce uline", function(done){
    color.styleIt('colorify', ['uline'], function(styletedText){
      expect('\x1b[4mcolorify\x1b[0m').equals(styletedText);
      done();
    });
  });

  it("should produce blink", function(done){
    color.styleIt('colorify', ['blink'], function(styletedText){
      expect('\x1b[5mcolorify\x1b[0m').equals(styletedText);
      done();
    });
  });

  it("should produce inverse", function(done){
    color.styleIt('colorify', ['inverse'], function(styletedText){
      expect('\x1b[7mcolorify\x1b[0m').equals(styletedText);
      done();
    });
  });

  it("should produce hide", function(done){
    color.styleIt('colorify', ['hide'], function(styletedText){
      expect('\x1b[8mcolorify\x1b[0m').equals(styletedText);
      done();
    });
  });

});
