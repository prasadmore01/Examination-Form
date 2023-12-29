let users = []

let examination = () =>{

    let name = document.getElementById('name')
    let email = document.getElementById('email')

    let ifUserExist = users.filter((data)=>{
        return data.email == email.value
    })



    let examUsers = {
        'name': name.value,
        'email': email.value
    }

    if(ifUserExist.length == 0){
        users.push(examUsers)
    } 
    else {
        window.alert('User is Already Exist!')
    }

    console.log(users)

}