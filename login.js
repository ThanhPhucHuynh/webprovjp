function login(e){
  
    const user = "datne1999"
    const pass = "dat123456"
    
    const username = document.getElementsByClassName("username")[0].value
    const password = document.getElementsByClassName("password")[0].value

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