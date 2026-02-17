import { Product } from './product'

export class Playstation extends Product {
    private generation: number

    constructor(name: string, generation: number, price: number) {
        super(name, price)
        this.generation = generation
    }

    getProfile(): string {
        return this.name + ' (Gen ' + this.generation + ')'
    }

    getDiscountPrice(): number {
        const discount = this.price * Product.DISCOUNT_PERCENT / 100
        return this.price - discount
    }
}
