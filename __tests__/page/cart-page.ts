import { Locator, Page } from "@playwright/test"

export class CartPage {
    readonly page: Page
    readonly cartTable: Locator
    readonly totalPrice: Locator
    readonly placeOrderButton: Locator

    constructor (page: Page) {
        this.page = page
        this.cartTable = page.locator("#tbodyid")
        this.totalPrice = page.locator("#totalp")
        this.placeOrderButton = page.getByRole("button", { name: "Place Order" })
    }
}