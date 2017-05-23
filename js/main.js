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
      console.log(response.asks);
      var btc = response.asks;
      // for (var items in btc){
      //   $('#btc-price').text( btc[items]);
      // }
      $('#btc-price').text("BTC ask: " + "$" + btc["0"]["0"]);

    },
  });
$.ajax({
    url: "https://api.gdax.com/products/ETH-USD/book",
    // url: "https://api.ethplorer.io/getAddressInfo/0x64d141eecdee90e8cdee9a8601b957c0b2fba351" + "?apiKey=freekey",
    type: 'GET',
    dataType: 'json',
    success: function(response){
      console.log(response.asks);
      var eth = response.asks;
      // for (var items in btc){
      //   $('#btc-price').text( btc[items]);
      // }
      $('#eth-price').text("ETH ask: " + "$" + eth["0"]["0"]);

    },
   });
$.ajax({

    url: "https://api.gdax.com/products/ETH-USD/book",
    // url: "https://api.ethplorer.io/getAddressInfo/0x64d141eecdee90e8cdee9a8601b957c0b2fba351" + "?apiKey=freekey",
    type: 'GET',
    dataType: 'json',
    success: function(response){
      console.log(response.asks);
      var eth = response.asks;
      // for (var items in btc){
      //   $('#btc-price').text( btc[items]);
      // }
      $('#eth-price').text("ETH ask: " + "$" + eth["0"]["0"]);

    },
   });





