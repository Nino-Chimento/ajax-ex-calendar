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
});
function addZero(num) {
  if (num < 10) {
    return "0"+num
  }
  else {
    return num
  }
}
