import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { Context } from "./../../Context/LoginContext";
import "./AddProduct.css";

function AddProducts() {
  let { isLogin, setLogin } = useContext(Context);
  if (sessionStorage.getItem("user") !== null) {
    setLogin(true);
  }

  var current = new Date();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let formSubmit = async (productObj) => {
    let result = await axios.put("http://localhost:4000/user/update-product", {
      user: sessionStorage.getItem("user"),
      productObj,
    });

    if (result.data === "product already exist") {
      alert("Product already existed");
    } else {
      alert("Product added successfully");
    }
  };

  return (
    <>
      {isLogin === true ? (
        <div className="addproduct p-4">
          <div className="card col-lg-7 col-md-8 col-sm-10 col-12 mx-auto shadow-lg  pt-2 pb-4">
            <p className="display-6 text-center text-primary">Add Product</p>
            <div className="w-50 mx-auto">
              <form onSubmit={handleSubmit(formSubmit)}>
                <input
                  className="form-control"
                  name="productName"
                  type="text"
                  placeholder="Product Name"
                  {...register("productName", { required: true })}
                />

                {errors.productName?.type === "required" && (
                  <p className="text-danger errs">*Product Name is required</p>
                )}
                <br />

                <input
                  className="form-control"
                  name="productId"
                  type="number"
                  placeholder="Product Id"
                  {...register("productId", { required: true })}
                />

                {errors.productId?.type === "required" && (
                  <p className="text-danger errs">*Product Id is required</p>
                )}
                <br />

                <input
                  className="form-control"
                  name="category"
                  type="text"
                  placeholder="Category"
                  {...register("category", { required: true })}
                />

                {errors.category?.type === "required" && (
                  <p className="text-danger errs">*Category is required</p>
                )}
                <br />

                <input
                  className="form-control"
                  name="mrp"
                  type="number"
                  placeholder="MRP"
                  {...register("mrp", { required: true })}
                />

                {errors.mrp?.type === "required" && (
                  <p className="text-danger errs">*MRP is required</p>
                )}
                <br />
                <label className="fw-bolder">Creation Date:</label>
                <input
                  className="form-control"
                  name="creationDate"
                  type="date"
                  placeholder="Creation Date"
                  min={new Date().toISOString().split("T")[0]}
                  {...register("creationDate", { required: true })}
                />

                {errors.creationDate?.type === "required" && (
                  <p className="text-danger errs">*Creation Date is required</p>
                )}
                <br />
                <label className="fw-bolder">Expire Date:</label>
                <input
                  className="form-control"
                  name="expireDate"
                  type="date"
                  placeholder="Expire Date"
                  min={
                    new Date(current.getTime() + 86400000)
                      .toISOString()
                      .split("T")[0]
                  }
                  {...register("expireDate", { required: true })}
                />
                {/* <DatePicker /> */}

                {errors.expireDate?.type === "required" && (
                  <p className="text-danger errs">*Expire Date is required</p>
                )}
                <br />
                <div className="text-center">
                  <button className=" btn3 btn ">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-danger text-center">Access denied</p>
      )}
    </>
  );
}

export default AddProducts;
