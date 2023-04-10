<template>
  <main class="vh100">
    <section class="container-xl">
      <!-- mobile layout -->
      <div class="d-flex flex-column d-lg-none flex-nowrap">
        <div>
          <p class="text-center">
            <span class="first-word">Combien de fois </span>
            <span class="second"
              >ne vous êtes vous sentis "pas tout à fait vous-même" dans vos
              vêtements?
            </span>
            <br />
            <span class="third">
              Persuadée que la tenue de chaque individu devrait représenter
              chaque facette de sa personnalité, Genre crée des pièces qui
              révèlent vos énergies.
            </span>
          </p>
          <div class="text-center home-logo">
            <img src="/images/GENRE LOGO BLANC.png" alt="genre_logo" />
          </div>
        </div>

        <div class="text-center home-img">
          <img src="/images/homeimg.png" alt="home page image" />
        </div>
        <div>
          <p class="text-center">
            <span class="last">
              Aujourd'hui : vos énergies sont-elles plutôt <i>féminines</i> ou
              <i>masculines</i>? Pour découvrir les pièces qui vous permettent
              de l'exprimer :
            </span>
          </p>
          <div class="text-center my-4">
            <button type="button" class="home-button">
              Découvrir mes énergies
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- desktop layout -->
    <div class="d-none d-lg-block">
      <div class="d-flex justify-content-around mx-auto my-5 row">
        <div class="col-5 my-2">
          <div class="home-img-desk">
            <img
              src="/images/DSC03248.JPG"
              class="img-fluid"
              alt="image home desktop"
            />
          </div>
        </div>
        <div class="col-7 d-flex flex-column">
          <div class="text-center">
            <p>
              <span class="first-desk"
                >Combien de fois ne vous êtes vous sentis "pas tout à fait
                vous-même" dans vos vêtements?</span
              >
              <br />

              <span class="second-desk">
                Persuadée que la tenue de chaque individu devrait représenter
                chaque facette de sa personnalité, Genre crée des pièces qui
                révèlent vos énergies.
              </span>
            </p>
            <div class="text-end home-logo mb-5">
              <img src="/images/GENRE LOGO BLANC.png" alt="genre_logo" />
            </div>
          </div>
          <div class="mt-5">
            <p class="text-center mx-5">
              <span class="last-desk">
                Aujourd'hui : vos énergies sont-elles plutôt
                <i>féminines</i> ou <i>masculines</i>? Pour découvrir les pièces
                qui vous permettent de l'exprimer :
              </span>
            </p>
            <div class="text-center my-4">
              <router-link to="/question-text">
                <button type="button" class="home-button">
                  Découvrir mes énergies
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: black;
  color: white;
}

p {
  margin-top: 30px;
  opacity: 0.85;
}

.first-word {
  font-family: "Libre Baskerville", serif;
  color: #ede9ca;
  font-size: 25px;
}

.second {
  color: #ede9ca;
  font-family: "Inter", sans-serif;
  font-size: 25px;
}

.third {
  font-family: "Inter", sans-serif;
  font-size: 25px;
}

.home-logo > img {
  height: 200px;
  opacity: 0.75;
}

.home-img > img {
  height: 300px;
  margin-bottom: 60px;
}

.last {
  font-family: "Inter", sans-serif;
  font-size: 25px;
}

.home-button {
  font-family: "Libre Baskerville", serif;
  color: white;
  font-size: 22px;
  opacity: 0.85;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  background-color: black;
  border: solid 1px #ede9ca;
  line-height: 22px;
  height: 100px;
  width: 80%;
  margin-top: 20px;
}

/* Desktop */

.home-img-desk > img {
  height: 100%;
}

.first-desk {
  color: #ede9ca;
  font-family: "Inter", sans-serif;
  font-size: 35px;
}

.second-desk {
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 25px;
}

.last-desk {
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 22px;
}
</style>
