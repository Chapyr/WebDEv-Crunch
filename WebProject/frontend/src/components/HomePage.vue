<template>
    <div class="header-container">
      <div class="nav">
        <img src="@/components/img/logo.jpg" class="brand-logo" alt="">
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
          <li><router-link to="/product" class="routers-link">All</router-link></li>
          <li><router-link to="/men" class="routers-link">Men</router-link></li>
          <li><router-link to="/Women" class="routers-link">Women</router-link></li>
          <li><router-link to="/kids" class="routers-link">Kids</router-link></li>
        </ul>
        <header class="hero-section">
          <div class="content">
              <p class="sub-heading">best shoes collection of all time</p>
          </div>
      </header>
      <section class="collection-container">
        <a href="/women" class="collection">
            <img src="@/components/img/chaussures_femme.jpg" alt="">
            <p class="collection-women">women <br> Shoes</p>
        </a>
        <a href="/men" class="collection">
            <img src="@/components/img/chaussures_homme.jpg" alt="">
            <p class="collection-men">men <br> Shoes</p>
        </a>
        <a href="/kids" class="collection">
            <img src="@/components/img/chaussures_enfant.jpg" alt="">
            <p class="collection-title3">Kids <br> Shoes</p>
        </a>
    </section>
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
export default{
};
</script>
<style scoped>
.hero-section{
  width: 97,5%;
  height: calc(100vh - 120px);
  background-image: url('@/components/img/magasin.webp');
  background-size: cover;
  background-position: center top ;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-section .logo{
  height: 150px;
  display: block;
  margin: auto;
}

.hero-section .sub-heading{
  margin-top: 10px;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  font-size: 35px;
  font-weight: 300;
}
.hero-section .-heading{
  margin-top: 10px;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  font-size: 35px;
  font-weight: 300;
}

.collection-container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: auto;
  grid-row-gap: 40px;
}

.collection{
  position: relative;
}

.collection img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.collection p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
  font-size: 50px;
  text-transform: capitalize;
}

.collection:nth-child(3){
  grid-column: span 2;
  margin-bottom: 10px;
}


</style>
