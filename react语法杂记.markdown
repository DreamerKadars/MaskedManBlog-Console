# React语法杂记

## 1.react使用Map<string,string>

 新建一个映射类型Map，以`Map<string,string>`为例,声明、初始化、遍历例如下代码

``` typescript
    export const Regionmap: Map<string, string> = new Map([
    ["全国", "CN"],
    ["东北", "CN_NorthEast"],
    ["华北", "CN_East"],
    ["华南", "CN_South"],
    ["华中", "CN_Central"],
    ["西北", "CN_NorthWest"],
    ["西南", "CN_SouthWest"],
]);
    
```

遍历可以采用for进行遍历,或者按示例使用map

``` typescript
    for (let k in Regionmap) {  
        ...
        var TagName: k;
        var TagValue: Regionmap[k];
        ...
    }
    {[...Regionmap].map((item) => {
        const [value, label] = item;
        return {
            label,
            value,
        };
    })}
    
```

map还可以和Object转换

``` typescript
    import React, {Component} from 'react'

class JsonUtils extends React.Component {

/**
*字符串转json
*
*/
static stringToJson(data){
     return JSON.parse(data);
}
/**
*json转字符串
*/
static jsonToString(data){
     return JSON.stringify(data);
}
/**
*map转换为json
*/
static mapToJson(map) {
    return JSON.stringify(JsonUtils.strMapToObj(map));
}
/**
*json转换为map
*/
static jsonToMap(jsonStr){
    return JsonUtils.objToStrMap(JSON.parse(jsonStr));
}

/**
*map转化为对象（map所有键都是字符串，可以将其转换为对象）
*/
static strMapToObj(strMap){
    let obj= Object.create(null);
    for (let[k,v] of strMap) {
    obj[k] = v;
}
    return obj;
}

/**
*对象转换为Map
*/
static objToStrMap(obj){
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
    strMap.set(k,obj[k]);
}
return strMap;
}
}
```


## 2.react数组删除

``` typescript
array.splice(index,number)
// index为开始位置，number是删除数量，返回被删除的部分
```

## 3.react字符串包含

``` typescript
string.indexOf("") //结果大于0则包含
```

## 4.解析string为object

``` typescript
result=JSON.parse("要解析的字符串")
```

## 5.时间

``` typescript
new Date().getDate().toString()
```

## 6.字符串转数字

``` typescript
Number("要解析的字符串")
```

## 7.判断对象是否存在某一个属性

``` typescript
Number("要解析的字符串")
``` 

## 7.中途停止Sleep

``` typescript
Number("要解析的字符串")
```

## 8.依据条件确定有无

``` typescript
{boolean&&()}
```

## 9.JSX和TSX有什么区别

``` typescript
ts和js是两种语言，再react种对应tsx和jsx，ts相对于js，增加了自动类型检查的功能
```

## 10.类型转换

```js
    // 字符串转int
    parseInt()
```