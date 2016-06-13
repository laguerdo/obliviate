var color = require(__dirname + '/../lib/index');
var expect = require('chai').expect;

describe("colorIt ForeGround - Asynchronous", function(){

  it("should produce white by default", function(done){
    color.colorIt('colorify',function(formattedText){
      expect('colorify').equals(formattedText);
      done();
    });
  });

  it("should produce black", function(done){
    color.colorIt('colorify', {'fColor': 'black'}, function(formattedText){
      expect('\x1b[30mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce red", function(done){
    color.colorIt('colorify', {'fColor': 'red'}, function(formattedText){
      expect('\x1b[31mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce green", function(done){
    color.colorIt('colorify', {'fColor': 'green'}, function(formattedText){
      expect('\x1b[32mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce yellow", function(done){
    color.colorIt('colorify', {'fColor': 'yellow'}, function(formattedText){
      expect('\x1b[33mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce blue", function(done){
    color.colorIt('colorify', {'fColor': 'blue'}, function(formattedText){
      expect('\x1b[34mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce magenta", function(done){
    color.colorIt('colorify', {'fColor': 'magenta'}, function(formattedText){
      expect('\x1b[35mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce cyan", function(done){
    color.colorIt('colorify', {'fColor': 'cyan'}, function(formattedText){
      expect('\x1b[36mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce white", function(done){
    color.colorIt('colorify', {'fColor': 'white'}, function(formattedText){
      expect('\x1b[37mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

});

describe("colorIt BackGround - Asynchronous", function(){

  it("should produce white by default", function(done){
    color.colorIt('colorify',function(formattedText){
      expect('colorify').equals(formattedText);
      done();
    });
  });

  it("should produce black", function(done){
    color.colorIt('colorify', {'bColor': 'black'}, function(formattedText){
      expect('\x1b[40mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce red", function(done){
    color.colorIt('colorify', {'bColor': 'red'}, function(formattedText){
      expect('\x1b[41mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce green", function(done){
    color.colorIt('colorify', {'bColor': 'green'}, function(formattedText){
      expect('\x1b[42mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce yellow", function(done){
    color.colorIt('colorify', {'bColor': 'yellow'}, function(formattedText){
      expect('\x1b[43mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce blue", function(done){
    color.colorIt('colorify', {'bColor': 'blue'}, function(formattedText){
      expect('\x1b[44mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce magenta", function(done){
    color.colorIt('colorify', {'bColor': 'magenta'}, function(formattedText){
      expect('\x1b[45mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce cyan", function(done){
    color.colorIt('colorify', {'bColor': 'cyan'}, function(formattedText){
      expect('\x1b[46mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce white", function(done){
    color.colorIt('colorify', {'bColor': 'white'}, function(formattedText){
      expect('\x1b[47mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

});
