CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int primary key AUTO_INCREMENT,
  text text,
  createdAt datetime,
  userid int references user(id),
  roomid int references room(id)
);


/*
mid   message   createdAt   userid    roomid
101   'hey'     zzz         1         901
102   'yo'      yyy         1         908
103   'blah'    www         2         901
*/


CREATE TABLE users (
  id int primary key AUTO_INCREMENT,
  username text
);

/*
id  username
1   john
2   john
3   john
*/

CREATE TABLE rooms (
  id int primary key AUTO_INCREMENT,
  roomname text
);

-- server-spec doesn't allow us to automate truncation
-- of tables, not does it allow us to string multiple
-- insert statements into a single query string, so these
-- two lines are required for the test cases to pass.
INSERT INTO rooms (roomname) VALUES ('main');
INSERT INTO rooms (roomname) VALUES ('Hello');

/*
id    roomname
901   lobby
902   park
*/



/*
given room, return all messages in room
given user, return all messages for user
return all messages for user in room
*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

