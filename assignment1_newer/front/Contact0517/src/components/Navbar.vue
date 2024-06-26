<!-- Navbar.vue -->
<template>
    <nav class="navbar">
   <div class="navbar-brand">
     <a class="navbar-item" href="/">
       <!-- Your logo or brand name -->
       <img src="/src/download.png" width="50px" alt="Logo">
       <a class="navbar-item" href="/contact">Contact</a>
     </a>
   </div>
   <div class="navbar-menu">
     <div class="navbar-end">

       <!-- Add more links as needed -->
     </div>
   </div>
 </nav>
 </template>
 
 <script>
 export default {
   name: 'Navbar',
   // You can add more options here as needed
 }
 </script>
 
 <style scoped>
 /* Add your custom styles for the navbar */
 .navbar {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   background-color:black; /* Example background color */
   z-index: 1000; /* Ensure it's above other content */
   /* Add more styles as needed */
 }
 </style>
 
 