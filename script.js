$(document).ready(function(){
    $('#button-callback').on('click', function(){
        $('#modal-callback').toggleClass('modal_visible');
    });
    $('.modal__close').on('click', function(){
        $('#modal-callback').toggleClass('modal_visible');
    }); 
});

$(function(){
    $("#phone").mask("7(999) 99-999-99");
  });

  $(function(){
    $("#phone2").mask("7(999) 99-999-99");
  });

  $(function(){
    $("#phone3").mask("7(999) 99-999-99");
  });

  $(function(){
    $("#phone4").mask("7(999) 99-999-99");
  });


function priceScript(){
    var modal = document.getElementById('MyModal')
    modal.style.display = "block";
};

function offScript(){
    var modal = document.getElementById('MyModal')
    modal.style.display = 'none';
};



$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow_right"></div>',
    prevArrow: '<div class="arrow arrow_left"></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
  });

  $('.ajax-submit').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Спасибо. Ожидайте звонка");
        $(".ajax-submit").trigger("reset");
    });
    return false;
});

});

new WOW().init();

