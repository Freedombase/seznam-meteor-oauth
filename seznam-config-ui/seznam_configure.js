Template.configureLoginServiceDialogForSeznam.helpers({
    siteUrl: () => Meteor.absoluteUrl(),
});

Template.configureLoginServiceDialogForSeznam.fields = () => [
    {
        property: 'clientId',
        label: 'Client ID'
    },
    {
        property: 'secret',
        label: 'Client Secret'
    }
];
