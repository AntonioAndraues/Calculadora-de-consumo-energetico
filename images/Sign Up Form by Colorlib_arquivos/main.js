(function($) {

  });
  var slider = document.getElementById('co2_value');
  var marginSlider = document.getElementById('slider-margin');
  if (marginSlider != undefined) {
      noUiSlider.create(marginSlider, {
            start: [0],
            step: 1,
            documentElement: documentElement,
            connect: [false, false],
            tooltips: [true],
            range: {
                'min': 0,
                'max': 500
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: 'Co2  ',
            })
    });
  }
  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

  $('#register-form').validate({
    rules : {
        pergunta_1 : {
            required: true,
        },
        pergunta_2 : {
            required: true,
        },
        pergunta_3 : {
            required: true
        },
        pergunta_4 : {
            required: true,
            pergunta_4 : true
        },
        pergunta_5 : {
            required: true,
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
