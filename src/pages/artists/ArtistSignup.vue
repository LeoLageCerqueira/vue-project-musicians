<template>
    <artist-form @save-input="saveInput"></artist-form>
</template>

<script>
import ArtistForm from '../../components/ArtistForm.vue'
export default {
    components: {
        ArtistForm
    },
    methods: {
        saveInput(data) {
            this.$store.dispatch('signArtist', data);
            this.$router.replace('/artists');
        }
    }
}




</script>