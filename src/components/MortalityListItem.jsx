import React from "react";
import Flag from "./Flag";
import { ColumnChart } from "react-chartkick";
const xTitle = "age";
const yTitle = "pourcentage mortalité";
window.Chart = require("chart.js");

const MortalityListItem = ({mortality}) => {
    const formatMortalityMale= formatMortalityData(mortality.male)
    const formatMortalityFemale= formatMortalityData(mortality.female)
  return (
    <tr>
      <td>
        <Flag country={mortality.country} className="flag_small" />
      </td>
      <td className="col-md-6">
        <ColumnChart
          xtitle={xTitle}
          ytitle={yTitle}
          data={formatMortalityMale} max={30}
        />
      </td>
      <td className="col-md-6">
        <ColumnChart
          xtitle={xTitle}
          ytitle={yTitle}
          data={formatMortalityFemale} max={30}
        />
      </td>
    </tr>
  );
};

function formatMortalityData(mortality){
    const filterData = mortality.filter((data) => {
        if(data.age >= 110){
            return false
        }else{
            return data
        }
    })
    const array = filterData.map((data) => {
            return [Number(data.age).toFixed(0), Number(data.mortality_percent).toFixed(0)]
        })       
    return array
}

export default MortalityListItem;
