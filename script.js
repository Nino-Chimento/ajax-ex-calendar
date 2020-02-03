$(document).ready(function () {
  var gennaio = moment("2018-01-01");
  var giorniGennaio = moment(2018-01).daysInMonth();
  for (var i = 0; i < giorniGennaio; i++) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      giorno: parseInt(gennaio.format("D")) + i,
      mese: gennaio.format("MMMM"),
      data : "2018-01" + "-" + addZero((parseInt(gennaio.format("D")) + i)) ,
    };
    var html = template(context);
    $("ul").append(html);
  }
  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
    method : "GET",
    success : function (data) {
      console.log(data.response[1].date);
      for (var i = 0; i < data.response.length; i++) {
        $("ul li").each(function () {
          if ($(this).attr("data") == data.response[i].date) {
            console.log("Ni");
          };
        })
      }
    },
    erorr : function (richiesta,stato,errore) {
      alert("errore"+errore)
    }
  });
});
function addZero(num) {
  if (num < 10) {
    return "0"+num
  }
  else {
    return num
  }
}
