<template>
  <div>
    <v-app-bar
      app
      color="grey darken-3"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <a href="home" class="nav__a"><v-toolbar-title>🚀Nasa~Space✨</v-toolbar-title></a>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
        >

          <v-list-item>
            <v-btn
              text
              @click="logout"
            >
              <span class="mr-1">{{ !!currentUser ? 'Cerrar Sesión' : 'Iniciar Sesión' }}</span>
              <v-icon>mdi-lock</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              to="/admin"
            >
              <span class="mr-1">Apod</span>
              <v-icon>mdi-chart-bubble</v-icon> 
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              to="/admin"
            >
              <span class="mr-1">Rover</span>
              <v-icon>mdi-star</v-icon> 
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              to="/home"
            >
              <span class="mr-1">Home</span>
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: false,
  }),
  methods: {
    ...mapActions(['setCurrentUser']),
    logout() {
      Firebase.auth().signOut().then(() => {
        this.setCurrentUser(this.user)
        this.$router.push('/login')
      })
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }  
}
</script>

<style>
.nav__a {
  text-decoration: none;
  color: #FFF !important;
  transition: .3s;
}
.nav__a:hover {
  color: rgb(185, 185, 185) !important;
}

</style>