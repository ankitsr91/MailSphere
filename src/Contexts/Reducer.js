export const mailReducer = (state, action) => {
  const { mails, spam, trash, isStarred, isRead } = state;
  switch (action.type) {
    case "isStarred":
      return { ...state, isStarred: !isStarred };

    case "unread":
      return { ...state, isRead: !isRead };

    case "starAndUnstarThese":
      const starredMail = mails.map((mail) =>
        mail.mId === action.payload ? { ...mail, isStarred: true } : mail
      );
      const unstarredMail = mails.map((mail) =>
        mail.mId === action.payload ? { ...mail, isStarred: false } : mail
      );

      return action.isStarred
        ? { ...state, mails: unstarredMail }
        : { ...state, mails: starredMail };

    case "delete":
      const filteredMails = mails.filter((mail) => mail.mId !== action.payload);
      const deletedMails = mails.filter((mail) => mail.mId === action.payload);

      return {
        ...state,
        mails: filteredMails,
        trash: [...trash, ...deletedMails],
      };

    case "markAsRead":
      const markMailAsRead = mails.map((mail) =>
        mail.mId === action.payload ? { ...mail, unread: false } : mail
      );
      const markAsUnread = mails.map((mail) =>
        mail.mId === action.payload ? { ...mail, unread: true } : mail
      );
      console.log(markAsUnread);
      return action.isUnread
        ? { ...state, mails: markMailAsRead }
        : { ...state, mails: markAsUnread };

    case "spam":
      const spamAndRemove = mails.filter((mail) => mail.mId !== action.payload);
      const spamEmails = mails.filter((mail) => mail.mId === action.payload);
      return {
        ...state,
        mails: spamAndRemove,
        spam: [...spam, ...spamEmails],
      };
    case "restore":
      const removeFromSpam = spam.filter((mail) => mail.mId !== action.payload);
      const mailToBeRestored = spam.filter(
        (mail) => mail.mId === action.payload
      );
      return {
        ...state,
        mails: [...mails, ...mailToBeRestored],
        spam: removeFromSpam,
      };
    case "restoreFromTrash":
      const removeFromTrash = trash.filter(
        (mail) => mail.mId !== action.payload
      );
      const mailToBeRestoredFromTrash = trash.filter(
        (mail) => mail.mId === action.payload
      );
      return {
        ...state,
        mails: [...mails, ...mailToBeRestoredFromTrash],
        trash: removeFromTrash,
      };
    default:
      return mails;
  }
};
