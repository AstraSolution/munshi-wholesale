import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CartsDetails = ({ cart, refetch }) => {
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(cart?.quantity);
  const axiosSecure = useAxiosSecure()


  const handleIncrement = async (id) => {
    if (quantity < cart?.stock_limit) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      const total_price = quantity * cart?.unit_price;
      const res = await axiosSecure.patch(`/myCarts/${id}`, {
        quantity,
        total_price,
      });
      if (res?.data) {
        refetch();
      }
    } else {
      setError(`Opps this book limit is ${cart?.stock_limit}`);
    }
  };
 
  // handle decrement function
  const handleDecrement = async (id) => {
    if (quantity > 1) {
      setError("");
      setQuantity((prevQuantity) => prevQuantity - 1);
      const total_price = quantity * cart?.unit_price;
      const res = await axiosSecure.patch(`/myCarts/${id}`, {
        quantity,
        total_price,
      });
      if (res.data) {
        refetch();
      }
    }
  };

  // delete a cart
  const handleDeleteCart = (id, title) => {
    Swal.fire({
      title: "Delete Book",
      text: `Are you sure you want to delete the book ${title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/myCarts/${id}`)
          .then((response) => {
            if (response.data) {
              Swal.fire(
                "Deleted!",
                `Your book "${title}" has been deleted.`,
                "success"
              );

              refetch();
            }
          })
          .catch((error) => {
            console.error("Error deleting Book:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the book.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      <div className="bg-white rounded-3xl lg:rounded-none shadow-sm hover:bg-[#19a49113] lg:shadow-inherit border border-gray-100">
        <div className="grid grid-cols-6 items-center text-center font-semibold border border-gray-100 p-5">
          <img
            src={cart?.product_image[0]}
            alt="product"
            style={{ width: "50%", height: "100%" }}
            className="mx-auto"
          />
          <h5>{cart?.title}</h5>
          <h5>{cart?.unit_price?.toFixed(2)} BDT</h5>
          <h5>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDecrement(cart?._id)}
                className="bg-base-300 p-3"
              >
                <FaMinus className="mx-auto"></FaMinus>
              </button>
              <h3>{cart?.quantity}</h3>
              <button
                onClick={() => handleIncrement(cart?._id)}
                className="bg-base-300 p-3"
              >
                <FaPlus className="mx-auto"></FaPlus>
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </h5>
          <h5>{cart?.total_price?.toFixed(2)} BDT</h5>
          <div>
            <button
              onClick={() => handleDeleteCart(cart?._id, cart?.title)}
              className=" bg-red-500 rounded-full text-white p-3"
            >
              <RxCross2 className="mx-auto"></RxCross2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartsDetails;
