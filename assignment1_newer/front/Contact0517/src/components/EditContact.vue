<template>
  <div class="big-box">
    <h class="hh">Contact</h>
    <sui-label class="hh2" color="teal">Edit</sui-label>
    <br />
    <br />
    <hr class="d" />
    <br />
    <p class="text">First Name</p>
    <sui-input
      class="inp"
      v-model="contact.firstName"
      id="first"
      placeholder="Unchanged"
    />
    <p class="text">Last Name</p>
    <sui-input
      class="inp"
      v-model="contact.lastName"
      id="last"
      placeholder="Unchanged"
    />
    <p class="text">Mobile No</p>
    <sui-input class="inp" v-model="contact.mobile" id="no" placeholder="Unchanged" />
    <p class="text">Email</p>
    <sui-input class="inp" v-model="contact.email" id="em" placeholder="Unchanged" />
    <p class="text">Facebook</p>
    <sui-input class="inp" v-model="contact.facebook" id="fb" placeholder="Unchanged" />
    <p class="text">ImageUrl</p>
    <sui-input class="inp" v-model="contact.imgurl" id="url" placeholder="Unchanged" />
    <div class="button-container">
      <sui-button class="SC" basic color="blue" @click="updateContact(contact)">💾 Save</sui-button>
      <sui-button class="SC" basic color="blue" @click="close">❌ Close</sui-button>
    </div>
  </div>
</template>
 <script>
import axios from "axios";

export default {
  name: "EditContact",
  data() {
    return {
       contact: {
        contactId: "",
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        facebook: "",
        imgurl: "",
      },
    };
  },
  mounted() {
     this.loadContact();
  },
  methods: {
    loadContact() {
      const contactId = this.$route.params.contactId;
      axios
        .get(`http://127.0.0.1:3427/contact/${contactId}`)
        .then((response) => {
          this.contact = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateContact(contact) {
  // Remove any properties with empty string values
  Object.keys(this.contact).forEach((key) => {
    if (this.contact[key] === '') {
      delete this.contact[key];
    }
  });

  axios
     .put(`http://127.0.0.1:3427/contact/update/` + this.$route.params.contactId, this.contact)
    //.put(`http://127.0.0.1:3427/contact/update/` + this.$route.params.contactId, this.contact)
    .then(() => {
      this.$router.push("/ContactList");
    })
    .catch((error) => {
      console.log(error);
    });
},

    close() {
      this.$router.push("/ContactList");
    },
  },
};
</script> 


<style> 

.big-box {
  position:absolute;
  top:20%;
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
