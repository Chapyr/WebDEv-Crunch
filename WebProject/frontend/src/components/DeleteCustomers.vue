<template>
    <div class="header-container">
      <div class="nav">
        <a href="/">
        <img src="@/components/img/logo.jpg" class="brand-logo" alt=""></a>
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
      <li><router-link to="/women" class="routers-link">Womn</router-link></li>
      <li><router-link to="/kids" class="routers-link">Kids</router-link></li>
    </ul>
    <h2 class="section-title1">You can delete your account here</h2>
<!--<a><router-link to="/register" class="register-button" >Login</router-link></a>-->
  
    <h2 class="section-title2">Delete your account</h2>
    <div class="deleteUser-container">
      <form @submit.prevent="deleteUser" class="deleteUser-form">
        <label for="email" class="form-label">E-mail:</label>
        <input type="email" id="email" v-model="email" class="form-input" required>
        <p></p>
        <label for="password" class="form-label">Password:</label>
        <input type="password" id="password" v-model="password" class="form-input" required>
  
        <button type="submit" class="submit-button">Delete User</button>
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
  import '@/components/script.css';
  import { jwtDecode } from 'jwt-decode'; // Import jwt-decode library for frontend
  export default {
    name: 'Delete',    
    data() {
      return {
        email: '',
        password: '',
        userId: '', // Initialize userId to an empty string
        error: ''
      };
    },
    created() {
        // Get the token from local storage
        const token = localStorage.getItem('token');
        if (token) {
            // Decode the token to extract the id ?
            const decoded = jwtDecode(token);
            if (decoded) {
                this.userId = decoded.userId; // Assuming 'userId' is the key in your JWT payload
            }
        }
    },

    methods: {
      async deleteUser() {
        this.error = ''; // Réinitialiser le message d'erreur
  
        try {
          const response = await fetch('http://localhost:3000/api/auth/deleteUser', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password
            })
          });
  
          if (response.status === 200) {
            // Connexion réussie
            // Vous pouvez rediriger vers la page principale ou effectuer d'autres actions
            console.log('object deleted !')
            this.$router.push('/');
          } else {
            throw new Error('La connexion a échoué. Veuillez vérifier vos informations.');
          }
        } catch (error) {
          this.error = error.message; // Afficher le message d'erreur
        }
      },
      logout() {
            localStorage.removeItem('token'); // Remove the token from local storage
            // Redirect the user to the login page
            this.$router.push('/login');
        }

    }
  };



  </script>





  
  <style scoped>
  .deleteUser-container {
    text-align: center;
    margin: 10px auto;
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
  .section-title1{
    margin-bottom :30px;
  }
  .section-title2{
    margin-top: 50px;
  }
  
  .deleteUser-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-label {
    font-weight: bold;
    color: white; 
    font-size: 14px;
  }
  
  .form-input {
    width:300px;
    padding: 10px;
    margin: 5px 0;
  }
  .register-button {
    background-color: #fff; /* Rouge foncé */
    color: rgb(7, 6, 65); /* Blanc */
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 1000px;
    margin-bottom: 2000px;
    text-transform: uppercase;
    border: 2px solid rgb(7, 6, 65);
    text-decoration: none;
    font-weight: bold;
  }
  .register-button:hover{
    background-color: rgb(7, 6, 65);
    color:#fff;
    transition: 2s;
  }
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>