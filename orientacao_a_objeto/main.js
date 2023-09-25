class veiculo{
    constructor(marca, modelo){
        if(this.constructor == veiculo){
            throw new Error('Veiculo é uma classe abstrata e não pode ser instanciada diretamente.');
        }

        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar(){
        throw new Error('Método "acelerar" deve ser implementado nas subclasses.');
    }

    frear(){
        throw new Error('Método "frear" deve ser implementado nas subclasses.');
    }
}

class Carro extends veiculo{
    constructor(marca, modelo, potencia){
        super(marca, modelo);
        this.potencia = potencia;
    }

    acelerar(){
        console.log(`${this.modelo} (${this.marca}) acelerando...`)
    }

    frear(){
        console.log(`${this.modelo} (${this.marca}) freando...`)
    }
}

class Moto extends veiculo{
    constructor(marca, modelo, cilindradas){
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    acelerar(){
        console.log(`${this.modelo} (${this.marca}) acelerando...`);
    }

    frear(){
        console.log(`${this.modelo} (${this.marca}) freando...`)
    }
}

const carro1 = new Carro('Toyota', 'Corolla', '150cv');
const moto1 = new Moto('Honda', 'CBR 600RR', '600cc');
const carro2 = new Carro('Ford', 'Mustang', '300cv');

carro1.acelerar();
carro1.frear();

moto1.acelerar();
moto1.frear();

carro2.acelerar();
carro2.frear();