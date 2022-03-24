const Guitar = require(
    '../models/Guitar'
);

const guitarData = [
    {
        guitar_type: 'acoustic',
        guitar_brand: 'Blueridge',
        
    },
    {
        guitar_type: 'electric',
        guitar_brand: 'Gibson Les Paul',
        
    },
    {
        guitar_type: 'bass',
        guitar_brand: 'Ibanez',
        
    },
    {
        guitar_type: 'acoustic',
        guitar_brand: 'Seagull',
        comment_text:''
    },
];

const seedGuitars = () => Guitar.bulkCreate(guitarData);

module.exports = seedGuitars;