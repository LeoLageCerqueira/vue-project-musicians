<template>
    <div>
        <form @submit.prevent="submitForm">
            <label for="name">Nome: </label>
            <input type="text" id="name" v-model.trim="name">

            <label for="surname">Sobrenome: </label>
            <input type="text" id="surname" v-model.trim="surname">

            <label for="email">Email: </label>
            <input type="email" id="email" v-model.trim="email">

            <label for="description">Descrição: </label>
            <input type="text" id="description" v-model.trim="description">

            <label for="phone">Telefone: </label>
            <input type="text" id="phone" v-model.trim="phone">

            <h3>Instrumentos: </h3>

            <label for="guitarra">Guitarra</label>
            <input type="checkbox" id="guitarra" value="guitarra" v-model="instruments">

            <label for="violao">Violão</label>
            <input type="checkbox" id="violao" value="violao" v-model="instruments">

            <label for="bateria">Bateria</label>
            <input type="checkbox" id="bateria" value="bateria" v-model="instruments">

            <label for="teclado">Teclado</label>
            <input type="checkbox" id="teclado" value="teclado" v-model="instruments">

            <label for="baixo">Baixo</label>
            <input type="checkbox" id="baixo" value="Baixo" v-model="instruments">

            <label for="canto">Canto</label>
            <input type="checkbox" id="canto" value="canto" v-model="instruments">
            <button type="submit">Boom!</button>
        </form>        
    </div>
</template>

<script>
    export default {
        emits: ['save-input'],
        data() {
            return{
                name: '',
                surname: '',
                email: '',
                description: '',
                phone: '',
                instruments: [],
            }
        },
        methods: {
            submitForm() {
                const artistInput = {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    description: this.description,
                    phone: this.phone,
                    instruments: this.instruments
                };
                console.log(artistInput);
                this.$emit('save-input', artistInput);
            }
        }
    }
</script>