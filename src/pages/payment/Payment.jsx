import React, { useRef } from "react";
import Card from "./card";
import Styles from "./style";
import { Form, Field } from "react-final-form";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";

import { PaymentData } from "../../Context/Payment";

import { useState } from "react";
import axios from "axios";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Payment = () => {
  const cvcRef = useRef();
  const cardNumsRef = useRef();
  const expiryRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const [email, setEmail] = useState();

  const [res] = PaymentData();

  const onSubmit = async (value) => {
    await sleep(300);
    window.alert(JSON.stringify(value, 0, 2));
  };

  const post = async () => {
    axios
      .post("http://localhost:3001/payment", {
        email: emailRef.current.value,
        source: "asadbek",
        name: "Share Care",
        address: {
          line1: "TC 9/4 Old MES colony",
          postal_code: "110092",
          city: "Tashkent",
          state: "Tashkent",
          country: "Uzbekistan",
        },
      })
      .then((res) => {
        console.log(email, "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [state, setState] = useState();

  console.log(state);

  return (
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
                  ref={nameRef}
                  name="country"
                  component="input"
                  type="text"
                  placeholder="Country"
                />
                <Field
                  ref={nameRef}
                  name="city"
                  component="input"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div>
                <Field
                  ref={nameRef}
                  name="state"
                  component="input"
                  type="text"
                  placeholder="State"
                />
                <Field
                  ref={nameRef}
                  name="postalCode"
                  component="input"
                  type="number"
                  placeholder="Postal Code"
                />
              </div>
              <div>
                <Field
                  ref={nameRef}
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Email"
                />
                <Field
                  ref={nameRef}
                  name="line1"
                  component="input"
                  type="text"
                  placeholder="Line 1"
                />
              </div>
              <div>
                <Field
                  ref={cardNumsRef}
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
                  ref={cardNumsRef}
                  name="source"
                  component="input"
                  type="text"
                  // pattern="[\d| ]{16,22}"
                  placeholder="Source"
                  // format={formatCreditCardNumber}
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
  );
};

export default Payment;
