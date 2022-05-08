// selectors
export const getAllStatuses = ({statuses}) => statuses;

//action names
const createActionName = name => `app/books/${name}`;

//action creators

const reducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default reducer;
