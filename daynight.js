// <!DOCTYPE html>
// <hmtl lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Day/Night Mode</title>
//     <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
// <style>
//     body{
//     margin: 0%;
//     padding: 0%;
//     font-family: "Arial", Helvetica, sans-serif;
// }
// i{
//     font-size: 150px;
//     cursor: pointer;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// }
// h1{
//     text-align: center;
//     font-size: 3em;
// }
// </style>
// </head>
// <body>
    //<h1 id="demo">Toggle Day/Night Mode</h1>
  //  <i class="bi bi-brightness-high-fill" id="toggleDark"></i>
  //  <script>
        const toggle =document.getElementById('toggleDark');
const body = document.querySelector('body');
toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background ='white';
        body.style.color='black';
        document.getElementById("demo").innerHTML = "Day Mode";
        body.style.transition ='2s';
    }else{
        body.style.background ='black';
        body.style.color='white';
        document.getElementById("demo").innerHTML = "Night Mode";
        body.style.transition ='2s';
    }})
    
//}
//})
//     </script>
// </body>
// </hmtl>