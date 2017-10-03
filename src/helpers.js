// Obect forEach method extending from defineProperties()
// allow you to run forEach on objects just like arrays
if (!Object.prototype.forEach) {
  Object.defineProperties(Object.prototype, {
      'forEach': {
          value: function (callback) {
              if (this == null) {
                  throw new TypeError('Not an object');
              }
              var obj = this;
              for (var key in obj) {
                  if (obj.hasOwnProperty(key)) {
                      callback.call(obj, obj[key], key, obj);
                  }
              }
          },
          writable: true
      }
  });
}