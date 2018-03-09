create table books (
        id serial primary key,
        title text,
        author text,
        dds float(3)
    )
    --  68C 
    create table location (
        id serial primary key,
        state text,
        city int,
        locationid int
        foreign key (locationid) references books(id) 
    )

-- 67G
    create table library(
        locationid int unique,
        name text,
    )

    -- 107E
    alter table books 
    rename to availablebooks

    -- 107C 68D
select * from availablebooks
join library on studentclass.studentid = students.ID
where classid = (
    select id 
    from classlist
    where id = $1
);