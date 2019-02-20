<template>
  <span>
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </span>  
</template>

<script>

export default {
    name: 'sandbox',
    title: 'Sandbox - TLO',
    components: {
        
    }
};
</script>

<style>
.container {
  display: flex;
  height: 500px;
  width: 100%;
  justify-content: space-between;
  
}

.item {
  width: 200px;
}

.item:nth-child(1) {
  background-color: burlywood;
}
.item:nth-child(2) {
  background-color: teal;
}
.item:nth-child(3) {
  background-color: rosybrown;
}
</style>
