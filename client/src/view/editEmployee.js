import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import { Link } from "react-router-dom";
import { RiCalendarCheckFill } from "react-icons/ri";
import Calendar from "react-calendar";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEmployeeDetails, updateEmployee } from "../action/employeeAction";

const EditEmployee = () => {
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [state, setState] = useState([]);
  const country = Country.getAllCountries();
  const [showCalender, setShowCalendar] = useState(false);
  const [showOtherState, setShowOtherState] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState(null);
  const [address, setAddress] = useState("");
  const [selectedCountry, setselectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [writeState, setWriteState] = useState("");
  const [date, setDate] = useState(new Date());
  const [skills, setSkills] = useState([] || "");
  const [checkValue, setCheckValue] = useState(false);
  const change = date.getDate();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();
  const { employee } = useSelector((state) => state.getEmployeeDetails);

  useEffect(() => {
    setState(State.getStatesOfCountry(countryId));
    setselectedCountry(Country.getCountryByCode(countryId));
    !showOtherState
      ? setSelectedState(State.getStateByCode(stateId))
      : setSelectedState(writeState);
  }, [countryId, stateId, showOtherState, writeState, employee]);

  function getCountryCodeByName(countryName) {
    const countryCode = country.find((c) => c.name === countryName);
    countryCode && setCountryId(countryCode["isoCode"]);
  }

  function getStateCodeByName(stateName) {
    const stateCode = state.find((s) => s.name === stateName);
    if (stateCode) {
      setStateId(stateCode["isoCode"]);
    } else {
      setCheckValue(true);
      setShowOtherState(true);
      setWriteState(stateName);
    }
  }

  useEffect(() => {
    getCountryCodeByName(employee.country);
    getStateCodeByName(employee.state);
  }, [employee]);

  useEffect(() => {
    if (employee && employee._id !== id) {
      dispatch(getEmployeeDetails(id));
    } else {
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setEmail(employee.email);
      setMobileNo(employee.mobileNo);
      setDob(employee.dateOfBirth);
      setGender(employee.gender);
      setAddress(employee.address);
      setselectedCountry(employee.country);
      setSkills(employee.skills);
    }
  }, []);

  const formatDateToDdMmYy = (date) => {
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = String(date.getFullYear());

    return `${day}/${month}/${year}`;
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    setDob(formatDateToDdMmYy(date));
    setShowCalendar(false);
  }, [change, date]);

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateEmployee(
        id,
        firstName,
        lastName,
        email,
        mobileNo,
        gender,
        dob,
        address,
        selectedCountry,
        selectedState,
        skills
      )
    );
    navigate("/employee/search");
  };
  return (
    <div className="p-4">
      <div className="border-b-2 border-b-slate-300 py-2 border-t-4 border-blue-500 ">
        Employee Details
      </div>
      <form onSubmit={formSubmit} className="mt-4">
        <div className="lg:grid grid-cols-3 gap-4  flex flex-col">
          <div>
            <div>First Name</div>
            <input
              className="border-2 border-slate-400 w-[90%] px-2"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div>
            <div>Last Name</div>
            <input
              className="border-2 border-slate-400 w-[90%] px-2"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div>
            <div>Email</div>
            <input
              className="border-2 border-slate-400 w-[90%] px-2"
              placeholder="Eamil Id"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <div>Mobile No</div>
            <input
              className="border-2 border-slate-400 w-[90%] px-2"
              placeholder="Mobile No."
              type="number"
              value={mobileNo}
              onChange={(e) => {
                setMobileNo(e.target.value);
              }}
            />
          </div>
          <div>
            <div>Date of Birth</div>
            <div className="relative">
              <div className="relative w-[90%]">
                <input
                  value={formatDateToDdMmYy(date)}
                  className="border-2 border-slate-400 w-full px-2"
                  placeholder="dd/mm/yy"
                  readOnly
                />

                <div
                  onClick={() => setShowCalendar(!showCalender)}
                  className="absolute top-0 right-2 flex items-center border-slate-400 h-7 border-l-2 pl-2 "
                >
                  <div>
                    <RiCalendarCheckFill />
                  </div>
                </div>
              </div>
              {showCalender && (
                <Calendar
                  value={date}
                  onChange={(val) => setDate(val)}
                  className="absolute  border-2 border-slate-400 w-60 bg-white"
                />
              )}
            </div>
          </div>
          <div>
            <div>Gender :</div>
            <div className="flex flex-row ">
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="ml-2">Male</span>
              </div>
              <div className="ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="ml-2">Female</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>Address</div>
          <textarea
            className="border-2 border-slate-400 h-40 w-[90%] px-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className=" flex flex-col lg:flex-row mt-10 ">
          <div>
            <div>Country</div>
            <div>
              <select
                name="country"
                value={countryId}
                onChange={(e) => setCountryId(e.target.value)}
                className="border-2 border-slate-400 px-2"
              >
                <option value="">--Select Country--</option>
                {country.map((item) => {
                  return (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="mt-2 lg:mt-0 lg:ml-4">
            <div>State</div>
            <select
              name="state"
              value={stateId}
              onChange={(e) => setStateId(e.target.value)}
              className="border-2 border-slate-400 px-2"
            >
              <option value="">--Select State--</option>
              {state.slice(0, 10).map((item) => {
                return (
                  <option key={item.name} value={item.isoCode}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            className={`relative mt-8 ${
              showOtherState ? "mb-16" : "mb-4"
            } lg:ml-4 lg:mb-0 bg-grey-300`}
          >
            <div className="absolute flex flex-row bottom-0 left-0 w-36">
              <input
                type="checkbox"
                checked={showOtherState && checkValue}
                onChange={() => setShowOtherState(!showOtherState)}
              />
              <span className="pl-2">other state</span>
            </div>
            {showOtherState && (
              <div className="absolute lg:ml-36 lg:bottom-0">
                <div>Other State</div>
                <input
                  className="border-2 border-slate-400 px-2"
                  value={writeState}
                  onChange={(e) => setWriteState(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
        <div className="lg:mt-10">
          <div>Skills</div>
          <div className=" border-y-2 border-slate-300 py-4 lg:grid grid-cols-3 gap-5 mt-4">
            <div>
              <input
                type="checkbox"
                value="AWS"
                checked={skills.includes("AWS")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">AWS</span>
            </div>
            <div>
              <input
                type="checkbox"
                value="DevOps"
                checked={skills.includes("DevOps")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">DevOps</span>
            </div>
            <div>
              <input
                type="checkbox"
                value="Full Stack Developer"
                checked={skills.includes("Full Stack Developer")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">Full Stack Developer</span>
            </div>
            <div>
              <input
                type="checkbox"
                value="Middleware"
                checked={skills.includes("Middleware")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">Middleware</span>
            </div>
            <div>
              <input
                type="checkbox"
                value="QA-Automation"
                checked={skills.includes("QA-Automation")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">QA-Automation</span>
            </div>
          </div>
        </div>
        <div className="mt-5 pb-8 flex flex-row relative">
          <div className="absolute right-24 ">
            <input
              type="submit"
              value="Update"
              className="bg-green-400 px-2 py-1 w-16"
            />
          </div>
          <div className="absolute right-1 mt-1 ">
            <Link to="/employee/search" className="bg-red-600  px-2 py-2 w-20">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
