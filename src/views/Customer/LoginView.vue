<template>
  <div class="login">
    <div class="box">
      <span class="title">Login</span>
      <div class="input_item">
        <div class="login_input input_email">
          <i class="far fa-envelope"></i>
          <input
            type="text"
            v-model="person.email"
            id="email"
            placeholder="Email Address"
          />
        </div>
        <div class="login_input">
          <i class="far fa-lock"></i>
          <input
            type="password"
            v-model="person.password"
            id="password"
            placeholder="Password"
          />
          <i
            class="fa fa-eye"
            aria-hidden="true"
            id="eye"
            v-on:click="toggle()"
          ></i>
        </div>
      </div>
      <div class="btn_submit">
        <button class="btn_style" v-on:click="submitForm">Login</button>
        <div class="login_text">
          <span class="btn_text">Belum memiliki akun?</span>
          <router-link class="link" :to="{ path: '/register' }"
            >Daftar Disini</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import LoginService from "@/services/LoginService.js";
var state = false;

export default {
  name: "SignIn",
  data() {
    return {
      person: {
        email: "",
        password: "",
      },
      loginService: new LoginService(),
    };
  },
  methods: {
    toggle() {
      if (state) {
        document.getElementById("password").setAttribute("type", "password");
        state = false;
      } else {
        document.getElementById("password").setAttribute("type", "text");
        state = true;
      }
    },
    submitForm() {
      let userLoginData = [];
      axios
        .post("/login", this.person)
        .then((response) => {
          userLoginData = response.data.data;
          this.loginService.addToCart(userLoginData);
          alert("Login Berhasil!!");
          if(response.data.data.tipePengguna=="customer"){
            location.replace("/home");
          } else if(response.data.data.tipePengguna=="owner"){
            location.replace("/bo/transaksipelanggan");
          } else if(response.data.data.tipePengguna=="staff"){
            location.replace("/staff/transaksipelanggan");
          } 
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    },
  },
};
</script>

<style scoped>
.box {
  width: 300px;
  height: 350px;
  background-color: #152349;
  margin: 0 auto;
  border-radius: 30px;
}
.title {
  color: #78ffd7;
  border-bottom: 2px solid #78ffd7;
}
.input_item {
  padding-top: 2rem;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
}
.login_input {
  width: 15rem;
  height: 1rem;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
}
.input_email {
  margin-bottom: 1rem;
}
.login_input > i {
  font-size: 15px;
  color: #777;
}

.login_input > input {
  flex: 1;
  height: 40px;
  border: none;
  outline: none;
  padding-left: 10px;
}

button {
  width: 100px;
  height: 30px;
  text-align: center;
  border-radius: 20px;
  background-color: #78ffd7;
  border-color: #78ffd7;
  font-color: #152349;
  font-weight: bold;
  font-size: 15px;
}

button:hover {
  background-color: #6fedc7;
}

.login_text {
  padding-top: 15px;
}

.btn_text {
  color: #7bc0ab;
  font-weight: 100;
}
.link {
  font-weight: bold;
  color: #78ffd7;
  list-style: none;
  text-decoration: none;
}
</style>