<template>
    <div class="background">
        <div class="background-overlay">
            <h2>Welcome to Pizza Planet</h2>
            <img src="../assets/images/roller.png" alt="roller">
            <h3>Feeling hungry</h3>
            <button class="order_btn" @click="goToMenu">Lets order</button>
        </div>
    </div> 
</template>

<script>
export default {
    name: "home",
    methods: {
        goToMenu() {
            this.$router.push({ name: "menuLink"})
        }
    } 
};
</script>


<style>
  h1, h2 {
    margin: 6%;
  }

  .background {
    background: #eee;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0;
  }

.background-overlay {
    display: flex;
    flex-direction: column;
    background: #f1e6da;
    opacity: 0.8;
    width: 0 auto;
    padding: 5px;
    align-items: center;
}

.background-overlay > img {
    max-width: 15%;
}

.order_btn {
    background: #f79f38;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 10px;
    cursor: pointer;
}
</style>