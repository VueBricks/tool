🎨内置了一些常用的Js方法.


![npm](https://img.shields.io/npm/v/@3r/tool?style=for-the-badge)![npm](https://img.shields.io/npm/dw/@3r/tool?style=for-the-badge)

#### Common 常用模块
包含一些常用的方法.

以下是相关示例:
```js

let a = {
    x: 1, y: '2', z: 33333333333333333333333333333, h: function () {
        return this.y
    },
    isPoint: true,
    count: NaN,
    length: undefined,
    child: [
        {
            x: 2,
        }
    ],
    time: new Date(),
    test: /\d/g,
    color: new Set(),
    // blob: new Blob(),
    // file: new File(),
    // imageData: new ImageData(100, 100),
    arrayBuffer: new Int8Array([12, 23, 33]).buffer,
    int8Array: new Int8Array([12, 23, 33]),
    int16Array: new Int16Array([22, 33, 13]),
    int32Array: new Int32Array([22, 22, 13]),
}
a.color.add('222')
let b = cloneDeep(a)
b.x = 2
b.color.delete('222')
console.log('深克隆', a, b);

```

#### Convertor 转换模块
包含一些转换的方法.

以下是相关示例:
```js
console.log('社会统一信用代码转换组织机构代码', Convertor.usciToOibc('91411100766237140X'));
// 76623714-0
console.log('日期转换', Convertor.timeFormat(new Date(), 'yyyy年MM月dd日 hh:mm:ss'));
// 例: 2022年12月27日 11:12:35
console.log('千分位处理', Convertor.thousands(10009992.12));
// 10,009,992.12
console.log('文本转base64', Convertor.textToBase64('1234'));
// MTIzNA==
console.log('base64转文本', Convertor.base64ToText('MTIzNA=='));
// 1234
console.log('json对象转换base64', Convertor.jsonToBase64({ a: 1 }));
// eyJhIjoxfQ==
console.log('base64转换json对象', Convertor.base64ToJson('eyJhIjoxfQ=='));
// { a: 1 }
console.log('颜色转换', Convertor.hexToRgb('f2a'));
// rgb(255,34,170)
console.log('颜色转换', Convertor.rgbToHex('rgb(255,34,170)'));
// #ff22aa
console.log('xml输出文本', Convertor.xmlToText('<div>总金额 <span>100,000.00</span></div>'));
// 总金额 102030.00
console.log('数字转大写人民币', Convertor.numToAmountInWords(102030.00));
// 数字 102030.00
console.log('数字转中文', Convertor.numToChinese(102030));
// url query 转对象
console.log('url query 转对象', Convertor.urlQueryToObject('http://example.com/user?id=1&age=2'));
// url object 转 query 对象
console.log('url object 转 query', Convertor.urlObjectToQuery({ id: 1, age: 3 }));


```

#### Map 地图模块
包含一些与地图的方法.

以下是相关示例:
```js
// 引用
// import { Map } from '../index.js'
console.log(`获取地球的半径:${Map.EARTHRADIUS}米`);
console.log(`计算郑州市到杭州市的距离约:${Map.distance({ latitude: 34.16, longitude: 112.42 }, { latitude: 30.3, longitude: 120.2 })}米`)

```

#### Market 证券市场
包含一些股票的算法.

以下是相关示例:
```js
// 恒生电子的日k值 ———— https://stock.9fzt.com/ 九方智投 文章篇幅有限通过github访问测试文件
// console.log('恒生电子日k的KDJ值', Market.kdj(hundsunDayK.map(format9fzt)))
// console.log('恒生电子日k的MACD值', Market.macd(hundsunDayK.map(format9fzt)).pop())
console.log('恒生电子日k的RSI值', Market.rsi(hundsunDayK.map(format9fzt)).pop())

```

#### Maths 数学模块
包含一些与数学的方法.

以下是相关示例:
```js
console.log('获取整数12的所有因数', Maths.getFactors(12));
// [
//   { a: 1, b: 12 },
//   { a: 2, b: 6 },
//   { a: 3, b: 4 },
//   { a: 4, b: 3 },
//   { a: 6, b: 2 }
// ]
console.log('获取整数12的所有因数通过接近程度排序', Maths.getFactorsByApproach(12)); // [ { a: 2, b: 5 }, { a: 5, b: 2 }, { a: 1, b: 10 } ]
// [
//   { a: 3, b: 4 },
//   { a: 4, b: 3 },
//   { a: 2, b: 6 },
//   { a: 6, b: 2 },
//   { a: 1, b: 12 }
// ]
console.log('数组求和', Maths.sum([1, 2, 3, 4]))
// 10
console.log('判断a与b符号是否相同', Maths.sameSign(1, -1))
// false
console.log('角度转弧度', Maths.degreeToRad(45));
// 0.7853981633974483
console.log('弧度转角度', Maths.radToDegree(0.7853981633974483))
// 45
console.log('交集 A∩B', Maths.intersection([{ x: 1 }, { y: 2 }, { a: 2, z: 3 }, false, true, 1, 3, 5, { a: 2, c: [1, 2] }], [true, 5, 5, { z: 3, a: 2 }]));
// [ { a: 2, z: 3 }, true, 5, 5 ]
console.log('对象是否相等', Maths.equal({ a: 2, z: 3 }, { z: 3, a: 2 }));
// true
console.log('删除重复项', Maths.removeRepeat([{ x: 1, y: 2 }, 2, 3, { y: 2, x: 1 }, 1, 4, 5, 6, 2, 3, 4, 4, 45, 4, 31]));
// [ { x: 1, y: 2 }, 2, 3, 1, 4, 5, 6, 45, 31 ]
console.log('补集', Maths.complementarySet([{ x: 1 }, { y: 2 }, { a: 2, z: 3 }, false, true, 1, 3, 5, { a: 2, c: [1, 2] }], [true, 5, 5, { z: 3, a: 2 }, 8, { z: 3, a: 3 }]))
// [ 8, { z: 3, a: 3 } ] 
console.log('并集', Maths.union([1, 23, 4, 556, 14, 124], [123, 452, 231, 1, 14]));
// [ 23, 4, 556, 124, 123, 452, 231 ]
console.log('数组 通过下标改变位置 从3的位置移到1的位置', Maths.interchange([1, 2, 3, 4], 3, 1));
// [ 1, 4, 2, 3 ]

```

#### Randoms 随机模块
包含一些随机的方法.

以下是相关示例:
```js
console.log('获取随机数(整数) [0~10)之间的数', Randoms.getRandomInt(0, 10))
console.log('打乱数组', Randoms.getDisorganizeArray([{ a: 1 }, { b: 1 }, { c: 1 }]));
console.log('随机一个长度为10的只有大小写的字母字符串', Randoms.getRandomStr(10, GetRandomStrEnum.LargeSmall))
console.log('全局唯一标识符(uuid)', Randoms.uuid());

```

#### Verify 验证模块
包含一些验证的方法.

以下是相关示例:
```js
// 像是 
// 就是还有可能不是  
// 效率
// 没有太多的逻辑判断
console.log('像是社会统一信用代码', Verify.likeUsci('92230900EUFUTJY536'));
console.log('是否是null或者""', Verify.isNullOrEmpty(''));
console.log('校验是否是11位手机号码', Verify.isPhoneNumber('13062627854'));
console.log('校验是否是固定电话', Verify.isTellPhoneNumber('0371-99882211'))
console.log('是否是邮箱', Verify.isEmail('linyisonger@qq.com'))
// 这个验证校验码是否正确
console.log('是否是统一社会信用代码', Verify.isUnifiedSocialCreditIdentifier('92230900EUFUTJY536'))
console.log('是否是车牌号', Verify.isVehicleNumber('青G04444'))
console.log('像身份证号', Verify.likeIDCardNumber('622924198810193427'));
console.log('是否是身份证号码', Verify.isCitizenIdentificationNumber('622924198810193427'));
console.log('密码规则校验', Verify.passwordRules('abc123', PasswordRuleEnum.SmallNumber, 6, 20));

```

#### Vertor2 二维向量
包含一些与平面坐标系的方法.

以下是相关示例:
```js
console.log('向量相加', v2(1, 1).plus(v2(2, 2)));
// Vertor2 { x: 3, y: 3 }
console.log('向量相减', v2(1, 1).subtract(v2(2, 2)));
// Vertor2 { x: -1, y: -1 }
console.log('向量相乘', v2(2, 3).multiply(v2(2, 2)));
// Vertor2 { x: 4, y: 6 }
console.log('向量相除', v2(2, 3).divide(v2(2, 2)));
// Vertor2 { x: 1, y: 1.5 }
console.log('叉乘', v2(2, 3).multiplicationCross(v2(2, 2)));
// -2
console.log('点乘', v2(2, 3).dotProduct(v2(2, 2)));
// 10
console.log('检测两线段是否交叉', Vector2.checkCross(v2(0, 1), v2(10, 1), v2(1, 0), v2(1, 10)))
// true
console.log('检测p点是否在点p1,p2,p3组成的三角形内', Vector2.checkInTriangle(v2(0, 1), v2(0, 0), v2(2, 0), v2(0, 2)));
// true
console.log('检测p点是否在点p1,p2,p3,p4组成的矩形内', Vector2.checkInRectangle(v2(0, 1), v2(0, 0), v2(1, 0), v2(1, 1), v2(0, 1)));
// true
console.log('p点绕o点旋转angle°', Vector2.rotateAroundPoint(v2(1, 0), v2(0, 0), 90));
// Vector2 { x: 0, y: -1 }
console.log('计算p1到p2两点之间的距离 保留3位小数', Vector2.distance(v2(0, 0), v2(1, 0)));
// 1 
console.log('计算两直线的夹角角度', Vector2.includedAngle(v2(1, 0), v2(1, 1)))
// 45

```

