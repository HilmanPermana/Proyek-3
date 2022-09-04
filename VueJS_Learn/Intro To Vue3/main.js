const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,//New Data Property//
            inventory: 5,
            onSale: true,
            details: ['50% cotton','30% WOOL', '20% Polyester' ],
            variants: [
                { id: 2234, color: 'green', image:'./assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg'},
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }

    }
})