import React, { useRef } from "react";

function Searchbar(props) {
  let year1 = useRef();
  let year2 = useRef();
  function searchHandler() {}
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <td>Start Year</td>
          <td>
            <input type="number" className="form-control" ref={year1}></input>
          </td>
          <td>End Year</td>
          <td>
            <input type="number" className="form-control" ref={year2}></input>
          </td>
          <td>
            <button onClick={searchHandler} className="btn">
              Search
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Searchbar;
