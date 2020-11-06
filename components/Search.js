const Hotel = require('./Hotel');

class Search {
        constructor() {
                this.hotels = [];
        }

        getHotels() {
               return fetch('/hotels')
                .then(response => {
                        const data = response.json();
                        this.addHotel(data);

                        return data;
                })
                .catch((err) => {
                        console.log(err)
                });
        }

        addHotel(hotel) {
                const { name, classification, taxes } = hotel;
                this.hotels.push(new Hotel(name, classification, taxes));
        }

}
module.exports = Search;