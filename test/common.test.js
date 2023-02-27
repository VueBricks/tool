import { cloneDeep, v2 } from "../index.js";
let description = function () {
    return ['#### Common 常用模块', '包含一些常用的方法.', '', '以下是相关示例:']
}

let run = function () {
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
    let p1 = v2(1, 2)
    let p2 = cloneDeep(p1);
    p1.x = 2;
    console.log(p1, p2, p2.plus(p1));
}
try {
    describe('深克隆', function () {
        let p1 = v2(1, 2)
        let p2 = cloneDeep(p1);
        it('引用类型', function () {
            expect(p1 == p2).toEqual(false)
        })
        it('值类型', function () {
            expect(p1.x == p2.x).toEqual(true)
        })
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
            arrayBuffer: new ArrayBuffer(10),
            int8Array: new Int8Array([12, 23, 33]),
            uint8Array: new Uint8Array([12, 23, 33]),
            uint8ClampedArray: new Uint8ClampedArray([12, 23, 33]),
            int16Array: new Int16Array([22, 33, 13]),
            uint16Array: new Uint16Array([22, 33, 13]),
            int32Array: new Int32Array([22, 22, 13]),
            uint32Array: new Uint32Array([22, 22, 13]),
            float32Array: new Float32Array([1.1, 2.3]),
            float64Array: new Float64Array([1.1, 2.3]),

        }
        let b = cloneDeep(a);

        it('复杂类型', function () {
            expect(a == b).toEqual(false)
        })
    })
} catch (error) {
    // describe is not defined 无需理会 调用方式不一致 
}

export {
    run,
    description
}