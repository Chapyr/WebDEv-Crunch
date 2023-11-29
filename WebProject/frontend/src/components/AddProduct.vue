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
          <h2>Ajouter un produit</h2>
    <div class="add-container">
        <form @submit.prevent="createThing" class="addP-form">
            <label for="title" class="form-label">Name of the product :</label>
            <input type="title" id="title" v-model="title" class="form-input" required><br>

            <label for="description" class="form-label">Description :</label>
            <input type="description" id="description" v-model="description" class="form-input" required><br>

            <label for="imageUrl" class="form-label">Picture's URL :</label>
            <input type="imageUrl" id="imageUrl" v-model="imageUrl" class="form-input" required><br>

            <label for="price" class="form-label">Price:</label>
            <input type="price" id="price" v-model="price" class="form-input" required><br>

            <button type="createThing" class="submit-button">Create Product</button>
        </form>

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
  name: 'AddProduct',
    data() {
        return {
            title: '',
            description: '',
            imageUrl: '',
            userId: '',         //comment récupérer ici le userId ??
            price: 0,
            error: ''
        };
    },
    methods: {
        createThing() {
            this.error = ''; // Réinitialiser le message d'erreur


            const headers = {
                'Content-Type': 'application/json'
            };

            // Envoi de la demande de création d'objet
            fetch('http://localhost:3000/api/stuff/createThing/', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    title: this.title,
                    description: this.description,
                    imageUrl: this.imageUrl,
                    userId: this.userId,            //comment récupérer ici le userId ??
                    price: this.price,
                })
            })
                .then(response => {
                    if (response.status === 200) {
                        // Inscription réussie
                        console.log('Object added successfully!');
                        this.$router.push('/newproduct');

                    } else {
                        throw new Error('Failed to post an article. Please check your information.');
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
.add-container {
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
.addP-form {
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
</style>