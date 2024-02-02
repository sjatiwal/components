import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../component/table";
import {
  getAllEmployees,
  getEmployeeDetails,
  deleteEmployee,
} from "../action/employeeAction";
import Title from "../component/title";
import { useDispatch, useSelector } from "react-redux";

const SearchEmployee = () => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const [deleted, setDeleted] = useState(false);

  const dispatch = useDispatch();

  const { employees } = useSelector((state) => state.allEmployee);

  const clearData = () => {
    setMobileNo("");
    setName("");
    dispatch(getAllEmployees());
  };

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [deleted]);

  const header = [
    {
      name: "FirstName",
      data: "firstName",
    },
    {
      name: "LastName",
      data: "lastName",
    },
    {
      name: "MobileNo",
      data: "mobileNo",
    },
    {
      name: "Email",
      data: "email",
    },
    {
      name: "Gender",
      data: "gender",
    },
    {
      name: "BirthDate",
      data: "birthDate",
    },
    {
      name: "Country",
      data: "country",
    },
    {
      name: "State",
      data: "state",
    },
    {
      name: "Action",
      data: "action",
    },
  ];

  const rows = [];

  employees &&
    employees.forEach((item) => {
      rows.push({
        id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        mobileNo: item.mobileNo,
        email: item.email,
        gender: item.gender,
        birthDate: item.dateOfBirth,
        country: item.country,
        state: item.state,
        action: <Button id={item._id} />,
      });
    });

  function Button({ id }) {
    return (
      <>
        <button className="bg-green-400 px-2">
          <Link
            to={`/employee/edit/${id}`}
            onClick={() => dispatch(getEmployeeDetails(id))}
          >
            Edit
          </Link>
        </button>

        <button
          className="bg-red-500 px-2 ml-2"
          onClick={() => {
            dispatch(deleteEmployee(id), setDeleted(!deleted));
          }}
        >
          Delete
        </button>
      </>
    );
  }

  const searchEmployee = () => {
    if (name !== "" || mobileNo !== "") {
      dispatch(getAllEmployees(name, mobileNo));
    }
  };

  return (
    <div className="p-4">
      <Title title="Search Employee" />
      <div className="flex flex-row justify-between ">
        <div>
          <b>Search Employee</b>
        </div>
        <div className="bg-blue-400 py-1 px-4">
          <Link to="/employee/create">Add Employee</Link>
        </div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-3 justify-evenly  mt-4">
        <div>
          <div>Name</div>
          <input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border-2 border-slate-400 px-2"
          />
        </div>
        <div>
          <div>Mobile No</div>
          <input
            type="number"
            value={mobileNo}
            placeholder="Mobile No."
            onChange={(e) => {
              setMobileNo(e.target.value);
            }}
            className="border-2 border-slate-400 px-2"
          />
        </div>
        <div className="relative">
          <div className="mt-2  lg:absolute lg:bottom-0">
            <input
              type="button"
              value="Search"
              className="bg-green-400 px-2 py-1"
              onClick={searchEmployee}
            />
            <input
              type="button"
              value="Clear"
              className="bg-red-500 ml-2 px-2 py-1"
              onClick={clearData}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 w-full overflow-scroll">
        <Table header={header} rows={rows} />
      </div>
    </div>
  );
};

export default SearchEmployee;
