import React from "react";

function Table({ header, rows }) {
  return (
    <>
      <table className="min-w-max">
        <thead>
          <tr>
            {header.map((item) => {
              return (
                <th key={item.name} className="border-2 border-black px-3">
                  {item.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((data) => {
            return (
              <tr key={data.email}>
                {header.map((item) => {
                  return (
                    <td
                      key={item.data}
                      className="border-2 py-1 border-black px-2"
                    >
                      {data[item.data]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
