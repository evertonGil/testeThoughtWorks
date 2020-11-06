const hotelMock = [
        {
                name: 'Parque das flores',
                classification: 1,
                taxes: [
                        {
                                typeDay: 'weekday',
                                typeClient: 'regular',
                                valor: 110
                        },
                        {
                                typeDay: 'weekday',
                                typeClient: 'fidelidade',
                                valor: 80
                        },
                        {
                                typeDay: 'weekend',
                                typeClient: 'regular',
                                valor: 90
                        },
                        {
                                typeDay: 'weekend',
                                typeClient: 'fidelidade',
                                valor: 80
                        }
                ]
        },
        {
                name: 'Jardim Botânico',
                classification: 1,
                taxes: [
                        {
                                typeDay: 'weekday',
                                typeClient: 'regular',
                                valor: 160
                        },
                        {
                                typeDay: 'weekday',
                                typeClient: 'fidelidade',
                                valor: 110
                        },
                        {
                                typeDay: 'weekend',
                                typeClient: 'regular',
                                valor: 60
                        },
                        {
                                typeDay: 'weekend',
                                typeClient: 'fidelidade',
                                valor: 50
                        }
                ]
        },
        {
                name: 'Mar Atlântico',
                classification: 1,
                taxes: [
                        {
                                typeDay: 'weekday',
                                typeClient: 'regular',
                                valor: 220
                        },
                        {
                                typeDay: 'weekday',
                                typeClient: 'fidelidade',
                                valor: 100
                        },
                        {
                                typeDay: 'weekend',
                                typeClient: 'regular',
                                valor: 150
                        },
                        {
                                typeDay: 'weekend',
                                typeClient: 'fidelidade',
                                valor: 40
                        }
                ]
        },

];

module.exports = hotelMock;

