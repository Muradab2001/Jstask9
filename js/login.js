let btnlogin=document.getElementById('button');
btnlogin.onclick=function(){
    let users = JSON.parse(localStorage.getItem('users'));
    let usrname=document.getElementById('name').value;
    let usrpassword=document.getElementById('password').value;
    let checkuser=users.find(x=> x.name.toLowerCase() ==usrname.toLowerCase()&&x.password==usrpassword);
    if (checkuser!=undefined) {
        alert('daxil oldunuz')
    }
    else{
        alert('duzgun deyer daxil edin')
    }
}
