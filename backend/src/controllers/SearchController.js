const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parserStringAsArray')

module.exports = {
    async index (request, response){
        const { latitude, longitude, techs } = request.query;
        //buscar todos devs no raio de 10km
        //filtrar por tecnologia

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ devs})
    }
}