<template>
  <div class="register">
    <div class="box">
      <span class="title">Daftar Akun Baru</span>
      <br />
      <div class="input_item">
        <label for="fname">Nama Lengkap</label>
        <div class="regis_input">
          <input type="text" name="firstName" id="fname" value="Nama Depan" />
        </div>
        <div class="regis_input">
          <input type="text" name="lastName" id="fname" value="Nama Belakang" />
        </div>
      </div>
      <div class="input_item">
        <label for="verify">Email dan Password</label>
        <div class="regis_input">
          <input type="text" name="email" id="verify" value="Email" />
        </div>
        <div class="regis_input">
          <input type="text" name="password" id="verify" value="Password" />
        </div>
      </div>
      <div class="input_item">
        <label for="genderLabel">Jenis Kelamin</label>
        <div class="gender_input genderMargin">
          <input type="radio" name="gender" id="genderLabel" /><span
            class="genderChoice"
            >Laki-Laki</span
          >
        </div>
        <div class="gender_input">
          <input type="radio" name="gender" id="genderLabel" /><span
            class="genderChoice"
            >Perempuan</span
          >
        </div>
        <div class="gender_input">
          <input type="radio" name="gender" id="genderLabel" /><span
            class="genderChoice"
            >Lainnya</span
          >
        </div>
      </div>
      <div class="birthday_item">
        <label for="birthday">Tanggal Lahir</label>
        <div class="birthday_input">
          <input type="date" name="email" id="birthday" />
        </div>
      </div>
      <div class="btn_submit">
        <button class="btn_style">Daftar</button>
        <div class="regis_btn_text">
          <span class="btn_text">Sudah memiliki akun?</span>
          <span class="btn_text2">Masuk disini</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register {
  /* background-image: url("../assets/Home/Asuransi.png");
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover; */
}
.box {
  width: 600px;
  height: 500px;
  background-color: #152349;
  margin: 0 auto;
  border-radius: 30px;
}
.title {
  color: #78ffd7;
  border-bottom: 2px solid #78ffd7;
}
.input_item > label {
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
  color: rgba(0, 0, 0, 0.5);
}
.genderChoice {
  padding-left: 5px;
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

.btn_text2 {
  color: #78ffd7;
  font-weight: bold;
}
</style>