import React from "react";
import {useHistory} from "react-router-dom";
import Shoppingcartitem from "./Shoppingcartitem";
import {clearCart} from "./CartHelper";
import {useCart} from "./SwrHelper";

export default function Shoppingcart() {
    const history = useHistory();
    const { cart, isLoading} = useCart();

    const totalAmount = !isLoading && cart ? cart.map(item => item.price * item.quantity).reduce((p, n) => p + n, 0) : 0;

    let handleOrderClick = () => {
        clearCart();
        history.push("/confirm");
    };



    return (
        <div className="container" id="carttable">
        <table className="table mt-5">
            <thead>
                <tr>
                    <th scope="col">Event</th>
                    <th scope="col">Price</th>
                    <th scope="col"># Tickets</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    cart && cart.map(item => (
                      <Shoppingcartitem event={item} key={item.id} />
                    ))
                }
            </tbody>
            <tfoot>
                <tr className="align-middle">
                    <td colSpan="5" className="text-center">
                        <button type="button" id="btnOrder"
                            onClick={handleOrderClick}
                            className="btn btn-primary btn-primary-themed btn-md font-upper">Order for ${ totalAmount }</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
    );
  }
