<template>
   <dashboard v-bind="dashboardData"/>
</template>

<script>
   export default {
      name: 'App',
      components: {
         Dashboard,
      },
      data(){
         return {dashboardData};
      },
   };

   const icon21Data = {
      src: "logo-3.png",
   };

   const icon22Data = {
      src: "logo-2.png",
   };

   const kategoriData = {
      layerGroupSolid1: "layer-group-solid-1-6.png",
      spanText1: "Kategori",
      vector2: "vector-2-7.png",
      spanText2: "Restaurant",
      hotelSolid1: "hotel-solid-1-7.png",
      spantText3: "Penginapan",
      carSolid1: "car-solid-1-7.png",
      spanText4: "Tout-Travel",
      shipSolid1: "ship-solid-1-6.png",
      spanText5: "Attraction",
      shopify1: "shopifiy-1-6.png",
      spanText6: "Merchant",

   };

   const dashboardData = {
      icon: "icon-9.png",
      spanText1: "Nama Admin",
      spanText2: "ID Admin",
      spanText3: "Customer",
      line6: "Line-5-1.png",
      spanText4: "Customer",
      spantText5: "Kategori Mitra",
      line5: "Line-5-1.png",
      spanText6: "Restaurant",
      Vector2: "Vector-3.png",
      spanText7: "Attraction",
      hotelSolid1: "hotel-solid-1-1.png",
      spanText8: "Penginapan",
      spanText9: "Merchant",
      spanText10: "Tout-Travel",
      carSolid1: "car-solid-1-1.png",
      image3: "image-3-9.png",
      spanText11: "Copyrights by GeoWisata.id",
      houseSolid11: "house-solid-1-13.png",
      spanText12: "Dashboard",
      usersSolid1: "users-solid-1-1.png",
      houseSolid12: "house-solid-1-13.png",
      spanText14: "LogOut",
      icon21Props: icon21Data,
      icon22Props: icon22Data,
      icon21Props2: kategoriData,
   }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.title#title{
   padding: 25px;
   background-color: rgb(0, 67, 155);
   color: rgba(255, 255, 255, 0.993);
}

.title-text#text{
   font-family: 'Roboto', sans-serif;
   font-size: 25px;
   font-weight: bold;
}

#background-navbar{
   background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(https://images.unsplash.com/photo-1550147760-44c9966d6bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80);
}

.item-text
{
   font-family: 'Roboto', sans-serif;
   font-size: 15px;
   font-weight: bold;
   padding: 10px;
}

.item-list{
   color: white;
}

.main#main{
   background-image: linear-gradient(rgba(4,9,30,0.3),rgba(4,9,30,0.3))
}

.upbar{
   background-color: red;
}

</style>
