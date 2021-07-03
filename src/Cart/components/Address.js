import React from "react";
import "Styles/Address.css";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { getUser } from "Accounts/helper/GetUser";
import { useCookies } from "react-cookie";
import saveAddress from "Cart/helper/SaveAddress";
import getAllAddress from "Cart/helper/getAllAddressAPI";
import AddressCard from "./AddressCard";
import {CountryDropdown,RegionDropdown} from "react-country-region-selector";


function Address() {
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");

  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [landMark, setLandMark] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [userId, setUserId] = useState("");
  const [cookies, setCookies, removeCookies] = useCookies("");
  const [allAddresses, setAllAddress] = useState();
  const history = useHistory();
  const [deleteaddress, setDeleteaddress] = useState([]);
  function usethisAddress(e) {
    const addressLine = addressLine1 + " " + addressLine2;
    if (userId) {
      console.log(userId);
    }
    const data = {
      user: userId,
      country: country,
      state: state,
      land_mark: landMark,
      address_line: addressLine,
      pincode: pinCode,
      city: city,
      phone_number_1: mobileNo,
    };
    console.log(userId);
    saveAddress(e, cookies, data, history);
   
  }
  const changeHandler = (value) => {
    setCountry(value);
  };
  function selectCountry(val) {
    setCountry(val);
  }

  function selectRegion(val) {
    setState(val);
  }

  useEffect(() => {
    getUser(cookies, null, setUserId);
  });
  useEffect(() => {
    getAllAddress(cookies, setAllAddress);
  }, [deleteaddress]);
  return (
    <div className="container">
      <div className="header__address">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            class="amazon"
            alt="amazon.in"
            width="100"
            height="50"
          />
        </Link>
      </div>

      <h2 className="delivery">Select a delivery address</h2>
      {allAddresses && (
        <AddressCard
          allAddress={allAddresses}
          history={history}
          setdelete={setDeleteaddress}
        />
      )}

      <div>
        <h2>Add a new address</h2>
        <form autoComplete="on">
          <div>
            <label className="mt">
              <strong>Country/Region</strong>
            </label>
            <br />
            <CountryDropdown
              className="mytext"
              value={country}
              onChange={(val) => selectCountry(val)}
            />
          </div>

          <div className="mt">
            <label>
              <strong>Full name (First and Last name)</strong>
            </label>
            <br />
            <input
              type="text"
              name="First Name"
              value={fullName}
              className="mytext"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mt">
            <label>
              <strong>Mobile number</strong>
            </label>
            <br />
            <input
              type="text"
              name="Mobile no"
              placeholder="10-digit mobile number without prefixes"
              value={mobileNo}
              className="mytext"
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>

          <div className="mt">
            <label>
              <strong>PIN code</strong>
            </label>
            <br />
            <input
              type="text"
              name="Pin Code"
              placeholder="6 digits [0-9] PIN code"
              className="mytext"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>

          <div className="mt">
            <label>
              <strong>Flat,House no,Building,Company,Apartment </strong>
            </label>
            <br />
            <input
              type="text"
              name="Flathouse"
              className="mytext"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </div>

          <div className="mt">
            <label>
              <strong>Area,Colony,Street,Sector,Village </strong>
            </label>
            <br />
            <input
              type="text"
              name="Area"
              className="mytext"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </div>

          <div className="mt">
            <label>
              <strong>Landmark </strong>
            </label>
            <br />
            <input
              type="text"
              name="LandMark"
              placeholder="Eg.Near AIIMS Flyover,Behind Regal Cinema,etc."
              className="mytext"
              value={landMark}
              onChange={(e) => setLandMark(e.target.value)}
            />
          </div>

          <div className="mt">
            <label>
              <strong>Town/City</strong>
            </label>
            <br />
            <input
              type="text"
              name="Town"
              className="mytext"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div classNam="mt">
            <label>
              <strong> State/Province/Region </strong>
            </label>
            <br />
            <RegionDropdown
              className="mytext"
              country={country}
              value={state}
              onChange={(val) => selectRegion(val)}
            />
          </div>

          <button
            className="yellow mt mb"
            onClick={(e) => {
              usethisAddress(e);
            }}
          >
            Use Address
          </button>
        </form>
      </div>
    </div>
  );
}

export default Address;
