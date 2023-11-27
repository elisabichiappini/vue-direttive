'use strict';
// da global built
const { createApp } = Vue
// vedi in html riga 10, qualunque cosa accada in questo createApp me lo monti in mount
createApp({
  data() {
    return {
      type : '',
      friends: ['Elisa', 'Sara', 'Anna'],
      friendsObj: [
        {
          nome: 'Elisa',
          age: 33,
        },
        {
          nome: 'Sara',
          age: 34,
        },
        {
          nome: 'Anna',
          age: 25,
        }
      ]
    }
  }
}).mount('#app')