import React, { useEffect, useState } from "react";
import BoyIcon from "@mui/icons-material/Boy";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudent,
  markAttendance,
} from "../../../redux/actions/facultyActions";
import { MenuItem, Select } from "@mui/material";
import Spinner from "../../../utils/Spinner";
import * as classes from "../../../utils/styles";
import { ATTENDANCE_MARKED, SET_ERRORS } from "../../../redux/actionTypes";
import { getTest } from "../../../redux/actions/facultyActions";
import { getSubject } from "../../../redux/actions/adminActions";
<<<<<<< HEAD

=======
>>>>>>> 07164279a2bdf5bf06ab2255003042b3b58355f8
const Body = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const departments = useSelector((state) => state.admin.allDepartment);
  const subjects = useSelector((state) => state.admin.subjects.result);

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const store = useSelector((state) => state);
  const [subjectName, setSubjectName] = useState("");
  const [checkedValue, setCheckedValue] = useState([]);

  const [value, setValue] = useState({
    department: "",
    year: "",
    section: "",
  });
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setLoading(false);
      setValue({ department: "", year: "", section: "" });
    }
  }, [store.errors]);

<<<<<<< HEAD
  const getErrorMessage = (errorObj) => {
    if (!errorObj) return "";
    
    if (typeof errorObj === 'string') return errorObj;
    
    // Handle MongoDB duplicate key errors or other complex objects
    if (errorObj.message) return errorObj.message;
    
    try {
      return JSON.stringify(errorObj);
    } catch (e) {
      return "An error occurred";
    }
  };

  // const handleInputChange = (e) => {
  //   const tempCheck = checkedValue;
  //   let index;
  //   if (e.target.checked) {
  //     tempCheck.push(e.target.value);
  //   } else {
  //     index = tempCheck.indexOf(e.target.value);
  //     tempCheck.splice(index, 1);
  //   }
  //   setCheckedValue(tempCheck);
  // };

  const handleInputChange = (e) => {
    const tempCheck = [...checkedValue]; // Create a new array instead of mutating
=======
  const handleInputChange = (e) => {
    const tempCheck = checkedValue;
>>>>>>> 07164279a2bdf5bf06ab2255003042b3b58355f8
    let index;
    if (e.target.checked) {
      tempCheck.push(e.target.value);
    } else {
      index = tempCheck.indexOf(e.target.value);
<<<<<<< HEAD
      if (index !== -1) {
        tempCheck.splice(index, 1);
      }
=======
      tempCheck.splice(index, 1);
>>>>>>> 07164279a2bdf5bf06ab2255003042b3b58355f8
    }
    setCheckedValue(tempCheck);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(true);
    setLoading(true);
    setError({});
    dispatch(getStudent(value));
    dispatch(getSubject({ department: value.department, year: value.year }));
  };
  const students = useSelector((state) => state.admin.students.result);

  const uploadAttendance = (e) => {
<<<<<<< HEAD
    e.preventDefault();
    setError({});
    if (checkedValue.length === 0) {
      alert("Please select at least one student.");
      return;
    }
    if (!subjectName) {
      alert("Please select a subject.");
      return;
    }
=======
    setError({});
>>>>>>> 07164279a2bdf5bf06ab2255003042b3b58355f8
    dispatch(
      markAttendance(
        checkedValue,
        subjectName,
        value.department,
        value.year,
        value.section
      )
    );
  };

  useEffect(() => {
    if (store.errors || store.faculty.attendanceUploaded) {
      setLoading(false);
      if (store.faculty.attendanceUploaded) {
        setValue({ department: "", year: "", section: "" });
        setSearch(false);
        setSubjectName("");
        dispatch({ type: SET_ERRORS, payload: {} });
        dispatch({ type: ATTENDANCE_MARKED, payload: false });
      }
    } else {
      setLoading(true);
    }
  }, [store.errors, store.faculty.attendanceUploaded]);

<<<<<<< HEAD
  // useEffect(() => {
  //   if (store.faculty.attendanceUploaded) {
  //     setValue({ department: "", year: "", section: "" });
  //   }
  // }, [store.faculty.attendanceUploaded]);

  // useEffect(() => {
  //   if (students?.length !== 0) setLoading(false);
  // }, [students]);

  // useEffect(() => {
  //   dispatch({ type: SET_ERRORS, payload: {} });
  // }, []);

  useEffect(() => {
    if (store.faculty.attendanceUploaded) {
      setValue({ department: "", year: "", section: "" });
      setCheckedValue([]);
=======
  useEffect(() => {
    if (store.faculty.attendanceUploaded) {
      setValue({ department: "", year: "", section: "" });
>>>>>>> 07164279a2bdf5bf06ab2255003042b3b58355f8
    }
  }, [store.faculty.attendanceUploaded]);

  useEffect(() => {
<<<<<<< HEAD
    if (value.department && value.year) {
      dispatch(getSubject({ department: value.department, year: value.year }));
    }
  }, [value.department, value.year, dispatch]);

  useEffect(() => {
=======
>>>>>>> 07164279a2bdf5bf06ab2255003042b3b58355f8
    if (students?.length !== 0) setLoading(false);
  }, [students]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
<<<<<<< HEAD
  }, [dispatch]);


return (
  <div className="flex-[0.8] mt-3">
    <div className="space-y-5">
      <div className="flex text-gray-400 items-center space-x-2">
        <BoyIcon />
        <h1>Mark Attendance</h1>
      </div>
      <div className=" mr-10 bg-white grid grid-cols-4 rounded-xl pt-6 pl-6 h-[29.5rem]">
        <form
          className="flex flex-col space-y-2 col-span-1"
          onSubmit={handleSubmit}>
          <label htmlFor="department">Department</label>
            <Select

            required
            displayEmpty
            sx={{ height: 36, width: 224 }}
            inputProps={{ "aria-label": "Without label" }}
            value={value.department}
            onChange={(e) =>
              setValue({ ...value, department: e.target.value })
            }>
            <MenuItem value="">None</MenuItem>
            {departments?.map((dp, idx) => (
              <MenuItem key={idx} value={dp.department}>
                {dp.department}
              </MenuItem>
            ))}
          </Select>
          <label htmlFor="year">Year</label>
          <Select
            required
            displayEmpty
            sx={{ height: 36, width: 224 }}
            inputProps={{ "aria-label": "Without label" }}
            value={value.year}
            onChange={(e) => setValue({ ...value, year: e.target.value })}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
          </Select>
          <label htmlFor="section">Section</label>
          <Select
            required
            displayEmpty
            sx={{ height: 36, width: 224 }}
            inputProps={{ "aria-label": "Without label" }}
            value={value.section}
            onChange={(e) => setValue({ ...value, section: e.target.value })}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </Select>

          <button
            className={`${classes.adminFormSubmitButton} w-56`}
            type="submit">
            Search
          </button>
        </form>
        <div className="col-span-3 mr-6">
          <div className={classes.loadingAndError}>
            {loading && (
              <Spinner
                message="Loading"
                height={50}
                width={150}
                color="#111111"
                messageColor="blue"
              />
            )}
            {/* Make sure we stringify any error objects */}
            {(error.noStudentError || error.backendError) && (
              <p className="text-red-500 text-2xl font-bold">
                {getErrorMessage(error.noStudentError || error.backendError)}
              </p>
            )}
          </div>
          {search &&
            !loading &&
            Object.keys(error).length === 0 &&
            students?.length !== 0 && (
              <div className={`${classes.adminData} h-[20rem]`}>
                <div className="grid grid-cols-7">
                  <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                    Select
                  </h1>
                  <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                    Sr no.
                  </h1>
                  <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                    Name
                  </h1>
                  <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                    Username
                  </h1>

                  <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                    Section
                  </h1>
                </div>
                {students?.map((stu, idx) => (
                  <div
                    key={idx}
                    className={`${classes.adminDataBody} grid-cols-7`}>
                    <input
                      onChange={handleInputChange}
                      value={stu._id}
                      className="col-span-1 border-2 w-16 h-4 mt-3 px-2"
                      type="checkbox"
                    />
                    <h1
                      className={`col-span-1 ${classes.adminDataBodyFields}`}>
                      {idx + 1}
                    </h1>
                    <h1
                      className={`col-span-2 ${classes.adminDataBodyFields}`}>
                      {stu.name}
                    </h1>
                    <h1
                      className={`col-span-2 ${classes.adminDataBodyFields}`}>
                      {stu.username}
                    </h1>

                    <h1
                      className={`col-span-1 ${classes.adminDataBodyFields}`}>
                      {stu.section}
                    </h1>
                  </div>
                ))}
              </div>
            )}
          {search && Object.keys(error).length === 0 && students?.length > 0 && (
            <div className="space-x-3 flex items-center justify-center mt-5">
              <label className="font-bold text-lg">Subject</label>
              <Select
                required
                displayEmpty
                sx={{ height: 36, width: 224 }}
                inputProps={{ "aria-label": "Without label" }}
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}>
                <MenuItem value="">None</MenuItem>
                {subjects?.map((dp, idx) => (
                  <MenuItem key={idx} value={dp.subjectName}>
                    {dp.subjectName}
                  </MenuItem>
                ))}
              </Select>
              <button
                onClick={uploadAttendance}
                className={`${classes.adminFormSubmitButton} bg-blue-500`}>
                Mark
              </button>
            </div>
          )}
          {search && students?.length === 0 && !loading && (
            <div className="text-center py-10">
              <p className="text-xl text-gray-500">No students found for the selected criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
=======
  }, []);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <BoyIcon />
          <h1>All Students</h1>
        </div>
        <div className=" mr-10 bg-white grid grid-cols-4 rounded-xl pt-6 pl-6 h-[29.5rem]">
          <form
            className="flex flex-col space-y-2 col-span-1"
            onSubmit={handleSubmit}>
            <label htmlFor="department">Department</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: 224 }}
              inputProps={{ "aria-label": "Without label" }}
              value={value.department}
              onChange={(e) =>
                setValue({ ...value, department: e.target.value })
              }>
              <MenuItem value="">None</MenuItem>
              {departments?.map((dp, idx) => (
                <MenuItem key={idx} value={dp.department}>
                  {dp.department}
                </MenuItem>
              ))}
            </Select>
            <label htmlFor="year">Year</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: 224 }}
              inputProps={{ "aria-label": "Without label" }}
              value={value.year}
              onChange={(e) => setValue({ ...value, year: e.target.value })}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>
            <label htmlFor="section">Section</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: 224 }}
              inputProps={{ "aria-label": "Without label" }}
              value={value.section}
              onChange={(e) => setValue({ ...value, section: e.target.value })}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>

            <button
              className={`${classes.adminFormSubmitButton} w-56`}
              type="submit">
              Search
            </button>
          </form>
          <div className="col-span-3 mr-6">
            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Loading"
                  height={50}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {(error.noStudentError || error.backendError) && (
                <p className="text-red-500 text-2xl font-bold">
                  {error.noStudentError || error.backendError}
                </p>
              )}
            </div>
            {search &&
              !loading &&
              Object.keys(error).length === 0 &&
              students?.length !== 0 && (
                <div className={`${classes.adminData} h-[20rem]`}>
                  <div className="grid grid-cols-7">
                    <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                      Select
                    </h1>
                    <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                      Sr no.
                    </h1>
                    <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Name
                    </h1>
                    <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Username
                    </h1>

                    <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                      Section
                    </h1>
                  </div>
                  {students?.map((stu, idx) => (
                    <div
                      key={idx}
                      className={`${classes.adminDataBody} grid-cols-7`}>
                      <input
                        onChange={handleInputChange}
                        value={stu._id}
                        className="col-span-1 border-2 w-16 h-4 mt-3 px-2 "
                        type="checkbox"
                      />
                      <h1
                        className={`col-span-1 ${classes.adminDataBodyFields}`}>
                        {idx + 1}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.name}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.username}
                      </h1>

                      <h1
                        className={`col-span-1 ${classes.adminDataBodyFields}`}>
                        {stu.section}
                      </h1>
                    </div>
                  ))}
                </div>
              )}
            {search && Object.keys(error).length === 0 && (
              <div className="space-x-3 flex items-center justify-center mt-5">
                <label className="font-bold text-lg">Subject</label>
                <Select
                  required
                  displayEmpty
                  sx={{ height: 36, width: 224 }}
                  inputProps={{ "aria-label": "Without label" }}
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}>
                  <MenuItem value="">None</MenuItem>
                  {subjects?.map((dp, idx) => (
                    <MenuItem key={idx} value={dp.subjectName}>
                      {dp.subjectName}
                    </MenuItem>
                  ))}
                </Select>
                <button
                  onClick={uploadAttendance}
                  className={`${classes.adminFormSubmitButton} bg-blue-500`}>
                  Mark
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 07164279a2bdf5bf06ab2255003042b3b58355f8
};

export default Body;
