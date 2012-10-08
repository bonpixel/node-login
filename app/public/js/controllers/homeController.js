
function HomeController() {

// bind event listeners to button clicks //
  var that = this;

  window.onpopstate = function(e){
    if(e.state){
      console.log(e.state);
      document.getElementById("contentPane").innerHTML = e.state.html;
      // document.title = e.state.pageTitle;
    }
  };


  $('.module-link').on('click', function(e){ that.grabNewContent(e); });

  this.grabNewContent = function(event){
    var that = this;

    var currentdata = $('#contentPane').html();
    window.history.pushState({"html":currentdata},"", '/home');

    event.preventDefault();
    $.ajax({
      url: "/account",
      type: "POST",
      // data: {user : 'bob'},
      success: function(data){
        $('#contentPane').html(data);
        console.log(data);
        window.history.pushState({"html":data},"", '/account');
      },
      error: function(jqXHR){
        console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
      }
    });
  };
}
