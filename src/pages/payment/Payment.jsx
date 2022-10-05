import React, { useRef } from "react";
import Card from "./card";
import Styles from "./style";
import { Form, Field } from "react-final-form";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import logo from "../../assets/icons/logo.svg";

import { PaymentData } from "../../Context/Payment";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const countryRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const emailRef = useRef();
  const postalCodeRef = useRef();
  const line1Ref = useRef();
  const cardNumberRef = useRef();
  const sourceRef = useRef();
  const cvcRef = useRef();
  const expiryRef = useRef();
  const nameRef = useRef();

  const post = async () => {
    await fetch("http://localhost:3000/payment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        post: {
          email: emailRef.current.value,
          source: sourceRef.current.value,
          name: nameRef.current.value,
          address: {
            line1: line1Ref.current.value,
            postal_code: postalCodeRef.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value,
            country: countryRef.current.value,
          },
        },
      }),
    });
  };

  const onSubmit = async () => {
    await post();
  };

  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => navigate("/")}
        className="flex items-center cursor-pointer mt-4 justify-center mr-[20px]"
      >
        <img width={70} height={70} src={logo} alt="Login" />
        <span className="font-bold text-black font-roboto tracking-[.175em] uppercase md:text-[.85rem] lg:text-[1.5rem] xl:text-[1.5rem] text-[.75rem]">
          SMS SERVICE
        </span>
      </div>
      <Styles>
        <Form
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            active,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Card
                  number={values.number || ""}
                  name={values.name || ""}
                  email={values.email || ""}
                  expiry={values.expiry || ""}
                  cvc={values.cvc || ""}
                  focused={active}
                />
                <div>
                  <Field
                    ref={countryRef}
                    name="country"
                    component="input"
                    type="text"
                    placeholder="Country"
                  />
                  <Field
                    ref={cityRef}
                    name="city"
                    component="input"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <div>
                  <Field
                    ref={stateRef}
                    name="state"
                    component="input"
                    type="text"
                    placeholder="State"
                  />
                  <Field
                    ref={postalCodeRef}
                    name="postalCode"
                    component="input"
                    type="number"
                    placeholder="Postal Code"
                  />
                </div>
                <div>
                  <Field
                    ref={emailRef}
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Email"
                  />
                  <Field
                    ref={line1Ref}
                    name="line1"
                    component="input"
                    type="text"
                    placeholder="Line 1"
                  />
                </div>
                <div>
                  <Field
                    ref={cardNumberRef}
                    name="number"
                    component="input"
                    type="text"
                    pattern="[\d| ]{16,22}"
                    placeholder="Card Number"
                    format={formatCreditCardNumber}
                  />
                </div>
                <div>
                  <Field
                    ref={sourceRef}
                    name="source"
                    component="input"
                    type="text"
                    placeholder="Source"
                  />
                </div>
                <div>
                  <Field
                    ref={nameRef}
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <Field
                    ref={expiryRef}
                    name="expiry"
                    component="input"
                    type="text"
                    pattern="\d\d/\d\d"
                    placeholder="Valid Thru"
                    format={formatExpirationDate}
                  />
                  <Field
                    ref={cvcRef}
                    name="cvc"
                    component="input"
                    type="text"
                    pattern="\d{3,4}"
                    placeholder="CVC"
                    format={formatCVC}
                  />
                </div>
                <div className="buttons">
                  <button onClick={post} type="submit" disabled={submitting}>
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </button>
                </div>
              </form>
            );
          }}
        />
      </Styles>
    </div>
  );
};

export default Payment;
