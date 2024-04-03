import commerce from '@/lib/commerce'
import ProductFilter from '@/components/ProductFilter'

const { data: products } = await commerce.products.list()

console.log(products)

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: true },
      { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
      { value: 'pants-shorts', label: 'Pants & Shorts', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS', checked: false },
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: '2xl', label: '2XL', checked: false },
    ],
  },
]

const activeFilters = [{ value: 'objects', label: 'Objects' }]

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

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
          <ProductFilter
            filters={filters}
            activeFilters={activeFilters}
            sortOptions={sortOptions}
            products={products}
          />
        </main>
      </div>
    </div>
  )
}

export default ProductsPage
