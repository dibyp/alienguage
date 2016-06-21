var alien = function(str) {
    var a = str.split(' ');
    var b = a.toString();
    var c = b.replace(/,/g, "");

    return c.split('').map(function(char) {
        var h = Hangul.disassemble(char);
        var a = Hangul.disassemble(char);
        a[0] = 'ㅅ';
        for (var i = 0; i < 2; i++) {
          if (Hangul.endsWithConsonant(h)) {
            h.pop();
          };
        };
        // if (Hangul.endsWithConsonant(h)) {
        //   h.pop();
        //   if (Hangul.endsWithConsonant(h)) {
        //     h.pop();
        //   };
        // };
        return Hangul.assemble(h) + Hangul.assemble(a);
      }).join('');
  };

  $(function() {
    $('.generator-button').click(function() {
      console.log(alien($('.alien').val()));
      $('.generated-result').text(alien($('.alien').val()));
    });
  });