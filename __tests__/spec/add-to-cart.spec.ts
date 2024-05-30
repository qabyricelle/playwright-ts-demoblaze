import { test, expect } from "../fixture/base"

test.beforeEach(async ({ page }) => {
    await page.goto("/")
})

test("Add to Cart", async ({ page, homePage, productPage, cartPage, search }) => {
    await test.step("Select a category and product", async () => {
        await homePage.selectCategory(search.category)
        await homePage.selectProduct(search.product)
        await expect(page).toHaveURL(search.url)
        await expect(productPage.productName).toContainText(search.product)
    })

    await test.step("Add product to cart", async () => {
        await productPage.addToCart()
        page.on("dialog", dialog => dialog.accept())
    })

    await test.step("Go to cart", async () => {
        await homePage.goToCart()
        await expect(page).toHaveURL("/cart.html")
    })

    await test.step("Product is added in cart", async () => {
        page.waitForLoadState("domcontentloaded")
        await expect(cartPage.cartTable).toContainText(search.product)
        await expect(cartPage.totalPrice).toHaveText(search.price.toString())
    })

    await test.step("Place an order", async () => {
        
    })
})