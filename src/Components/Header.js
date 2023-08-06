import { NavLink } from "react-router-dom";
export const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
    content: "|",
  });
  return (
    <>
      <h1 className="navbar">My Mailbox</h1>
      <div>
        <NavLink style={getActiveStyle} className="inbox nav" to="/">
          Inbox
        </NavLink>
        <NavLink style={getActiveStyle} className="spam nav" to="/spam">
          Spam
        </NavLink>
        <NavLink style={getActiveStyle} className="trash nav" to="/trash">
          Trash
        </NavLink>
      </div>
    </>
  );
};
