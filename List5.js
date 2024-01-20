let p1 = localStorage.getItem('p1')
let p2 = localStorage.getItem('p2')

let L3p1 = localStorage.getItem('L3p1')
let flexRadioDefault1 = localStorage.getItem('flexRadioDefault1')
let flexRadioDefault2 = localStorage.getItem('flexRadioDefault2')
let flexRadioDefault3 = localStorage.getItem('flexRadioDefault3')
let flexRadioDefault4 = localStorage.getItem('flexRadioDefault4')
let flexRadioDefault5 = localStorage.getItem('flexRadioDefault5')

let title = localStorage.getItem('title')
let title1 = localStorage.getItem('title1')
let title2 = localStorage.getItem('title2')




let p1itog = document.getElementById('p1')
let p2itog = document.getElementById('p2')

let L3p1itog = document.getElementById('L3p1')
let flexRadioDefault1itog = document.getElementById('flexRadioDefault1')
let flexRadioDefault2itog = document.getElementById('flexRadioDefault2')
let flexRadioDefault3itog = document.getElementById('flexRadioDefault3')
let flexRadioDefault4itog = document.getElementById('flexRadioDefault4')
let flexRadioDefault5itog = document.getElementById('flexRadioDefault5')

let titleitog = document.getElementById('title')
let title1itog = document.getElementById('title1')
let title2itog = document.getElementById('title2')
let title3 = document.getElementById('title3')


window.onload = function () {
    if(p1 == null){
        p1itog.innerHTML
    }
    else
    p1itog.innerHTML = p1

    if(p2 == null){
        p2itog.innerHTML
    }
    else
    p2itog.innerHTML = p2

    if(L3p1 == null){
        L3p1itog.innerHTML
    }
    else
    L3p1itog.innerHTML = L3p1



    if(flexRadioDefault1==='true'){
        flexRadioDefault1itog.checked = flexRadioDefault1
    }

    if(flexRadioDefault2==='true'){
        flexRadioDefault2itog.checked = flexRadioDefault2
    }

    if(flexRadioDefault3==='true'){
        flexRadioDefault3itog.checked = flexRadioDefault3
    }

    if(flexRadioDefault4==='true'){
        flexRadioDefault4itog.checked = flexRadioDefault4
    }
    
    if(flexRadioDefault5==='true'){
        flexRadioDefault5itog.checked = flexRadioDefault5
    }

    var content = localStorage.getItem('Grid')
    if (content !== undefined) {
      document.getElementById("Grid1").innerHTML = content
    }
   
    titleitog.innerHTML =  'ФИО:     ' +  title
    title1itog.innerHTML = 'Телефон: ' + title1
    title2itog.innerHTML = 'Дата:    ' + title2

    title3.innerHTML = title2 + ' ' + title
    localStorage.setItem('body1',document.getElementById('body').innerHTML)
}



const NextElement = document.getElementById('Next')
const documentElement = document.getElementById('invoice') 



// NextElement.onclick = function () {
//     //document.documentElement.innerHTML
//     // saveFile("file:///C:/Users/regwa/Downloads/Text.html", "filename")
//     //window.print()

//     // printDiv('content','3333')
//     generatePDF()

// }

// function generatePDF() {
//     //const element = document.getElementById('content');
//     html2pdf()
//         .from(documentElement)
//         .save();

// }

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }

}


// NextElement.onclick = function () {
//     // localStorage.setItem('body1',document.getElementById('body').innerHTML)
//     // download('1111.html',document.getElementById('body').innerHTML)
//     console.log(localStorage.getItem('body1'))
// }




function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    //pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

//РАБОТАЕТ
// var file;
// var data = [];
// data.push("This is a test\n");
// data.push("Of creating a file\n");
// data.push("In a browser\n");
// var properties = {type: 'text/plain'}; // Specify the file's mime-type.
// try {
//   // Specify the filename using the File constructor, but ...
//   file = new File(data, "file.txt", properties);
// } catch (e) {
//   // ... fall back to the Blob constructor if that isn't supported.
//   file = new Blob(data, properties);
// }
// var url = URL.createObjectURL(file);
// document.getElementById('link').href = url;


