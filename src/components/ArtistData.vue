<template>
    <div>
        <h3>{{ name }} {{ surname }}</h3>
        <div>
            <span v-for="instrument in instruments" :key="instrument">{{ instrument }}</span>
        </div>
        <div class="contato">
            <router-link :to="artistDetailRoute">Contato</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'id',
        'name',
        'surname',
        'instruments'
    ],
    computed: {
        artistDetailRoute() {
            return this.$route.path + '/' + this.id;
        }
    }
}
</script>

<!-- <template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="coachContactLink">Contact</router-link>
      <router-link :to="coachDetailsLink">View Details</router-link>
    </div>
  </li>
</template> -->

<!-- <script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact' // /coaches/c1/contact
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id; // /coaches/c1
    }
  }
}
</script> -->