
document.getElementById("json").addEventListener('paste', event => {
    jsonFormate();
});
document.getElementById("format").addEventListener('click', event => {
    jsonFormate();
});
document.getElementById("copy").addEventListener('click', event => {
    var copyText = document.getElementById("formatJson");
    copyText.select();
    document.execCommand("copy");

});


function jsonFormate(){
    console.log("smpps");
    var datas =   document.getElementById("json").value;
    // console.log(typeof(datas));
    var person = eval('(' + datas + ')');
    console.log(typeof(data));
    document.getElementById("formatJson").innerHTML = JSON.stringify(person, null, 4);

    
    // document.getElementById("formatJsons").innerHTML = JSON.stringify(data, null, 4);
    
}

