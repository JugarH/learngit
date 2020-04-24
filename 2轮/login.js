window.addEventListener("load", function () {
    var noCodeLogin = document.querySelector('.noCodeLogin');
    var codeLogin = document.querySelector('.codeLogin');
    var phoneNumber = document.querySelector('.phoneNumber');
    var codePhoneNumber = document.querySelector('.codePhoneNumber');
    noCodeLogin.addEventListener('click', function () {
        this.className = 'colorFweightBbttom noCodeLogin';
        codeLogin.className = 'codeLogin';
        phoneNumber.style.display = 'block';
        codePhoneNumber.style.display = 'none';
    })
    codeLogin.addEventListener('click', function () {
        this.className = 'colorFweightBbttom codeLogin';
        noCodeLogin.className = 'codeLogin';
        codePhoneNumber.style.display = 'block';
        phoneNumber.style.display = 'none';
    })
    var enterPhoneNumber = document.querySelector('.enterPhoneNumber');
    var enterVertify = document.querySelector('.enterVertify');
    var getVoiceVertify = document.querySelector('.getVoiceVertify');
    var getInfoVertify = document.querySelector('.getInfoVertify');
    enterPhoneNumber.addEventListener('blur', function () {
        this.value = '请输入手机号';
        this.style.color = '#F1403C';
    })
    enterPhoneNumber.addEventListener('focus', function () {
        this.value = '手机号';
        this.style.color = '#8590A6';
    })
    enterVertify.addEventListener('blur', function () {
        this.value = '请输入短信验证码';
        this.style.color = '#F1403C';
    })
    enterVertify.addEventListener('focus', function () {
        this.value = '输入 6 位短信验证码';
        this.style.color = '#8590A6';
    })
    getVoiceVertify.addEventListener('click', function () {
        this.innerHTML = '接收短信验证码';
        getInfoVertify.innerHTML = '重新获取语音验证码';
        enterPhoneNumber.value = '请输入手机号';
        enterPhoneNumber.style.color = '#F1403C';
        enterVertify.value = '输入 6 位语音验证码';
    })

    var phoneOrMail = document.querySelector('.phoneOrMail');
    var password = document.querySelector('.password');
    var eye = this.document.querySelector('.eye');
    phoneOrMail.addEventListener('blur', function () {
        this.placeholder = '请输入手机号或邮箱';
    })
    phoneOrMail.addEventListener('focus', function () {
        this.placeholder = '手机号或邮箱';
    })
    password.addEventListener('blur', function () {
        this.placeholder = '请输入密码';
    })
    password.addEventListener('focus', function () {
        this.placeholder = '密码';
    })
    var flag = 1;
    eye.addEventListener('click', function () {
        if (flag) {
            this.src = 'images/noeye.png';
            password.type = 'text';
            flag = 0;
        } else {
            this.src = 'images/eye.png';
            password.type = 'password';
            flag = 1;
        }
    })
})