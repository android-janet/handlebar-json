
   $(function(){
      var source = $("#product-template").html();
      var template = Handlebars.compile(source);


      $.ajax({
         url: "http://localhost:3000/api/products"
         }).done(function(data) {
            console.log(data);
            var html = template(data);
            $('body').append(html);
         });

      })



      $(function(){
         var source = $("#order-template").html();
         var template = Handlebars.compile(source);


         $.ajax({
            url: "http://localhost:3000/api/orders"
            }).done(function(data) {
               console.log(data);
               var html = template(data);
               $('body').append(html);
            });

         });
