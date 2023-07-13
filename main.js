var operatorContainer = document.getElementById("data-operator");
var btn_tampil = document.getElementById("btn-tampil");

btn_tampil.addEventListener("click", function(){
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "tampil.json");
    ajax.onload = function(){
        const dataorang = JSON.parse(ajax.responseText);
        renderHTML(dataorang);
    };
    ajax.send();
});

function renderHTML(dataorang){
    var htmlString = "";

    for (var i = 0; i < dataorang.length; i++){
        htmlString += "<p>" + dataorang[i].namalengkap + ", lahir pada tanggal " + dataorang[i].tgl_lahir;
    }
    operatorContainer.insertAdjacentHTML('beforeend', htmlString);
}
