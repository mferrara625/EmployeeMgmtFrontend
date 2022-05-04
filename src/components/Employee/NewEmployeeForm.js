import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';

const NewEmployeeForm = ({onSubmit, onChange, newEmployee}) => {
  // const {onSubmit, onChange, newUser} = props

  const handleChange = (e) => {
    onChange(e.target.id, e.target.value);
  }

  return (
    <Container>
      <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
        <InlineInputContainer>
          <Input
            name="firstName" 
            id="firstName" 
            value={newEmployee.firstName}
            placeholder={"First Name"}
            onChange={handleChange}
            required
          />
          <Input
            name="lastName" 
            id="lastName" 
            value={newEmployee.lastName}
            placeholder={"Last Name"}
            onChange={handleChange}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name="department"
            id="department"
            value={newEmployee.department}
            placeholder={"Department"}
            onChange={handleChange}
            type="text"
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name="salary"
            id="salary"
            value={newEmployee.salary}
            placeholder={"Salary"}
            onChange={handleChange}
            type="number"
          />
        </InlineInputContainer>
        <Button>Submit</Button>
      </Form>
    </Container>
  )
}

export default NewEmployeeForm;