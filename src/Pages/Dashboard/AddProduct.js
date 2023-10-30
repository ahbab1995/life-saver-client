import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const { data: products, isLoading } = useQuery('products', () => fetch('http://localhost:5000/product').then(res => res.json()));

  const imageStorageKey='1789ae62229cf20d18ca4c808a9d19ae';

  const onSubmit = (data) =>{
    const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
      .then(res => res.json())
          .then(result => {
            const img = result.data.url;
            const product = {
                name: data.name,
                price: data.price,           
                img: img
            }

            fetch('http://localhost:5000/addproduct', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json',
                  authorization: `Bearer ${localStorage.getItem("accessToken")}`
              },
              body: JSON.stringify(product)
          })
          .then(res =>res.json())
          .then(inserted =>{
              if(inserted.insertedId){
                  toast.success('Product added successfully')
                  reset();
              }
              else{
                  toast.error('Failed to add the Product');
              }
          })
    })
  }

  if (isLoading) {
    return <Loading></Loading>
}

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-2xl font-medium">Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is Required",
                    },
                  })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.name?.message}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  {...register("price", {
                    required: "price is required",
                  })}
                  placeholder="price"
                  className="input input-bordered"
                />
              </div>

              {errors.password && (
                <p className="text-red-600">{errors.price?.message}</p>
              )}

               <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  type="file"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "file is Required",
                    },
                  })}
                  placeholder="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.file?.message}</p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
