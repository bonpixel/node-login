define(['jquery'] , function ($) {

  // myfunction = function() {
  //   console.log('i am a function');
  // };

  // anotherfunction = function () {
  //   console.log('attempting to bind...');
  //   console.log($('#gridview'));
  // };

  // $(function(){
    $(document).on("click", "#gridview", function() {
      console.log ('hello world!');
    });
    
  // });


  // return {
  //   myfunction:myfunction,
  //   anotherfunction:anotherfunction
  // };
});


