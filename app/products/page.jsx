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
          {/* Passing Chec data to ProductFilter */}
          <ProductFilter products={products} categories={categories} />
        </main>
      </div>
    </div>
  )
}

export default ProductsPage
