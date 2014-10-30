var moment = require('moment');

module.exports = function (context) {
  var f = context.hash.format || 'MMM Do, YYYY',
      timeago = context.hash.timeago,
      date;

  if (timeago) {
    date = moment(context).fromNow();
  } else {
    date = moment(context).format(f);
  }

  return date;
};
