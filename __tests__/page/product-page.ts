import { Locator, Page } from "@playwright/test"

export class ProductPage {
    readonly page: Page
    readonly productName: Locator
    readonly addToCartButton: Locator

    constructor (page: Page) {
        this.page = page
        this.productName = page.locator(".name")
        this.addToCartButton = page.getByRole("link", { name: "Add to cart" })
    }

    async addToCart() {
        this.addToCartButton.click()
    }
}