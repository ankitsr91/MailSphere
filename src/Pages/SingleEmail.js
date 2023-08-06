import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MailContext } from "../Contexts/MailProvider";

export const SingleEmail = () => {
  const { state, mails, dispatch } = useContext(MailContext);
  const { mailId } = useParams();
  const singleEmail = mails.find((mail) => mail.mId === mailId);
  const checkRead = state?.mails
    .filter((mail) => mail.unread)
    .includes(singleEmail);
  console.log(checkRead);
  return (
    <>
      <div className="singleEmail">
        <h1>{singleEmail?.subject}</h1>
        <p className="singleEmailContent">{singleEmail?.content}</p>
        <button className="blueBtn">
          <Link to="/" className="blueNavLink">
            Back to Inbox
          </Link>
        </button>
      </div>
    </>
  );
};
