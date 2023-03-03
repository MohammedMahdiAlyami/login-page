import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Signup = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex" , alignItems:'center', justifyContent: 'center'}}>
      <Form>
        <fieldset>
          <Form.Group className="mb-12">
            <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">
              Disabled select menu
            </Form.Label>
            <Form.Select id="disabledSelect">
              <option>Disabled select</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
    </div>
  );
};

export default Signup;
