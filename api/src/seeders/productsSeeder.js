const { default: slugify } = require('slugify');
const { Product } = require('../db');

module.exports = () => {
    const items = [
        // 1 Bizcochuelos
        {
            name: 'Bizcochuelo 650gr Red NATALIA Chocolate',
            subrubroId: 1,
            porc: 30,
            external_id: 1,
        },
        {
            name: 'Bizcochuelo 650gr Red NATALIA Vainilla',
            subrubroId: 1,
            porc: 30,
            external_id: 2,
        },
        {
            name: 'Bizcochuelo 1Kg Red NATALIA Chocolate',
            subrubroId: 1,
            porc: 30,
            external_id: 3,
        },
        {
            name: 'Bizcochuelo 1Kg Red NATALIA Vainilla',
            subrubroId: 1,
            porc: 30,
            external_id: 4,
        },
        {
            name: 'Bizcochuelo 2Kg Red NATALIA Chocolate',
            subrubroId: 1,
            porc: 30,
            external_id: 5,
        },
        {
            name: 'Bizcochuelo 2Kg Red NATALIA Vainilla',
            subrubroId: 1,
            porc: 30,
            external_id: 6,
        },

        // 2 Premezclas
        {
            name: 'Premezcla para Prep. Brownie LEDEVIT PAQ x250g',
            subrubroId: 2,
            porc: 30,
            external_id: 7,
        },
        {
            name: 'Premezcla para Prep. Budín LEDEVIT PAQ x500g',
            subrubroId: 2,
            porc: 30,
            external_id: 8,
        },
        {
            name: 'Premezcla para Prep. Cupcake Chocolate LEDEVIT PAQ x250g',
            subrubroId: 2,
            porc: 30,
            external_id: 9,
        },
        {
            name: 'Premezcla para Prep. Cupcake Vainilla LEDEVIT PAQ x250g',
            subrubroId: 2,
            porc: 30,
            external_id: 10,
        },
        {
            name: 'Premezcla para Prep. Macarons LEDEVIT PAQ x250g',
            subrubroId: 2,
            porc: 30,
            external_id: 11,
        },
        {
            name: 'Premezcla para Prep. Tapitas de Alf LEDEVIT PAQ x250g',
            subrubroId: 2,
            porc: 30,
            external_id: 12,
        },

        // 3 Granas
        {
            name: 'Grana de Color DECORMAGIC Amarillo PAQ x1Kg',
            subrubroId: 3,
            porc: 30,
            external_id: 13,
        },
        {
            name: 'Grana de Color DECORMAGIC Azul PAQ x1Kg',
            subrubroId: 3,
            porc: 30,
            external_id: 14,
        },
        {
            name: 'Grana de Color DECORMAGIC Naranja PAQ x1Kg',
            subrubroId: 3,
            porc: 30,
            external_id: 15,
        },
        {
            name: 'Grana de Color DECORMAGIC Rojo PAQ x1Kg',
            subrubroId: 3,
            porc: 30,
            external_id: 16,
        },
        {
            name: 'Grana de Color DECORMAGIC Verde PAQ x1Kg',
            subrubroId: 3,
            porc: 30,
            external_id: 17,
        },
        {
            name: 'Grana de Color DECORMAGIC Rosa PAQ x1Kg',
            subrubroId: 3,
            porc: 30,
            external_id: 18,
        },
        {
            name: 'Grana de Color DECORMAGIC Violeta PAQ x1Kg',
            subrubroId: 3,
            porc: 30,
            external_id: 19,
        },

        // 4 Cortantes
        {
            name: 'Cortante Baby Shower COOPER',
            subrubroId: 4,
            porc: 30,
            external_id: 20,
        },
        {
            name: 'Cortante Cartel COOPER',
            subrubroId: 4,
            porc: 30,
            external_id: 21,
        },
        {
            name: 'Cortante COOPER Galletitas GRANDE x6',
            subrubroId: 4,
            porc: 30,
            external_id: 22,
        },
        {
            name: 'Cortante Coronas y Princesas COOPER',
            subrubroId: 4,
            porc: 30,
            external_id: 23,
        },
        {
            name: 'Cortante de Acero Liso Red N03',
            subrubroId: 4,
            porc: 30,
            external_id: 24,
        },

        // 5 Bases y Bandejas
        {
            name: 'Bandeja Dorada 250gr ACP',
            subrubroId: 5,
            porc: 30,
            external_id: 25,
        },
        {
            name: 'Bandeja Dorada 500gr ACP',
            subrubroId: 5,
            porc: 30,
            external_id: 26,
        },
        {
            name: 'Bandeja Dorada 1Kg ACP',
            subrubroId: 5,
            porc: 30,
            external_id: 27,
        },
        {
            name: 'Bandeja Dorada 2Kg ACP',
            subrubroId: 5,
            porc: 30,
            external_id: 28,
        },
        {
            name: 'Bandeja Dorada 3Kg ACP',
            subrubroId: 5,
            porc: 30,
            external_id: 29,
        },

        // 6 Mangas
        {
            name: 'Manga Cosida Con Cupla N0 COOPER UNIDAD',
            subrubroId: 6,
            porc: 30,
            external_id: 30,
        },
        {
            name: 'Manga Cosida Con Cupla N1 COOPER UNIDAD',
            subrubroId: 6,
            porc: 30,
            external_id: 31,
        },
        {
            name: 'Manga Cosida Con Cupla N2 COOPER UNIDAD',
            subrubroId: 6,
            porc: 30,
            external_id: 32,
        },
        {
            name: 'Manga Cosida Con Cupla N3 COOPER UNIDAD',
            subrubroId: 6,
            porc: 30,
            external_id: 33,
        },
        {
            name: 'Manga Cosida Con Cupla N4 COOPER UNIDAD',
            subrubroId: 6,
            porc: 30,
            external_id: 34,
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
