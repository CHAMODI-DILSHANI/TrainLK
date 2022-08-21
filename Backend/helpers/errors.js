const err_501 = () => {
  return { error: { status: 501, message: "Internal server error" } };
};

const err_400_s = message => {
  return { error: { status: 400, message: message } };
};

const err_400 = errors => {
  return { error: { status: 400, errors: errors } };
};

module.exports = { err_501, err_400, err_400_s };
