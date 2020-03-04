<template>
    <header>
        <div class="header_logo">
            <img src= "../assets/images/planet.png" alt="pizza planet">
            <h1 href="/">Pizza Planet</h1>
        </div>
        <nav>
          
  <ul class="navbar-nav">
        <router-link :to="{ name: 'homeLink' }" tag="li"><a class="nav-link">home</a><span> ~ </span></router-link>
        <router-link :to="{ name: 'menuLink' }" tag="li"><a class="nav-link">menu</a><span> ~ </span></router-link>
        <router-link :to="{ name: 'aboutLink' }" tag="li"><a class="nav-link">about</a><span> ~ </span></router-link>
        <router-link :to="{ name: 'contactLink' }" tag="li"><a class="nav-link">contact</a><span> ~ </span></router-link>
      </ul>
         
        </nav>
    </header>
</template>

<script>
export default {
    name: 'appHeader'
}
</script>

<style scoped>
h1 {
    font-size: 1.3em;
}
.header_logo {
  background-image: linear-gradient(
    45deg,
    #d85226 25%,
    #f79e38 25% 50%,
    #d85226 50% 75%,
    #f79e38 75%,
    #f79e38 100%
  );
    background-size: 80px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

}
.header_logo img {
    max-width: 25vw;
}

ul {
    padding: 10px 0;
}

li {
    display: inline-block;
}

@media screen and (min-wdith: 900px) {
     .header_logo img {
    max-width: 25vw;
}
}
</style>