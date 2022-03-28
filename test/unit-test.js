var expect = require('chai').expect;
var calculadora = require('../src/public/js/funciones');


describe('calculando anticipo sugerido respecto de un precio de venta', ()=>{
    it('deberá retornar 200 (20%) de 1,000 que es el precio de venta utilizado', ()=>{
        const anticipo = calculadora.anticipo(1000);
        expect(anticipo).to.be.equal("200.00");
    })
})