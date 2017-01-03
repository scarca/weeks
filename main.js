var run = function() {
    retable(90, 52);
}
var executionCount = 0;
var retable = function(years, finalColumns) {
    if (! executionCount == 0 ) {
        table = document.getElementById("maintable");
        for (var i = table.rows.length -1; i >=0; i--) {
            table.deleteRow(i);
        }
        // console.log(years, currentHeight, executionCount++);

        for (var i = 0; i < years-1; i++ ){
            console.log("Adding", i, years);
            var row = table.insertRow(i);
            for (var j = 0; j < 52; j++) {
                var col = row.insertCell(j);
                col.className = "week ";
            }
            row.className = "year";
        }

        var row = table.insertRow(years-1);
        for (var j = 0; j < finalColumns; j++ ) {
            var col = row.insertCell(j);
            col.className = "week ";
        }
    }
    executionCount++;
}

var assess = function() {
    if (curr != null) {
        curr.remove("active");
    }
    var v = document.querySelector('input[name="gender"]:checked').value;
    if (v == 0) {
        retable(84, Math.round(.3 * 52));
    }
    else if(v == 1) {
        retable(86, Math.round(.6*52))
    }
    console.log("inRest");
    var a = new Date(document.getElementById("date").value);
    var today = new Date();
    var weeks = Math.round((today-a)/604800000);
    //Get row
    var row = Math.floor(weeks/52);
    if(row < 0) {
        alert("This date is invalid");
        return false;
    }
    console.log(row);
    //get day
    var day = weeks%52;
    curr = table.rows[row].cells[day].classList;
    curr.add("active");
}

document.getElementById('date').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
        assess();
        return false;
    }
}

document.getElementById('gobutton').onclick = assess;

curr = null;
run()
