$(document).ready(function () {
  var mese = 1;
  var giorniMese = moment(2018-0+mese).daysInMonth();
   var nomeMese = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  for (var i = 0; i < giorniMese; i++) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      giorno: i+1,
      mese: nomeMese[mese-1],
      
    };
    var html = template(context);
    $(".wrap").append(html);
  }

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
