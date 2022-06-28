if(localStorage.getItem('users') === null) {
    localStorage.setItem('users',JSON.stringify([]));
  }
  let btnlogin=document.getElementById('button');
  btnlogin.onclick=function(){
    let users = JSON.parse(localStorage.getItem('users'));
    let usrname=document.getElementById('name').value;
    let usrpassword=document.getElementById('password').value;
    let usremail=document.getElementById('email').value;
    let checkuser=users.find(x=> x.name.toLowerCase() ==usrname.toLowerCase());
    if (checkuser===undefined) {
      users.push({
        name:usrname,
        password:usrpassword,
        email:usremail,
      })
    }
    else{
      alert('istifadeci adi istifade olunub')
    }
    localStorage.setItem('users',JSON.stringify(users));
  }
  
  