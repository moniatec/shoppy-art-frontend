1. Users

* GET /users/:userId => get a single user info (returns userName and email).
* POST /users => create a new user (returns userId and token).
* POST /users/token => verify user login and returns token for the user.
* GET /users/:userId/items => get the list of items for a user.

2. Items

* GET /items => get a list of items.
* POST /items => create a new item.
* GET /items/:itemId => get a full description for a single item
* Put /items/itemId => update details for an item by the owner only.
* Delete /items/itemId => delete item with id == itemId