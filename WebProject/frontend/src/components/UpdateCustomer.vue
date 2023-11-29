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
    <h2>Come update your informations!</h2>
    <div class="update-container">
        <form @submit.prevent="updateCustomer" class="update-form">
            <div class="form-item">
                <label for="fname">First Name:</label>
                <input type="text" id="fname" v-model="newFname" class="form-input" />
            </div>
            <div class="form-item">
                <label for="lname">Last Name:</label>
                <input type="text" id="lname" v-model="newLname" class="form-input"/>
            </div>
            <div class="form-item">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="newEmail" class="form-input"/>
            </div>
        </form>
      <button type="submit" class="submit-button">Update Customer</button>
    </div>
    <div v-if="updateSuccess" class="success-message">Customer updated successfully!</div>
    <div v-if="updateError" class="error-message">Error updating customer. Please try again later.</div>
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
    data() {return {
        customerId: null,newFname: '',newLname: '',newEmail: '',newAge: null,newnbAdress: null,newStreet : '',newZipCode: null,newCity: '',newCountry: '',updateSuccess: false,updateError: false,};
    },
    methods: {
        async updateCustomer() {
            try {
                const response = await axios.put(`http://localhost:4000/updatecustomer/${this.customerId}`, {
                    fname: this.newFname,
                    lname: this.newLname,
                    email: this.newEmail,
                    age: this.newAge,
                    city: this.newCity,});
                if (response.status === 200) {
                    this.updateSuccess = true;
                } else {
                    this.updateError = true;
                }
            } catch (error) {
                console.error('Error updating customer:', error);
                this.updateError = true;
            }
        },
    },
};
</script>
<style scoped>
.update-container {
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

.registration-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-item {
  font-weight: bold;
  color: white; /* Couleur du texte des étiquettes */
  font-size:14px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  margin-left: -100px;
  margin-right: -100px;
  align-items: center;
}

.form-input {
  width : 60%;
  padding: 10px;
  margin: 5px 0;
  height : -30px;
}
.label {
  display: inline-block;
  margin-bottom: 5px;
  width: 100%;
}

.submit-button {
  margin-top: 5px;
  background-color: rgb(0,187,255); /* Couleur de fond du bouton */
  color: #000; /* Couleur du texte du bouton */
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