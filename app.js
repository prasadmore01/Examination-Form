let users = []


let regUsers = document.getElementById('registeredUser')


let records = () => {
    regUsers.innerHTML=''

    for(let i=0;i<users.length;i++){
    let div = document.createElement('div')
    let name = document.createElement('div')
    let email = document.createElement('div')
    let examC = document.createElement('div')

    div.classList.add('users')

    name.innerText = users[i].name;
    email.innerText = users[i].email
    examC.innerText = users[i].center;

    regUsers.appendChild(div)
    div.appendChild(name)
    div.appendChild(email)
    div.appendChild(examC)    
    
    }

}


let examination = () =>{

    let name = document.getElementById('name')
    let email = document.getElementById('email')

    let ifUserExist = users.filter((data)=>{
        return data.email == email.value
    })

    let centers = ['pune','mumbai','delhi','nashik','himachal','mp','up','lucknow','bihar','jammu']
    
    let random = Math.random()*10;
    let num = Math.trunc(random);

    for(let i=0;i<10;i++){
        center = centers[num]
    }

    let examUsers = {
        'name': name.value,
        'email': email.value,
        'center': center
    }

    if(ifUserExist.length == 0){
        users.push(examUsers)
        records()
    } 
    else {
        window.alert('User is Already Exist!')
    }

    console.log(users)

}