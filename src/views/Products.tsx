import { Link } from 'react-router-dom'
import { getProducts } from '../services/ProductService'


export async function loader() {
  const products = await getProducts()
  console.log(products)
  
  return {}
}
export default function Products() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className='text-4xl font-black text-slate-500'>
          Products
        </h2>
        <Link
          to="product/new"
          className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
        >
          Adding Product
        </Link>
      </div>
    </>
  )
}
