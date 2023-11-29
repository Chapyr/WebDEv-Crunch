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
            <li><router-link to="/Women" class="routers-link">Women</router-link></li>
          </ul>
          <div class="prod3">
            <section class="product-details3">
                <div class="image-slider3">
                    <div class="product-images">
                    </div>
                </div>
            </section>
            <div class="product-info3">
                <h1>ULTRA PRO FG/AG</h1>
                <div class="price">$109.00</div>
                <p>Kids</p>
                <!-- Autres informations sur le produit -->
                <div class="size">
                    <label for="age">Size :</label>
                    <input type="number" id="size" min="28" max="35"/>
                </div>
                <button type="submit" class="submit-button">BUY NOW</button>
                <button type="submit" class="bag">ADD TO BAG</button>
            </div>
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
import axios from 'axios';

export default {
    name: 'KidsProducts',
    data() {
    return {
        responseData: {
            message: '',
            data: { items: [] },
        },
    };
},
mounted() {
    // Make an Axios GET request to your backend endpoint
    axios.get('http://localhost:8080/kids')
        .then((response) => {
            // Assign the response data to the responseData property
            this.responseData = response.data;
        }).
        catch((error) => {
            console.error('Error fetching data:', error);
        });
    },
}
</script>
<style scoped>
.prod3{
margin-left: 500px;}
.product-details3{
    width: 100%;
    padding: 60px 10vw;
    display: flex;
    justify-content: space-between;
}
.image-slider3{
    width: 440px ;
    height: 300px;
    position: relative;
    background-image: url('@/components/img/puma1.jpg');
    background-size: cover;
    left: -100px;
    margin-bottom: -50px;
}
.product-info3 {
    max-width: 550px; /* Ajustez la largeur maximale selon vos besoins */
    text-align: center; /* Centrez le contenu horizontalement */
}

.product-info3 h1 {
    text-transform: uppercase; /* Met la marque en majuscules */
    margin-bottom: 5px; /* Ajoute un espace en bas */
    font-size:14px;
}

.product-info3 .price {
    font-weight: bold; /* Met le prix en gras */
    font-size: 1.2em; /* Ajustez la taille de la police du prix selon vos besoins */
}
.bag{
    margin-top: 5px;
    background-color: rgb(214, 19, 32);
    color: black; 
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 10px; 
}
.bag:hover{
    background-color: rgb(255, 5, 50);
}
</style>