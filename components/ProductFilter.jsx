'use client'
import { useState } from 'react'
import ProductsGrid from './ProductsGrid'
import ActiveFilters from './ActiveFilter'
import Filters from './Filters'

const ProductFilter = ({ sortOptions, products, categories }) => {
  let addCheckedToCategories = categories.map((category) => {
    return { ...category, checked: false }
  })

  const [updatedCategories, setUpdatedCategories] = useState(
    addCheckedToCategories,
  )

  let activeFilters = updatedCategories.filter((category) => category.checked)

  const handleChangeFilter = (id) => {
    const newFilters = updatedCategories.map((filter) => {
      if (filter.id === id) {
        return { ...filter, checked: !filter.checked }
      }
      return filter
    })
    setUpdatedCategories(newFilters)
  }

  let filteredProducts = products.filter((product) => {
    let activeCategoryList = activeFilters.map((category) => category.slug)
    if (activeCategoryList.length === 0) return true
    return product.categories.some((category) => {
      return activeCategoryList.includes(category.slug)
    })
  })

  return (
    <div className="bg-gray-50">
      <section aria-labelledby="filter-heading">
        <Filters
          sortOptions={sortOptions}
          categories={updatedCategories}
          handleChangeFilter={handleChangeFilter}
          activeFilters={activeFilters}
        />
        <ActiveFilters
          activeFilters={activeFilters}
          handleChangeFilter={handleChangeFilter}
        />
        <ProductsGrid products={filteredProducts} />
      </section>
    </div>
  )
}

export default ProductFilter
