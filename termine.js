<script type="text/javascript">

// ---------------- setup -------------------------------

//choose how many events at most should be shown
var MAX_NUMER_OF_EVENTS = 6

// enter events as 
//      {date: "YYYY-MM-DD", what: "termin1", where: "here"} 
// into the events-array
// to fix the order of events on the same day one could add times, e.g.
//        "YYYY-MM-DDT00:00:01" comes before "YYYY-MM-DDT00:00:02
// only dates, but not the times are shown
// events don't have to be sorted
// old events don't have to be deleted, only events that aren't in the past are shown
//
// example:
//  var events = [
//           {date: '2014-04-03', what: "termin1", where: "here"},
//           {date: '2020-01-08T00:00:01', what: "termin2", where: "there"},
//           {date: '2020-01-08T00:00:00', what: "termin3", where: "here"},
// ];

var events = [
           {date: '2020-01-11', what: "Bezirksliga 6.Runde", where: "Freiherr von Steinschule"},
           {date: '2020-01-11', what: "B-Klasse 6.Runde", where: "Karthause"},
           {date: '2020-01-17', what: "Vereinsmeisterschaft 1.Runde", where: "Johannesgymnasium"},
           {date: '2020-01-26', what: "2.Rhl-Pfalzliga 6.Runde", where: "Nickenich"},
           {date: '2020-01-31', what: "Vereinsmeisterschaft 2.Runde", where: "Johannesgymnasium"},
           {date: '2020-02-01', what: "Bezirksliga 7.Runde", where: "Pieroth"},
           {date: '2020-02-01', what: "B-Klasse 7.Runde", where: "Freiherr von Steinschule"},
           {date: '2020-02-14', what: "Vereinsmeisterschaft 3.Runde", where: "Johannesgymnasium"},
           {date: '2020-02-16', what: "2.Rhl-Pfalzliga 7.Runde", where: "Freiherr von Steinschule"},
           {date: '2020-02-28', what: "Vereinsmeisterschaft 4.Runde", where: "Johannesgymnasium"},
           {date: '2020-03-07', what: "Bezirksliga 8.Runde", where: "Freiherr von Steinschule"},
           {date: '2020-03-07', what: "B-Klasse 8.Runde", where: "Güls"},
           {date: '2020-03-08', what: "2.Rhl-Pfalzliga 8.Runde", where: "Remagen"},
           {date: '2020-03-13', what: "Vereinsmeisterschaft 5.Runde", where: "Johannesgymnasium"},
           {date: '2020-03-21', what: "Bezirksliga 8.Runde", where: "Einrich"},
           {date: '2020-03-21', what: "B-Klasse 8.Runde", where: "Boppard"},
           {date: '2020-03-27', what: "Vereinsmeisterschaft 6.Runde", where: "Johannesgymnasium"},
           {date: '2020-03-29', what: "2.Rhl-Pfalzliga 8.Runde", where: "???"},
           {date: '2020-04-03', what: "Vereinsmeisterschaft 7.Runde", where: "Johannesgymnasium"},
           {date: '2020-04-25', what: "B-Klasse 10.Runde", where: "Freiherr von Steinschule"},
 ];

// ------------------ end setup -------------------------

//convert to real dates
as_dates = events.map(function(el){
  return {date : new Date(el.date), what: el.what, where: el.where};
});

// make cut at last midnight:
var now = new Date();
now.setHours(0,0,0,0);
var not_in_the_past = as_dates.filter(function (el) {
  return el.date >= now;
});

if(not_in_the_past.length > 0){
    //we want the entries to be sorted!
    not_in_the_past.sort(function(a,b){
      if (a.date<b.date) {
        return -1;
      }
      if (a.date>b.date) {
        return 1;
      }
      return 0;
    });


    //take at most MAX_NUMER_OF_EVENTS upcoming events
    var  n = MAX_NUMER_OF_EVENTS < not_in_the_past.length ? MAX_NUMER_OF_EVENTS : not_in_the_past.length;

    document.write("<ul style=\"list-style: none;\">");
    for (var i = 0; i < n; i++) {
        var my_date = not_in_the_past[i].date;
        var my_what = not_in_the_past[i].what;
        var my_where = not_in_the_past[i].where;
        var output = "<li><b>"+ my_date.toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric'})+":</b> "+my_what;
        if(my_where){
            output = output +", "+my_where
        }
        output = output + "</li>"
        document.write(output)
    }
    document.write("</ul>");
}
else {
   document.write("Keine Termine");
}

</script>
