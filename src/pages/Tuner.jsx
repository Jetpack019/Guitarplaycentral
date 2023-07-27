import React, { useEffect, useState, useRef } from "react";
import Guitar_tuner from "./TunerFiles/Guitar_tuner";
import CustomNavbar from "../components/navbar";

function Tuner() {
 
  return (
    <div>
      <CustomNavbar/>
      <Guitar_tuner/>
    </div>
  );
};

export default Tuner;
