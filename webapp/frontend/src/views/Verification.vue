<template>
    <div class="container" id="container">

        <div class="CreateExchange_home__body__63ZPN">

            <div class="verification-container">
                <div class="CreateExchange_home__body__header__title__k-9BQ">
                    <h2>Получатель</h2>
                </div>
                <div class="input-group">
                    <input type="text" id="name" name="name" placeholder="Имя" v-model="name">
                    <input type="text" id="surname" name="surname" placeholder="Фамилия" v-model="surname">
                    <input type="text" id="patronymic" name="patronymic" placeholder="Отчество" v-model="patronymic">
                    <input type="tel" id="phone" name="phone" placeholder="Телефон" v-model="phone">
                    <input type="date" id="date" name="date" placeholder="Дата рождения" v-model="birth_date">
                    <label class="input-file">
                        <input type="file" name="file[]" accept="image/*">
                        <span>Выберите файл</span>
                    </label>
                    <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg" id="passport-photo"
                        name="passport-photo" placeholder="Фото паспорта" :value="passport_photo">
                    <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg" id="visa-photo"
                        name="visa-photo" placeholder="Фото визы" :value="visa_photo">
                    <input type="date" id="date" name="date" placeholder="Дата окончания действия визы"
                        v-model="visa_expired_date">
                </div>
                <button class="Button_button__igezS CreateExchange_home__btn__B2lyA" type="button" @click="addLoan">
                    Получить деньги
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'


export default {
    components: { InstagramLoader },
    data() {
        return {
            infoActive: true,
            sexActive: true,
            channel: {},

        }
    },
    watch: {
    },
    async beforeMount() {
        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();
    },
    async mounted() {
        //this.updatePage(300);

    },
    async beforeUnmount() {
        window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket);
        window.Telegram?.WebApp.MainButton.hide();
        window.Telegram?.WebApp.BackButton.offClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.hide();
    },
    methods: {
        routeBack() {
            this.$router.go(-1)
        },
        addLoan() {
            if (this.isOrdering === true) return;

            this.isOrdering = true;

            if (!this.name || !this.surname ||
                !this.patronymic || !this.phone || !this.birth_date || !this.passport_photo || !this.visa_photo || !this.visa_expired_date
            ) {
                this.isOrdering = false;
                return alert("Пожалуйста, заполните все поля")
            }

            this.$store.state.myApi
                .post(this.$store.state.restAddr + '/loans', {
                    user_id: this.$store.state.userId,
                    name: this.name,
                    surname: this.surname,
                    patronymic: this.patronymic,
                    phone: this.phone,
                    birth_date: this.birth_date,
                    passport_photo: this.passport_photo,
                    visa_photo: this.visa_photo,
                    visa_expired_date: this.visa_expired_date,
                })
                .then(async (response) => {
                    window.Telegram?.WebApp.disableClosingConfirmation()
                    window.Telegram?.WebApp.close();
                })
                .catch(e => {
                    eventBus.$emit('noresponse', e);
                    this.isOrdering = false;
                })
        },
    }
}
</script>
  

<style lang="scss" scoped>
.hidden {
    display: none;
}

.CreateExchange_home__body__63ZPN {
    margin-top: 1rem;
}

.row {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    position: relative;
    margin: 0 0 1.5625rem;

    &>div {
        width: 50%;
    }


}

.input-group>input {
    align-items: center;
    background-color: #2a2641;
    border-radius: 12px;
    color: #fff;
    color: #706c88;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    justify-content: space-between;
    line-height: 24px;
    margin-bottom: 12px;
    padding: 12px;
    width: 100%;

    &::-webkit-input-placeholder {
        color: #706c88;
    }

    &::placeholder {
        color: #706c88;
    }

    &:focus {
        border: 1px solid #000;
    }
}

.input-file-row {
    display: inline-block;
}

.input-file {
    position: relative;
    display: inline-block;
}

.input-file span {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    font-size: 14px;
    vertical-align: middle;
    color: rgb(255 255 255);
    text-align: center;
    border-radius: 4px;
    background-color: #419152;
    line-height: 22px;
    height: 40px;
    padding: 10px 20px;
    box-sizing: border-box;
    border: none;
    margin: 0;
    transition: background-color 0.2s;
}

.input-file input[type=file] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
}

/* Focus */
.input-file input[type=file]:focus+span {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
}

/* Hover/active */
.input-file:hover span {
    background-color: #59be6e;
}

.input-file:active span {
    background-color: #2E703A;
}

/* Disabled */
.input-file input[type=file]:disabled+span {
    background-color: #eee;
}

/* Список c превью */
.input-file-list {
    padding: 10px 0;
}

.input-file-list-item {
    display: inline-block;
    margin: 0 15px 15px;
    width: 150px;
    vertical-align: top;
    position: relative;
}

.input-file-list-item img {
    width: 150px;
}

.input-file-list-name {
    text-align: center;
    display: block;
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
}

.input-file-list-remove {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    position: absolute;
    padding: 0;
    margin: 0;
    top: 5px;
    right: 5px;
    background: #ff0202;
    width: 16px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    border-radius: 50%;
}</style>
  