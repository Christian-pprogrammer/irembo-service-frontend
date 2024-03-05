import { Button, Grid, InputLabel, MenuItem, TextField, useRadioGroup } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";

function App() {
  const formRef = useRef();
  const validationSchema = Yup.object().shape({
    citizenship: Yup.string().required("Citizenship is required"),
    idNumber: Yup.string().when("citizenship", (citizenship, field) =>
      citizenship === "Rwandan" ? field.required('This field is required') : field
    ),
    passportNumber: Yup.string().when("citizenship", (citizenship, field) =>
      citizenship === "Foreigner" ? field.required('This field is required') : field
    ),
    otherNames: Yup.string().required("This field is required"),
    surname: Yup.string().required("This field is required"),
    nationality: Yup.string().required("This field is required"),
    location: Yup.string().required("This field is required"),
    businessType: Yup.string().required("This field is required"),
    companyName: Yup.string().required("This field is required"),
    tinNumber: Yup.string()
      .required("This field is required")
      .min(9, "Please enter valid tin format")
      .max(9, "Please enter valid tin format"),
    registrationDate: Yup.string().required("This field is required"),
    companyLocation: Yup.string().required("This field is required"),
    purposeOfImportation: Yup.string().required("This field is required"),
    otherPurpose: Yup.string().when(
      "purposeOfImportation",
      (purposeOfImportation, field) =>
        purposeOfImportation === "Other" ? field.required('This field is required') : field
    ),
    productCategory: Yup.string().required("This field is required"),
    productName: Yup.string().required("This field is required"),
    unitOfMeasurement: Yup.string().required("This field is required"),
    weight: Yup.number().required("This field is required"),
    productDescription: Yup.string().required("This field is required"),
  });
  const initialValues = {
    citizenship: "",
    idNumber: "",
    passportNumber: "",
    otherNames: "",
    surname: "",
    nationality: "",
    location: "",
    businessType: "",
    companyName: "",
    tinNumber: "",
    registrationDate: "",
    companyLocation: "",
    purposeOfImportation: "",
    otherPurpose: "",
    productCategory: "",
    productName: "",
    unitOfMeasurement: "",
    weight: 0,
    productDescription: "",
  };

  const formik = useFormik({
    initialValues,

    onSubmit: async (data) => {

      console.log("submit");
      try{
        const res = await axios.post(
          "http://localhost:4000/submit-form",
          data
        );
        alert(res.data.message);
        formRef.reset();
      }catch(err) {
        alert("Error submitting the email");
      }
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="container">
      <form
        sx={{ mt: 1 }}
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
        ref={formRef}
      >
        <div className="card">
          <div className="card-header">
            <h2>Business Owner Details</h2>
          </div>
          <div className="card-body">
            <h5>Business Owner Details</h5>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="citizenship">
                      Applicant citizenship *
                    </InputLabel>
                    <TextField
                      select
                      size="small"
                      required
                      margin="normal"
                      fullWidth
                      id="citizenship"
                      name="citizenship"
                      value={formik.values.citizenship}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.citizenship &&
                        Boolean(formik.errors.citizenship)
                      }
                      helperText={
                        formik.touched.citizenship && formik.errors.citizenship
                      }
                    >
                      <MenuItem value="Rwandan">- Rwandan</MenuItem>
                      <MenuItem value="Foreigner">- Foreigner</MenuItem>
                    </TextField>
                  </Grid>
                  {formik.values.citizenship === "Rwandan" ? (
                    <>
                      <Grid item xs={6}>
                        <InputLabel htmlFor="idNumber">
                          Identification document number *
                        </InputLabel>
                        <TextField
                          size="small"
                          margin="normal"
                          fullWidth
                          id="idNumber"
                          name="idNumber"
                          type="text"
                          placeholder="Enter Identification document number"
                          required
                          value={formik.values.idNumber}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.idNumber &&
                            Boolean(formik.errors.idNumber)
                          }
                          helperText={
                            formik.touched.idNumber && formik.errors.idNumber
                          }
                        />
                      </Grid>
                    </>
                  ) : formik.values.citizenship === "Foreigner" ? (
                    <Grid item xs={6}>
                      <InputLabel htmlFor="passportNumber">
                        Passport number *
                      </InputLabel>
                      <TextField
                        size="small"
                        margin="normal"
                        fullWidth
                        id="passportNumber"
                        name="passportNumber"
                        type="text"
                        value={formik.values.passportNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.passportNumber &&
                          Boolean(formik.errors.passportNumber)
                        }
                        helperText={
                          formik.touched.passportNumber &&
                          formik.errors.passportNumber
                        }
                      />
                    </Grid>
                  ) : (
                    <Grid item xs={6}></Grid>
                  )}
                  <Grid item xs={6}>
                    <InputLabel htmlFor="otherNames">Other names *</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="otherNames"
                      name="otherNames"
                      type="text"
                      value={formik.values.otherNames}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.otherNames &&
                        Boolean(formik.errors.otherNames)
                      }
                      helperText={
                        formik.touched.otherNames && formik.errors.otherNames
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="surname">Surname *</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="surname"
                      name="surname"
                      type="text"
                      value={formik.values.surname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.surname && Boolean(formik.errors.surname)
                      }
                      helperText={
                        formik.touched.surname && formik.errors.surname
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="nationality">Nationality *</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="nationality"
                      name="nationality"
                      type="text"
                      value={formik.values.nationality}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.nationality &&
                        Boolean(formik.errors.nationality)
                      }
                      helperText={
                        formik.touched.nationality && formik.errors.nationality
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="phoneNumber">Phone number</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="emailAddress">
                      E-mail address
                    </InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="emailAddress"
                      name="emailAddress"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6}></Grid>
            </Grid>
            <h5>Business Owner Address</h5>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="location">Location *</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Enter district *"
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.location &&
                        Boolean(formik.errors.location)
                      }
                      helperText={
                        formik.touched.location && formik.errors.location
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
        {/*Business details */}

        <div className="card">
          <div className="card-header">
            <h2>Business Details</h2>
          </div>
          <div className="card-body">
            <h5>Business Details</h5>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="businessType">
                      Business type *
                    </InputLabel>
                    <TextField
                      select
                      size="small"
                      margin="normal"
                      fullWidth
                      id="businessType"
                      name="businessType"
                      type="text"
                      value={formik.values.businessType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.businessType &&
                        Boolean(formik.errors.businessType)
                      }
                      helperText={
                        formik.touched.businessType &&
                        formik.errors.businessType
                      }
                    >
                      <MenuItem value="Retailer">- Retailer</MenuItem>
                      <MenuItem value="Wholesale">- Wholesale</MenuItem>
                      <MenuItem value="Manufacturer">- Manufacturer</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="companyName">
                      Company name *
                    </InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formik.values.companyName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.companyName &&
                        Boolean(formik.errors.companyName)
                      }
                      helperText={
                        formik.touched.companyName && formik.errors.companyName
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="tinNumber">TIN Number *</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="tinNumber"
                      name="tinNumber"
                      type="number"
                      value={formik.values.tinNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      max={9}
                      error={
                        formik.touched.tinNumber &&
                        Boolean(formik.errors.tinNumber)
                      }
                      helperText={
                        formik.touched.tinNumber && formik.errors.tinNumber
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="registrationDate">
                      Registration date *
                    </InputLabel>

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="registrationDate"
                      name="registrationDate"
                      type="date"
                      value={formik.values.registrationDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.registrationDate &&
                        Boolean(formik.errors.registrationDate)
                      }
                      helperText={
                        formik.touched.registrationDate &&
                        formik.errors.registrationDate
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <h5>Business Address</h5>
                    <InputLabel htmlFor="companyLocation">
                      Location *
                    </InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="companyLocation"
                      name="companyLocation"
                      type="text"
                      value={formik.values.companyLocation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.companyLocation &&
                        Boolean(formik.errors.companyLocation)
                      }
                      helperText={
                        formik.touched.companyLocation &&
                        formik.errors.companyLocation
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6}></Grid>
            </Grid>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>Product Information</h2>
          </div>
          <div className="card-body">
            <h5>Important details</h5>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="purposeOfImportation">
                      Purpose of Importation *
                    </InputLabel>
                    <TextField
                      select
                      size="small"
                      margin="normal"
                      fullWidth
                      id="purposeOfImportation"
                      name="purposeOfImportation"
                      type="text"
                      value={formik.values.purposeOfImportation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.purposeOfImportation &&
                        Boolean(formik.errors.purposeOfImportation)
                      }
                    >
                      <MenuItem value="Direct sale">- Direct sale</MenuItem>
                      <MenuItem value="Personal use">- Personal use</MenuItem>
                      <MenuItem value="Trial use">- Trial use</MenuItem>
                      <MenuItem value="Other">- Other</MenuItem>
                    </TextField>
                  </Grid>
                  {formik.values.otherPurpose === "Other" && (
                    <Grid item xs={6}>
                      <InputLabel htmlFor="otherPurpose">
                        Specify purpose of importation *
                      </InputLabel>
                      <TextField
                        size="small"
                        margin="normal"
                        fullWidth
                        id="otherPurpose"
                        name="otherPurpose"
                        type="text"
                        value={formik.values.otherPurpose}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.otherPurpose &&
                          Boolean(formik.errors.otherPurpose)
                        }
                      />
                    </Grid>
                  )}
                  <Grid item xs={6}></Grid>
                </Grid>
              </Grid>

              <Grid item xs={6}></Grid>
            </Grid>
            <h5>Product details</h5>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="productCategory">
                      Product category *
                    </InputLabel>
                    <TextField
                      select
                      size="small"
                      margin="normal"
                      fullWidth
                      id="productCategory"
                      name="productCategory"
                      type="text"
                      value={formik.values.productCategory}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.productCategory &&
                        Boolean(formik.errors.productCategory)
                      }
                    >
                      <MenuItem value="General purpose">
                        - General purpose
                      </MenuItem>
                      <MenuItem value="Construction materials">
                        - Construction materials
                      </MenuItem>
                      <MenuItem value="Chemicals">- Chemicals</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="productName">
                      Enter product name *
                    </InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="productName"
                      name="productName"
                      type="text"
                      value={formik.values.productName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.productName &&
                        Boolean(formik.errors.productName)
                      }
                      helperText={
                        formik.touched.productName && formik.errors.productName
                      }
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <InputLabel htmlFor="unitOfMeasurement">
                      Unit of measurement *
                    </InputLabel>

                    <TextField
                      select
                      size="small"
                      margin="normal"
                      fullWidth
                      id="unitOfMeasurement"
                      name="unitOfMeasurement"
                      type="text"
                      value={formik.values.unitOfMeasurement}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.unitOfMeasurement &&
                        Boolean(formik.errors.unitOfMeasurement)
                      }
                      helperText={
                        formik.touched.unitOfMeasurement &&
                        formik.errors.unitOfMeasurement
                      }
                    >
                      <MenuItem value="Kgs">- Kgs</MenuItem>
                      <MenuItem value="Tonnes">- Tonnes</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={6}>
                    <InputLabel htmlFor="weight">
                      Quantity of product *
                    </InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="productQuantity"
                      name="weight"
                      type="number"
                      value={formik.values.weight}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.weight && Boolean(formik.errors.weight)
                      }
                      helperText={formik.touched.weight && formik.errors.weight}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel htmlFor="descriptionOfProduct">
                      Description of product *
                    </InputLabel>
                    <TextField
                      multiline
                      rows={4}
                      size="small"
                      margin="normal"
                      required
                      fullWidth
                      id="productDescription"
                      name="productDescription"
                      type="text"
                      value={formik.values.productDescription}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.productDescription &&
                        Boolean(formik.errors.productDescription)
                      }
                      helperText={
                        formik.touched.productDescription &&
                        formik.errors.productDescription
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default App;
