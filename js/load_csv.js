function process(course) {
    if (course === "DS") {
        console.log("ds_data.csv load success");
        $.ajax({
            type: "GET",
            url: "./data/ds/data_ds.csv",
            dataType: 'text',
            error: function(e) {
                console.log(e);
            },
            success: successFunction
        });
    }
    else if (course === "AI") {
        console.log("ai_data.csv load success");
        $.ajax({
            type: "GET",
            url: "./data/ai/data_ai.csv",
            dataType: 'text',
            error: function(e) {
                console.log(e);
            },
            success: successFunction
        });
    }
    else alert("ERROR(course select)");
}
