import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Accounts.oauth.registerService('seznam');

if (Meteor.isClient) {
    const loginWithSeznam = (options, callback) => {
        // support a callback without options
        if (!callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        Seznam.requestCredential(options, credentialRequestCompleteCallback);
    };

    Accounts.registerClientLoginFunction('seznam', loginWithSeznam);
    Meteor.loginWithSeznam = (...args) => Accounts.applyLoginFunction('seznam', args);
} else {
    Accounts.addAutopublishFields({
        forLoggedInUser: ['services.seznam'],
        forOtherUsers: ['services.seznam.username']
    });
}
