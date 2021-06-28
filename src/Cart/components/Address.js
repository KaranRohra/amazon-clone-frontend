import React from 'react'
import "Styles/Address.css"
import {useState} from "react";
import {useHistory} from "react-router-dom"
import { getUser } from 'Accounts/helper/GetUser';
function Address() {
  
  const[fullName,setFullName] = useState();
  const[country,setCountry] = useState();
  const[addressLine1,setAddressLine1]  = useState();
  const[addressLine2,setAddressLine2] = useState();
  const[mobileNo,setMobileNo] = useState();
  const[pinCode,setPinCode] = useState();
  const[landMark,setLandMark] = useState();
  const[state,setState] = useState();
  const[city,setCity] = useState();
  const [uid,setUid] = useState();


    function usethisAddress(e){
      
        const data ={
          // user:fullName,
          country:country,
          state:state,
          "land_mark" : addressLine1,
          "address_line" : addressLine2,
          pincode :pinCode,
          city:city
        }

        
    }
    return (
      <div className="container">
        <div className="header__address">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            class="amazon"
            alt="amazon.in"
            width="100"
            height="50"
          />
        </div>
        <h2 className="delivery">Select a delivery address</h2>
        <div>
          <h2>Add a new address</h2>
          <form autoComplete="on">
            <div>
              <label className="mt">
                <strong>Country/Region</strong>
              </label>
              <br />
              <input type="text" name="Country" value ={country} className="mytext" onChange={(e)=>setCountry(e.target.value)}/>
            </div>

            <div className="mt">
              <label>
                <strong>Full name (First and Last name)</strong>
              </label>
              <br />
              <input type="text" name="First Name" value={fullName} className="mytext" onChange={(e)=>setFullName(e.target.value)} />
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
                onChange={(e)=>setMobileNo(e.target.value)}
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
                onChange={(e)=>setPinCode(e.target.value)}
              />
            </div>

            <div className="mt">
              <label>
                <strong>Flat,House no,Building,Company,Apartment </strong>
              </label>
              <br />
              <input type="text" name="Flathouse" className="mytext" value={addressLine1} onChange={(e)=>setAddressLine1(e.target.value)} />
            </div>

            <div className="mt">
              <label>
                <strong>Area,Colony,Street,Sector,Village </strong>
              </label>
              <br />
              <input type="text" name="Area" className="mytext" value={addressLine2} onChange={(e)=>setAddressLine2(e.target.value)} />
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
                onChange={(e)=>setLandMark(e.target.value)}
              />
            </div>

            <div className="mt">
              <label>
                <strong>Town/City</strong>
              </label>
              <br />
              <input type="text" name="Town" className="mytext" value={city} onChange={(e)=>setCity(e.target.value)}/>
            </div>

            <div class="mt">
              <label>
                <strong> State/Province/Region </strong>
              </label>
              <br />
              <input type="text" name="State" className="mytext" value={state} onChange={(e)=>setState(e.target.value)} />
            </div>

            <button className="yellow mt mb" onClick={(e)=>{usethisAddress(e)}}>Use Address</button>
          </form>
        </div>
      </div>
    );
}

export default Address
