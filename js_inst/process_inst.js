function successFunction(data) {
    console.log("success access student");
    var lines = [];
    lines = data.split(/\r?\n|\r/);
    var instructor = [];
    var id = [];
    var password = [];

    // This is student number, nickname, grade
    for (var i = 1; i < lines.length; i++) {
        var values = lines[i].split(',');
        id.push(values[0]);
        password.push(values[1]);
    }
    instructor.push(
        id,
        password
    );

    // Check is input valid
    var input_id = $("#id").val();
    var input_password = $("#password").val();
    
    if (input_id === '' || input_password === '') {
        alert("[ERROR] Empty input");
        return 0;
    }
    
    var isvalid = new Boolean(false);
    var output_id = '';

    for (var j = 0; j < id.length; j++) {
        if (instructor[0][j] === input_id
            && instructor[1][j] === input_password){
            isvalid = true;
            output_id = input_id;
            break;
        }
       }
       console.log("isvalid: " + isvalid);
    
    if (isvalid == false) {
        console.log("error input");
        alert("등록되지 않은 아이디이거나, 잘못된 비밀번호입니다.");
    }
    else {
        if (output_id === null) {
            alert("접근실패");
            location.href= "inst.html";
            }
        else {
            alert(output_id + "님, 환영합니다.");
            location.href= "load_data.html";
        
        }
        }
}