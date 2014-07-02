'use strict';

angular.module('weddingAppApp')
.factory('Parse', function () {
  // AngularJS will instantiate a singleton by calling "new" on this function
  Parse.initialize('oZh5Z9hX8qdkfHmxWenzoi9jRnpZLWAnkqsbEIIk',
                   'CJxP7agRAezECaeE12OXTM4RHbrUtv0g2YkH0v0a');
  return Parse;
});
