<template>
  <div>
    <h1>Dashboard</h1>
    <div class="dashboard-grid">
      <router-link to="/register" class="dashboard-item">Register</router-link>
      <router-link to="/read" class="dashboard-item">Account</router-link>
      <router-link to="/update" class="dashboard-item">Update</router-link>
      <router-link to="/delete" class="dashboard-item">Delete</router-link>
      <router-link to="/login" class="dashboard-item">Login</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'DashboardPage',
};
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
}

.dashboard-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.dashboard-item:hover {
  background-color: #2980b9;
}
</style>