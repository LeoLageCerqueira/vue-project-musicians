<template>
    <div>
        <main>
            <section>
                <ul>
                    <artist-data v-for="musician in musicians" 
                    :key="musician.id"
                    :id="musician.id"
                    :name="musician.name"
                    :surname="musician.surname"
                    :instruments="musician.instruments"
                    ></artist-data>
                </ul>
            </section>
        </main>
    </div>
</template>

<script>
import ArtistData from '../../components/ArtistData.vue'

    export default {
        components: {
            ArtistData,
        },
        computed: {
            musicians() {
                return this.$store.getters.musicians;
            },
            /* instruments() {
                return this.$store.getters.instruments;
            } */
        }
    }
</script>

<style scoped>
div {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}
</style>