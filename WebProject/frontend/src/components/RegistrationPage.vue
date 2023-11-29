
<template>
  <div class="header-container">
    <div class="nav">
      <a href="/"><img src="@/components/img/logo.jpg" class="brand-logo" alt=""></a>
      <div class="nav-items">
        <div class="nav-item">
          <router-link to="/read">
            <img src="@/components/img/profil.webp" alt="">
          </router-link>
          <router-link to="/cart">
            <img src="@/components/img/basket.jpg" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
      <ul class="links-container">
        <li><router-link to="/" class="routers-link">Home</router-link></li>
        <li><router-link to="/product" class="routers-link">All</router-link></li>
        <li><router-link to="/men" class="routers-link">Men</router-link></li>
        <li><router-link to="/women" class="routers-link">Women</router-link></li>
        <li><router-link to="/kids" class="routers-link">Kids</router-link></li>
      </ul>
  <h2 class="page-title">New client? Create your account!</h2>
  <div class="registration-container">
    <form @submit.prevent="submit" class="registration-form">

      <label for="e-mail" class="form-label">E-mail :</label>
      <input type="email" id="email" v-model="email" class="form-input" required>
      <p></p>
      <label for="password" class="form-label">Password :</label>
      <input type="password" id="password" v-model="password" class="form-input" required>
      <p></p>
      <label for="cpassword" class="form-label">Confirm your password :</label>
      <input type="password" id="cpassword" v-model="cpassword" class="form-input" required>
      <button type="submit" class="submit-button">Register</button>
    </form>

    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
  <footer>
    <div class="footer-container">
      <img src="@/components/img/nike.jpg" alt="Nike" class="nike" style="width: 20%; height: auto; ">
      <img src="https://www.thesun.co.uk/wp-content/uploads/2022/10/crop-20106792.jpg?w=620" alt="Vans" class="Vans" style="width: 15%; height: auto; margin-left: 100px">
      <a href="https://www.instagram.com/efrei_tennis_de_table" class="instagram-link">
        <img src="https://www.unipile.com/wp-content/uploads/2022/09/logo_instagram.png" alt="Instagram" class="instagram" style="width: 15%; height: auto; justify content: center"/></a>
        <img src="https://baselineracquets.co.za/wp-content/uploads/2023/10/Puma-Logo.png" alt="Puma" class="Puma" style="width: 15%; height: auto; margin-right: 100px">
      <img src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg" alt="Adidas" class="Adidas" style="width: 20%; height: auto; ">
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">support emails - help@shoeshop.com, customersupport@shoeshop.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <p class="footer-credit">ShoeShop, Best Shoes online store</p>
  </footer>
</template>

<script>
/*
import '@/components/script.css';

export default {
  data() {
    return {
      email: '',
      password: '',
      cpassword: '',
      error: ''
    };
  },
  methods: {
    submit() {
      this.error = ''; // Réinitialiser le message d'erreur

      const headers = {
        'Content-Type': 'application/json'
      };

      if (this.password !== this.cpassword) {
        this.error = "Passwords do not match.";
        return;
      }

      // Envoi de la demande d'inscription
      fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        })
      })
        .then(response => {
          if (response.status === 201) {
            // Inscription réussie
            console.log('User created successfully!');

            // Connexion automatique après l'inscription
            return fetch('http://localhost:3000/api/auth/login', {
              method: 'POST',
              headers: headers, // Utilisation des mêmes headers
              body: JSON.stringify({
                email: this.email,
                password: this.password
              })
            });
          } else {
            throw new Error('Failed to create user. Please check your information.');
          }
        })
        .then(response => {
          if (response.status === 200) {
            // Connexion réussie
            // Vous pouvez rediriger vers la page principale ou effectuer d'autres actions
            this.$router.push('/');
          } else {
            throw new Error('La connexion a échoué. Veuillez vérifier vos informations.');
          }
        })
        .catch(error => {
          console.error(error);
          // Gérer les erreurs ici
        });
    }
  }
};*/
import '@/components/script.css';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      cpassword: '',
      error: ''
    };
  },
  methods: {
    submit() {
      this.error = ''; // Réinitialiser le message d'erreur

      const headers = {
        'Content-Type': 'application/json'
      };

      if (this.password !== this.cpassword) {
        this.error = "Passwords do not match.";
        return;
      }

      // Envoi de la demande d'inscription
      fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        })
      })
        .then(response => {
          if (response.status === 201) {
            // Inscription réussie
            console.log('User created successfully!');

            // Connexion automatique après l'inscription
            return fetch('http://localhost:3000/api/auth/login', {
              method: 'POST',
              headers: headers, // Utilisation des mêmes headers
              body: JSON.stringify({
                email: this.email,
                password: this.password
              })
            }); 

          } else {
            throw new Error('Failed to create user. Please check your information.');
          }
        })


        .then(async response => {           //il FAUT que la réponse soit asynchrone pour utiliser le token avec await
          if (response.status === 200) {
            // Connexion réussie
            // Vous pouvez rediriger vers la page principale ou effectuer d'autres actions
            const { token } = await response.json(); // Extraire le jeton de la réponse
            localStorage.setItem('token', token); // Enregistrer le jeton dans le stockage local
            this.$router.push('/');
          } else {
            throw new Error('La connexion a échoué. Veuillez vérifier vos informations.');
          }
        })
        .catch(error => {
          console.error(error);
          // Gérer les erreurs ici
        });
    }
  }
};
</script>

<style scoped>
.registration-container {
  text-align: center;
  margin: 50px auto;
  margin-bottom: 200spx;
  width: 500px;
  padding: 20px;
  background-size: cover;
  background-position: center;
  color: black; 
  background-color: rgb(214, 19, 32); /* Couleur de fond derrière les étiquettes */
  padding: 5px; 
  border-radius: 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
}
.gender{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px 0;
}
.registration-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-label {
  font-weight: bold;
  color: white; /* Couleur du texte des étiquettes */
  font-size:14px;
}

.form-input {
  width: 300px;
  padding: 10px;
  margin: 10px 0;
}

.submit-button {
  margin-top: 5px;
  background-color: rgb(7, 6, 65); /* Couleur de fond du bouton */
  color: #fff; /* Couleur du texte du bouton */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: rgb(72, 0, 255); 
  transition: background-color 0.3s ease;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>