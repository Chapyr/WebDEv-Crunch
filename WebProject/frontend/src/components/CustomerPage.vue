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
        <ul v-if="customers.length">
          <li v-for="customer in customers" :key="customer.lname">
              <strong>Email:</strong> {{ customer.email }}<br>
              <strong>Password:</strong> {{ customer.password }}<br>
          </li>
      </ul>      
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
    name: 'CustomerPage',
    data() {
        return {
            customers: [], // Initialize as an empty array
        };
    },
    mounted() {
        // Make an Axios GET request to fetch customer data from your backend
        axios.get('http://localhost:3000/read')
        .then((response) => {
            // Assign the entire array of customers to the 'customers' dataproperty
            this.customers = response.data;
        })
        .catch((error) => {
            console.error('Error fetching customers:', error);// Handle error as needed
        });
    },
}
</script>