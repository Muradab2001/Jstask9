if(localStorage.getItem('users') === null) {
    localStorage.setItem('users',JSON.stringify([]));
  }
function GetProducts() {
    let user = JSON.parse(localStorage.getItem('users'));

    if(user.length === 0) {
        let alert_div = '';

        alert_div = `
            <div class="alert text-center alert-danger" role="alert">
            Login Empety!!
                </div>
        `
        document.getElementById('users').innerHTML = alert_div
    }
    else{
        let div = '';

        user.forEach(item => {
            div += `
            <div class="row box">
            <div class="col-lg-3">
                <h3>Name:${item.name}</h3>
            </div>
            <div class="col-lg-3">
                <h3>Password:${item.password}</h3>
            </div>
            <div class="col-lg-4">
                <h3>Email:${item.email}</h3>
            </div>
        </div>
            `
        })
    
        document.getElementById('users').innerHTML = div;
    }
}
GetProducts();