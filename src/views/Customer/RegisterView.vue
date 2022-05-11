<template>
  <div class="register">
    <div class="box">
      <span class="title">Daftar Akun Baru</span>
      <br />
      <div class="input_item">
        <label for="fname">Nama Lengkap</label>
        <div class="regis_input">
          <input
            type="text"
            v-model="person.firstName"
            id="fname"
            placeholder="Nama Depan"
          />
        </div>
        <div class="regis_input">
          <input
            type="text"
            v-model="person.lastName"
            id="lname"
            placeholder="Nama Belakang"
          />
        </div>
      </div>
      <div class="input_item">
        <label for="verify">Email dan Password</label>
        <div class="regis_input">
          <input
            type="text"
            v-model="person.email"
            id="verify"
            placeholder="Email"
          />
        </div>
        <div class="regis_input">
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
      <div class="input_item">
        <p>Jenis Kelamin</p>
        <div class="gender_input genderMargin">
          <input
            type="radio"
            v-model="person.gender"
            id="male"
            value="Laki-Laki"
          />
          <label for="male" style="padding-left: 5px; color: rgba(0, 0, 0, 0.5)"
            >Laki-Laki</label
          >
        </div>
        <div class="gender_input">
          <input
            type="radio"
            v-model="person.gender"
            id="female"
            value="Perempuan"
          />
          <label
            for="female"
            style="padding-left: 5px; color: rgba(0, 0, 0, 0.5)"
            >Perempuan</label
          >
        </div>
        <div class="gender_input">
          <input
            type="radio"
            v-model="person.gender"
            id="other"
            value="Lainnya"
          />
          <label
            for="other"
            style="padding-left: 5px; color: rgba(0, 0, 0, 0.5)"
            >Lainnya</label
          >
        </div>
      </div>
      <div class="phoneNumber_item">
        <label for="phoneNumber">Nomor HP</label>
        <div class="phone_input">
          <input
            type="text"
            v-model="person.noHp"
            id="phoneNumber"
            placeholder="Nomor HP"
          />
        </div>
      </div>
      <div class="birthday_item">
        <label for="birthday">Tanggal Lahir</label>
        <div class="birthday_input">
          <input type="date" v-model="person.birthday" id="birthday" />
        </div>
      </div>
      <div class="btn_submit">
        <button class="btn_style" v-on:click="submitForm">Daftar</button>
        <div class="regis_btn_text">
          <span class="btn_text">Sudah memiliki akun?</span>
          <router-link class="link" :to="{ path: '/login' }"
            >Masuk Disini</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

var state = false;

export default {
  name: "SignUp",
  data() {
    return {
      person: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        birthday: "",
        noHp: "",
        tipePengguna: "customer",
      },
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
      axios
        .post("/register", {
          nama: this.person.firstName + " " + this.person.lastName,
          noTelpon: this.person.noHp,
          email: this.person.email,
          password: this.person.password,
          tglLahir: this.person.birthday,
          gender: this.person.gender,
          tipepengguna: this.person.tipePengguna,
        })
        .then((response) => {
          const inputs = document.querySelectorAll(
            "#fname, #lname, #verify, #password, #male, #female, #other, #phoneNumber, #birthday"
          );
          console.log(response.data);
          alert("Register Berhasil! Silahkan Login");
          inputs.forEach((input) => {
            input.value = "";
          });
          location.replace("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.box {
  width: 600px;
  height: 550px;
  background-color: #152349;
  margin: 0 auto;
  border-radius: 30px;
}
.title {
  color: #78ffd7;
  border-bottom: 2px solid #78ffd7;
}

.input_item > label,
p {
  color: #78ffd7;
  display: block;
  text-align: left;
  margin-left: 1.5rem;
  margin-bottom: 5px;
}
.input_item {
  padding-top: 1rem;
  padding-bottom: 2rem;
}
.phoneNumber_item {
  padding-top: 1rem;
}
.phoneNumber_item > label {
  color: #78ffd7;
  display: block;
  margin-bottom: 5px;
}
.birthday_item {
  padding-top: 1rem;
  padding-bottom: 1.5rem;
}
.birthday_item > label {
  color: #78ffd7;
  display: block;
  margin-bottom: 5px;
}
.regis_input {
  width: 15rem;
  height: 1rem;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 15px;
  float: left;
  margin-left: 1.6rem;
}
.gender_input {
  width: 10rem;
  height: 1rem;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 15px;
  float: left;
  margin-left: 0.8rem;
}
.genderMargin {
  margin-left: 1.5rem;
}
.regis_input > input {
  flex: 1;
  height: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  color: black;
}
.phone_input {
  width: 15rem;
  height: 1rem;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 0 auto;
}
.phone_input > input {
  flex: 1;
  height: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.5);
}
.birthday_input {
  width: 15rem;
  height: 1rem;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 0 auto;
}
.birthday_input > input {
  flex: 1;
  height: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.5);
}
button {
  width: 130px;
  height: 35px;
  text-align: center;
  border-radius: 20px;
  background-color: #78ffd7;
  border-color: #78ffd7;
  font-color: #152349;
  font-weight: bold;
  font-size: 20px;
}
button:hover {
  background-color: #6fedc7;
}
.regis_btn_text {
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