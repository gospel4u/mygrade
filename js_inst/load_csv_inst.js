function process(course) {
    if (course === "DS") {
        console.log("ds_inst.csv load success");
        $.ajax({
            type: "GET",
            url: "./data_inst/ds/ds_inst.csv",
            dataType: 'text',
            error: function(e) {
                console.log(e);
            },
            success: successFunction
        });
    }
    else if (course === "AI") {
        console.log("ai_inst.csv load success");
        $.ajax({
            type: "GET",
            url: "./data_inst/ai/ai_inst.csv",
            dataType: 'text',
            error: function(e) {
                console.log(e);
            },
            success: successFunction
        });
    }
    else alert("ERROR(course select)");
}
