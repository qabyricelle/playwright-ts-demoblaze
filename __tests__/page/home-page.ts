import { Locator, Page } from "@playwright/test"

export class HomePage {
    readonly page: Page
    readonly categoryName: Locator
    readonly productList: Locator
    readonly cartNavItem: Locator

    constructor (page: Page) {
        this.page = page
        this.categoryName = page.locator("#itemc")
        this.productList = page.locator("#tbodyid")
        this.cartNavItem = page.getByRole("link", { name: "Cart", exact: true } )
    }

    async selectCategory (search: string) {
        await this.categoryName.filter({ hasText: search }).click()
    }

    async selectProduct (product: string) {
        await this.productList.getByRole("link", { name: product, exact: true }).click()
    }

    async goToCart() {
        await this.cartNavItem.click()
    }

}