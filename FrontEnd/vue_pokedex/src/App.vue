<!-- Esta vista es la plantilla principal de la pagina para todas las vistas aqui se crea el campo de busqueda de pokedex y una navbar -->

<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Pokedex</strong></router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu"
          @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
        <div class="navbar-start">
          <div class="navbar-item">
            <div class="field has-addons">
              <div class="control">
                <input v-model.trim="search" type="text" class="input" placeholder="what are you looking for?" name="query">
              </div>
              <div class="control">
                <router-link v-bind:to="`/search/${search}`" v-bind:key="search" class="button is-success">
                  <span class="icon">
                    <i class="fas fa-search"></i>    
                  </span>
                </router-link>
                
                
                    
                  
                
              </div>

              
            </div>
            
            <!-- <form action="/search">
              <div class="field has-addons">
                <div class="control">
                  <input type="text" class="input" placeholder="what are you looking for?" name="query">

                </div>
                <div class="control">
                  <button class="button is-success">
                    <span class="icon">
                      <i class="fas fa-search"></i>
                    </span>
                  </button>

                </div>

              </div>

            </form> -->

          </div>

        </div>
        <div class="navbar-end">
          

          
        </div>

      </div>

    </nav>

    <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading}">
      <div class="lds-dual-ring"></div>
    </div>
    <section class="section">
      <!-- Aqui especificamente se llama al router view para traer las vistas en especifico la primera que se va a mostrar es HomeView siempre -->
      <router-view />
    </section>
    <footer class="footer">
      <p class="has-text-centered"> Copyright (c) 2023</p>
    </footer>
  </div>
</template>

<script>
// Aqui en especifico se sete la varible para mostrar el menu cuando se muestre la aplicacion en celular parte responsive del proyecto
export default {
  data() {
    return {
      showMobileMenu: false,
      search :''
    }
  },
}

</script>

<style lang="scss">
@import '../node_modules/bulma';

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.is-loading-bar {
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &.is-loading {
    height: 80px;
  }
}
</style>
