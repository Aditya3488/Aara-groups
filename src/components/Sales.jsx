import axios from "axios";
import React, { useState, useEffect } from "react";
import data from "../data";
import { Model } from "./Model";
import "./sales.css";

function Sales() {
  // const [saveData, setSaveData] = useState([]);

  // useEffect(() => {
  //   const url =
  //     "http://api.reward-dragon.com:8001/rewardadmin/concern-manage-admin/";
  //   const body = {
  //     user_id: "1"
  //   };

  //   axios
  //     .post(url, body, {
  //       headers: {
  //         Authorization: "d401a31b50604523a1646aed428844c5"
  //       }
  //     })
  //     .then(function (res) {
  //       setSaveData(res.data.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   console.log(saveData);
  // }, []);
  console.log(data);

  return (
    <section>
      {data.slice(0, 2).map((dt, key) => {
        return (
          <>
            <div
              key={key}
              className="cards"
              style={{ columns: "200px 2", columngap: "25px", padding: "25px" }}
            >
              <div className="card">
                <span className="des">{dt.ticket}</span>
                <br />

                <h5 className="heading">
                  ORG_ID:<span className="des">{dt.organization_id}</span>
                </h5>

                <h5 className="heading">
                  TYPE:<span className="des"> {dt.concern_type}</span>
                </h5>

                <h5 className="heading">
                  CONCERN DETAIL:{" "}
                  <span className="des"> {dt.concern_details}</span>
                </h5>

                <h5 className="heading">
                  {" "}
                  CLIENT NAME: <span className="des">{dt.client_name}</span>
                </h5>

                <h5 className="heading">
                  ADMIN EMAIL:
                  <span className="des"> {dt.company_admin_email}</span>
                </h5>

                <h5 className="heading">
                  EMAIL:<span className="des"> {dt.user_email_id}</span>
                </h5>

                {/* <button className="button-1" >open</button> */}
                <Model
                  id={dt.concern_id}
                  Type={dt.concern_type}
                  email={dt.user_email_id}
                  detail={dt.concern_details}
                  org={dt.organization_id}
                  name={dt.client_name}
                />
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}

export default Sales;
