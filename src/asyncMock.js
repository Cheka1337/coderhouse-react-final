const products = [
    
    // {
        
    //     name: 'Remera Argentina Campeón',
    //     price: 6000,
    //     category: 'remera',
    //     img:'https://tutiendaarg.com/cdn/shop/products/argentina-adidas-world-cup-2022-winners-t-shirt-white-kids_ss4_p-13372670_u-tojz9hh9wzx4duotc6ux_v-d3aca66f3bad412cb0064d59d41ebf68_1024x1024_2x_82236a63-f195-431a-aa0a-bc1655f4fdec_1.webp?v=1688420531',
    //     stock: 15,
    //     description:'EJEMPLO'
    // },
    // {
        
    //     name: 'Pantalón Kamp U 23',
    //     price: 12000,
    //     category: 'pantalon',
    //     img:'https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/5ecztt32e5nn70q8ro71qvhwy537/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5',
    //     stock: 5,
    //     description:'EJEMPLO'
    // },
    // {
        
    //     name: 'Zapatillas Vans Kyle Walker Pro 2 ',
    //     price: 25000,
    //     category: 'zapatilla',
    //     img:'https://www.indy.com.ar/cdn/shop/files/zapatillas-vans-m-skate-grosso-mid-negro-blanco-indy-1_95a0211f-baba-4bae-a0c8-092c64dbc598.jpg?v=1691615606',
    //     stock: 15,
    //     description:'EJEMPLO'
    // },
    // {
        
    //     name: 'Remera New Balance Essentials',
    //     price: 7000,
    //     category: 'remera',
    //     img:'https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/355km8obzgt5b43mpdjxyalxdfhc/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5',
    //     stock: 15,
    //     description:'EJEMPLO'
    // },
    // {
        
    //     name: 'Pantalon SPY LIMITED Angus',
    //     price: 14500,
    //     category: 'pantalon',
    //     img:'https://acdn.mitiendanube.com/stores/099/188/products/angus1-95dff6c2f9805d114916022533167561-1024-1024.png',
    //     stock: 15,
    //     description:'EJEMPLO'
    // },
    // {
       
    //     name: 'Zapatilla Nation Brink',
    //     price: 14500,
    //     category: 'zapatilla',
    //     img:'https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/tab3lt6cc5570m1e3v7vfmc0d0j8/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5',
    //     stock: 15,
    //     description:'EJEMPLO'
    // },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}