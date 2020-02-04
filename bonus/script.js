$(document).ready(function () {
  moment.updateLocale('it', {
    months : ["Gennaio","febbraio","Marzo","Aprile","Maggio","giugno","luglio","aagosto","settembre","ottobre","novembre","dicembre"],
    weekdays : ["lunedi","martedi","mercoledi","giovedi","venerdi","sabato","domenica"]
});
  var mese = 1;
  giorniDelMese(mese)
  $(".successivo").click(function () {
    mese++;
    if (mese > 12) {
      alert("il calendario 2019 non e'pronto");
      mese--;
    }
    else {
      $(".wrap").html(" ");
      giorniDelMese(mese);
      feste(mese);
    }
  });
  $(".precedente").click(function () {
    mese--;
    if (mese < 1) {
      alert("calendario 2017 non disponibile")
      mese++
    }
    else {
      $(".wrap").html(" ");
      giorniDelMese(mese);
      feste(mese);
    }
  });
  feste(mese);
});
// feste
function feste(mese) {
  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month="+(mese-1),
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
}
// creo i giorni
function giorniDelMese(mese) {
  var giorniMese = moment(2018-0+mese).daysInMonth();
  for (var i = 0; i < giorniMese; i++) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      giorno: addZero(i+1),
      mese: moment().month(mese-1).format("MMMM"),
      data : "2018-"+addZero(mese)+"-"+addZero(i+1),
      nomeGiorno:moment("2018-"+addZero(mese)+"-"+addZero(i+1)).format("dddd"),
    };
    var html = template(context);
    $(".wrap").append(html);
    $("h1").text(moment().month(mese-1).format("MMMM"));
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
