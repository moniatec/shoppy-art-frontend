## **users**

| attribute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| userName       |  string   |              not null |
| email          |  string   |      not null, unique |
| hashedPassword |  string   |     not null (binary) |
| createdAt      | timestamp |              not null |
| updatedAt      | timestamp |              not null |
| avatarUrl      |   text    |              not null |

## **items**

| attribute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| itemName       |  string   |              not null |
| price          |  integer  |              not null |
| description    |   text    |              not null |
| photoUrl       |   text    |              not null |
| ownerId        |  integer  |           foreign key |
| createdAt      | timestamp |              not null |
| updatedAt      | timestamp |              not null |