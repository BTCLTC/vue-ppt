<template>
  <div class="ppt">
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="bomb-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="normal-rocket"></div>
    <div class="text">web的发展和前景</div>
    <input type="text" @keyup.right="keyDown" class="inputNone" autofocus>
  </div>
</template>

<script>
  export default {
    methods: {
      keyDown () {
        this.$router.push('/1')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped <style lang="scss">
  @import "../scss/home.scss";
  .inputNone{
    opacity: 0;
  }
</style>
