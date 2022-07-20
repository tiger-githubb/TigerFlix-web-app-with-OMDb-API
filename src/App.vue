<template>
  <header>
    <router-link to="/">
      <h1><span>Tiger</span>Movies</h1>
    </router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'fira sans', sans-serif;

  &::selection{
    background: transparentize($color: #428883, $amount: 0.5);
  }
}

body{
  background-color: #354952;
}
 a{
  text-decoration: none;
 }

 header{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10 px 16 px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 0px rgba(0,0,0,0.1);

  h1{
    color: #ffff;
    font-size: 30px;

    span{
      color: #428883;
    }
  }
  
 }
</style>
