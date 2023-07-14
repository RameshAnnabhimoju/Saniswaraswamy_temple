import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OnlineServicesDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initiatePayment = () => {
    if (Object.values(pooja_values).every((value) => !!value)) {
      navigate("/Confirmdetails", {
        state: {
          values: {
            ...pooja_values,
            name: pooja_values.name.trim(),
            gothram: pooja_values.gothram.trim(),
            city: pooja_values.city.trim(),
            address: pooja_values.address.trim(),
            mandal: pooja_values.mandal.trim(),
            mobile: pooja_values.mobile.trim(),
            pincode: pooja_values.pincode.trim(),
            paymentType: "pooja",
          },
        },
      });
    }
  };
  const poojaType = location.state.type;
  //   console.log(poojaType);
  const onlineServices = {
    YekadasaRudratailabishekam: {
      name: "ఏకాదశ రుద్రతైలాభిషేకం",
      amounts: {
        "1 సారి పూజకు": 400,
        "1సం.లో వచ్చే 52 శనివారములకు": 20800,
        "శాశ్వత అభిషేకము": 4000,
        "శాశ్వత శనిత్రయోదశులు": 24000,
      },
    },
    Mahanyasapurvaka: {
      name: "మహాన్యాసపూర్వక ఏకవార రుద్రతైలాభిషేకం",
      amounts: {
        "1 సారి పూజకు": 250,
        "1సం.లో వచ్చే 52 శనివారములకు": 13000,
        "శాశ్వత అభిషేకము": 3000,
        "శాశ్వత శనిత్రయోదశులు": 18000,
      },
    },
    Sanijapam: {
      name: "శని జపం",
      amounts: {
        "1 సారి పూజకు": 6000,
      },
    },
    SaniSanthi: {
      name: "శని శాంతి హోమం",
      amounts: {
        "1 సారి పూజకు": 1000,
      },
    },
  };
  const initial_pooja_values = {
    name: "",
    gothram: "",
    pooja: "1 సారి పూజకు",
    amount: onlineServices[poojaType].amounts["1 సారి పూజకు"],
    address: "",
    city: "",
    pincode: "",
    state: "",
    mobile: "",
    mandal: "",
    poojaName: onlineServices[poojaType].name,
    poojaDate: "",
  };
  const [pooja_values, setpooja_values] = useState(initial_pooja_values);
  //console.log(pooja_values);

  const changeHandler = (e) => {
    const Amounts = onlineServices[poojaType].amounts;
    const { name, value } = e.target;
    setpooja_values({
      ...pooja_values,
      [name]: value,
      amount: Amounts[value],
    });
  };

  return (
    <div className="Yekadasa_rudratailabishekam">
      <div className="Yekadasa_rudratailabishekam_title">
        {onlineServices[poojaType].name}
      </div>
      <form className="donations_form" action="">
        <div>
          <label htmlFor="">Donor / Nominee Name</label>
          <br />
          <input
            className="input_box"
            name="name"
            value={pooja_values.name}
            onChange={changeHandler}
            type="text"
            placeholder="please enter donor/nominee name"
          />
        </div>

        <div>
          <label htmlFor="">Gothram</label>
          <br />
          <input
            className="input_box"
            name="gothram"
            value={pooja_values.gothram}
            onChange={changeHandler}
            type="text"
            placeholder="please enter your gothram"
          />
        </div>

        <div>
          <label htmlFor="">Select Pooja</label>
          <br />
          <select
            name="pooja"
            value={pooja_values.pooja}
            onChange={changeHandler}
            id=""
          >
            {Object.keys(onlineServices[poojaType].amounts).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="">Amount</label>
          <br />
          <input
            className="input_box"
            name="amount"
            value={pooja_values.amount}
            type="text"
            disabled
          />
        </div>

        <div>
          <label htmlFor="">Pooja Date</label>
          <br />
          <input
            name="poojaDate"
            value={pooja_values.poojaDate}
            onChange={changeHandler}
            type="date"
          />
        </div>

        <div>
          <label htmlFor="">Address</label>
          <br />
          <input
            className="input_box"
            name="address"
            value={pooja_values.address}
            onChange={changeHandler}
            placeholder="House/building number, street name"
            type="text"
          />
        </div>

        <div>
          <label htmlFor="">City</label>
          <br />
          <input
            className="input_box"
            placeholder="Please enter your city"
            name="city"
            value={pooja_values.city}
            onChange={changeHandler}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Mandal</label>
          <br />
          <input
            className="input_box"
            placeholder="Please enter your city"
            name="mandal"
            value={pooja_values.mandal}
            onChange={changeHandler}
            type="text"
          />
        </div>

        <div>
          <label htmlFor="">Pincode</label>
          <br />
          <input
            className="input_box"
            placeholder="Enter your pincode"
            name="pincode"
            value={pooja_values.pincode}
            onChange={changeHandler}
            type="text"
          />
        </div>

        <div>
          <label htmlFor="">State</label>
          <br />
          <select
            name="state"
            value={pooja_values.state}
            onChange={changeHandler}
          >
            <option value="" hidden>
              Select state
            </option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">
              Dadra and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Mobile Number</label>
          <br />
          <input
            placeholder="Enter your mobile number"
            className="input_box"
            name="mobile"
            value={pooja_values.mobile}
            onChange={changeHandler}
            type="text"
          />
        </div>
      </form>
      <div>
        <button
          className="btn btn-primary"
          onClick={initiatePayment}
          disabled={!Object.values(pooja_values).every((value) => !!value)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OnlineServicesDetails;
