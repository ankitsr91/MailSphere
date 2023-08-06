import { useContext } from "react";
import { MailContext } from "../Contexts/MailProvider";

export const Filters = () => {
  const { state, dispatch } = useContext(MailContext);
  return (
    <>


      <div className="filters_div">
        <p className="filter">Filters</p>
        <label className="space">
          <input
            className="check"
            type="checkbox"
            checked={state.isStarred}
            onChange={() =>
              dispatch({
                type: "isStarred",
              })
            }
          />{" "}
          Show starred mails
        </label>
        <label>
          <input
            className="check"
            type="checkbox"
            checked={state.isRead}
            onChange={() =>
              dispatch({
                type: "unread",
              })
            }
          />{" "}
          Show unread mails
        </label>
      </div>
    </>
  );
};
