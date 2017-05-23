$( document ).ready();

$('#button').on('click', function(event) {
   var wallet = $('#wallet').val();
$.ajax({
    url: "https://api.ethplorer.io/getAddressInfo/" + wallet  + "?apiKey=freekey",
    // url: "https://api.ethplorer.io/getAddressInfo/0x64d141eecdee90e8cdee9a8601b957c0b2fba351" + "?apiKey=freekey",
    type: 'GET',
    dataType: 'json',
    success: function(response){
      console.log(response);

      // if ( !response ){
      //   // alert('error');
      // $('wallet').text('Error: Not found').css("color", "red");
      // }
      // else {
        var token = response.tokens["0"];
        var tkInfo = response.tokens["0"].tokenInfo;
      $('#address').text(tkInfo.address);
      $('#name').text(tkInfo.name);
      $('#balance').text(token.balance);
    // }
    },
  });
});
$.ajax({
    url: "https://api.gdax.com/products/BTC-USD/book",
    // url: "https://api.ethplorer.io/getAddressInfo/0x64d141eecdee90e8cdee9a8601b957c0b2fba351" + "?apiKey=freekey",
    type: 'GET',
    dataType: 'json',
    success: function(response){
      console.log(response);
      $('#btc-price').text(response.sequence.price);
    },
  });

