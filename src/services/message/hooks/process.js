'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function() {
  return function(hook) {

    //The loged in user
    const user = hook.params.user;

    //The message
    const text = hook.data.text.substring(0,400)
      .replace(/&/g,'&amp;').replace(/</,g,'$lt;')
      .replace(/>/,g,'&gt');

    // override the orignal data
    hook.data = {
      text,
      userId: user._id,
      createdAt: new Date().getTime()
    };

  };
};
