<template>
    <header>
        <div class="header-container">
          <h1>Shoesocket</h1>
          <div class="logo-container">
            <img src="@/components/img/logo.jpg" alt="Logo" class="logo-image" />
          </div>
          <div class="link-container">
            <ul id="menu">
              <li><router-link to="/" class="routers-link">Home</router-link></li>
              <li><router-link to="/product" class="routers-link">All</router-link></li>
              <li><router-link to="/men" class="routers-link">Men</router-link></li>
              <li><router-link to="/women" class="routers-link">Women</router-link></li>
              <li><router-link to="/kids" class="routers-link">Kids</router-link></li>
            </ul>
          </div>
        </div>
    </header>
    <h2>Come update your informations!</h2>
    <div class="update-container">
        <form @submit.prevent="updateCustomer">
            <div class="form-item">
                <label for="fname">First Name:</label>
                <input type="text" id="fname" v-model="newFname" />
            </div>
            <div class="form-item">
                <label for="lname">Last Name:</label>
                <input type="text" id="lname" v-model="newLname" />
            </div>
            <div class="form-item">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="newEmail" />
            </div>
            <div class="form-item">
                <label for="age">Age:</label>
                <input type="number" id="age" v-model="newAge" />
            </div>
            <div class="form-item">
                <label for="age">Adress :</label>
                <input type="text" id="nbAdress" v-model="newnbAdress" />
            </div>            
            <div class="form-item">
                <label for="age">Zip Code:</label>
                <input type="number" id="zip-code" v-model="newZipCode" />
            </div>
            <div class="form-item">
                <label for="city">City:</label>
                <input type="text" id="city" v-model="newCity" />
            </div>
            <div class="form-item">
                <label for="city">Country :</label>
                <input type="text" id="country" v-model="newCountry" />
            </div>
        </form>
      <button type="submit" class="submit-button">Update Customer</button>
    </div>
    <div v-if="updateSuccess" class="success-message">Customer updated successfully!</div>
    <div v-if="updateError" class="error-message">Error updating customer. Please try again later.</div>
    <footer>
        <div class="header-container">
          <img src="@/components/img/nike.jpg" alt="Nike" class="nike" style="width: 20%; height: auto; ">
          <a href="https://www.instagram.com/efrei_tennis_de_table"><img src="https://www.unipile.com/wp-content/uploads/2022/09/logo_instagram.png" alt="Instagram" class="instagram" style="width: 10%; height: auto; "/></a>
          <img src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg" alt="Adidas" class="Adidas" style="width: 20%; height: auto; ">
        </div>
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

.form-label {
  font-weight: bold;
  color: white; /* Couleur du texte des étiquettes */
  font-size:14px;
}

.form-input {
  width: 300px;
  padding: 10px;
  margin: 5px 0;
}
.form-item {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
label {
  display: inline-block;
  margin-bottom: 5px;
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