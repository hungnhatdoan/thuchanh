class  Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name
    }

    getWeight() {
        return this.weight

    }

    toString() {
        return 'this.name' + 'this.weight'
    }
}


