
### 创建用户

创建用户 <!-- 是 --> CREATE USER 'username'@'host' IDENTIFIED BY 'password';

host  <!-- 是 -->  指定该用户在哪个主机上可以登陆
localhost <!-- 是 --> 指该用户只能在本地登录，不能在另外一台机器上远程登录
% <!-- 表示 --> 在任何一台电脑上都可以登录; 也可以指定某台机器可以远程登录

### 授权

授权 <!-- 是 --> GRANT privileges ON databasename.tablename TO 'username'@'host'

privileges <!-- 是 --> 用户的操作权限
用户的操作权限 <!-- 有 --> SELECT , INSERT , UPDATE , ALL 等

databasename <!-- 是 --> 数据库名
tablename <!-- 是 --> 表名
*（星号）*  <!-- 表示 --> 授予该用户对 所有 数据库/表 相应操作权

### 查看限权

show grants for 'username'@'host';


### [建议限权](https://dev.mysql.com/doc/refman/5.7/en/privileges-provided.html)

ALTER √
CREATE √
DELETE √
INDEX √
INSERT √
SELECT √
SHOW DATABASES √
SHOW VIEW √

UPDATE √

DROP ×
EVENT ×
EXECUTE ×
GRANT ×
LOCK ×
REFERENCES ×
TRIGGER ×

USAGE ?
FILE ?
PROCESS ?
PROXY ?
RELOAD ?
REPLICATION ?
SHUTDOWN ?
SUPER ?



