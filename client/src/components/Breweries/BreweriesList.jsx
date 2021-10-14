import React from 'react';
import Brewery from './Brewery.jsx';

const BreweriesList = (props) => {
  return (
    <div>
      {props.breweries.map((brewery, index) =>
        <Brewery brewery={brewery} key={index} />)}
    </div>
  )
}

export default BreweriesList;

/*
<Container>
        <FormWrap>
          <Icon to='/'>brew</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <NavBar />
      */