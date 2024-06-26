<template>
  <div class="wrapper" >
    <h class="hh">Contact</h>
    <sui-label class="hh2" color="teal">Add</sui-label>
    <br/>
    <br/>
    <hr class="d" />
    <br/>
    <p class="text">Contact ID <span style="color: red">*</span></p>
    <sui-input
      class="inp"
      v-model="contactID"
      id="id"
      placeholder="Contact ID"
    />
    <p class="text">First Name <span style="color: red">*</span></p>
    <sui-input
      class="inp"
      v-model="firstName"
      id="first"
      placeholder="First Name"
    />
    <p class="text">Last Name <span style="color: red">*</span></p>
    <sui-input
      class="inp"
      v-model="lastName"
      id="last"
      placeholder="Last Name"
    />
    <p class="text">Mobile No <span style="color: red">*</span></p>
    <sui-input class="inp" v-model="mobile" id="no" placeholder="Mobile No" />
    <p class="text">Email</p>
    <sui-input class="inp" v-model="email" id="em" placeholder="Email" />
    <p class="text">Facebook</p>
    <sui-input class="inp" v-model="facebook" id="fb" placeholder="Facebook" />
    <p class="text">ImageUrl</p>
    <sui-input class="inp" v-model="imgurl" id="url" placeholder="Image Url" />
    <div class="button-container">
      <sui-button class="SC" basic color="blue" @click="save">💾 Save</sui-button>
      <sui-button class="SC" basic color="blue" @click="close">❌ Close</sui-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contactID: "",
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      facebook: "",
      imgurl: "",
    };
  },
  methods: {
    save() {
      if (!this.contactID || !this.firstName || !this.lastName || !this.mobile) {
        alert("Please fill out all required fields.");
        return;
      }

      let newContact = {
        contactID: this.contactID,
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        facebook: this.facebook,
        imgurl: this.imgurl,
      };
      console.log('Sending new contact:', newContact);

      axios
        .post("http://127.0.0.1:3427/contact", newContact)
        .then((response) => {
          console.log('Response from server:', response);
          this.$router.push("/contactlist");
        })
        .catch((error) => {
          if (error.response) {
            // Server responded with a status other than 200 range
            console.log('Error response data:', error.response.data);
            console.log('Error response status:', error.response.status);
            console.log('Error response headers:', error.response.headers);
          } else if (error.request) {
            // Request was made but no response was received
            console.log('Error request data:', error.request);
          } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error message:', error.message);
          }
          console.log('Error config:', error.config);
        });
    },
    close() {
      this.$router.push("/contactlist");
    },
  },
};
</script>

<style>
.wrapper {
  position:absolute;
  top:15%;
  left: 40%;
  margin-top:-50px; /* this is half the height of your div*/  
  margin-left:-100px; /*this is half of width of your div*/
  padding: 16px;

  width: 500px;
  border: 2px solid rgb(219, 219, 219);
  background-color: white;
  overflow-y: auto;
  /* max-height: calc(100vh - 70px); */
}
</style>