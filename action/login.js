function login(e){
    // console.log(e);
    const user = "datne1999"
    const pass = "dat123456"
    
    const username = document.getElementById("email").value
    const password = document.getElementById("password").value

    if(username == user  && password == pass){
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }else{
        Swal.fire(
            'Error!',
            'You clicked the button!',
            'error'
          )
    }
}