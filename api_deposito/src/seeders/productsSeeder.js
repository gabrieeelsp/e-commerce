const { default: slugify } = require('slugify');
const { Product } = require('../db');

module.exports = () => {
    const items = [
        // 1 Bizcochuelos
        {
            name: 'Bizcochuelo 650gr Red NATALIA Chocolate',
            cost: 600.5,
        },
        {
            name: 'Bizcochuelo 650gr Red NATALIA Vainilla',
            cost: 700.5,
        },
        {
            name: 'Bizcochuelo 1Kg Red NATALIA Chocolate',
            cost: 800,
        },
        {
            name: 'Bizcochuelo 1Kg Red NATALIA Vainilla',
            cost: 900,
        },
        {
            name: 'Bizcochuelo 2Kg Red NATALIA Chocolate',
            cost: 1000,
        },
        {
            name: 'Bizcochuelo 2Kg Red NATALIA Vainilla',
            cost: 1200,
        },

        // 2 Premezclas
        {
            name: 'Premezcla para Prep. Brownie LEDEVIT PAQ x250g',
            cost: 200,
        },
        {
            name: 'Premezcla para Prep. Budín LEDEVIT PAQ x500g',
            cost: 250,
        },
        {
            name: 'Premezcla para Prep. Cupcake Chocolate LEDEVIT PAQ x250g',
            cost: 300,
        },
        {
            name: 'Premezcla para Prep. Cupcake Vainilla LEDEVIT PAQ x250g',
            cost: 350,
        },
        {
            name: 'Premezcla para Prep. Macarons LEDEVIT PAQ x250g',
            cost: 400,
        },
        {
            name: 'Premezcla para Prep. Tapitas de Alf LEDEVIT PAQ x250g',
            cost: 480,
        },

        // 3 Granas
        {
            name: 'Grana de Color DECORMAGIC Amarillo PAQ x1Kg',
            cost: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Azul PAQ x1Kg',
            cost: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Naranja PAQ x1Kg',
            cost: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Rojo PAQ x1Kg',
            cost: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Verde PAQ x1Kg',
            cost: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Rosa PAQ x1Kg',
            cost: 100,
        },
        {
            name: 'Grana de Color DECORMAGIC Violeta PAQ x1Kg',
            cost: 100,
        },

        // 4 Cortantes
        {
            name: 'Cortante Baby Shower COOPER',
            cost: 300,
        },
        {
            name: 'Cortante Cartel COOPER',
            cost: 300,
        },
        {
            name: 'Cortante COOPER Galletitas GRANDE x6',
            cost: 300,
        },
        {
            name: 'Cortante Coronas y Princesas COOPER',
            cost: 300,
        },
        {
            name: 'Cortante de Acero Liso Red N03',
            cost: 300,
        },

        // 5 Bases y Bandejas
        {
            name: 'Bandeja Dorada 250gr ACP',
            cost: 150,
        },
        {
            name: 'Bandeja Dorada 500gr ACP',
            cost: 200,
        },
        {
            name: 'Bandeja Dorada 1Kg ACP',
            cost: 250,
        },
        {
            name: 'Bandeja Dorada 2Kg ACP',
            cost: 300,
        },
        {
            name: 'Bandeja Dorada 3Kg ACP',
            cost: 350,
        },

        // 6 Mangas
        {
            name: 'Manga Cosida Con Cupla N0 COOPER UNIDAD',
            cost: 600,
        },
        {
            name: 'Manga Cosida Con Cupla N1 COOPER UNIDAD',
            cost: 650,
        },
        {
            name: 'Manga Cosida Con Cupla N2 COOPER UNIDAD',
            cost: 700,
        },
        {
            name: 'Manga Cosida Con Cupla N3 COOPER UNIDAD',
            cost: 750,
        },
        {
            name: 'Manga Cosida Con Cupla N4 COOPER UNIDAD',
            cost: 800,
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
