<template>
  <div class="navbar">
    <header :class="{ 'scrolled-nav': scrolledNav }">
      <nav>
        <div class="branding">
          <img src="@/assets/Images/YukBayar.png" alt="" />
        </div>
        <ul v-show="!mobile" class="MyNavigation">
          <li>
            <router-link class="link" :to="{ path: '/staff/transaksi' }">Transaksi</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ path: '/staff/daftarmitra' }">Daftar Mitra</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ path: '/staff/dataakun' }">Data Akun</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ path: '/logout' }">Logout</router-link>
          </li>
        </ul>
        <div class="icon">
          <i
            @click="toggleMobileNav"
            v-show="mobile"
            class="far fa-bars"
            :class="{ 'icon-active': movileNav }"
          ></i>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li>
                <router-link class="link" :to="{ path: '/staff/transaksi' }">Transaksi</router-link>
            </li>
            <li>
                <router-link class="link" :to="{ path: '/staff/daftarmitra' }">Daftar Mitra</router-link>
            </li>
            <li>
                <router-link class="link" :to="{ path: '/staff/dataakun' }">Data Akun</router-link>
            </li>
            <li>
                <router-link class="link" :to="{ path: '/logout' }">Logout</router-link>
            </li>
          </ul>
        </transition>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "StaffNavigation",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding-bottom: 7rem;
}
header {
  background-color: #152349;
  z-index: 100;
  width: 100%;
  padding: 5px 0;
  position: fixed;
  transition: 0.5s ease all;
  color: #78ffd7;

  nav {
    display: flex;
    position: relative;
    flex-direction: row;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-widht: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #78ffd7;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 1rem;
      margin-left: 1rem;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: white;
        border-color: white;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 120px;
        margin-left: 1.5rem;
        transition: 0.5s ease all;
      }
    }

    .MyNavigation {
      display: flex;
      align-items: center;
      flex: 1;
      margin-right: 2rem;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 1.5rem;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 1.5rem;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      max-width: 250px;
      height: 100%;
      background-color: #152349;
      top: 0;
      left: 0;

      li {
        margin-left: 0;
        .link {
          color: #78ffd7;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: #152349;
  box-shadow: #191731;

  nav {
    padding: 0px 0;

    .branding {
      img {
        width: 80px;
        box-shadow: #191731;
      }
    }
  }
}
</style>