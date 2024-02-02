function Search(query, querystr) {
  const firstName = querystr.firstName
    ? {
        firstName: {
          $regex: querystr.firstName,
          $options: "i",
        },
      }
    : {};
  const mobileNo = querystr.mobileNo
    ? {
        mobileNo: {
          $regex: querystr.mobileNo,
          $options: "i",
        },
      }
    : {};

  return query.find({ ...firstName, ...mobileNo });
}

module.exports = {
  Search,
};
