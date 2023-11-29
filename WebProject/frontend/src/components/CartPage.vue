<template>
  <div class="header-container">
      <div class="nav">
        <a href="/"><img src="@/components/img/logo.jpg" class="brand-logo" alt=""></a>
        <div class="nav-items">
          <div class="nav-item">
            <router-link to="/login">
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
  <div>
      <h1>Come see your informations!</h1>
    <div class="infos-container">
      <a href="/add"><button type="submit" class="add-button">Add the product</button></a><br>
      <a href="/delete"><button type="submit" class="delete-button">Delete the product</button></a><br>
      <a href="/update"><button type="submit" class="update-button">Update the rpoduct</button></a>
    </div>
  </div>
  <div class="log-out">
    <h2 class="section-title1">You're already leaving us?</h2>
    <a><router-link to="/register" class="log-out-button" >Log Out</router-link></a>
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
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async display() {
      this.error = ''; // Réinitialiser le message d'erreur

      try {
        const response = await fetch('http://localhost:3000/api/auth/:id', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        if (response.status === 200) {
          const { token } = await response.json();
          localStorage.setItem('token', token);
          // Vous pouvez rediriger vers la page principale ou effectuer d'autres actions
          this.$router.push('/');
        } else {
          throw new Error('La connexion a échoué. Veuillez vérifier vos informations.');
        }
      } catch (error) {
        this.error = error.message; // Afficher le message d'erreur
      }
    }
  }
};
</script>
<style scoped>
/* You can add styles for the table here if needed */
.log-out-button{
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
.infos-container {
text-align: right; /* Align the content to the right */
margin: 50px auto;
margin-bottom: 200px; /* Fix the typo in the margin property */
width: 800px;
padding: 20px;
background-size: cover;
background-position: center;
color: black; 
background-color: rgb(214, 19, 32);
padding: 5px; 
border-radius: 20px;
}
.add-button:hover, .delete-button:hover, .update-button:hover {
background-color: rgb(72, 0, 255); 
transition: background-color 1s ease;
}
.add-button, .delete-button, .update-button {
display: block;
width: 20%; /* Ajustez la largeur selon vos besoins */
margin-top: 5px;
background-color: rgb(9, 7, 66);
color: #fff; 
padding: 10px 0; /* Ajustez la marge intérieure selon vos besoins */
border: none;
border-radius: 5px;
cursor: pointer;
text-transform: uppercase;
font-weight: bold;
margin-left: 630px;
text-decoration: none;
}


.log-out{
margin-top: -100px;
}
</style>