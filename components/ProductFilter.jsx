'use client'
import { useState } from 'react'
import ProductsGrid from './ProductsGrid'
import ActiveFilters from './ActiveFilter'
import Filters from './Filters'
import ProductPageHeader from './ProductPageHeader'

const ProductFilter = ({ products, categories }) => {
  // Add sort options
  const [sortOptions, setSortOptions] = useState([
    { name: 'Newest', href: '#', current: false },
    { name: 'Oldest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ])

  // Add checked property to categories
  let addCheckedToCategories = categories.map((category) => {
    return { ...category, checked: false }
  })

  // Add update categories with checked property to component state
  const [updatedCategories, setUpdatedCategories] = useState(
    addCheckedToCategories,
  )

  // Add active filters data
  let activeFilters = updatedCategories.filter((category) => category.checked)

  // Logic for filtering products based on active filters
  let filteredProducts = products.filter((product) => {
    let activeCategoryList = activeFilters.map((category) => category.slug)
    if (activeCategoryList.length === 0) return true
    return product.categories.some((category) => {
      return activeCategoryList.includes(category.slug)
    })
  })

  const handleChangeFilter = (id) => {
    const newFilters = updatedCategories.map((filter) => {
      if (filter.id === id) {
        return { ...filter, checked: !filter.checked }
      }
      return filter
    })
    setUpdatedCategories(newFilters)
  }

  const handleChangeSortOption = (name) => {
    const newSortOptions = sortOptions.map((option) => {
      if (option.name === name) {
        return { ...option, current: !option.current }
      }
      return { ...option, current: false }
    })

    setSortOptions(newSortOptions)
  }

  return (
    <>
      {/* Products Page Header */}
      <ProductPageHeader activeFilters={activeFilters} />
      {/* Product Filter */}
      <div className="bg-gray-50">
        <section aria-labelledby="filter-heading">
          <Filters
            sortOptions={sortOptions}
            categories={updatedCategories}
            handleChangeFilter={handleChangeFilter}
            activeFilters={activeFilters}
            handleChangeSortOption={handleChangeSortOption}
          />
          <ActiveFilters
            activeFilters={activeFilters}
            handleChangeFilter={handleChangeFilter}
          />
          <ProductsGrid products={filteredProducts} sortOptions={sortOptions} />
        </section>
      </div>
    </>
  )
}

export default ProductFilter
