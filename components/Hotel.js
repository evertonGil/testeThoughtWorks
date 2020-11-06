const Tax = require('./Tax');

class Hotel {
        constructor(name, classification, taxes) {
                this.name = name;
                this.classification = classification;
                this.taxes = [];
                this.addTaxes(taxes);
        }

        addTaxes(taxes) {
                if (Array.isArray(taxes)) {
                        taxes.forEach(tax => {
                                const {typeDay, typeClient, valor} = tax;
                                const taxObject = new Tax(typeDay, typeClient, valor);
                                this.taxes.push(taxObject);
                        });
                }
        }
}

module.exports = Hotel;