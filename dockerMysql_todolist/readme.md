## Run mysql in docker compose
### 1. docker compose up
```
docker compose up
```


## Run mysql in docker images
### 1. pull mysql image  in docker 
```
docker pull mysql 
```
### 2. run mysql image in docker container 
```
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest
```

### 3. you can exec the mysql in docker bash
```
docker exec -it mysql bash -l
```

### 4. in the mysql container bash
If you are first time, run as root with the password you have set
```
mysql -uroot -p
```

### 5. create the user 
```
create user 'todouser'@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON * . * TO 'todouser'@'localhost';
```

### 6. create the db
```
create database db_todolist;
```

### 7. create the table in the db
```
create table todo_list(
    id int not null auto_increment primary key,
    text varchar(255) not null,
    done BOOLEAN
)
```

### 8. check the connection
select * from todo_list;
mysql -u todouser -p '123456' -h localhost -e 'select * from todo_list' db_todolist
mysqladmin ping -u todouser -p



