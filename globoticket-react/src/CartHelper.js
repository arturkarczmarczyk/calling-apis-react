import UuidStore from "./UuidStore";
import axios from "axios";
import {mutate} from "swr";

export function addCart(id) {
    return async function addCartThunk(dispatch, getState) {
        await axios.post(
            "http://localhost:3333/cart",
            {
                id: id,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-SESSION-TOKEN": UuidStore.value
                }
            });
        mutate("http://localhost:3333/cart");
    }
}

export function updateCart(id, quantity) {
    return async function updateCartThunk(dispatch, getState) {
        if (quantity === 0) {
            await axios.delete(
                "http://localhost:3333/cart",
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-SESSION-TOKEN": UuidStore.value
                    },
                    data: {
                        id: id
                    }
                });
        } else {
            await axios.patch(
                "http://localhost:3333/cart",
                {
                        id: id,
                        quantity: quantity
                    },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-SESSION-TOKEN": UuidStore.value
                    }
                });
        }
        mutate("http://localhost:3333/cart");
    }
}

export function deleteCart(id) {
    return async function deleteCartThunk(dispatch, getState) {
        await axios.delete(
            "http://localhost:3333/cart",
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-SESSION-TOKEN": UuidStore.value
                },
                data: {
                    id: id
                }
            });

        mutate("http://localhost:3333/cart");
    }
}

export function clearCart() {
    return async function deleteCartThunk(dispatch, getState) {
        await fetch(
            "http://localhost:3333/cart", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "X-SESSION-TOKEN": UuidStore.value
                }
            });

        mutate("http://localhost:3333/cart");
    }
}
