const { Product } = require('../db');

module.exports = () => {
    const items = [
        // 1 Bizcochuelos
        { name: 'Bizcochuelo 650gr Red NATALIA Chocolate', subrubroId: 1 },
        { name: 'Bizcochuelo 650gr Red NATALIA Vainilla', subrubroId: 1 },
        { name: 'Bizcochuelo 1Kg Red NATALIA Chocolate', subrubroId: 1 },
        { name: 'Bizcochuelo 1Kg Red NATALIA Vainilla', subrubroId: 1 },
        { name: 'Bizcochuelo 2Kg Red NATALIA Chocolate', subrubroId: 1 },
        { name: 'Bizcochuelo 2Kg Red NATALIA Vainilla', subrubroId: 1 },

        // 2 Premezclas
        {
            name: 'Premezcla para Prep. Brownie LEDEVIT PAQ x250g',
            subrubroId: 2,
        },
        { name: 'Premezcla para Prep. Budín LEDEVIT PAQ x500g', subrubroId: 2 },
        {
            name: 'Premezcla para Prep. Cupcake Chocolate LEDEVIT PAQ x250g',
            subrubroId: 2,
        },
        {
            name: 'Premezcla para Prep. Cupcake Vainilla LEDEVIT PAQ x250g',
            subrubroId: 2,
        },
        {
            name: 'Premezcla para Prep. Macarons LEDEVIT PAQ x250g',
            subrubroId: 2,
        },
        {
            name: 'Premezcla para Prep. Tapitas de Alf LEDEVIT PAQ x250g',
            subrubroId: 2,
        },

        // 3 Granas
        { name: 'Grana de Color DECORMAGIC Amarillo PAQ x1Kg', subrubroId: 3 },
        { name: 'Grana de Color DECORMAGIC Azul PAQ x1Kg', subrubroId: 3 },
        { name: 'Grana de Color DECORMAGIC Naranja PAQ x1Kg', subrubroId: 3 },
        { name: 'Grana de Color DECORMAGIC Rojo PAQ x1Kg', subrubroId: 3 },
        { name: 'Grana de Color DECORMAGIC Verde PAQ x1Kg', subrubroId: 3 },
        { name: 'Grana de Color DECORMAGIC Rosa PAQ x1Kg', subrubroId: 3 },

        // 4 Cortantes
        { name: 'Cortante Baby Shower COOPER', subrubroId: 4 },
        { name: 'Cortante Cartel COOPER', subrubroId: 4 },
        { name: 'Cortante COOPER Galletitas GRANDE x6', subrubroId: 4 },
        { name: 'Cortante Coronas y Princesas COOPER', subrubroId: 4 },
        { name: 'Cortante de Acero Liso Red N03', subrubroId: 4 },

        // 5 Bases y Bandejas
        { name: 'Bandeja Dorada 250gr ACP', subrubroId: 5 },
        { name: 'Bandeja Dorada 500gr ACP', subrubroId: 5 },
        { name: 'Bandeja Dorada 1Kg ACP', subrubroId: 5 },
        { name: 'Bandeja Dorada 2Kg ACP', subrubroId: 5 },
        { name: 'Bandeja Dorada 3Kg ACP', subrubroId: 5 },

        // 6 Mangas
        { name: 'Manga Cosida Con Cupla N0 COOPER UNIDAD', subrubroId: 6 },
        { name: 'Manga Cosida Con Cupla N1 COOPER UNIDAD', subrubroId: 6 },
        { name: 'Manga Cosida Con Cupla N2 COOPER UNIDAD', subrubroId: 6 },
        { name: 'Manga Cosida Con Cupla N3 COOPER UNIDAD', subrubroId: 6 },
        { name: 'Manga Cosida Con Cupla N4 COOPER UNIDAD', subrubroId: 6 },
    ];

    try {
        Product.bulkCreate(items);
    } catch (error) {
        throw new Error(error.message);
    }
};
