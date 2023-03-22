

function run(){
    let a = document.getElementById("html-code").value;
    let b = document.getElementById("css-code").value;
    let c = document.getElementById("js-code").value;
    let d = document.getElementById("output");

    d.contentDocument.body.innerHTML = a + '<style>' +  b  + '</style>';
    d.contentWindow.eval(c)
    
}
