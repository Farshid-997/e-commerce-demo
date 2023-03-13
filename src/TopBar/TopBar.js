import React from "react";
import logo from "../Assests/Vector 1.png";
import "./TopBar.css";
import line from "../Assests/Line 7.png";
export default function TopBar() {
  return (
    <>
      {/* parent component of topbar start here */}
      <div className="d-flex justify-between main-div">
        {/* image section and input div start here  */}

        <div className="d-flex">
          <div className="d-flex">
            <img src={logo} alt="logo"></img>

            <h6 className="logo-text">store</h6>
          </div>

          {/* input div start here */}
          <div className="input-divs">
            {/* select div starts here */}
            <div className="d-flex">
              <select>
                <option value="volvo">All categories</option>
                <option value="saab">All categories</option>
              </select>

               {/* line-img */}
            <img src={line} alt="input-line" className="line-img"></img>
            </div>
            {/* select div ends here */}

           
          </div>
        </div>
        {/* image section and input div ends here  */}
      </div>
      {/* parent component of topbar ends here */}
    </>
  );
}
