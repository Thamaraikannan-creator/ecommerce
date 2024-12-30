import Dropdown from 'react-bootstrap/Dropdown';

function AccountDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Admin</Dropdown.Item>
        <Dropdown.Item href="/">User</Dropdown.Item>
        <Dropdown.Item href="/">logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AccountDropdown;