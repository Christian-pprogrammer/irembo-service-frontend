import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import { useState } from "react";

function App() {
  const [citizenship, setCitizenship] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [surname, setSurname] = useState("");
  const [nationality, setNationality] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [location, setLocation] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [tinNumber, setTinNumber] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [purposeOfImportation, setPurposeOfImportation] = useState("");
  const [otherPurpose, setOtherPurpose] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [unitOfMeasurement, setUnitOfMeasurement] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const [citizenshipError, setCitizenshipError] = useState("");
  const [idNumberError, setIdNumberError] = useState("");
  const [passportNumberError, setPassportNumberError] = useState("");
  const [otherNamesError, setOtherNamesError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [nationalityError, setNationalityError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [businessTypeError, setBusinessTypeError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [tinNumberError, setTinNumberError] = useState("");
  const [registrationDateError, setRegistrationDateError] = useState("");
  const [companyLocationError, setCompanyLocationError] = useState("");
  const [purposeOfImportationError, setPurposeOfImportationError] =
    useState("");
  const [otherPurposeError, setOtherPurposeError] = useState("");
  const [productCategoryError, setProductCategoryError] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [unitOfMeasurementError, setUnitOfMeasurementError] = useState("");
  const [productQuantityError, setProductQuantityError] = useState("");
  const [productDescriptionError, setProductDescriptionError] = useState("");

  let isFormValid = () => {
    let isValid = true;
    if (!citizenship) {
      setCitizenshipError("This field is required");
      isValid = false;
    } else {
      if (citizenship === "Rwandan") {
        if (idNumber === "") {
          setIdNumberError("This field is required");
          isValid = false;
        }
      } else {
        if (passportNumber === "") {
          setPassportNumberError("This field is required");
          isValid = false;
        }
      }
    }

    if (otherNames === "") {
      setOtherNamesError("This field is required");
      isValid = false;
    }

    if (surname === "") {
      setSurnameError("This field is required");
      isValid = false;
    }

    if (nationality === "") {
      setNationalityError("This field is required");
      isValid = false;
    }

    if (location === "") {
      setLocationError("This field is required");
      isValid = false;
    }

    if (businessType === "") {
      setBusinessTypeError("This field is required");
      isValid = false;
    }

    if (companyName === "") {
      setCompanyNameError("This field is required");
      isValid = false;
    }

    if (purposeOfImportation === "") {
      setPurposeOfImportationError("This field is required");
      isValid = false;
    }

    if (purposeOfImportation === "Other") {
      if (otherPurpose === "") {
        setOtherPurposeError("This field is required");
        isValid = false;
      }
    }

    if (productCategory === "") {
      setProductCategoryError("This field is required");
      isValid = false;
    }

    if (productName === "") {
      setProductNameError("This field is required");
      isValid = false;
    }

    if (productDescription === "") {
      setProductDescriptionError("This field is required");
      isValid = false;
    }

    if (unitOfMeasurement === "") {
      setUnitOfMeasurementError("This field is required");
      isValid = false;
    }

    if (productQuantity === "") {
      setProductQuantityError("This field is required");
      isValid = false;
    }

    if (tinNumber === "") {
      setTinNumberError("This field is required");
      isValid = false;
    } else if (tinNumber.length < 9) {
      setTinNumberError("Please provide a valid TIN number");
      isValid = false;
    }

    if (registrationDate === "") {
      setRegistrationDateError("This field is required");
      isValid = false;
    }

    if (companyLocation === "") {
      setCompanyLocationError("This field is required");
      isValid = false;
    }

    if (purposeOfImportation === "") {
      setPurposeOfImportation("This field is required");
      isValid = false;
    }

    if (productCategory === "") {
      setProductCategoryError("This field is required");
      isValid = false;
    }

    if (productName === "") {
      setProductNameError("This field is required");
      isValid = false;
    }

    if (unitOfMeasurement === "") {
      setUnitOfMeasurementError("This field is required");
      isValid = false;
    }

    if (productQuantity === "") {
      setProductQuantityError("This field is required");
      isValid = false;
    }

    if (productDescription === "") {
      setProductDescriptionError("This field is required");
      isValid = false;
    }
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = isFormValid();
    if (!isValidForm) {
      return false;
    }
    try {
      const formData = {
        citizenship,
        idNumber,
        otherNames,
        surname,
        nationality,
        passportNumber,
        phoneNumber,
        emailAddress,
        location,
        businessType,
        companyName,
        tinNumber,
        registrationDate,
        companyLocation,
        purposeOfImportation,
        otherPurpose,
        productCategory,
        productName,
        unitOfMeasurement,
        productQuantity,
        productDescription,
      };

      const res = await axios.post(
        "http://localhost:4000/submit-form",
        formData
      );
      alert(res.data.message);
    } catch (err) {
      alert("Error submitting the email");
    }
  };

  return (
    <div className="container">
      <Box component="form" sx={{ mt: 1 }}>
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
                    <FormControl
                      size="small"
                      margin="normal"
                      required
                      error={citizenshipError}
                      fullWidth
                      id="citizenship"
                      name="citizenship"
                      autoComplete="citizenship"
                      autoFocus
                      type="text"
                      sx={{ marginTop: "16px", marginBottom: "8px" }}
                    >
                      <InputLabel id="citizenship-label">
                        Select Citizenship
                      </InputLabel>
                      <Select
                        labelId="citizenship-label"
                        id="citizenship-select"
                        label="Select Citizenship"
                        value={citizenship}
                        onChange={(e) => {
                          setCitizenship(e.target.value);
                          setCitizenshipError("");
                        }}
                      >
                        <MenuItem value="Rwandan">- Rwandan</MenuItem>
                        <MenuItem value="Foreigner">- Foreigner</MenuItem>
                      </Select>
                    </FormControl>

                    {citizenshipError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {citizenshipError}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={6}></Grid>
                  {citizenship === "Rwandan" ? (
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
                          autoComplete="idNumber"
                          type="text"
                          value={idNumber}
                          onChange={(e) => {
                            setIdNumber(e.target.value);
                            setIdNumberError("");
                          }}
                          placeholder="Enter Identification document number"
                          required
                          error={idNumberError}
                        />
                        {idNumberError && (
                          <FormHelperText
                            sx={{
                              color: "#d3302f",
                              marginLeft: "5px",
                            }}
                          >
                            {idNumberError}
                          </FormHelperText>
                        )}
                      </Grid>
                    </>
                  ) : citizenship === "Foreigner" ? (
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
                        autoComplete="passportNumber"
                        type="text"
                        value={passportNumber}
                        onChange={(e) => {
                          setPassportNumber(e.target.value);
                          setPassportNumberError("");
                        }}
                        required
                        error={passportNumberError}
                      />
                      {passportNumberError && (
                        <FormHelperText
                          sx={{
                            color: "#d3302f",
                            marginLeft: "5px",
                          }}
                        >
                          {passportNumberError}
                        </FormHelperText>
                      )}
                    </Grid>
                  ) : (
                    <></>
                  )}
                  <Grid item xs={6}>
                    <InputLabel htmlFor="otherNames">Other names *</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="otherNames"
                      name="otherNames"
                      autoComplete="otherNames"
                      type="text"
                      value={otherNames}
                      onChange={(e) => {
                        setOtherNames(e.target.value);
                        setOtherNamesError("");
                      }}
                      required
                      error={otherNamesError}
                    />
                    {otherNamesError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {otherNamesError}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="surname">Surname *</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="surname"
                      name="surname"
                      autoComplete="surname"
                      type="text"
                      value={surname}
                      onChange={(e) => {
                        setSurname(e.target.value);
                        setSurnameError("");
                      }}
                      required
                      error={surnameError}
                    />
                    {surnameError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {surnameError}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="nationality">Nationality *</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="nationality"
                      name="nationality"
                      autoComplete="nationality"
                      type="text"
                      value={nationality}
                      onChange={(e) => {
                        setNationality(e.target.value);
                        setNationalityError("");
                      }}
                      required
                      error={nationalityError}
                    />
                    {nationalityError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {nationalityError}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="phoneNumber">Phone number</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="phoneNumber"
                      name="phoneNumber"
                      autoComplete="phoneNumber"
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
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
                      autoComplete="emailAddress"
                      type="text"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
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
                    <InputLabel htmlFor="location">
                      Location *
                    </InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="location"
                      name="location"
                      autoComplete="location"
                      type="text"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        setLocationError("");
                      }}
                      required
                      error={locationError}
                      placeholder="Enter district *"
                    />
                    {locationError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {locationError}
                      </FormHelperText>
                    )}
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
                    <FormControl
                      size="small"
                      margin="normal"
                      required
                      error={businessTypeError}
                      fullWidth
                      autoComplete="businessType"
                      id="businessType"
                      name="businessType"
                      autoFocus
                      type="text"
                      sx={{ marginTop: "16px", marginBottom: "8px" }}
                    >
                      <InputLabel id="business-type-label">
                        Enter Business Type
                      </InputLabel>
                      <Select
                        labelId="business-type-label"
                        value={businessType}
                        onChange={(e) => {
                          setBusinessType(e.target.value);
                          setBusinessTypeError("");
                        }}
                        label="Enter Business Type"
                      >
                        <MenuItem value="Retailer">- Retailer</MenuItem>
                        <MenuItem value="Wholesale">- Wholesale</MenuItem>
                        <MenuItem value="Manufacturer">- Manufacturer</MenuItem>
                      </Select>
                    </FormControl>

                    {businessTypeError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {businessTypeError}
                      </FormHelperText>
                    )}
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
                      autoComplete="companyName"
                      type="text"
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                        setCompanyNameError("");
                      }}
                      required
                      error={companyNameError}
                    />
                    {companyNameError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {companyNameError}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="tinNumber">TIN Number *</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="tinNumber"
                      name="tinNumber"
                      autoComplete="tinNumber"
                      type="number"
                      value={tinNumber}
                      onChange={(e) => {
                        if (
                          tinNumber.length < 9 ||
                          e.nativeEvent.inputType === "deleteContentBackward"
                        ) {
                          setTinNumber(e.target.value);
                          setTinNumberError("");
                        }
                      }}
                      required
                      error={tinNumberError}
                    />
                    {tinNumberError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {tinNumberError}
                      </FormHelperText>
                    )}
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
                      autoComplete="registrationDate"
                      type="date"
                      value={registrationDate}
                      onChange={(e) => {
                        setRegistrationDate(e.target.value);
                        setRegistrationDateError("");
                      }}
                      required
                      error={registrationDateError}
                    />
                    {registrationDateError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {registrationDateError}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <h5>Business Address</h5>
                    <InputLabel htmlFor="companyLocation">Location *</InputLabel>
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="companyLocation"
                      name="companyLocation"
                      autoComplete="companyLocation"
                      type="text"
                      value={companyLocation}
                      onChange={(e) => {
                        setCompanyLocation(e.target.value);
                        setCompanyLocationError("");
                      }}
                      required
                      error={companyLocationError}
                    />
                    {companyLocationError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {companyLocationError}
                      </FormHelperText>
                    )}
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
                    <FormControl
                      size="small"
                      margin="normal"
                      required
                      fullWidth
                      id="purposeOfImportation"
                      name="purposeOfImportation"
                      autoComplete="purposeOfImportation"
                      type="text"
                      sx={{ marginTop: "16px", marginBottom: "8px" }}
                      error={purposeOfImportationError}
                    >
                      <InputLabel id="purpose-of-information-label">
                        Purpose of Importation
                      </InputLabel>
                      <Select
                        id="purpose-importation-select"
                        value={purposeOfImportation}
                        onChange={(e) => {
                          setPurposeOfImportation(e.target.value);
                          setPurposeOfImportationError("");
                        }}
                        labelId="purpose-of-information-label"
                        label="Purpose of Importation"
                      >
                        <MenuItem value="Direct sale">- Direct sale</MenuItem>
                        <MenuItem value="Personal use">- Personal use</MenuItem>
                        <MenuItem value="Trial use">- Trial use</MenuItem>
                        <MenuItem value="Other">- Other</MenuItem>
                      </Select>
                    </FormControl>
                    {purposeOfImportationError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {purposeOfImportationError}
                      </FormHelperText>
                    )}
                  </Grid>
                  {purposeOfImportation === "Other" && (
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
                        autoComplete="otherPurpose"
                        type="text"
                        value={otherPurpose}
                        onChange={(e) => {
                          setOtherPurpose(e.target.value);
                          setOtherPurposeError("");
                        }}
                        required
                        error={otherPurposeError}
                      />
                      {otherPurposeError && (
                        <FormHelperText
                          sx={{
                            color: "#d3302f",
                            marginLeft: "5px",
                          }}
                        >
                          {otherPurposeError}
                        </FormHelperText>
                      )}
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
                    <FormControl
                      size="small"
                      margin="normal"
                      fullWidth
                      id="productCategory"
                      name="productCategory"
                      autoComplete="productCategory"
                      type="text"
                      sx={{ marginTop: "16px", marginBottom: "8px" }}
                      required
                      error={productCategoryError}
                    >
                      <InputLabel id="product-category-label">
                        Product category
                      </InputLabel>
                      <Select
                        value={productCategory}
                        onChange={(e) => {
                          setProductCategory(e.target.value);
                          setProductCategoryError("");
                        }}
                        labelId="product-category-label"
                        label="Product category"
                      >
                        <MenuItem value="General purpose">
                          - General purpose
                        </MenuItem>
                        <MenuItem value="Construction materials">
                          - Construction materials
                        </MenuItem>
                        <MenuItem value="Chemicals">- Chemicals</MenuItem>
                      </Select>
                    </FormControl>
                    {productCategoryError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {productCategoryError}
                      </FormHelperText>
                    )}
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
                      autoComplete="productName"
                      type="text"
                      value={productName}
                      onChange={(e) => {
                        setProductName(e.target.value);
                        setProductNameError("");
                      }}
                      required
                      error={productNameError}
                    />
                    {productNameError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {productNameError}
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={6}>
                    <InputLabel htmlFor="weight">
                      Unit of measurement *
                    </InputLabel>
                    <FormControl
                      size="small"
                      margin="normal"
                      required
                      fullWidth
                      id="unitOfMeasurement"
                      name="unitOfMeasurement"
                      autoComplete="unitOfMeasurement"
                      type="text"
                      sx={{ marginTop: "16px", marginBottom: "8px" }}
                      error={unitOfMeasurementError}
                    >
                      <InputLabel id="unit-of-measurement-label">
                        Unit of measurement
                      </InputLabel>
                      <Select
                        value={unitOfMeasurement}
                        onChange={(e) => {
                          setUnitOfMeasurement(e.target.value);
                          setUnitOfMeasurementError("");
                        }}
                        labelId="unit-of-measurement-label"
                        label="Unit of measurement"
                      >
                        <MenuItem value="Kgs">- Kgs</MenuItem>
                        <MenuItem value="Tonnes">- Tonnes</MenuItem>
                      </Select>
                    </FormControl>
                    {unitOfMeasurementError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {unitOfMeasurementError}
                      </FormHelperText>
                    )}
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
                      autoComplete="weight"
                      type="number"
                      value={productQuantity}
                      onChange={(e) => {
                        setProductQuantity(e.target.value);
                        setProductQuantityError("");
                      }}
                      required
                      error={productQuantityError}
                    />
                    {productQuantityError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {productQuantityError}
                      </FormHelperText>
                    )}
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
                      autoComplete="productDescription"
                      type="text"
                      value={productDescription}
                      onChange={(e) => {
                        setProductDescription(e.target.value);
                        setProductDescriptionError("");
                      }}
                      error={productDescriptionError}
                    />
                    {productDescriptionError && (
                      <FormHelperText
                        sx={{
                          color: "#d3302f",
                          marginLeft: "5px",
                        }}
                      >
                        {productDescriptionError}
                      </FormHelperText>
                    )}
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
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
