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
            <li><router-link to="/kids" class="routers-link">Kids</router-link></li>
          </ul>
          <div class="premiere-ligne">
          <div class="prod2">
            <section class="product-details2">
                <div class="image-slider2">
                    <div class="product-images">
                    </div>
                </div>
            </section>
            <div class="product-info2">
                <h1>Nike Air Force</h1>
                <div class="price">$119.00</div>
                <p>Women</p>
                <!-- Autres informations sur le produit -->
                <div class="size">
                    <label for="age">Size :</label>
                    <input type="number" id="size" min="30" max="45"/>
                </div>
                <button type="submit" class="submit-button">BUY NOW</button>
                <button type="submit" class="bag">ADD TO BAG</button>
            </div>
        </div> 
          <div class="prod4">
            <section class="product-details4">
                <div class="image-slider4">
                    <div class="product-images">
                    </div>
                </div>
            </section>
            <div class="product-info4">
                <h1>VANS OLD SKOOL</h1>
                <div class="price">$79.99</div>
                <p>Women</p>
                <!-- Autres informations sur le produit -->
                <div class="size">
                    <label for="age">Size :</label>
                    <input type="number" id="size" min="35" max="45"/>
                </div>
                <button type="submit" class="submit-button">BUY NOW</button>
                <button type="submit" class="bag">ADD TO BAG</button>
            </div>
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

</script>

<style>
.premiere-ligne{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: auto;
    grid-row-gap: 40px;
}
.prod2{
    margin-left:200px;
}
.prod4{
    margin-left: -50px;
}
.image-slider2{
    width: 440px ;
    height: 300px;
    position: relative;
    background-image: url('@/components/img/nike1.jpg');
    background-size: cover;
    left: 50px;
    margin-bottom: -50px;
}
.image-slider4{
    width: 472px ;
    height: 300px;
    position: relative;
    background-image: url('@/components/img/vans1.jpg');
    background-size: cover;
    left: 100px;
    margin-bottom: -50px;
}
.size{
    justify-content: center;
    color: black; /* Couleur du texte de l'étiquette de taille */
    padding: 10px 20px; /* Rembourrage de l'étiquette de taille */
    font-size: 16px; /* Taille de la police de l'étiquette de taille */
    border: none; /* Supprimer la bordure de l'étiquette de taille */
    border-radius: 5px; /* Arrondi des bords de l'étiquette de taille */
    cursor: pointer;
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
.product-info2 {
    max-width: 550px; /* Ajustez la largeur maximale selon vos besoins */
    text-align: center; /* Centrez le contenu horizontalement */
    margin-top: 60px;
}

.product-info2 h1 {
    text-transform: uppercase; /* Met la marque en majuscules */
    margin-bottom: 5px; /* Ajoute un espace en bas */
    font-size:14px;
}

.product-info2 .price {
    font-weight: bold; /* Met le prix en gras */
    font-size: 1.2em; /* Ajustez la taille de la police du prix selon vos besoins */
}
.product-info4 {
    max-width: 600px; /* Ajustez la largeur maximale selon vos besoins */
    text-align: center; /* Centrez le contenu horizontalement */
    margin-top: 50px;
}

.product-info4 h1 {
    text-transform: uppercase; /* Met la marque en majuscules */
    margin-bottom: 5px; /* Ajoute un espace en bas */
    font-size:14px;
}

.product-info4 .price {
    font-weight: bold; /* Met le prix en gras */
    font-size: 1.2em; /* Ajustez la taille de la police du prix selon vos besoins */
}
</style>