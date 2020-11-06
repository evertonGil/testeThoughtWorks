const DayType = require('../enums/dayType');
const ClientType = require('../enums/clientType');

class Tax {
        constructor(typeDay,
                typeClient,
                valor) {

                this.typeDay = DayType[typeDay];
                this.typeClient = ClientType[typeClient];
                this.valor = valor;
        }

}

module.exports = Tax;