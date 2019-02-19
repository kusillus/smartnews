module.exports = {
    
    input_mail:  function (value) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i
        let result = regex.test(value)

        return result
    },
    input_password:  function (value) {
        let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/igm
        let result = regex.test(value)

        return result
    },
    input_password_rep:  function (pass, pass_rep) {
        let result = pass === pass_rep ? true : false

        return result
    },
    input_username: function(username) {
        console.log(username && username.length)
        let result =  username && username.length > 4 ? true : false
        return result

    },
    validate_login: function(email, password) {
        let validateEmail = module.exports.input_mail(email)
        let validatePassword = module.exports.input_password(password)
        let err_msg_usr = null
        let err_msg_pass = null

        // validateEmail ? err_msg_usr = null : err_msg_usr = 'Tu correo no es valido'
        err_msg_usr = validateEmail ? null : 'Tu correo no es valido'
        err_msg_pass = validatePassword ? null : 'Necesitas 8 caracteres entre texto y numeros'
        // validatePassword ? err_msg_pass = null : err_msg_pass = 'Necesitas 8 caracteres entre texto y numeros'

        return { 
            success: validateEmail && validatePassword,
            msg_user: err_msg_usr,
            msg_password: err_msg_pass
        }
    },
    validate_create_account: function(username,email,password,password_rep) {
        let validateUsername = module.exports.input_username(username)
        let validateEmail = module.exports.input_mail(email)
        let validatePassword = module.exports.input_password(password)
        let validatePasswordRep = module.exports.input_password_rep(password,password_rep)
        let err_msg_usr = null
        let err_msg_email = null
        let err_msg_pass = null
        let err_msg_pass_rep = null

        err_msg_usr = validateUsername ? null :  'Usuario no valido, minimo 5 caracteres'
        err_msg_email = validateEmail ? null :  'Tu correo no es valido'
        err_msg_pass = validatePassword ? null : 'Necesitas 8 caracteres entre texto y numeros'
        err_msg_pass_rep = validatePasswordRep ? null : 'Las contraseñas no coinciden'

        return { 
            success: validateUsername
                && validateEmail
                && validatePassword
                && validatePasswordRep,
            msg_user: err_msg_usr,
            msg_email:err_msg_email,
            msg_password: err_msg_pass,
            msg_password_rep: err_msg_pass_rep
        }
    }
    
}