import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../Context/LoginContext";
import "./ListOfProducts.css";

function ListOfProducts() {
  let [ProductArr, setProductArr] = useState([]);
  let { isLogin, setLogin } = useContext(Context);
  if (sessionStorage.getItem("user") !== null) {
    setLogin(true);
  }
  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/user/get-product/${sessionStorage.getItem(
          "user"
        )}`
      )
      .then((product) => {
        if (product.data.message !== "error") {
          setProductArr(product.data);
        }
      });
  }, []);

  return (
    <>
      {isLogin === true ? (
        <div className="listBody">
          <p className="display-6  text-end m-2">
            Welcome,
            <span className="text-success">
              {sessionStorage.getItem("user")}
            </span>
          </p>
          <p className="display-4 text-center ">List of Products</p>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="table-responsive bg-white tabborder">
                  <table className="table mb-0 table-striped  ">
                    <thead className="">
                      <tr className="tabheader">
                        <th scope="col">Product ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Creation Date</th>
                        <th scope="col">Expire Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ProductArr.map((e, index) => (
                        <tr key={index}>
                          <td>{e.productId}</td>
                          <td>{e.productName}</td>
                          <td>{e.category}</td>
                          <td>{e.mrp}</td>
                          <td>{e.creationDate}</td>
                          <td>{e.expireDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-danger text-center">Access denied</p>
      )}
    </>
  );
}

export default ListOfProducts;
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>