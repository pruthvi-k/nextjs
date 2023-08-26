import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";

export default async function FormPage() {
  const formData = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: "********",
  };

  return (
    <>
      {/* 
        1st way : when use FormControl add custom css that restrict animation and shrink of label 

        -- When use this formControl we need to adust some Style with Custom Css
        -- But when use {2nd way don't need in custom style}
      */}

      <Container maxWidth="lg">
        <h2>Form With FormControl</h2>
        <form>
          <FormControl className="mt-4" fullWidth>
            <InputLabel shrink={!!formData.firstName} htmlFor="first-name">
              First Name
            </InputLabel>
            <Input id="first-name" defaultValue={formData.firstName} />
          </FormControl>
          <FormControl className="mt-4" fullWidth>
            <InputLabel shrink={!!formData.lastName} htmlFor="last-name">
              Last Name
            </InputLabel>
            <Input id="last-name" defaultValue={formData.lastName} />
          </FormControl>
          <FormControl className="mt-4" fullWidth>
            <InputLabel shrink={!!formData.email} htmlFor="email">
              Email
            </InputLabel>
            <Input id="email" defaultValue={formData.email} />
          </FormControl>
          <FormControl className="mt-4" fullWidth>
            <InputLabel shrink={!!formData.password} htmlFor="password">
              Password
            </InputLabel>
            <Input
              id="password"
              type="password"
              defaultValue={formData.password}
            />
          </FormControl>
        </form>
      </Container>

      {/* 2nd way */}
      <Container maxWidth="">
        <h2>Form With TextField</h2>
        <form>
          <TextField
            className="mt-4"
            label="First Name"
            fullWidth
            defaultValue={formData.firstName}
          />
          {/* Note: 
            -- In above 'InputField' i've not added 'InputLabelProps' but it will work without animate label
            -- So why we need to add this props 
            -- In Our case data come from API and i'm sure it will not editable so we don't need animation if data available or not for the field 
            -- Both Case are working fine
          */}
          <TextField
            className="mt-4"
            label="Last Name"
            fullWidth
            defaultValue={formData.lastName}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className="mt-4"
            label="Email"
            fullWidth
            defaultValue={formData.email}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className="mt-4"
            label="Password"
            type="password"
            fullWidth
            defaultValue={formData.password}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Container>
    </>
  );
}
