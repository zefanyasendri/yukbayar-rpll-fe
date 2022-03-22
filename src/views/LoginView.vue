<template>
  <div class="login">
    <div class="box">
      <span class="title">Login</span>
      <div class="input_item">
        <div class="login_input input_email">
          <i class="far fa-envelope"></i>
          <input type="text" name="email" id="email" value="Email Address" />
        </div>
        <div class="login_input">
          <i class="far fa-lock"></i>
          <input type="text" name="password" id="password" value="Password" />
        </div>
      </div>
      <div class="btn_submit">
        <button class="btn_style">Login</button>
        <div class="login_text">
          <span class="btn_text">Belum memiliki akun?</span>
          <span class="btn_text2">Daftar disini</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  /* background-image: url("../assets/Home/Asuransi.png");
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover; */
}
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

.btn_text2 {
  color: #78ffd7;
  font-weight: bold;
}
</style>