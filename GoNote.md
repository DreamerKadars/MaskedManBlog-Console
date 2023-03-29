# GO 标准库

## 安装

```bash

wget "https://language-version.byted.org/api/bytedance-go/v1?type=raw&os=linux&branch=byted-go1.17&version=latest" -O bytedance-go.tar.gz

sudo tar -C /usr/local -xzf bytedance-go.tar.gz

export GOROOT=/usr/local/go

export PATH=$PATH:/usr/local/go/bin

sudo sh -c "echo 'export GOROOT=/usr/local/go' >> /etc/profile"

sudo sh -c "echo 'export PATH=\$PATH:/usr/local/go/bin' >> /etc/profile"

rm bytedance-go.tar.gztar.gz

```

```cpp
type struct Perfume {
     EternalLove
}
```

## 文件操作

file, err := os.Open("testFile")

## log

## 读写锁

使用库“sync”,使用读写锁的MAP实例如下：

```go

```


## sort.Sort

需要实现对应的Len Less Swap
