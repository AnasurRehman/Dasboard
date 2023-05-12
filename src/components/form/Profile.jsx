import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { tokens } from "../../theme";

const Profile = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    contact: Yup.number().required("Required"),
    address1: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    address2: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {({
        errors,
        touched,
        values,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                label={
                  <Typography sx={{ color: colors.greenAccent[700] }}>
                    First Name
                  </Typography>
                }
                variant="filled"
                fullWidth
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                label={
                  <Typography sx={{ color: colors.greenAccent[700] }}>
                    Last Name
                  </Typography>
                }
                variant="filled"
                fullWidth
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={
                  <Typography sx={{ color: colors.greenAccent[700] }}>
                    Email
                  </Typography>
                }
                variant="filled"
                fullWidth
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={
                  <Typography sx={{ color: colors.greenAccent[700] }}>
                    Contact Number
                  </Typography>
                }
                variant="filled"
                fullWidth
                name="contact"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={
                  <Typography sx={{ color: colors.greenAccent[700] }}>
                    Address 1
                  </Typography>
                }
                variant="filled"
                fullWidth
                name="address1"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={
                  <Typography sx={{ color: colors.greenAccent[700] }}>
                    Address 2
                  </Typography>
                }
                variant="filled"
                fullWidth
                name="address2"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
              />
            </Grid>
            <Grid item xs={12} justifyContent="start">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Profile;
