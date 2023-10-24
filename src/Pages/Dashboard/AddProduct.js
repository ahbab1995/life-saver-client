import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-2xl font-medium">Add Product</h1>
            <form onSubmit={handleSubmit()}>
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
