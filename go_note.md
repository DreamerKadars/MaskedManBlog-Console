# GO 标准库

## 安装

```shell

wget "https://language-version.byted.org/api/bytedance-go/v1?type=raw&os=linux&branch=byted-go1.17&version=latest" -O bytedance-go.tar.gz

sudo tar -C /usr/local -xzf bytedance-go.tar.gz

export GOROOT=/usr/local/go

export PATH=$PATH:/usr/local/go/bin

sudo sh -c "echo 'export GOROOT=/usr/local/go' >> /etc/profile"

sudo sh -c "echo 'export PATH=\$PATH:/usr/local/go/bin' >> /etc/profile"

rm bytedance-go.tar.gztar.gz

```

## 创建项目

```sh
    go mod init name
```

## package依赖

go文件中的package的依赖路径取决于GoPath，import后

## Time

Time中的时间结构，如下图

```go
    type Time struct {
        // wall and ext encode the wall time seconds, wall time nanoseconds,
        // wall和ext用秒和纳秒编码了现实时间
        // and optional monotonic clock reading in nanoseconds.
        // 还有可选的以纳秒为单位的可选单调时钟读数
        // From high to low bit position, wall encodes a 1-bit flag (hasMonotonic),
        // 按位数从高到低，wall编码一位标记(包含符号位)
        // a 33-bit seconds field, and a 30-bit wall time nanoseconds field.
        // 33位用来表示秒，30位用来标记现实时间的纳秒
        // The nanoseconds field is in the range [0, 999999999].
        // 纳秒的范围是在[0, 999999999]内
        // If the hasMonotonic bit is 0, then the 33-bit field must be zero
        // 如果符号位是0，那么33位必须全为0
        // and the full signed 64-bit wall seconds since Jan 1 year 1 is stored in ext.
        // 并且这个64位有符号整数wall描述了从1年1月1日来的秒数，被存在ext中
        // If the hasMonotonic bit is 1, then the 33-bit field holds a 33-bit
        // 如果符号位是1，那么前33位包含了一个32位
        // unsigned wall seconds since Jan 1 year 1885, and ext holds a
        // 无符号秒数时间(从1885年1月1日)
        // signed 64-bit monotonic clock reading, nanoseconds since process start.
        wall uint64
        ext  int64
        // loc specifies the Location that should be used to
        // loc 特化了应该被使用去决定分钟、小时、月份、天和年的时区。
        // determine the minute, hour, month, day, and year
        // that correspond to this Time.
        // The nil location means UTC.
        // loc为nil，表示为UTC时区
        // All UTC times are represented with loc==nil, never loc==&utcLoc.
        // 全部的UTC时间被loc==nil来代表，从来不是loc==&utcLoc
        loc *Location
    }
```

当前时间的字符串表达

```go
    time.Now().String()
    time.Now().Format("2006-01-02 15:04:05")
    time.Now().Unix() //获取时间戳 秒级
    // 时间戳转time结构
```

### 计时器

```sh
    ticker := time.NewTicker(500 * time.Millisecond)
    tryTime := 10
    for {
        if tryTime < 0 {
        break
        }
        tryTime--
        _, err = NewVeenClient().AddLBListener(addLBListenerRequest)
        if err == nil {
        break
        } else {
        svrboost.Error("[%s],call NewVeenClient().AddLBListener(addLBListenerRequest) fail,because of %+v", requestID, err)
        }
        <-ticker.C
    }
```


## sort

在切片查找某一个元素

```go
    sort.strings() //排序
    sort.Searchxxxx() //然后二分查找
    sort.HasSuffix() //寻找后缀
```

## strings

```go
//在母串中查询子串
strings.Contains("母串","子串") //返回bool

//拆分
query_strs := strings.FieldsFunc(query_str, func(r rune) bool {
  return r == '&'
 })

//替换
strings.ReplaceAll(key_value[1],"+"," ")


```

## strconv

```go
//数字转字符串
strconv.Itoa(123) // 得到"123"
//甚至bool也能转为string
strconv.FormatBool(false) //得到false
```

## 自带语法

```go
    // map的使用
    if _, ok := VipGroupUpdateDeleteStateMachine[curVipGroupInfo.Info.State]; !ok {

    }
    //删除数组里第i个位置
    a = append(a[:i], a[i+1:]...)

    //切片的使用
    //切片的新建
    make([]string,0)
    //切片的添加
    x=append(x,a)
    //切片的拼接
    x=append(x,x2...)
    //切片的截取
    x[2:3]
```

## go-pinyin

汉字转拼音的库：<https://pkg.go.dev/github.com/mozillazg/go-pinyin#section-readme>

```go
    a := pinyin.NewArgs()
    a.Fallback = func(r rune, a pinyin.Args) []string {
        return []string{string(r)}
    }
    res := pinyin.Pinyin(str, a)
    result := ""
    for _, v := range res {
        for _, vv := range v {
            result += vv
        }
    }
```

## go-cron

定时任务功能: <https://github.com/robfig/cron>

```go
import cron "github.com/robfig/cron/v3"
    // 暂时只会这么用，间隔多少多少秒，但是感觉定时间日期执行也可以学一下
    c := cron.New()
    c.AddFunc("@every 10s", func() {})
    c.Start()
```

