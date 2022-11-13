CREATE TABLE users (
	user_id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL
);
insert into users (name) values ('zarko');