var file;
var data = [];
data.push(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" >
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="https://result.school/logo-result.school.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
          crossorigin="anonymous">
    

    <title id = "title3">Text1</title>
    <script  src="List5.js"  defer></script>
    <script src ="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js" defer></script>
    <script src ="https://html2canvas.hertzen.com/dist/html2canvas.js" defer></script>
</head>
<body id = "body">` + localStorage.getItem('body1') +  `</body>
</html>`);

var properties = {type: 'text/plain'}; // Specify the file's mime-type.
try {
  // Specify the filename using the File constructor, but ...
  file = new File(data, "file.txt", properties);
} catch (e) {
  // ... fall back to the Blob constructor if that isn't supported.
  file = new Blob(data, properties);
}
var url = URL.createObjectURL(file);
document.getElementById('link').href = url;


// const TIMEWEB_CLOUD_TOKEN = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjFrYnhacFJNQGJSI0tSbE1xS1lqIn0.eyJ1c2VyIjoiaXE4ODQ0NyIsInR5cGUiOiJhcGlfa2V5IiwicG9ydGFsX3Rva2VuIjoiNjM5MDAxYjAtN2RmZS00MGE1LTlkM2QtOGMzNzY0NzNhZGEzIiwiYXBpX2tleV9pZCI6IjZkNTM3MTAwLTQzZmEtNGNiMy04MWNmLWRmMjYzODM0YzI1NiIsImlhdCI6MTcwNTc2MjQyNH0.VTNCgEHDcpuj9plamjXEKl7y-nE7woFZfFqoavBnQBM-JdmVnPDiZCC85qUOBDu7o9Elq3fWC0un_KIXr9whqrcdgXjlvoAwDDIm82sFmawfOA0J5REG2uSvc7NYTnxQ4N93eam9BFLZ7xMnZMJqnLJokxxR3eDLOjYDlsgMD93LVaMcO9lHP7eQF1B5P7UfWgqMoP3zz6yZoLHMW4WbhrsmqtocfhiP5uk6kiFuKPDoNFJAs7RLB4H5Kv9zYt2szq0DM5wz_VBPk9VsdW35JIni-YptTNM8U7ApMLyvdm6GrAfhSyFkCy08Y0BtO0On3jPongKl0VcbNNIwgdOv812_gj4xragjp9TcpIfLsaWwU8lVMVfyqYqBd6bs7kaSwCc8D3xhYzZfvSjmye_lxRM-PVif6ZuqYNndI3THKFWMEfAuK29l26a6FvnCuph6SjllRzCEh990SHFaaSG1x7fh6ojYSFvkbcPEVddApJHub8-Mwyj8naY1fKF6g1tO"
// const form = new FormData();
// form.append('files', File(['<data goes here>'], 'path/to/local/file.jpg'));

// fetch('https://api.timeweb.cloud/api/v1/storages/buckets/1051/object-manager/upload', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': `Bearer ${tok}`
//     },
//     body: form
// });

// fetch('https://api.timeweb.cloud/api/v1/storages/buckets/1051/object-manager/list', {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${tok}`
//     }
// });


// console.log(url)
// https://api.timeweb.cloud/api/v1/storages/buckets/280717/object-manager/list

// https://s3.timeweb.cloud/76714e8f-3083511d-b59d-467a-8f52-ba1bc09a277f/file.html


// https://76714e8f-3083511d-b59d-467a-8f52-ba1bc09a277f.s3.timeweb.cloud/file.html


// import TimewebCloudApi from 'timeweb_cloud_api';
// let defaultClient = TimewebCloudApi.ApiClient.instance;
// // Configure Bearer (JWT) access token for authorization: Bearer
// let Bearer = defaultClient.authentications['Bearer'];
// Bearer.accessToken = TIMEWEB_CLOUD_TOKEN

// let apiInstance = new TimewebCloudApi.S3Api();
// let bucketId = '76714e8f-3083511d-b59d-467a-8f52-ba1bc09a277f'; // Number | Уникальный идентификатор хранилища.
// let copyStorageFileRequest = new TimewebCloudApi.CopyStorageFileRequest(); // CopyStorageFileRequest | 
// apiInstance.copyStorageFile(bucketId, copyStorageFileRequest, (error, data, response) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully.');
//   }
// });


// fetch('https://api.timeweb.cloud/api/v1/auth/api-keys', {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${TIMEWEB_CLOUD_TOKEN}`
//     }
// });