create table bossouls (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  image VARCHAR(255),
  HP VARCHAR(255),
  Souls VARCHAR(255),
  description VARCHAR(255) not null
);

create table enemygame (
  id int unsigned primary key auto_increment not null,
  dlc VARCHAR(255) not null,
  Requis VARCHAR(255) not null
);