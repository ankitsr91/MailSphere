import { useContext } from "react";
import { MailContext } from "../Contexts/MailProvider";
import { Link } from "react-router-dom";
export const Trash = () => {
  const { state, dispatch } = useContext(MailContext);
  console.log(state.trash);
  return (
    <>
      <h1 className="heading">Trash</h1>
      {state.trash?.length > 0 ? (
        state.trash.map((mail) => {
          const { mId, subject, content } = mail;

          return (
            <div key={mId} className="mail" style={{ position: "relative" }}>
              <h3 style={{ display: "inline-block" }}>Subject: {subject}</h3>

              <p className="content">{content}</p>
              <Link className="link" to={`/${mId}`}>
                View Details
              </Link>

              <button
                className="spambtn btn"
                onClick={() =>
                  dispatch({ type: "restoreFromTrash", payload: mId })
                }
              >
                Restore
              </button>
            </div>
          );
        })
      ) : (
        <h3>Trash Not Found.</h3>
      )}
    </>
  );
};
