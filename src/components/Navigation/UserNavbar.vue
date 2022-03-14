<template>
  <header class="header">
    <b-navbar shadow>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/Images/YukBayar.png" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/">
          <span class="nav__item">Home</span>
        </b-navbar-item>
        <b-navbar-item href="/menu">
          <span class="nav__item">Top Up</span>
        </b-navbar-item>
        <b-navbar-item href="/order">
          <span class="nav__item">History</span>
        </b-navbar-item>
        <b-navbar-item href="/about">
          <span class="nav__item">Register</span>
        </b-navbar-item>
        <b-navbar-item href="/tracking">
          <span class="nav__item">Login</span>
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #152349;
  z-index: 100;
}
</style>