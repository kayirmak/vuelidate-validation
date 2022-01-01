import { helpers } from 'vuelidate/lib/validators'

function contains (e) {
    console.log(e);
    // helpers.withParams(
    //     {type: 'contains', value},
    //     (value) => {
    //         if(!helpers.req(value)) return false
    //         // let char = String.fromCharCode(value.keyCode);
    //         console.log(value);
    //         // if (/^[A-Za-z]+$/.test(char)) return true;
    //         // else e.preventDefault();
    //     }
    // )
}


const phoneFormatValidation = value => {
    const reg = "^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
    if(!reg.test(value)) return false
    return true
}

export default {
    contains,
    phoneFormatValidation
}