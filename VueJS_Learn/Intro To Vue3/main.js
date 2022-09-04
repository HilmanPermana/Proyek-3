const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: true,//New Data Property//
            inventory: 5,
            onSale: true,
            details: ['50% cotton','30% WOOL', '20% Polyester' ],
            variants: [
                { id: 2234, color: 'green', image:'./assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg', quantity: 0},
            ],
            cart: 0,
            styles: {
                color: 'red',
                fontSize: '14px',
            },
            selectedVariant: 0,
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            if(this.cart >= 1){
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selecterdVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity                                                                                                                                                                                                             
        }
    }
})