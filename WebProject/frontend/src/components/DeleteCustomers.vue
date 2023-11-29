<template>
    <header>
        <div class="header-container">
          <h1>Shoesocket</h1>
          <img src="@/components/img/logo.jpg" alt="Logo" class="logo-image" />
          <div class="link-container">
            <ul id="menu">
                <li><router-link to="/" class="router-link">Home</router-link></li>
                <li><router-link to="/register" class="router-link">Register</router-link></li>
                <li><router-link to="/read" class="router-link">Infos</router-link></li>
                <li><router-link to="/update" class="router-link">Update</router-link></li>
                <li><router-link to="/create" class="router-link">Create</router-link></li>
                <li><router-link to="/login" class="router-link">Login</router-link></li>
            </ul>
          </div>
        </div>
    </header>
    <div>
        <h2>Customer service no longer suits you? Delete your account!</h2>
        <form @submit.prevent="deleteCustomer">
            <div>
                <label for="fname">First Name:</label>
                <input type="text" id="fname" v-model="newFname" />
            </div>
            <div>
                <label for="lname">Last Name:</label>
                <input type="text" id="lname" v-model="newLname" />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="newEmail" />
            </div>
            <button type="submit" class="btn btn-danger">Delete Customer</button>
        </form>
    </div>
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
export default {
    data() {
        return {
            customerId: '',
        };
    },
    methods: {
        deleteCustomer() {
            // Send a DELETE request to your server with the customer ID
            fetch(`http://localhost:4000/deletecustomer/${this.customerId}`, 
            {
                method: 'DELETE',
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('Failed to delete customer');
                    throw new Error('Customer not found');
                }
            })
            .then((deletedCustomer) => {
                console.log('Customer deleted successfully:', deletedCustomer);
                // You can add a success message or redirection logic here ifneeded.
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        },
    },
};
</script>

