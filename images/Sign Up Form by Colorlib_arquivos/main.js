(function($) {

  $('#pergunta_6').parent().append('<ul class="list-item" id="newpergunta_6" name="pergunta_6"></ul>');
  $('#pergunta_6 option').each(function(){
      $('#newpergunta_6').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#pergunta_6').remove();
  $('#newpergunta_6').attr('id', 'pergunta_6');
  $('#pergunta_6 li').first().addClass('init');
  $("#pergunta_6").on("click", ".init", function() {
      $(this).closest("#pergunta_6").children('li:not(.init)').toggle();
  });
  
  var allOptions = $("#pergunta_6").children('li:not(.init)');
  $("#pergunta_6").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#pergunta_6").children('.init').html($(this).html());
      allOptions.toggle();
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