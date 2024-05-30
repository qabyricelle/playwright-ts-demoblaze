import { test as base } from "@playwright/test"
import { ProductPage } from "../page/product-page"
import { HomePage } from "../page/home-page"
import { CartPage } from "../page/cart-page"
import search from "../util/search"

type Fixtures = {
    search: any
    homePage: HomePage
    productPage: ProductPage
    cartPage: CartPage
}

export const test = base.extend<Fixtures>({
    search: search,

    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },

    productPage: async ({ page }, use) => {
        await use(new ProductPage(page))
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page))
    }
})

export { expect } from "@playwright/test"