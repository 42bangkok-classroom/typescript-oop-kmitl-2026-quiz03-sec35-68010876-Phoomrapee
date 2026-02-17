import { Drawable } from './drawable'

export abstract class Shape implements Drawable {
  protected color: string

  constructor(color: string) {
    this.color = color
  }

  public getColor(): string {
    return this.color
  }

  public abstract draw(): void
  public abstract getArea(): number
}
