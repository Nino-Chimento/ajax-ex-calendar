$(document).ready(function () {
  var gennaio = moment("2018-01-01");
  var giorniGennaio = moment(2018-01).daysInMonth();
  giorniDelMese(giorniGennaio,gennaio)
  // for (var i = 0; i < giorniGennaio; i++) {
  //   var source = $("#entry-template").html();
  //   var template = Handlebars.compile(source);
  //   var context = {
  //     giorno: parseInt(gennaio.format("D")) + i,
  //     mese: gennaio.format("MMMM"),
  //     data : "2018-01" + "-" + addZero((parseInt(gennaio.format("D")) + i)) ,
  //   };
  //   var html = template(context);
  //   $(".wrap").append(html);
  // }
  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
    method : "GET",
    success : function (data) {
      for (var i = 0; i < data.response.length; i++) {
        $(".wrap div").each(function () {
          if ($(this).attr("data") == data.response[i].date) {
            $(this).addClass("red");
            var source = $("#entry-template").html();
            var template = Handlebars.compile(source);
            var context = {
              name : data.response[i].name,
            }
            var html = template(context);
            $(this).append(html)
          };
        })
      }
    },
    erorr : function (richiesta,stato,errore) {
      alert("errore"+errore)
    }
  });
});
function giorniDelMese(numGiorni,mese) {
  for (var i = 0; i < numGiorni; i++) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      giorno: parseInt(mese.format("D")) + i,
      mese: mese.format("MMMM"),
      data : mese.format("YYYY"+"-"+"MM") + "-" + addZero((parseInt(mese.format("D")) + i)) ,
    };
    var html = template(context);
    $(".wrap").append(html);
  }
}
// aggiungo zero
function addZero(num) {
  if (num < 10) {
    return "0"+num
  }
  else {
    return num
  }
}
