app.component('product-display', {
  template:
    /*html*/
  `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :class="{'out-of-stock-img': !inStock}" 
            v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{title}}</h1>
            <p v-if="inStock"> In Stock</p>
            <p v-else>Out Of Stock</p>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
            <p v-else>Out of Stock</p>
            <p v-if="onSale">On Sale</p>
            <ul>
              <li v-for="detail in details" >{{detail}}</li>
              <div 
              v-for="(variant,index) in variants" 
              :key="variant.id"
               @mouseover="updateVariant(index)"
               class="color-circle"
               :style="{backgroundColor:variant.color}">
              </div>
            </ul>
            
            <button 
              class="button"
              :class="{disabledButton: !inStock}"
              :disabled="!inStock"
              @click="addToCart">
              Add to Cart</button>
            <button class="button" v-on:click="removeFromCart">Remove Item</button>
          </div>
        </div>
      </div>`,



})