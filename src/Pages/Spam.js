import { useContext } from "react";
import { Link } from "react-router-dom";
import { MailContext } from "../Contexts/MailProvider";

export const Spam = () => {
  const { state, dispatch } = useContext(MailContext);
  return (
    <>
      <h1 className="heading">Spam</h1>
      {state?.spam?.length > 0 ? (
        state.spam.map((mail) => {
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
                onClick={() => dispatch({ type: "restore", payload: mId })}
              >
                Not Spam
              </button>
            </div>
          );
        })
      ) : (
        <h3>No Mails found in Spam folder.</h3>
      )}
    </>
  );
};
