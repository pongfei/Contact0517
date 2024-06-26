<template>
  <div>
    <div class="bbox">
      <div class="cover">
        <sui-label class="ribC" ribbon>Contacts</sui-label>
        <div class="search-sec">
          <sui-input
            class="searchbox"
            v-model="user.search"
            id="search"
            placeholder="Search..."
          />
          <sui-button class="search" @click="search(user.search)"
            >Search</sui-button
          >
          <sui-button class="add" @click="add">+ Add</sui-button>
        </div>
      </div>
      <div class="coverB">
        <div class="cBox" v-for="contact in contacts" :key="contact.contactID">
          <img class="cPic" :src="contact.imgurl" />
          <div class="FL">{{ contact.firstName }} {{ contact.lastName }}</div>
          <div class="D">Mobile: {{ contact.mobile }}</div>
          <div class="D">Email: {{ contact.email ? contact.email : 'N/A' }}</div>
          <div class="D">Facebook: {{ contact.facebook ? contact.facebook : 'N/A' }}</div>
          <div class="buttons-container">
            <sui-button
              class="square-btn left-button"
              @click="edit(contact._id)"
              >✏️</sui-button
            >
            <sui-button
              class="square-btn right-button"
              @click="deleteData(contact._id)"
              >❌</sui-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "search",
  data() {
    return {
      user: {
        search: "",
        Users: [],
        uid: "",
      },
      contacts: [],
    };
  },
  mounted() {
    this.loadContacts();
    console.log("does load work?")
  },
  methods: {
    loadContacts() {
      axios
        .get("http://127.0.0.1:3427/contact")
        .then((response) => {
          this.contacts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    search() {
      if (!this.user.search.trim()) {
        this.loadContacts();
        return;
      }
      axios
        .get(`http://127.0.0.1:3427/contact/search/${this.user.search}`)
        .then((response) => {
          this.contacts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    add() {
      this.$router.push("/addcontact");
    },

    deleteData(UserId) {
      axios
        .delete("http://127.0.0.1:3427/contact/delete/" + UserId)
        .then((response) => {
          console.log("Delete User Id: " + UserId);
        })
        .catch((error) => {
          console.log(error);
        });
      window.location.reload();
    },
    edit(contactId) {
      router.push({
        name: "editcontact",
        params: { contactId: contactId },
      });
    },
  },
};
</script>

<style>
.bbox {
  /* position: relative; */
  padding: 16px;
  background-color: white;
  border: 1px solid rgb(189, 189, 189);
  border-radius: 2px;

  position:absolute;
  top:7.5%;
  left:2.5%;
  right: 2.5%;
  width: 95%;
  max-height: 90%; 
}

.cover {
  border-bottom: 1px solid rgb(189, 189, 189);
  border-left: 1px solid rgb(189, 189, 189);
  border-right: 1px solid rgb(189, 189, 189);
  border-top: 1px solid rgb(0, 181, 173);
  border-radius: 3px;
  display: flex;
  background-color: white;
  padding: 7px;
  height: 52px;
  margin-bottom: 10px; /* add this to create a gap between the search-cover and the next element */
}

.coverB {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  /* align-items: center; */
  gap: 10px; 
  border: 1px solid rgb(189, 189, 189);
  border-radius: 3px;
  padding: 10px;
  width: 100%;

  overflow-y: auto;
  max-height: calc(100vh - 200px);
}


.cBox {
  width: 24%;
  border: 1px solid rgb(189, 189, 189);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: flex;
  border-radius: 3px;

}

.cPic {
  min-height: 300px;
  
  height: 100%;
  width: 100%;
  border-radius: 3px;
}

.FL {
  color: black;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: -3px; 
  padding: 5px;
}

.D {
  font-size: 12px;
  color: rgb(189, 189, 189);
  margin: -2px 0; 
}

.search-sec {
  display: flex;
  border: 1px rgb(168, 168, 168);
  vertical-align: middle;
  width: 100%;
  justify-content: space-between;

}

/* .CT {
  display: block;
  text-align: left;
  font-weight: bold;
  color: black;
  font-size: 15px;
  margin-right: 8px;
  padding: 2px;
} */

.ribC {
  background-color: rgb(0, 181, 173) !important;
  color: white !important;
  font-weight: bold !important;
  border-color: rgb(0, 129, 126) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-left: 7px !important;
  margin-bottom: 5px !important;
  height: 30px;
}

.searchbox {
  width: 100%;

  height: 30px !important;
  font-size: 12px;
  border-radius: 5%;
  border-width: 2px;
  border-color: rgb(186, 186, 186);
}

.search {
  background-color: #e0e1e3 !important;
  color: rgb(69, 69, 69) !important;
  border: none !important;
  cursor: pointer !important;
  text-align: center !important;
  width: 100px !important;
  vertical-align: middle !important;
  height: 30px !important;
  font-size: 12px !important;
  border-radius: 2px !important;
}
.add {
  background-color: #f47100 !important;
  color: rgb(255, 255, 255) !important;
  border: none !important;
  cursor: pointer !important;
  text-align: center !important;
  width: 100px !important;
  vertical-align: middle !important;
  margin-top: 0px !important;
  height: 30px !important;
  font-size: 12px !important;
  border-radius: 2px !important;
}

.buttons-container {
  justify-content: space-between !important;
  margin-top: 5px;
  margin-bottom: 10px;
  align-items: center !important;
  text-align: center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.square-btn {
  width: 10px !important;
  height: 20px !important;
  border-radius: 5px !important;
  text-align: center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.left-button {
  background-color: rgb(225, 225, 225) !important;
}

.right-button {
  background-color: rgb(213, 213, 213) !important;
} 
</style>

