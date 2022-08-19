# Shell语法

## 循环语句

例子：使用for和while循环

``` shell
for str in This is a string
do
    echo $str
done

int=1
while(( $int<=5 ))
do
    echo $int
    let "int++"
done

```

## 命令和变量拼接

如下为和curl联动的例子

``` shell
i=1
while [ $i -le 100 ]
do
    curl --location --request GET 'http://10.248.189.61:8080/api/v1/cloud/sre/closedomainticket/?ticketId=1840'$i   
    let i+=1    
done
