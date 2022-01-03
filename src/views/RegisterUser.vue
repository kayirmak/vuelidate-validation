<template>
  <div class="register-user">
      <div id="snackbar" ref="toast">Клиент успешно создан</div>
        <h2 class="register-user__title">Добавить клиента</h2>
      <form action="" class="form" @submit.prevent="submitHandler">
          <div class="form-group">
              <h2 class="form-group__title">Клиент</h2>
              <div class="form-group__item">
                    <label for="last-name" class="required">Фамилия</label>
                    <input 
                        @keypress="doNotNumber($event)"
                        id="last-name"
                        class="form-group__input"
                        type="text"
                        placeholder="Фамилия"
                        v-model="lastName"
                        :class="{invalid: $v.lastName.$dirty && !$v.lastName.required}"
                    >
                <small
                    class="form-group__errors"
                    v-if="$v.lastName.$dirty && !$v.lastName.required"
                >
                    Введите Фамилию
                </small>
              </div>
              <div class="form-group__item">
                <label for="name" class="required">Имя</label>
                <input
                    @keypress="doNotNumber($event)"
                    id="name"
                    class="form-group__input"
                    type="text"
                    placeholder="Имя"
                    v-model.trim="name"
                    :class="{invalid: $v.name.$dirty && !$v.name.required}"
                >
                <small
                    class="form-group__errors"
                    v-if="$v.name.$dirty && !$v.name.required"
                >
                    Введите имя
                </small> 
              </div>
              <div class="form-group__item">
                <label for="patronymic">Отчество</label>
                <input
                    @keypress="doNotNumber($event)"
                    id="patronymic"
                    class="form-group__input"
                    type="text"
                    placeholder="Отчество"
                    v-model="patronymic"
                >
              </div>
              <div class="form-group__item">
                <label for="date" class="required">Дата рождения</label>
                <input 
                    id="date"
                    class="form-group__input"
                    type="date"
                    :max="dateToToday"
                    v-model="dateValue"
                    :class="{invalid: $v.dateValue.$dirty && !$v.dateValue.required}"
                >
                <small
                    class="form-group__errors"
                    v-if="$v.dateValue.$dirty && !$v.dateValue.required"
                >
                    Установите дату рождения
                </small>
              </div>
              <div class="form-group__item">
                <label for="phone" class="required">Номер телефона</label>
                <input
                    id="phone"
                    class="form-group__input"
                    type="tel"
                    maxlength="16"
                    v-model.trim="phone"
                    :class="{invalid: ($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.minLength)}"
                    placeholder="+7 777 777 77 77"
                    v-phoneMask
                >
                <small
                    class="form-group__errors"
                    v-if="$v.phone.$dirty && !$v.phone.required"
                >
                    Введите номер телефона
                </small>
                <small
                    class="form-group__errors"
                    v-if="$v.phone.$dirty && !$v.phone.minLength"
                >
                    номер должен состоять из 11 цифр
                </small>
              </div>
                <div class="form-group__item">
                    <label for="radio-gender-group">Пол</label>
                    <div id="radio-gender-group" class="gender-group form-group__input">
                        <input
                            type="radio"
                            name="gender-group"
                            id="gender-man"
                            value="man"
                            v-model="genderPicked"
                        >
                        <div for="gender-man">М</div>
                        <input
                            type="radio"
                            name="gender-group"
                            id="gender-woman"
                            value="woman"
                            v-model="genderPicked"
                        >
                        <div for="gender-woman">Ж</div>
                    </div>
                </div>
                <div class="form-group__item">
                    <label for="" class="required">Группа клиентов</label>
                    <div class="checkbox-clients-group form-group__input">
                            <div
                                v-for="client, index in groupClients"
                                :class="{invalid: $v.clientChoice.$dirty && !$v.clientChoice.required}"
                                :key="index"
                            >
                                <input
                                    id="checkbox-button"
                                    type="checkbox"
                                    :value="client"
                                    v-model="clientChoice"
                                >
                                {{client}}
                            </div>
                        <small
                            class="form-group__errors"
                            v-if="$v.clientChoice.$dirty && !$v.clientChoice.required"
                        >
                            Выберите до 3 значений
                        </small>
                    </div>
                </div>
                <div class="form-group__item">
                    <label for="select-therapist">Лечащий врач</label>
                    <select
                        id="select-therapist"
                        class="form-group__input"
                        v-model="selectedOption"
                    >
                        <option value="" selected>Не выбрано</option>
                        <option 
                            v-for="therapist, index in therapists"
                            :key="index"
                            :value="therapist"
                        >
                            {{therapist}}
                        </option>
                    </select>
                </div>
                <div class="checkbox-sms form-group__input">
                    <input type="checkbox" id="sms" v-model="sms">
                    <label for="sms">Не отправлять СМС</label>
                </div>
            </div>

            <div class="form-group">
                <h2 class="form-group__title">Адрес</h2>
                <div class="form-group__item">
                    <label for="address-index">Индекс</label>
                    <input
                        v-model="address.index"
                        class="form-group__input"
                        type="number"
                        name=""
                        id="address-index"
                    >
                </div>

                <div class="form-group__item">
                    <label for="address-country">Страна</label>
                    <input
                        v-model="address.country"
                        @keypress="doNotNumber($event)"
                        class="form-group__input"
                        type="text"
                        name=""
                        id="address-country"
                    >
                </div>

                <div class="form-group__item">
                    <label for="address-region">Область</label>
                    <input
                        v-model="address.region"
                        @keypress="doNotNumber($event)"
                        class="form-group__input"
                        type="text"
                        name=""
                        id="address-region"
                    >
                </div>

                <div class="form-group__item">
                    <label for="address-city" class="required">Город</label>
                    <input
                        @keypress="doNotNumber($event)"
                        id="address-city"
                        class="form-group__input"
                        type="text"
                        v-model="address.city"
                        :class="{invalid: $v.address.city.$dirty && !$v.address.city.required}"
                    >
                    <small
                        class="form-group__errors"
                        v-if="$v.address.city.$dirty && !$v.address.city.required"
                    >
                        Введите город проживания
                    </small>
                </div>

                <div class="form-group__item">
                    <label for="address-street">Улица</label>
                    <input class="form-group__input" type="text" name="" id="address-street" v-model="address.street">
                </div>

                <div class="form-group__item">
                    <label for="address-house">Дом</label>
                    <input class="form-group__input" type="text" name="" id="address-house" v-model="address.house">
                </div>
            </div>
            
            <div class="form-group">
                <h2 class="form-group__title">Документ</h2>
                <div class="form-group__item">
                    <label for="select-document-type" class="required">Тип документа</label>
                    <select 
                        id="select-document-type"
                        class="form-group__input"
                        v-model="document.type" 
                        :class="{
                            invalid: $v.document.type.$dirty && !$v.document.type.required
                            }"
                    >
                        <option value="" selected>Не выбрано</option>
                        <option :value="type" v-for="type, index in document.documentsByType" :key="index">{{type}}</option>
                    </select>
                     <small
                        class="form-group__errors"
                        v-if="
                            $v.document.type.$dirty && !$v.document.type.required 
                            "
                    >
                        Выберите тип документа
                    </small>
                </div>
                <div class="form-group__item">
                    <label for="type-document">Серия</label>
                    <input
                        id="type-document"
                        class="form-group__input"
                        :disabled="!document.type ? true : false"
                        :type="document.type === 'Свидетельство о рождении' ? 'text' : 'number'"
                        v-model="document.serial"
                        :class="{invalid: $v.document.serial.$dirty && !$v.document.serial.minLength || 
                                $v.document.serial.$dirty && !$v.document.serial.maxLength}"
                    >
                    <small
                        class="form-group__errors"
                        v-if="
                            $v.document.serial.$dirty && !$v.document.serial.minLength || 
                            $v.document.serial.$dirty && !$v.document.serial.maxLength
                        "
                    >
                        Серия состоит из 4 чисел
                    </small>
                    
                </div>

                <div class="form-group__item">
                    <label for="type-document">Номер</label>
                    <input
                        id="type-document"
                        class="form-group__input"
                        type="number"
                        :disabled="!document.type ? true : false"
                        v-model="document.number"
                        :class="{invalid: $v.document.number.$dirty && !$v.document.number.minLength || 
                                $v.document.number.$dirty && !$v.document.number.maxLength}"
                    >
                    <small
                        class="form-group__errors"
                        v-if="
                            $v.document.number.$dirty && !$v.document.number.minLength || 
                            $v.document.number.$dirty && !$v.document.number.maxLength
                        "
                    >
                        Номер состоит из 6 чисел
                    </small>
                </div>

                <div class="form-group__item">
                    <label for="type-document">Кем выдан</label>
                    <input
                        id="type-document"
                        class="form-group__input"
                        type="text"
                        :disabled="!document.type ? true : false"
                        v-model="document.issuedBy"
                    >
                </div>

                <div class="form-group__item">
                    <label for="type-document" class="required">Дата выдачи</label>
                    <input
                        id="type-document"
                        class="form-group__input"
                        type="date"
                        :disabled="!document.type ? true : false"
                        v-model="document.dateOfIssue"
                        :max="dateToToday"
                        :class="{invalid: $v.document.dateOfIssue.$dirty && !$v.document.dateOfIssue.required}"
                    >
                    <small
                        class="form-group__errors"
                        v-if="$v.document.dateOfIssue.$dirty && !$v.document.dateOfIssue.required"
                    >
                        Введите дату выдачи документа
                    </small>
                </div>

            </div>
            <div></div>
            <button class="form-btn" type="submit">Создать</button>
      </form>
  </div>
