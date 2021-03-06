// Obect forEach method extending by extending the object prototype
// we specifically extend the defineProperties() methods to avoid breaking other things
// allows you to run forEach on objects just like arrays
// works back to ie7
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