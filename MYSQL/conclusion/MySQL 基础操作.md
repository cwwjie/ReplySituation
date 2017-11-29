
### MySQL 基础操作

MySQL 创建数据 <!-- 是 --> CREATE DATABASE todo;

MySQL 创建数据表 <!-- 需要 --> 表名 表字段名 定义每个表字段

MySQL 创建数据表的SQL通用语法 <!-- 是 --> CREATE TABLE table_name (column_name column_type);


MySQL 查看当前使用的数据库  <!-- is --> select database();
MySQL 更换当前使用的数据库  <!-- is --> use database();
MySQL 返查看当前数据库下的所有表的名称  <!-- is --> show tables;





Python Flask Todo 应用 需要的数据  <!-- 是 --> id - description - category - priority - create date


CREATE TABLE `todo` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`description` VARCHAR(50) NOT NULL,
	`category` VARCHAR(10) NOT NULL,
	`priority` INT NOT NULL,
	`createTime` BIGINT NOT NULL,
	PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO todo ( description, category, priority, createTime )
VALUES
( "学习MySQL", "未分类", 1, 1483228800000 );











