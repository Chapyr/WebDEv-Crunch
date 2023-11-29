<template>
    <div class="header-container">
        <div class="nav">
          <img src="@/components/img/logo.jpg" class="brand-logo" alt="">
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
            <li><router-link to="/product" class="routers-link">All</router-link></li>
            <li><router-link to="/men" class="routers-link">Men</router-link></li>
            <li><router-link to="/Women" class="routers-link">Women</router-link></li>
            <li><router-link to="/kids" class="routers-link">Kids</router-link></li>
          </ul>
</template>