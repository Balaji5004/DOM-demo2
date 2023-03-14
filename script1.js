function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
}
var Firstname=labels("label","for","Firstname","Firstname");
var br=linebreak("br");
var input1=inputs("input","type","name","name","Firstname","id","Firstname");
var br1=linebreak("br");

var Middlename=labels("label","for","Middlename","Middlename");
var br2=linebreak("br");
var input2=inputs("input","type","name","name","Middlename","id","Middlename");
var br3=linebreak("br");

var Lastname=labels("label","for","Lastname","Lastname");
var br4=linebreak("br");
var input3=inputs("input","type","name","name","Lastname","id","Lastname");
var br5=linebreak("br");

var email=labels("label","for","email","email");
var br6=linebreak("br");
var input4=inputs("input","type","name","name","email","id","email");
var br7=linebreak("br");

var password=labels("label","for","password","password");
var br8=linebreak("br");
var input5=inputs("input","type","name","name","password","id","password");
var br9=linebreak("br");
document.body.append(Firstname,br,input1,br1,Middlename,br2,input2,br3,Lastname,br4,input3,br5,email,br6,input4,br7,password,br8,input5,br9)

