function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var ans = document.getElementById('ans')
    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert('[ERROR] Incorrect data! Please, try again')

    } else {
        var fgen = document.getElementsByName('radgen')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'pic')
        if (fgen[0].checked) {
            gender = 'Male'

            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'babyboy.jpg')
            } else if (age < 21) {
                img.setAttribute('src', 'youngm.jpg')
            } else if (age < 50) {
                img.setAttribute('src', 'adultm.jpg')
            } else {
                img.setAttribute('src', 'elderm.jpg')
            }
        } else if (fgen[1].checked) {
            gender = 'Female'

            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'babygirl.jpg')

            } else if (age < 21) {
                img.setAttribute('src', 'youngf.jpg')

            } else if (age < 50) {
                img.setAttribute('src', 'adultf.jpg')

            } else {
                img.setAttribute('src', 'elderf.jpg')

            }
        }
        ans.style.textAlign = 'center'
        ans.innerHTML = 'We detected a ' + gender + ', ' + age + ' years old. '
        ans.appendChild(img)
    }
}