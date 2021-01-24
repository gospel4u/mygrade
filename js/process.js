function successFunction(data) {
    console.log("success access student");
    var lines = [];
    lines = data.split(/\r?\n|\r/);
    var students = [];
    var num = [];
    var name = [];
    var grade = [];
    
    var width_length = lines[0].split(',').length;  //전체열 길이
        
    console.log("lineslength: " + lines.length);

    // This is student number, nickname, grade
    for (var i = 1; i < lines.length; i++) {
        var values = lines[i].split(',');
        num.push(values[0]);
        name.push(values[1]);
        grade.push(values[width_length-1]);
    }
    students.push(
        num,
        name,
        grade
    );

    // Check is input valid
    var nickname = $("#nickName").val();
    var studentnumber = $("#studentNumber").val();
    
    if (nickname === '' || studentnumber === '') {
        alert("[ERROR] Empty input");
        return 0;
    }
    
    var isvalid = new Boolean(false);
    var text = '';

    console.log("student number: " + num.length);
    console.log("input nickname: " + nickname);
    console.log("input studentnumber: " + studentnumber);
    for (var j = 0; j < num.length; j++) {
        if (students[0][j] === studentnumber
            && students[1][j] === nickname){
            isvalid = true;
            text = lines[j+1].split(','); // take a message
            break;
        }
       }
       console.log("isvalid: " + isvalid);
    
    if (isvalid == false) {
        console.log("error input");
        alert("Please check your \nCourse OR NickName OR StudentNumber");
    }
    else {
        //take a title
        var title = lines[0].split(',');
        console.log("title: " + title[0]);
    
        location.href= "viewer.html";
    
        localStorage.setItem("length", width_length);  //width
        localStorage.setItem("message", text);  // message
        localStorage.setItem("title", title);  // title
    }
}