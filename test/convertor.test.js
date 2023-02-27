import { Convertor } from "../index.js";

let description = function () {
    return ['#### Convertor 转换模块', '包含一些转换的方法.', '', '以下是相关示例:']
}

let run = function () {
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
    // 总金额 100,000.00
    console.log('数字转大写人民币', Convertor.numToAmountInWords(102030.00));
    // 壹拾万贰仟零叁拾圆整
    console.log('数字转中文', Convertor.numToChinese(102030));
    // 十万二千三十
    console.log('url query 转对象', Convertor.urlQueryToObject('http://example.com/user?id=1&age=2'));
    // { "age": "2", "id": "1" 
    console.log('url object 转 query', Convertor.urlObjectToQuery({ id: 1, age: 3 }));
    // '?id=1&age=3'
}
try {
    describe('转换模块', function () {
        it('社会统一信用代码转换组织机构代码', function () {
            expect(Convertor.usciToOibc('91411100766237140X')).toEqual('76623714-0')
            expect(Convertor.usciToOibc('91411100766237140')).toEqual('')
        })
        it('日期转换', function () {
            expect(Convertor.timeFormat(new Date(), 'yyyy年MM月dd日 hh:mm:ss').startsWith(new Date().getFullYear().toString())).toEqual(true)
            expect(Convertor.timeFormat(new Date(), 'yy年M月d日 h:m:s').startsWith(new Date().getFullYear().toString())).toEqual(false)
        })
        it('千分位处理', function () {
            expect(Convertor.thousands(10009992.12)).toEqual('10,009,992.12')
        })
        it('文本转base64', function () {
            expect(Convertor.textToBase64('1234')).toEqual('MTIzNA==')
            expect(Convertor.textToBase64('À')).toEqual('w4A=')
            expect(Convertor.textToBase64('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890你好呀+-*/&@!$#')).toEqual('QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejEyMzQ1Njc4OTDkvaDlpb3lkYArLSovJkAhJCM=')
            expect(Convertor.textToBase64('︻︼︽︾〒↑↓☉⊙●〇◎¤★☆■▓「」『』◆◇▲△▼▽◣◥◢◣◤ ◥№↑↓→←↘↙Ψ※㊣∑⌒∩【】〖〗＠ξζω□∮〓※》∏卐√ ╳々♀♂∞①ㄨ≡╬╭╮╰╯╱╲ ▂ ▂ ▃ ▄ ▅ ▆ ▇ █ ▂▃▅▆█')).toEqual('77i777i877i977i+44CS4oaR4oaT4piJ4oqZ4peP44CH4peOwqTimIXimIbilqDilpPjgIzjgI3jgI7jgI/il4bil4filrLilrPilrzilr3il6Pil6Xil6Lil6Pil6Qg4pel4oSW4oaR4oaT4oaS4oaQ4oaY4oaZzqjigLvjiqPiiJHijJLiiKnjgJDjgJHjgJbjgJfvvKDOvs62z4nilqHiiK7jgJPigLvjgIviiI/ljZDiiJog4pWz44CF4pmA4pmC4oie4pGg44So4omh4pWs4pWt4pWu4pWw4pWv4pWx4pWyIOKWgiDiloIg4paDIOKWhCDiloUg4paGIOKWhyDilogg4paC4paD4paF4paG4paI')
        })
        it('base64转文本', function () {
            expect(Convertor.base64ToText('MTIzNA==')).toEqual('1234')
            expect(Convertor.base64ToText('w4A=')).toEqual('À')

            expect(Convertor.base64ToText('QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejEyMzQ1Njc4OTDkvaDlpb3lkYArLSovJkAhJCM=')).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890你好呀+-*/&@!$#')
        })
        it('json对象转换base64', function () {
            expect(Convertor.jsonToBase64({ a: 1 })).toEqual('eyJhIjoxfQ==')
        })
        it('base64转换json对象', function () {
            expect(Convertor.base64ToJson('eyJhIjoxfQ==').a == 1).toEqual(true)
        })
        it('颜色转换', function () {
            expect(Convertor.hexToRgb('f2a')).toEqual('rgb(255,34,170)')
            expect(Convertor.hexToRgb('#f2a')).toEqual('rgb(255,34,170)')
            expect(Convertor.hexToRgb('#ff22aa')).toEqual('rgb(255,34,170)')
            expect(Convertor.hexToRgb('ff22aa')).toEqual('rgb(255,34,170)')
        })
        it('颜色转换', function () {
            expect(Convertor.rgbToHex('rgb(255,34,170)')).toEqual('#ff22aa')
        })
        it('xml输出文本', function () {
            expect(Convertor.xmlToText('<div>总金额 <span>100,000.00</span></div>')).toEqual('总金额 100,000.00')
        })
        it('数字转大写人民币', function () {
            expect(Convertor.numToAmountInWords(102030.00)).toEqual('壹拾万贰仟零叁拾圆整')
        })
        it('数字转中文', function () {
            expect(Convertor.numToChinese(102030)).toEqual('十万二千三十')
        })
        it('url query 转对象', function () {
            expect(Convertor.urlQueryToObject('http://example.com/user?id=1&age=2')).toEqual({ "age": "2", "id": "1" })
        })
        it('url object 转 query', function () {
            expect(Convertor.urlObjectToQuery({ id: 1, age: 3 })).toEqual('?id=1&age=3')
        })

    })
} catch (error) {
    // describe is not defined 无需理会 调用方式不一致 
}

export {
    run,
    description
}