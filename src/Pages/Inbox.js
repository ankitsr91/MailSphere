import { useContext } from "react";
import { MailContext } from "../Contexts/MailProvider";
import { Link } from "react-router-dom";
import { Filters } from "../Components/Filters";
export const Inbox = () => {
  const { state, dispatch, filterCheckedData } = useContext(MailContext);
  const unreadMails = state?.mails?.filter((mail) => mail.unread);

  return (
    <>
      <h1 className="heading">Inbox</h1>
      <Filters />
      <h4>Unread: {unreadMails?.length}</h4>

      {filterCheckedData?.map((mail) => {
        const { mId, subject, content } = mail;
        const checkStarred = state?.mails
          .filter((mail) => mail.isStarred)
          .includes(mail);
        const checkRead = state?.mails
          .filter((mail) => mail.unread)
          .includes(mail);
        return (
          <div key={mId} className="mail" style={{ position: "relative" }}>
            <h3 className="inline">Subject: {subject}</h3>

            <button
              className="btn star star-btn"
              style={{
                backgroundColor: checkStarred ? "#FAD02C" : "",
              }}
              onClick={() =>
                dispatch({
                  type: "starAndUnstarThese",
                  payload: mId,
                  isStarred: checkStarred,
                })
              }
            >
              {checkStarred ? "Starred" : "Star"}
            </button>
            <p className="content">{content}</p>
            <Link to={`/${mId}`} className="link">
              View Details
            </Link>
            <button
              className="delete btn extra-btn"
              onClick={() => dispatch({ type: "delete", payload: mId })}
            >
              Delete
            </button>
            <button
              className="read btn extra-btn"
              style={{
                backgroundColor: checkRead ? "" : "#fd7f20",
                color: checkRead ? "" : "#ffffff",
              }}
              onClick={() =>
                dispatch({
                  type: "markAsRead",
                  payload: mId,
                  isUnread: checkRead,
                })
              }
            >
              {" "}
              {checkRead ? "Mark As Read" : "Read"}
            </button>
            <button
              className="spambtn btn extra-btn"
              onClick={() => dispatch({ type: "spam", payload: mId })}
            >
              Report Spam
            </button>
          </div>
        );
      })}
    </>
  );
};
