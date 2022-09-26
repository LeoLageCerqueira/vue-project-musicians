import { createStore } from 'vuex';

/* var birthday = new Date(1999, 10, 11).toLocaleDateString('pt-br'); */

const store = createStore({
    state() {
        return {
            musicians: [
                {
                    id: '1',
                    name: 'Leonardo',
                    surname: 'Lage',
                    email: 'leolagecerqueira@gmail.com',
                    instruments: ['Violão', 'Guitarra', 'Teclado'],
                    description: 'Gosto muito de samba, jazz e rock! Se precisar de um instrumentista em alguns destes gêneros, entre em contato comigo.',
                    phone: '21993882999',
                    /* birthday: new Date(1999, 10, 11).toLocaleDateString('pt-br') */
                },
                {
                    id: '2',
                    name: 'Laura',
                    surname: 'Carvalho',
                    email: 'lauracc@gmail.com',
                    instruments: ['Canto', 'Teclado'],
                    description: 'Gosto muito de música clássica e mpb! Se precisar de um instrumentista em alguns destes gêneros, entre em contato comigo.',
                    phone: '21993882992',
                    /* birthday: new Date(1994, 2, 11).toLocaleDateString('pt-br') */
                }
            ]
        }
    },
    getters: {
        musicians(state) {
            return state.musicians;
        }
    },
    mutations: {
        signArtist(state, payload) {
            state.musicians.push(payload);
        }
    },
    actions: {
        signArtist(context, data) {
            const musicianData = {
                /* id: Math.floor(Math.random() * 10000).toString(), */
                id: Math.floor(Math.random() * 10000).toString(),
                name: data.name,
                surname: data.surname,
                email: data.email,
                instruments: data.instruments,
                description: data.description,
                phone: data.phone
            };
            context.commit('signArtist', musicianData)
        }
    }
})

export default store;