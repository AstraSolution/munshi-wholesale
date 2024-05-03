import { useForm } from "react-hook-form";
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
// import useAxiosPublic from "../../hooks/axios/useAxiosPublic";

import { useState } from "react";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [fields, setFields] = useState([]);
  const [fieldValues, setFieldValues] = useState([]);
  //   const axiosPuplic = useAxiosPublic()

  const handleAddField = () => {
    const newFields = [{ fieldName: "" }, ...fields];
    setFields(newFields);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);

    const newFieldValues = [...fieldValues];
    newFieldValues.splice(index, 1);
    setFieldValues(newFieldValues);
  };
  const handleFieldValueChange = (index, value) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[index] = value;
    setFieldValues(newFieldValues);
  };
  const handleImageChange = (files) => {
    const newImages = [...images];
    const newFileNames = [...fileNames];
    for (let i = 0; i < files.length; i++) {
      newImages.push(URL.createObjectURL(files[i]));
      newFileNames.push(files[i].name);
    }
    setImages(newImages);
    setFileNames(newFileNames);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    const newFileNames = [...fileNames];
    newImages.splice(index, 1);
    newFileNames.splice(index, 1);
    setImages(newImages);
    setFileNames(newFileNames);
  };
  const onSubmit = async (data) => {
    const {
      title,
      brand,
      category,
      price,
      quantity,
      model,
      discountPrice,

      // voltes,
      // power_source,
      // battery_type,
      // max_torque,
      // speed_settings,
      // chuck_size,
      // clutch_settings,
      // safety_features,
      // compatibility,
      included_accessories,
      color,
      variant,
      weight,
      warranty,
      material,
      certification,
      usage,
      availability,
      shipping_weight,
      shipping_dimensions,
      shipping_restrictions,
      country_of_origin,
      manufacturer,
      shipping_method,
      return_policy,
      description,
    } = data;

    // const cover_image = await uploadImage();
    const product = {
      title,
      brand,
      category,
      price,
      discountPrice,
      quantity,
      model,
      included_accessories,
      color,
      variant,
      weight,
      warranty,
      material,
      certification,
      shipping_method,
      usage,
      availability,
      shipping_weight,
      shipping_dimensions,
      shipping_restrictions,
      country_of_origin,
      manufacturer,
      return_policy,
      description,

      specification_features: fieldValues,

      // specification: {
      //   voltes,
      //   power_source,
      //   battery_type,
      //   max_torque,
      //   speed_settings,
      //   chuck_size,
      //   clutch_settings,
      //   safety_features: ["Overload protection", "Non-slip grip"],
      //   compatibility: [],
      // },

      upload_time: new Date().toISOString(),
    };
    console.log(product);
    // try {
    //   const res = await axiosPuplic.post("/products", product);
    //   if (res?.data) {
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Product Added successfully",
    //       showConfirmButton: true,
    //       timer: 1500,
    //     });
    //   }
    // } catch (error) {
    //   // Handle errors here
    //   console.error("Error adding product:", error);
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Something went wrong!",
    //   });
    // }
  };

  return (
    <section className="max-w-full px-4 lg:py-4 mx-auto bg-gray-800 rounded-lg  mb-9">
      <h1 className="text-center text-2xl font-bold text-gray-300 ">
        Product information
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <div className="lg:flex  gap-5 ">
            <div className="lg:w-8/12 w-full border-2 px-4 py-4 my-2 mb-5">
              {/*  title */}
              <div>
                <label className="text-gray-300 text-lg ">
                  {" "}
                  Product Title{" "}
                </label>
                <input
                  className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                  {...register("title")}
                  placeholder="Product Title"
                  type="text"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3  ">
                {/*  brand */}
                <div className="w-full">
                  <label className="text-gray-300 text-lg  "> Brand </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("brand")}
                    placeholder=" Brand Name"
                    type="text"
                    required
                  />
                </div>

                {/*  category */}
                <div className="w-full ">
                 <label className="text-gray-300 text-lg  "> Category </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("category")}
                    placeholder="Category Name"
                    type="text"
                    required
                  />
                </div>
                {/* model */}
                <div>
                  <label className="text-gray-300 text-lg  "> Model </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("model")}
                    placeholder=" Model Name"
                    type="text"
                    required
                  />
                </div>
                {/* Variant */}
                <div>
                  <label className="text-gray-300 text-lg "> Variant </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("variant")}
                    placeholder="variant"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>
            {/* pricing */}
            
            <div className="border-2 lg:w-4/12 w-full px-4 py-8 my-2">
              <div className="pb-5">
                <h1 className="border-b-2 text-center text-xl font-semibold text-white pb-4">
                  Pricing
                </h1>
              </div>
              <label className="text-gray-300 text-lg  "> Main Price </label>
              <input
                className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                {...register("price")}
                placeholder="$ 00"
                type="number"
                required
              />
              <label className="text-gray-300 text-lg  ">Discount Price</label>
              <input
                className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                {...register("discountPrice")}
                placeholder="$ 00"
                type="number"
                required
              />
            </div>

            
            
           
          </div>
          {/* second step */}
          <div className=" lg:flex  gap-5">
            <div className="lg:w-8/12 w-full border-2  px-4 py-4  ">
              <h1 className="text-center text-xl font-semibold mb-3">
                Organization
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 ">
                {/* return policy] */}
                <div>
                  <label className="text-gray-300 text-lg  ">
                    {" "}
                    Return Policy{" "}
                  </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("return_policy")}
                    placeholder="Return Policy"
                    type="text"
                    required
                  />
                </div>

                {/* included_accessories */}
                <div>
                  <label className="text-gray-300 text-lg  ">
                    {" "}
                    Included Accessories{" "}
                  </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("included_accessories")}
                    placeholder="Included Accessories"
                    type="text"
                    required
                  />
                </div>

                {/* material */}
                <div>
                  <label className="text-gray-300 text-lg  "> Material </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("material")}
                    placeholder=" Material"
                    type="text"
                    required
                  />
                </div>
                {/* color */}
                <div>
                  <label className="text-gray-300 text-lg  ">Color </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("color")}
                    placeholder="Color"
                    type="color"
                    required
                  />
                </div>
                {/* warranty */}
                <div>
                  <label className="text-gray-300 text-lg  "> Warranty </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("warranty")}
                    placeholder="Warranty"
                    type="text"
                    required
                  />
                </div>

                {/* usage */}
                <div>
                  <label className="text-gray-300 text-lg  "> Usage </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("usage")}
                    placeholder="Usage"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-500 lg:w-4/12 w-full px-4 py-4">
              <h1 className="text-center  font-semibold  ">Variants</h1>

              {/* quantity */}
              <div>
               <label className="text-gray-300 text-lg  "> Quantity </label>
                <input
                  className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                  {...register("quantity")}
                  placeholder="Quantity"
                  type="number"
                  required
                />
              </div>
              {/* weight */}
              <div>
                <label className="text-gray-300 text-lg  "> Weight </label>
                <input
                  className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                  {...register("weight")}
                  placeholder=" Weight"
                  type="number"
                  required
                />
              </div>

              {/* availability */}
              <div>
               <label className="text-gray-300 text-lg  ">Availability </label>
                <input
                  className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                  {...register("availability")}
                  placeholder=" Availability"
                  type="number"
                  required
                />
              </div>
            </div>
          </div>
          {/* third step */}

          <div className="lg:flex  gap-5">
            <div className="lg:w-8/12 w-full border-2  px-4 py-4 my-2">
              <h1 className="font-semibold text-center mb-3 ">
                {" "}
                Shipping Information{" "}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                {/* certification */}
                <div>
                  <label className="text-gray-300 text-lg ">
                    {" "}
                    Certification{" "}
                  </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("certification")}
                    placeholder=" Certification"
                    type="text"
                  />
                </div>

                {/* shipping_weight */}
                <div>
                  <label className="text-gray-300 text-lg  ">
                    {" "}
                    Shipping Weight{" "}
                  </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("shipping_weight")}
                    placeholder=" Shipping Weight"
                    type="text"
                    required
                  />
                </div>

                {/* shipping_dimensions */}
                <div>
                  <label className="text-gray-300 text-lg ">
                    {" "}
                    Shipping Dimensions{" "}
                  </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("shipping_dimensions")}
                    placeholder="Shipping Dimensions"
                    type="text"
                    required
                  />
                </div>

                {/* shipping_restrictions */}
                <div>
                 <label className="text-gray-300 text-lg  ">
                    {" "}
                    Shipping Restrictions{" "}
                  </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("shipping_restrictions")}
                    placeholder="Shipping Restrictions"
                    type="text"
                    required
                  />
                </div>

                {/* country_of_origin */}
                <div>
                  <label className="text-gray-300 text-lg  ">
                    {" "}
                    Country Of Origin{" "}
                  </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("country_of_origin")}
                    placeholder="Country Of Origin"
                    type="text"
                    required
                  />
                </div>
                {/* manufacturer */}
                <div>
                  <label className="text-gray-300 text-lg  "> Manufacturer </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("manufacturer")}
                    placeholder="Manufacturer"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-300 text-lg ">
                    {" "}
                    Shipping_method{" "}
                  </label>
                  <input
                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                    {...register("shipping_method")}
                    placeholder="Shipping_method"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>
            {/* description */}
            <div className="w-full lg:w-4/12 mt-3   ">
              <h1 className="text-gray-300 text-lg mb-3 ">Description</h1>
              <textarea
                className="border lg:h-[370px]  text-gray-300 text-sm rounded-lg focus:ring-blue-500 border-[#2802a5]focus:border-blue-500 block w-full ps-4 p-3  bg-gray-700 dark:  dark:text-white"
                {...register("description")}
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          {/* Dynamic add field button */}
          <h1 className="text-center lg:text-left font-semibold py-1 md:py-2 lg:py-3">
            {" "}
            Specification Information{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  ">
            {fields?.map((field, index) => (
              <div key={index} className="">
                <label className="text-gray-300 text-lg ">
                  Specification Features {index + 1}
                </label>
                <input
                  value={fieldValues[index] || ""}
                  onChange={(e) =>
                    handleFieldValueChange(index, e.target.value)
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 border-[#2802a5]focus:border-blue-500 block w-full ps-4 p-3  dark:bg-gray-700 dark: dark:placeholder-gray-400 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveField(index)}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            {/* Add Field button */}
            <button
              type="button"
              onClick={handleAddField}
              className="btn text-green-600"
            >
              Add Features
            </button>
          </div>
        </div>
        {/* Image input */}
        <div className="mt-6">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 items-center mt-2">
            {images.map((image, index) => (
              <div key={index} className="relative mr-4 mb-4">
                <img
                  src={image}
                  alt={fileNames[index]}
                  className="max-h-40 w-auto"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            ))}
          </div>
          {/* Upload button */}
          <label className="text-white text-center">Upload Image</label>
          <div
            onClick={() => document.querySelector("#image").click()}
            className="cursor-pointer mt-4 p-4 border  rounded-md flex items-center justify-center"
          >
            <LuUpload className="text-3xl text-[#F01543] mx-auto"></LuUpload>{" "}
            <p className="ml-2"></p>{" "}
          </div>
          {/* Hidden file input */}
          <input
            type="file"
            id="image"
            accept="image/*"
            className="hidden"
            multiple
            onChange={(e) => handleImageChange(e.target.files)}
          />
        </div>
        {/* Save button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="p-4 rounded-xl font-semibold bg-slate-900"
          >
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProducts;