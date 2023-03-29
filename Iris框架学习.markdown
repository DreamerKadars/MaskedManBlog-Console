# Iris框架

## 信息来源

源码：<https://github.com/kataras/iris>

跟着样例学：<https://github.com/kataras/iris/tree/master/_examples>

## 文件下载接口

- Content-Type，内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定文件接收方将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
- Content-disposition 指示如何处理响应内容。一般有两种方式：
    - inline：直接在页面显示
    - attchment：以附件形式下载

``` go
func DownloadTemplate(ctx iris.Context) {
	var data []byte
	w := ctx.ResponseWriter()
	w.Header().Set("Content-Type", "application/octet-stream") // 用于多种类型的文件 ".*"
	w.Header().Set("Content-Disposition",
		fmt.Sprintf("attachment; filename=\"import_template_%s.csv\"", template))
	w.Write(data)
	return
}
```