import { createContext, useReducer } from "react";
import { mails } from "../Database/data";
import { mailReducer } from "./Reducer";

export const MailContext = createContext();
const initialState = {
  mails: mails,
  spam: [],
  trash: [],
  isStarred: false,
  isRead: false,
};
export const MailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mailReducer, initialState);

  const filterCheckedData = state.mails.filter(
    (mail) =>
      (state.isRead ? mail.unread : true) &&
      (state.isStarred ? mail.isStarred : true) &&
      (state.isRead && state.isStarred ? mail.isStarred && mail.unread : true)
  );

  return (
    <MailContext.Provider value={{ mails, filterCheckedData, dispatch, state }}>
      {children}
    </MailContext.Provider>
  );
};
