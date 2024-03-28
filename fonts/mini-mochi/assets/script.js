$(document).ready(function(){

  /* Letter Hover */

  $('.letter').mousemove(function(event) {

      var rect = event.target.getBoundingClientRect();
      var x = event.clientX - rect.left; //x position within the element.
      var y = event.clientY - rect.top;  //y position within the element.

      let cursorX = event.pageX / $(this).width();
      let cursorY = y / $(this).height();

      let settingX = Math.floor(cursorX * 100);
      let settingY = Math.floor(cursorY * 100);

      $(".letter-glyph").css({
        "--FLAV": settingX,
        "--STCH": settingY
      });
    
    });

  /* Letter Slider */

  $('#letter-slider').on('input', function(){

    let value = parseInt($(this).val()); //get slider input value

    const slidertype = $(this).data('type'); //get slider axis

    $('.letter-glyph').text(String.fromCharCode(value));

  });

  /* Alphabet Slider */

  $('#alphabet-slider').on('input', function(){

    let value = parseInt($(this).val()); //get slider input value

    $('.alphabet span').css("--STCH", value);

  });

  /* Randomize Word Parameters */
  
  var para = $('#words');
  var charArray = $('span', para);
  
  // case: No span (Initial String)
  if (charArray.length === 0) {
      var html = para.html();
      var newArr = [];
      var len = html.length;
      for (var i=0; i<len; i++) {
          newArr.push('<span>' + html[i] + '</span>');
      }
      html = newArr.join('');
      para.html(html);
      charArray = $('span', para);
  }

  setInterval(function() {
    
    // Reset all spans
    $.each(charArray, function(i, value) {
        value.style.color = '';
    });
    
    var paralen = charArray.length;
    
    for (var i=0; i<8; i++) {
        var pos = Math.floor(Math.random()*charArray.length);
        pos = pos % paralen;
        charArray[pos].style.color = 'rgba(0,0,0,.3)';
        $(charArray[pos]).css({
          "--STCH": Math.floor(Math.random() * 101),
          "--FLAV": Math.floor(Math.random() * 101)
        });
    }
  }, 1000);

  /* Tester Sliders */

  $('#tester-slider1').on('input', function(){

    let value = parseInt($(this).val()); //get slider input value

    $('.tester').css("--STCH", value);

  });

  $('#tester-slider2').on('input', function(){

    let value = parseInt($(this).val()); //get slider input value

    $('.tester').css("--FLAV", value);

  });

});