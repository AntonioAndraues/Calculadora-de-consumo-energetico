(function($) {


  
  function myFunction() {
    var x = document.getElementById("pergunta_1").value;
    console.log(x);
    document.getElementById("demo").innerHTML = x;
  }

  var marginSlider = document.getElementById('slider-margin');
  marginSlider.setAttribute('disabled', true);

  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

  $('#register-form').validate({
    rules : {
        pergunta_1 : {
            required: false,
        },
        pergunta_2 : {
            required: false,
        },
        pergunta_3 : {
            required: false
        },
        pergunta_4 : {
            required: false,
        },
        pergunta_5 : {
            required: false,
        }
    },
    onfocusout: function(element) {
        $(element).valid();
    },
});

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        pergunta_4: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });
})(jQuery);
