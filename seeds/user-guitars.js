const Guitar = require(
    '../models/Guitar'
);

const guitarData = [
    {
        guitar_type: 'acoustic',
        guitar_brand: 'Blueridge',
        price: 1299.99,
        comment_text:'Pre-War Series BR-260A Dreadnought Acoustic Guitar Natural'
    },
    {
        guitar_type: 'electric',
        guitar_brand: 'Gibson Les Paul',
        price: 1389.99,
        comment_text:'Heritage Cherry Sunburst'
    },
    {
        guitar_type: 'bass',
        guitar_brand: 'Ibanez',
        price: 489.99,
        comment_text:'Pre-War Series BR-260A Dreadnought Acoustic Guitar Natural'
    },
    {
        guitar_type: 'acoustic',
        guitar_brand: 'Seagull',
        price: 299.99,
        comment_text:'S6 Original Acoustic Guitar Natural'
    },
];

const seedGuitars = () => Guitar.bulkCreate(guitarData);

module.exports = seedGuitars;