</template>

<script>
import {minLength, maxLength, required} from 'vuelidate/lib/validators'
// import { phoneFormatValidation , contains } from '../validators/validators'
export default {
    name: "RegisterUser",
    data() {
        return {
            lastName: '',
            name: '',
            patronymic: '',
            dateValue: '',
            phone: '',
            genderPicked: '',
            groupClients: ['VIP', 'Проблемные', 'ОМС'],
            clientChoice: [],
            therapists: ['Иванов', 'Захаров', 'Чернышева'],
            selectedOption: '',
            sms: '',
            address: {
                index: '',
                country: '',
                region: '',
                city: '',
                street: '',
                house: ''
            },
            document: {
                documentsByType: ['Паспорт', 'Свидетельство о рождении', 'Водительское удостоверение'],
                type: '',
                serial: '',
                number: '',
                issuedBy: '',
                dateOfIssue: ''
            }
        }
    },
    validations: {
        lastName: {required},
        name: {required},
        dateValue: {required},
        phone: {minLength: minLength(16), required},
        clientChoice: {required},
        address: {
            city: {required}
        },
        document: {
            type: {required},
            serial: {minLength: minLength(4 ), maxLength: maxLength(4)},
            number: {minLength: minLength(6), maxLength: maxLength(6)},
            dateOfIssue: {required}
        }
    },
    directives: {
        phoneMask: {
            bind(el) {
                function replaceNumberForInput(value) {
                    let val = ''
                    const x = value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)

                    if (!x[2] && x[1] !== '') {
                    val = x[1] === '7' ? x[1] :'7' + x[1]
                    } else {
                    val = !x[3] ?'+' + x[1] + x[2] :'+' + x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '')
                    }

                    return val
                }

                function replaceNumberForPaste(value) {
                    const r = value.replace(/\D/g, '')
                    let val = r
                    if (val.charAt(0) === '8') {
                    val = '7' + val.slice(1)
                    }
                    return replaceNumberForInput(val)
                }

                el.oninput = function(e) {
                    if (!e.isTrusted) {
                    return
                    }
                    this.value = replaceNumberForInput(this.value)
                }

                el.onpaste = function() {
                    setTimeout(() => {
                    const pasteVal = el.value
                    this.value = replaceNumberForPaste(pasteVal)
                    })
                }

    
            }
        }
    },
    computed: {
        dateToToday() {
            return new Date().toISOString().split('T')[0]
        }
    },
    updated() {
        console.log(this.document.type);
    },
    methods: {
        toast() {
            let toast = this.$refs.toast
            toast.classList.add("show")
            setTimeout(function(){ toast.classList.remove("show") }, 3000)
        },
        submitHandler() {
            console.log(this.$v);
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            else if(!this.$v.$invalid) {
                this.toast()
                this.lastName = ''
                this.name = ''
                this.patronymic = ''
                this.dateValue = ''
                this.phone = ''
                this.genderPicked = ''
                this.clientChoice = []
                this.selectedOption = ''
                this.sms = ''
                
                this.address.index = ''
                this.address.country = ''
                this.address.region = ''
                this.address.city = ''
                this.address.street = ''
                this.address.house = ''
            
                
                this.document.type = ''
                this.document.serial = ''
                this.document.number = ''
                this.document.issuedBy = ''
                this.document.dateOfIssue = ''
            }
        },
        doNotNumber(e) {
            console.log(e.key)
            if(/^[A-Za-zА-Яа-я]+$/.test(e.key)) return true
            else e.preventDefault()
        }
    }


}
</script>

