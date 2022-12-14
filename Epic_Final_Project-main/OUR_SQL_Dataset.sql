drop database if exists potionshop;
create database potionshop;
use potionshop;

create table potion (
    id varchar(300) NOT NULL ,
    potion_name varchar(1000),
    photoUrl varchar(1000),
    effects varchar(1000),
    sideEffects varchar(1000),
    characteristics varchar(1000),
    price int,
    instock bool,
    -- ingredient_id json, -- json holds an array of values
	createdBy varchar(1000),
    PRIMARY KEY (id)
);

create table ingredient(
ingredient_id varchar(100) not null,
name varchar(50),
primary key(ingredient_id)
);

-- create table cart (
	-- cart_id int NOT NULL auto_increment,
    -- itemName json,
    -- totalPrice json,
    -- PRIMARY KEY (cart_id)
-- );

create table cartItems(
ci_id int not null auto_increment,
potion_id varchar(100),  -- json holds an array of values
primary Key(ci_id)
-- come back maybe for Foreign Key
);

create table wizards(
wizard_id varchar(100) not null,
wizard_first_name varchar(50),
wizard_last_name varchar(50),
wizard_picture varchar(100),
primary key(wizard_id)
);


-- insert into potion (id,potion_name,photoUrl,effects,sideEffects,characteristics,price,instock,ingredient_id,createdBy) value ('021b40b3-68ba-4fde-a595-dbb07500674d','Manegro Potion','','Rapid hair growth',null,null,30.90,true,null,null);
-- insert into potion (id,potion_name,photoUrl,effects,sideEffects,characteristics,price,instock,ingredient_id,createdBy) value ('0e7228e4-3050-411f-aaa7-6a175737e975','Skele-Gro','','Smokes when poured;Vile taste;burns on the way down;Yellow in COLOR',null,null,19.99,true,null,'9b528a63-0a01-4b91-992d-9afed9b841e7');
-- insert into potion (id,potion_name,photoUrl,effects,sideEffects,characteristics,price,instock,ingredient_id,createdBy) value ('06beea01-1e2a-4344-9da3-c27abc4a4580','Rudimentary body potion','','Helps restore non-corporeal wizards to a rudimentary bodies/sustains rudimentary bodies',null,null,30.90,true,null,null);

-- insert into ingredient (ingredient_id,name) value ('012ce0a0-5be7-41cf-9003-bb4ca97eb97b','Frog parts');
-- insert into ingredient (ingredient_id,name) value ('01c08cd0-cd5d-44ae-a7a4-549e4fd56773','Peaccock feathers');
-- insert into ingredient (ingredient_id,name) value ('01db33d0-0bcf-4672-9b21-49566261365f','Exploding Fluid');
-- insert into ingredient (ingredient_id,name) value ('086a701d-58ae-4b64-a2d3-f2ae90a562a9','flobberworm Mucus');

-- insert into wizards  value ('913407b0-9c11-4002-a080-6874436c3a93','Nicolas','Flamel',null);
-- insert into wizards  value ('9b528a63-0a01-4b91-992d-9afed9b841e7','Linfred','of Stinchcombe',null);
-- insert into wizards  value ('1234','Mr.Cheese','of Narnia',null);
drop view if exists PotionAndWiz;
create view PotionAndWiz as
select *
from potion p
Left JOIN   wizards w
	on p.createdBy = w.wizard_id;
    
drop view if exists CartAndPotion;
create view CartAndPotion as
select c.ci_id, p.potion_name, p.price, p.photoUrl 
from cartitems c
Left JOIN   potion p
	on c.potion_id = p.id;
    
-- insert into cartItems (potion_id) value ("021b40b3-68ba-4fde-a595-dbb07500674d");
-- insert into cartItems (potion_id) value ('0e7228e4-3050-411f-aaa7-6a175737e975');
select * from cartItems;

select p.potion_name
from potion p
join cartItems ci
	on p.id = ci.potion_id;