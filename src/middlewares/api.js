const Api = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default Api;
