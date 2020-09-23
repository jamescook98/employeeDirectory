import React from "react";
import axios from "axios";
const RANDUMB = "https://randomuser.me/api/?results=15";


export default {
    populate: function() {
      return axios.get(RANDUMB);
    }
  };
  