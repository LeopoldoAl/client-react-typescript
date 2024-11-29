import { Form, Link, useActionData } from "react-router-dom"

export async function action({request}) {
  const data = Object.fromEntries(await request.formData())
  let error = ''
  if (Object.values(data).includes('')) {
    error = 'All of the fields are obligated!'
  }
  if (error.length) {
    return error
  }
  return {}
}

export default function NewProduct() {
  const error = useActionData()

  console.log(error)
  
  return (
    <>
      <div className="flex justify-between">
        <h2 className='text-4xl font-black text-slate-500'>
        Registering Product
        </h2>
        <Link
          to="/"
          className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
        >
          Back to Products
        </Link>
      </div>

      <Form
          className="mt-10"
          method="POST"
      >
 
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Product Name:</label>
                <input 
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Product Name"
                    name="name"
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="price"
                >Price:</label>
                <input 
                    id="price"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Product Price. ex. 200, 300"
                    name="price"
                />
            </div>
            <input
              type="submit"
              className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
              value="Add Product"
            />
      </Form>
    </>
  )
}