<style lang="scss" scoped>
*{
    font-family: 'Didact Gothic';
}
label {
    display: block;
    font-weight: 600;
}
input[type=checkbox],
    [type=radio],
    select,
    ::-webkit-calendar-picker-indicator,
    button 
{
    cursor: pointer;

}
input, select {
    box-sizing: border-box;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 5px;
}
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.register-user {
    &__title {
        margin-left: 40px;
    }
}
.form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    &-btn {
        border: none;
        border-radius: 5px;
        font-size: 16px;
        background: rgb(0, 119, 0);
        color: #fff;
        width: 35%;
        height: 50px;
        justify-self: center;
        &:hover {
            background: rgb(0, 88, 0);
        }
    }
    &-group {
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-self: center;
        &__title {
            color: rgb(0, 119, 0);
        }
        &__item {
            position: relative;
            margin-top: 20px;
        }
        &__input {
            margin: 10px 0 0;
            height: 40px;
            width: 95%;
        }
        &__errors{
            position: absolute;
            color: red;
            bottom: -17px;
            left: 0;
        }
    }
}
.required {
    position: relative;
        &::after {
            content: '*';
            position: absolute;
            color: red;
            top: 0;
            font-size: 20px;
            font-weight: 500;
        }
}
.invalid {
    position: relative;
    border: 1px solid red;
    color: red;
    background: rgba(255, 0, 0, 0.027);
    animation: shakeno 0.4s ;
    &::placeholder {
        color: red;
    }
  
    @keyframes shakeno {
        0% {
            margin-left: 0;
        }
        10% {
            margin-left: 5px;
        }
        20% {
            margin-left: 0;
        }
        30% {
            margin-left: -5px;
        }
        40% {
            margin-left: 0;
        }
        50% {
            margin-left: 4px;
        }
        60% {
            margin-left: 0;
        }
        70% {
            margin-left: -4px;
        }
        80% {
            margin-left: 0;
        }
        90% {
            margin-left: 3px;
        }
        100% {
            margin-left: 0;
        }
    }
}
.checkbox-clients-group {
    display: flex;
    > div {
        margin-right: 15px;
    }
}
.gender-group, .checkbox-clients-group, .checkbox-sms {
    display: flex;
    align-items: center;
}

#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: rgb(0, 119, 0);
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@media (max-width: 768px) {
    .form {
        grid-template-columns: 1fr;
    }
    .form-btn {
        margin-top: 20px;
    }
}
</style>

