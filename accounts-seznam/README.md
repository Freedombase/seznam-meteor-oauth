# accounts-seznam

## Installation

`meteor add storyteller:accounts-seznam`

## Documentation

This package works similar to other accounts packages. See the [Meteor Guide](https://guide.meteor.com/accounts.html) for more details.

By default, the package requests the `identity` permission. You can request additional permissions by setting the `requestPermissions` option in `Accounts.ui.config` or `scopes` settings file.
See the [Seznam documentation](https://vyvojari.seznam.cz/oauth/scopes) for more details.

```javascript
Accounts.ui.config({
  requestPermissions: {
    seznam: ["identity", "avatar", "adulthood"]
  }
});
```
or
```json
{
  "packages": {
    "accounts-seznam": {
      "scopes": ["identity", "avatar", "adulthood"]
    }
  }
}
```
