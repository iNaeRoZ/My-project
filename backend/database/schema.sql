create table bossouls (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  description VARCHAR(255) not null,
  image VARCHAR(255),
  HP VARCHAR(255),
  Souls VARCHAR(255)
);

create table enemygame (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null
);