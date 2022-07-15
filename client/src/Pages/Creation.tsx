import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ROLE, UserContext } from "../Components/RoleContext";

enum Type {
  PRODUCT,
  CLASS,
  NONE,
  USER
}

//Product or Class creation page
export const Creation = () => {
  const [type, setType] = useState(Type.NONE);
  const userRole = useContext(UserContext);

  const isActive = (input: Type) => (type === input ? "is-active" : "");

  return (
    <>
      <div className="tabs is-centered is-medium is-boxed">
        <ul>
          <li><p>Choose option to create:</p></li>
          <li className={isActive(Type.CLASS)}>
            <Link to={"class"} onClick={() => setType(Type.CLASS)}>
              {/* <span className="icon is-small"><i className="fas fa-image"></i></span> */}
              <span>Class</span>
            </Link>
          </li>
          <li className={isActive(Type.PRODUCT)}>
            <Link to={"product"} onClick={() => setType(Type.PRODUCT)}>
              {/* <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span> */}
              <span>Product</span>
            </Link>
          </li>
          {userRole===ROLE.ADMIN? 
          <li className={isActive(Type.USER)}>
            <Link to="#" onClick={() => setType(Type.USER)}>
              <span>User</span>
            </Link>
          </li> : ""}
        </ul>
      </div>
      <div className="columns">
      <Outlet />
      </div>
    </>
  );
};
