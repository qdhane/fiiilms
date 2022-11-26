<template>
  <div>
    <header class="navbar">
        <div class="logo">
           <router-link to="/"><a href="#"><img src="../assets/logo.svg"></a></router-link> 
        </div>
        <div class="menu-btm"></div>
    </header>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.navbar{
  padding-top: 50px;
  padding-left: 200px;
  padding-right: 200px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: #fff;
}
.logo{
  color: black;
}
</style>