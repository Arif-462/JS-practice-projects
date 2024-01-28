function deleteMe(){
    document.getElementById("result").value = "";
};

function claculate(newValue){
    document.getElementById("result").value += newValue;
};

function ans(){
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
};