function selected_value(){
    var numSelected = document.getElementById("course");
    var value = numSelected.options[document.getElementById("course").selectedIndex].value;
    return value;
}