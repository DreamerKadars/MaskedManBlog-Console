# MongoDB学习

## MongoDB网站

官网<https://www.mongodb.com/>
文档<https://www.mongodb.com/docs/v6.0>

## MongoDB安装

通过官网指引，使用apt安装<https://www.mongodb.com/docs/v6.0/tutorial/install-mongodb-on-ubuntu/>

基本上就按步骤就可以了，有个libssl的版本不对有依赖，通过下载解决。https://launchpad.net/ubuntu/focal/amd64/libssl1.1/1.1.1f-1ubuntu2.16

## 配置信息

1. 默认数据库文件 '/var/lib/mongodb' 和日志文件/var/log/mongodb
配置文件 /etc/mongod.conf

## 链接
gosdk : https://www.mongodb.com/docs/drivers/go/v1.9/?_ga=2.239614726.445221381.1667136799-643059657.1659199591
mongosh ：https://www.mongodb.com/docs/mongodb-shell/?_ga=2.204885968.1126388225.1668096247-643059657.1659199591
