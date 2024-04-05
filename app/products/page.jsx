import commerce from '@/lib/commerce'
import ProductFilter from '@/components/ProductFilter'

// Fetch products and categories from Chec API
const { data: products } = await commerce.products.list()
const { data: categories } = await commerce.categories.list()

const ProductsPage = () => {
  return (
    <div className="bg-gray-50">
      <div>
        <main>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Workspace sale
              </h1>
              <p className="mt-4 max-w-xl text-sm text-gray-700">
                Our thoughtfully designed workspace objects are crafted in
                limited runs. Improve your productivity and organization with
                these sale items before we run out.
              </p>
            </div>
          </div>
          {/* Passing Chec data to ProductFilter */}
          <ProductFilter products={products} categories={categories} />
        </main>
      </div>
    </div>
  )
}

export default ProductsPage
