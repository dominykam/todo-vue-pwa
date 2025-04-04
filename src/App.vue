<script>
export default {
  name: "App"
};
</script>


<template> 
  <nav>
    <div class="link-style">
      <router-link to="/" active-class="active-link" >Overview</router-link>
      <router-link to="/input" active-class="active-link">Add new</router-link>

    </div> 
  </nav>

  <router-view></router-view> <!-- This will display the correct page -->
</template>


<style scoped>
.link-style {
  display: flex;
  gap: 20px;
  margin: 20px;
 
}

.link-style a {
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  transition: 0.3s;
}

.link-style a:hover {
  color: gray;
}

.active-link {
  background-color: rgb(189, 209, 199);
  padding: 10px 10px;
  border-radius: 5px;

}
</style>

