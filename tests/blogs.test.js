const Page = require('./helpers/Page')

let page;

beforeEach(async () => {
  page = await Page.build()
  await page.goto('localhost:3000')
})

afterEach(async () => {
  await page.close()
})

test('When logged in, can see blog create form', async () => {
  await page.login()
  await page.click('a.btn-floating')

  const label = await page.getContentsOf('form label')

  expect(label).toEqual('Blog Title')
})