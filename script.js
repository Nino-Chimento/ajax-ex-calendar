$(document).ready(function () {
  var gennaio = moment("01-01-2018");
  console.log(gennaio.format("D-MMMM"));
  for (var i = 0; i < 31; i++) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      giorno: parseInt(gennaio.format("D")) + i,
      mese: gennaio.format("MMMM")
      };
    var html = template(context);
    $("ul").append(html);
  }
});
