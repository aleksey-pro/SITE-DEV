// mailsend

    $('#send-btn').on('click', function(e){
      e.preventDefault();
      console.log('start sending...');
      var errors = false;
      var $form = $(this).closest('.order-form');
      // $($form).find('span').empty();
      // $form.find('input, textarea').each(function(){
      //   if($.trim( $(this).val() ) == ''){
      //     errors = true;
      //     // $(this).next().text('Не заполнено поле' + $(this).prev().text());
      //     console.log('Не заполнено поле');
      //   }
      // });

        // var json = {
        //   name: $('input[name=name]').val(),
        //   email: $('input[name=email]').val(),
        //   type: $('input[name=type]').val(),
        //   verstka:  $('input[name=verstka]').val(),
        //   adaptive:  $('input[name=adaptive]').val(),
        //   pagn:  $('input[name=pagn]').val(),
        //   ishodn:  $('input[name=ishodn]').val(),
        //   tz:  $('input[name=tz]').val(),
        //   comment:  $('input[name=comment]').val()
        // }
        // var Obj = JSON.parse(json);
        // console.log(Obj['verstka']);
        // $('.data>span').html(Obj['name']);

      if(!errors) {
        var data = $('.order-form').serialize(); //склеивает данные форму в qerystring
        console.log(data);
        $.ajax({
          url: 'mailSend.php',
          type: 'POST',
          // data: 'json=' + JSON.stringify(json),
          data: data,
          contentType: false,
          processData: false,
          beforeSend: function(){
            $('#send-btn').next().text('Отправляю...');
          },
          success: function(res){
            if(res !== 1){
            $('.order-form').find('input:not(#send-btn), textarea').val('');
              $('#send-btn').next().text('');

              // console.log(Obj['name']); //error
              console.log('Отправлено');
              console.log(res);

            }else {
              $('#send-btn').next().empty();
              console.log('Ошибка отправки');
            }
          },
          error: function() {
            console.log('Ошибка');
          }
        });
      }
    })
