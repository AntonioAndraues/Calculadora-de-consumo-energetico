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