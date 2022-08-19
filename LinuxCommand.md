# LinuxCommand

## 系统安装

<https://ubuntu.com/>在官网下载镜像

制作U盘，使用UltraISO，使用写入磁盘映像功能

## 解压缩

``` bash
解压.tar文件
tar -xvf 文件名
```

- z 一般处理.gz文件 // 不是.gz不要加
- x 解压 c压缩
- v 显示执行过程
- f 指定备份文件

``` bash
解压.xz文件
xz -dk 文件名
# 将文件解压为tar文件，再使用tar解压
tar -zxvf 压缩文件名.tar.gz #注意z的含义
```

## 新增命令环境配置

修改`/ect/profile`后执行`source /etc/profile`生效,注意不要使用fish

例子：

``` bash
PATH=$PATH:/home/mashuo/go/bin
```

## ssh的相关配置

权限拒绝的时候，修改 `etc/ssh/sshd_config`配置

``` bash

```

## 网络相关

查看监听端口

``` bash
netstat -anp | grep main
```

## 进程相关

``` bash
#杀死进程
kill 12345
#强制杀死进程
kill -KILL 123456
```

## screen

官网<http://www.gnu.org/software/screen/>

``` bash
screen -ls
screen -r #-x
ctrl+a+esc #滑动翻滚
```

## 查看命令所在的位置

``` bash
screen -ls
screen -r #-x
ctrl+a+esc #滑动翻滚
```

## 查看系统版本

``` bash
cat /proc/version
```

## systemd

systemd即为system daemon,是linux下的一种init软件,由Lennart Poettering带头开发,并在LGPL 2.1及其后续版本许可证下开源发布,开发目标是提供更优秀的框架以表示系统服务间的依赖关系，并依此实现系统初始化时服务的并行启动，同时达到降低bash的系统开销的效果，最终代替常用的System V与BSD风格init程序。

## ls

-la具体参数含义，依次为<https://blog.csdn.net/yangqiang1997/article/details/112470761>

## 权限相关

chgrp：改变文件所属群组，其实是change group缩写，帮助记忆；
chown：改变文件拥有者，change owner；
chmod：改变文件的权限。

```bash
# 改变整个目录下的拥有者
sudo chown -R ubuntu /usr/local/nginx/
```