## os

文件操作

参考自<https://blog.csdn.net/weixin_42544051/article/details/106528873>

```go
//通常这样用于简单打开文件，只有可读权限
file, err := os.Open("msg.txt")

//这样可以简单的读取全部文件内容
ioutil.ReadFile(configpath)
file.

```

## log

标准记录日志的库，可以打一些基本日志

来源<https://zhuanlan.zhihu.com/p/159482200>

本包提供了一个预定义的“标准”logger，可以通过调用函数Print系列(Print|Printf|Println）、Fatal系列（Fatal|Fatalf|Fatalln）、和Panic系列（Panic|Panicf|Panicln）来使用，默认输入到终端，可以进行重定向

```go
package main

import (
    "log"
)

func main() {
    log.Println("这是一条优雅的日志。")
    v := "优雅的"
    log.Printf("这是一个%s日志\n", v)
    //fatal系列函数会在写入日志信息后调用os.Exit(1)。Panic系列函数会在写入日志信息后panic。
    log.Fatalln("这是一天会触发fatal的日志") 
    log.Panicln("这是一个会触发panic的日志。") //执行后会自动触发一个异常
}
```

- 配置Logger中的flag属性

默认情况下的logger只会提供日志的时间信息，但是很多情况下我们希望得到更多信息，比如记录该日志的文件名和行号等。log标准库中为我们提供了定制这些设置的方法。

log标准库中的Flags函数会返回标准logger的输出配置，而SetFlags函数用来设置标准logger的输出配置。下面是flag属性对应的常量

```go
const (
    Ldate    = 1 << iota     // the date in the local time zone: 2009/01/23
    Ltime                    // the time in the local time zone: 01:23:23
    Lmicroseconds           // microsecond resolution: 01:23:23.123123.  assumes Ltime.
    Llongfile               // full file name and line number: /a/b/c/d.go:23
    Lshortfile   // final file name element and line number: d.go:23. overrides Llongfile
    LUTC         // if Ldate or Ltime is set, use UTC rather than the local time zone
    Lmsgprefix  // move the "prefix" from the beginning of the line to before the message
    LstdFlags = Ldate | Ltime // initial values for the standard logger
)

func main() {
    log.SetFlags(log.Llongfile | log.Lmicroseconds | log.Ldate)
    log.Println("这是一条优雅的日志。")
}
```

- 配置Logger中的out属性

out属性是一个io.Writer输出流，使用它可以把日志输出为文件。

需要用的方法为：设置标准logger的输出目的地，默认是标准错误输出。

例如，下面的代码会把日志输出到同目录下的xx.log文件中。

```go
func main() {
    logFile, err := os.OpenFile("./xx.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
    if err != nil {
        fmt.Println("open log file failed, err:", err)
        return
    }
    log.SetOutput(logFile)
    log.SetFlags(log.Llongfile | log.Lmicroseconds | log.Ldate)
    log.Println("这是一条很普通的日志。")
    log.SetPrefix("[PS]")
    log.Println("这是一条很普通的日志。")
}
```

## init函数

init函数执行在main函数之前，并且执行顺序按照依赖顺序执行，没有被依赖过的package则不会执行init函数

## encoding/json

```go
    // 函数库介绍(google 翻译)

    // 将结构解析成[]byte,err
    func json.Marshal(v interface{}) ([]byte, error)
    // 将[]byte解析成结构,有可能出现错误
    func json.Unmarshal(data []byte, v interface{}) error
    什么时候出错呢
```

## path/filepath

```go
    // 将结构解析成[]byte,err
    func json.Marshal(v interface{}) ([]byte, error)
    // 将[]byte解析成结构,有可能出现错误
    func json.Unmarshal(data []byte, v interface{}) error
    // 出错可能包括不支持的类型，不支持的值，不支持的循环引用，很少出现
```

## reflect

## test

go test命令会自动测试导入路径命名的包并缓存测试结果

要求：

1. 文件名必须以_test.go结尾
2. 函数必须以Test开头
3. 函数参数必须是t *testing.T

```sh
    测试单个方法：go test -v -run TestAddUpper
    go test ./ga_test/ -v --count=1  #测试某一个文件夹并输出日志，取消缓存功能
    -v 输出日志
    --count=1 不使用缓存
    --
```

<https://books.studygolang.com/The-Golang-Standard-Library-by-Example/chapter09/09.1.html>

## 注释规范

<https://blog.csdn.net/qq_31941921/article/details/122152595>

## sync

异步操作package

1. 可以优雅的判断携程结束

```go
package main

import (
    "fmt"
    "sync"
)

func add_num(a, b int, done func()) {
    defer done()
    c := a + b
    fmt.Printf("%d + %d = %d\n", a, b, c)
}

func main() {
    var wg sync.WaitGroup
    wg.Add(10)
    for i := 0; i < 10; i++ {
        go add_num(i, 1, wg.Done)
    }
    wg.Wait()
}
```

## 杂项

1. Go 语言 delete 关键字用于删除哈希表 map 中的元素, 参数为 map 和其对应的 key
2. go get之后下载文件的目录位置
    1、GO111MODULE 如果为off，则在pkg目录下
    2、GO111MODULE如果为on，则在src目录下