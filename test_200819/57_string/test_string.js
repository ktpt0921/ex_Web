window.onload = function(){
    var url = document.getElementById('url');
    var domain = document.getElementById('domain');
    var fileName = document.getElementById('fileName');
    var extension = document.getElementById('extension');
}

//http://www.naver.com/index.html

function getInfo(){

    // 도메인 얻기
    var domainStart = url.value.indexOf('://');
    var domainEnd = url.value.indexOf('/', domainStart+3);
    domain.value = url.value.substring(domainStart+3, domainEnd);

    // 파일이름 얻기
    var fileNameStart = url.value.lastIndexOf('/');
    var fileNameEnd = url.value.lastIndexOf('.');
    fileName.value = url.value.substring(fileNameStart+1, fileNameEnd);

    // 확장자 얻기
    var extStart = url.value.lastIndexOf('.');
    extension.value = url.value.substring(extStart+1);
}