'use client'
import ProductsGrid from './ProductsGrid'
import ActiveFilters from './ActiveFilter'
import Filters from './Filters'

const ProductFilter = ({ filters, activeFilters, sortOptions, products }) => {
  return (
    <div className="bg-gray-50">
      <section aria-labelledby="filter-heading">
        <Filters filters={filters} sortOptions={sortOptions} />
        <ActiveFilters activeFilters={activeFilters} />
        <ProductsGrid products={products} />
      </section>
    </div>
  )
}

export default ProductFilter
