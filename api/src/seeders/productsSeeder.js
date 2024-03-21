const { default: slugify } = require('slugify');
const { Product } = require('../db');

module.exports = () => {
    const items = [
        // 1 Bizcochuelos
        {
            name: 'Bizcochuelo 650gr Red NATALIA Chocolate',
            subrubroId: 1,
            price: 600.5,
        },
        {
            name: 'Bizcochuelo 650gr Red NATALIA Vainilla',
            subrubroId: 1,
            price: 700.5,
        },
        {
            name: 'Bizcochuelo 1Kg Red NATALIA Chocolate',
            subrubroId: 1,
            price: 800,
        },
        {
            name: 'Bizcochuelo 1Kg Red NATALIA Vainilla',
            subrubroId: 1,
            price: 900,
        },
        {
            name: 'Bizcochuelo 2Kg Red NATALIA Chocolate',
            subrubroId: 1,
            price: 1000,
        },
        {
            name: 'Bizcochuelo 2Kg Red NATALIA Vainilla',
            subrubroId: 1,
            price: 1200,
        },

        // 2 Premezclas
        {
            name: 'Premezcla para Prep. Brownie LEDEVIT PAQ x250g',
            subrubroId: 2,
            price: 200,
        },
        {
            name: 'Premezcla para Prep. Budín LEDEVIT PAQ x500g',
            subrubroId: 2,
            price: 250,
        },
        {
            name: 'Premezcla para Prep. Cupcake Chocolate LEDEVIT PAQ x250g',
            subrubroId: 2,
            price: 300,
        },
        {
            name: 'Premezcla para Prep. Cupcake Vainilla LEDEVIT PAQ x250g',
            subrubroId: 2,
            price: 350,
        },
        {
            name: 'Premezcla para Prep. Macarons LEDEVIT PAQ x250g',
            subrubroId: 2,
            price: 400,
        },
        {
            name: 'Premezcla para Prep. Tapitas de Alf LEDEVIT PAQ x250g',
            subrubroId: 2,
            price: 480,
        },

        // 3 Granas
        {
            name: 'Grana de Color DECORMAGIC Amarillo PAQ x1Kg',
            subrubroId: 3,
            price: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Azul PAQ x1Kg',
            subrubroId: 3,
            price: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Naranja PAQ x1Kg',
            subrubroId: 3,
            price: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Rojo PAQ x1Kg',
            subrubroId: 3,
            price: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Verde PAQ x1Kg',
            subrubroId: 3,
            price: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Rosa PAQ x1Kg',
            subrubroId: 3,
            price: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Violeta PAQ x1Kg',
            subrubroId: 3,
            price: 100,
        },

        // 4 Cortantes
        {
            name: 'Cortante Baby Shower COOPER',
            subrubroId: 4,
            price: 300,
        },
        {
            name: 'Cortante Cartel COOPER',
            subrubroId: 4,
            price: 300,
        },
        {
            name: 'Cortante COOPER Galletitas GRANDE x6',
            subrubroId: 4,
            price: 300,
        },
        {
            name: 'Cortante Coronas y Princesas COOPER',
            subrubroId: 4,
            price: 300,
        },
        {
            name: 'Cortante de Acero Liso Red N03',
            subrubroId: 4,
            price: 300,
        },

        // 5 Bases y Bandejas
        {
            name: 'Bandeja Dorada 250gr ACP',
            subrubroId: 5,
            price: 150,
        },
        {
            name: 'Bandeja Dorada 500gr ACP',
            subrubroId: 5,
            price: 200,
        },
        {
            name: 'Bandeja Dorada 1Kg ACP',
            subrubroId: 5,
            price: 250,
        },
        {
            name: 'Bandeja Dorada 2Kg ACP',
            subrubroId: 5,
            price: 300,
        },
        {
            name: 'Bandeja Dorada 3Kg ACP',
            subrubroId: 5,
            price: 350,
        },

        // 6 Mangas
        {
            name: 'Manga Cosida Con Cupla N0 COOPER UNIDAD',
            subrubroId: 6,
            price: 600,
        },
        {
            name: 'Manga Cosida Con Cupla N1 COOPER UNIDAD',
            subrubroId: 6,
            price: 650,
        },
        {
            name: 'Manga Cosida Con Cupla N2 COOPER UNIDAD',
            subrubroId: 6,
            price: 700,
        },
        {
            name: 'Manga Cosida Con Cupla N3 COOPER UNIDAD',
            subrubroId: 6,
            price: 750,
        },
        {
            name: 'Manga Cosida Con Cupla N4 COOPER UNIDAD',
            subrubroId: 6,
            price: 800,
        },
    ];

    try {
        Product.bulkCreate(
            items.map((item) => {
                return {
                    ...item,
                    url: slugify(item.name, { lower: true, strict: true }),
                };
            }),
        );
    } catch (error) {
        throw new Error(error.message);
    }
};
