class PoligonoRegular {
    constructor(bace, altura) {
        this.bace = bace;
        this.altura = altura;
    }
    getPerimeter() {
        return null;
    }
    getArea() {
        return null;
    }
}

class Triangle extends PoligonoRegular {
    constructor(bace, altura) {
        super(bace, altura);
    }
    getArea() {
        let area = (this.bace * this.altura) / 2
        return `el area es: ${area}`;
    }
    getParameter() {
        let perimetro = this.bace * 3
        return `el perimetro es ${perimetro}`;
    }
}

let triangle1 = new Triangle(10, 15)
console.log(triangle1)
console.log(triangle1.getArea())
console.log(triangle1.getParameter())

class Cuadrado extends PoligonoRegular {
    constructor(bace, altura) {
        super(bace, altura);
    }

    getArea() {
        let area = this.bace * this.bace ;
        return `el area es: ${area}`;
    }
    getParameter() {
        let perimetro = this.bace * 4
        return `el perimetro es ${perimetro}`;
    }
}

    let cuadrado1 = new Cuadrado(5,5)
    console.log(cuadrado1)
    console.log(cuadrado1.getArea())
    console.log(cuadrado1.getParameter())


    class Pentagono extends PoligonoRegular {
        constructor(bace, altura, apotema) {
            super(bace, altura);
            this.apotema = apotema;
        }

        getArea() {
            let perimetro =  this.bace * 5;
            let area  = (perimetro * this.apotema)/2;
            return `el area es: ${area}`;
        }
        getParameter() {
            let perimetro = this.bace * 5
            return `el perimetro es ${perimetro}`;
        }
    }

    let pentagono1 = new Pentagono(5,5,7)
    console.log(pentagono1)
    console.log(pentagono1.getArea())
    console.log(pentagono1.getParameter())