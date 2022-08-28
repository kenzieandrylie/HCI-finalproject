const form = document.getElementById('subsForm')

const errorMessage = document.getElementById('errorMessage')

function handleSubmit(e){
    const formData = new FormData(form)

    const email = formData.get('emailInput')
    const password = formData.get('passInput')
    const confPassword = formData.get('cpassInput')
    const gender = formData.get('genderInput')
    const agree = formData.get('agree')
    const plan = formData.get('planInput')

    console.log = email

    let error = []

    // Email
    if(!email) {
        error.push('Email must be filled!')
        document.getElementById('errorEmail').innerHTML = '*Email must be filled'
        document.getElementById('email').classList.add('errorbox') //kalo error nambah class
    }
    else if(!email.includes('@') || !email.endsWith('.com')){
        error.push('Please enter the correct email address')
        document.getElementById('errorEmail').innerHTML = '*Please enter the correct email address (must includes @ and ends with .com)'
        document.getElementById('email').classList.add('errorbox')
    }
    else if(email.includes('@') && email.endsWith('.com')){
        document.getElementById('errorEmail').innerHTML = '' //update bener
        document.getElementById('email').className = 'correctbox' // kalo bener nambah dan ganti class baru
    }
    // Password
    if(!password){
        error.push('Password must be filled')
        document.getElementById('errorPass').innerHTML = '*Password must be filled'
        document.getElementById('password').classList.add('errorbox')
    }
    else if(password.length < 6){
        error.push('Password must be atleast 6 characters')
        document.getElementById('errorPass').innerHTML = '*Password must be atleast 6 characters'
        document.getElementById('password').classList.add('errorbox')
    }
    else if(password.length >= 6){
        document.getElementById('errorPass').innerHTML = '' //update bener
        document.getElementById('password').className = 'correctbox'
    }
    //Configuration Password
    if(confPassword != password){
        error.push('Confirmation must be same')
        document.getElementById('errorCPass').innerHTML = '*Confirmation must be same as password'
        document.getElementById('confirmpassword').classList.add('errorbox')
    }
    else if(confPassword == password && confPassword.length>=6){
        document.getElementById('errorCPass').innerHTML = '' //update bener
        document.getElementById('confirmpassword').className = 'correctbox'
    }
    //gender
    if(!gender){
        error.push('Gender must be chosen')
        document.getElementById('errorGender').innerHTML = '*Gender must be chosen'
    }
    else if(gender){
        document.getElementById('errorGender').innerHTML = ''
    }
    //terms
    if(!agree){
        error.push('You must agree the terms and conditions')
        document.getElementById('errorTerm').innerHTML = '*You must agree the terms and conditions'
    }
    else if(agree){
        document.getElementById('errorTerm').innerHTML = '' //update bener
    }
    //plan
    if(!plan){
        error.push('Choose atleast one plan')
        document.getElementById('errorPlan').innerHTML = '*Choose atleast one plan'
        document.getElementById('plan').classList.add('errorbox')
    }
    else if(plan){
        document.getElementById('errorPlan').innerHTML = '' //update bener
        document.getElementById('plan').className = 'correctbox'
    }
    //submit event
    if (error.length > 0){
        // buat nampilin array error
        // errorMessage.innerHTML = error.join('</br>');
        e.preventDefault()
    }else{
        if(!confirm('Are you sure?')){
            e.preventDefault()
        }
        else{alert('Registration Success')}
    }
}

form.addEventListener('submit',handleSubmit)