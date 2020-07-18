<template>
  <div>
    <v-app class="grey lighten-3">
      <v-card width='400px' class="mx-auto my-auto lighten-5">
        <v-card-title class="pb-0">
        <h1 class="mx-auto mb-5">Autentificación</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label='Usuario' 
            prepend-icon='mdi-account-circle'
            v-model="user"
            color="grey lighten-1"
            />
            <v-text-field label='Contraseña' :type="showPassword ? 'text' : 'password'"
              prepend-icon='mdi-lock'
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              color="grey lighten-1"
              />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <div class="my-5 text-center">
          <!-- <v-btn class="mx-2" color="black" dark to="/home">╠ Volver a Home ╣</v-btn> -->
          <v-btn color='black' @click="login">╠ Login ╣</v-btn>
        </div>
      </v-card>
    </v-app>
  </div> 
</template>

<script>
import Firebase from 'firebase'
import { mapActions } from 'vuex'
export default {
  data: () => ({
    user: '',
    password: '',
    showPassword: false
  }),
  methods: {
    ...mapActions(['setCurrentUser']),
    login() {
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(() => {
        this.$router.push('/')
        this.setCurrentUser(this.user)
        alert(`Bienvenid@ ${this.user}`)
      }).catch(() => {
        this.setCurrentUser(null)
        alert('Datos Ingresados no Válidos... Vuelve a Ingresar tus Credenciales')
      })
    }
  },
}
</script>

<style>

</style>