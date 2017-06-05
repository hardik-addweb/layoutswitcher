angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ray Sparrow',
    lastText: 'You on your way?',
    face: 'img/glasses.jpg',
    price:'420',
    discout:'30%'
  }, {
    id: 1,
    name: 'Max Lynx 420',
    lastText: 'Hey, it\'s me',
    face: 'img/cam.jpg',
    price:'400',
    discout:'10%'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/guitar.jpg',
    price:'320',
    discout:'20%'
  }, {
    id: 3,
    name: 'Titne Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/glasses.jpg',
    price:'350',
    discout:'15%'
  }, {
    id: 4,
    name: 'Mike Harrington 320',
    lastText: 'This is wicked good ice cream.',
    face: 'img/cam.jpg',
    price:'260',
    discout:'25%'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
