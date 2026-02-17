export class Product {
    readonly name: string
    protected price: number = 0

    static readonly DISCOUNT_PERCENT: number = 10

    constructor(name: string, price?: number) {
        this.name = name
        if (price !== undefined) {
            this.price = price
        }
    }

    getPrice(): number {
        return this.price
    }

    setPrice(price: number): void {
        this.price = price
    }
}

