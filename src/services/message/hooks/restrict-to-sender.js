'use strict';

// src/services/message/hooks/restrict-to-sender.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    const messageService = hook.app.service('message');

    //get the message user wants to access
    return messageService.get(hook.id, hookl.params).then(message => {
        if (message.sentBy._id !== hook.params.user._id){
          throw new errors.NotAuthenticated('Access not allowed');
        }

        return hook;
      });
  };
};
