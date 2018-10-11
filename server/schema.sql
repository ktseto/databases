CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int primary key,
  text text,
  createdAt datetime,
  userid int references user(id),
  --roomname text
  roomid int references room(id)
);

/*
mid   message   createdAt   userid    roomid
101   'hey'     zzz         1         901
102   'yo'      yyy         1         908
103   'blah'    www         2         901
*/


SELECT *
FROM messages INNER JOIN rooms ON messages.roomid = rooms.id


CREATE TABLE users (
  id int primary key,
  username text
);

/*
uid mid     username
1   101     john
2   102     john
3   110     john
*/

CREATE TABLE rooms (
  id int primary key,
  roomname text
);

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

