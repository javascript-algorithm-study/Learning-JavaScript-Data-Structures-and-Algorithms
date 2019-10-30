function solution(arr1, arr2) {
    return arr1.map((innerArr, i) => {
        return innerArr.map((item, j) => {
            return item + arr2[i][j];
        });
    });
}


/**
 * 다른 사람 코드
 * @param arr1
 * @param arr2
 * @returns {Uint8Array | BigInt64Array | (Uint8Array | BigInt64Array | *[] | Float64Array | Int8Array | Float32Array | Int32Array | Uint32Array | Uint8ClampedArray | BigUint64Array | Int16Array | Uint16Array)[] | Float64Array | Int8Array | Float32Array | Int32Array | Uint32Array | Uint8ClampedArray | BigUint64Array | Int16Array | Uint16Array}
 */
function solution(arr1, arr2) {
    return arr1.map((innerArr, i) => innerArr.map((item, j) => item + arr2[i][j]));
}

// 같은 내용, 화살표 함수표현을 더 적극적으로 사용
