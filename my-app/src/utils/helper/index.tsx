interface data {
    id : number
    hex : string;
    rgb : Array < c >;
    hsl : Array < d >;
    r : number;
    g : number;
    b : number;
}

interface c {
    r : number;
    g : number;
    b : number;
}

interface d {
    h : number;
    s : number;
    l : number;
}

interface d {
    h : number;
    s : number;
    l : number;
}
interface f {
    [r : string] : boolean,
    g : boolean,
    b : boolean,
    s : boolean
}

type tplotOptions = {
    [key : string]: boolean
}

const plotOptions : tplotOptions = {
    r: true,
    g: true,
    b: true,
    s: true
}

const baseColors = [
    {
        "id": 0,
        "hex": "#1ABC9C",
        "rgb": {
            r: 26,
            g: 188,
            b: 156
        },
        "hsl": {
            h: 168,
            s: 75,
            l: 41
        }
    }, {
        "id": 1,
        "hex": "#2ECC71",
        "rgb": {
            r: 46,
            g: 204,
            b: 113
        },
        "hsl": {
            h: 145,
            s: 63,
            l: 49
        }
    }, {
        "id": 2,
        "hex": "#3498DB",
        "rgb": {
            r: 52,
            g: 152,
            b: 219
        },
        "hsl": {
            h: 204,
            s: 69,
            l: 53
        }
    }, {
        "id": 3,
        "hex": "#9B59B6",
        "rgb": {
            r: 155,
            g: 89,
            b: 182
        },
        "hsl": {
            h: 282,
            s: 38,
            l: 53
        }
    }, {
        "id": 4,
        "hex": "#34495E",
        "rgb": {
            r: 52,
            g: 73,
            b: 94
        },
        "hsl": {
            h: 210,
            s: 28,
            l: 28
        }
    }, {
        "id": 5,
        "hex": "#16A085",
        "rgb": {
            r: 22,
            g: 160,
            b: 133
        },
        "hsl": {
            h: 168,
            s: 75,
            l: 35
        }
    }, {
        "id": 6,
        "hex": "#27AE60",
        "rgb": {
            r: 39,
            g: 174,
            b: 96
        },
        "hsl": {
            h: 145,
            s: 63,
            l: 41
        }
    }, {
        "id": 7,
        "hex": "#2980B9",
        "rgb": {
            r: 41,
            g: 128,
            b: 185
        },
        "hsl": {
            h: 203,
            s: 63,
            l: 44
        }
    }, {
        "id": 8,
        "hex": "#8E44AD",
        "rgb": {
            r: 142,
            g: 68,
            b: 173
        },
        "hsl": {
            h: 282,
            s: 43,
            l: 47
        }
    }, {
        "id": 9,
        "hex": "#2C3E50",
        "rgb": {
            r: 44,
            g: 62,
            b: 80
        },
        "hsl": {
            h: 210,
            s: 29,
            l: 24
        }
    }, {
        "id": 10,
        "hex": "#F1C40F",
        "rgb": {
            r: 241,
            g: 196,
            b: 15
        },
        "hsl": {
            h: 48,
            s: 88,
            l: 50
        }
    }, {
        "id": 11,
        "hex": "#E67E22",
        "rgb": {
            r: 230,
            g: 126,
            b: 34
        },
        "hsl": {
            h: 28,
            s: 79,
            l: 51
        }
    }, {
        "id": 12,
        "hex": "#E74C3C",
        "rgb": {
            r: 231,
            g: 76,
            b: 60
        },
        "hsl": {
            h: 5,
            s: 78,
            l: 57
        }
    }, {
        "id": 13,
        "hex": "#ECF0F1",
        "rgb": {
            r: 236,
            g: 240,
            b: 241
        },
        "hsl": {
            h: 192,
            s: 15,
            l: 93
        }
    }, {
        "id": 14,
        "hex": "#95A5A6",
        "rgb": {
            r: 149,
            g: 165,
            b: 166
        },
        "hsl": {
            h: 183,
            s: 8,
            l: 61
        }
    }, {
        "id": 15,
        "hex": "#F39C12",
        "rgb": {
            r: 243,
            g: 156,
            b: 18
        },
        "hsl": {
            h: 36,
            s: 90,
            l: 51
        }
    }, {
        "id": 16,
        "hex": "#D35400",
        "rgb": {
            r: 211,
            g: 84,
            b: 0
        },
        "hsl": {
            h: 23,
            s: 100,
            l: 41
        }
    }, {
        "id": 17,
        "hex": "#C0392B",
        "rgb": {
            r: 192,
            g: 57,
            b: 43
        },
        "hsl": {
            h: 5,
            s: 63,
            l: 46
        }
    }, {
        "id": 18,
        "hex": "#BDC3C7",
        "rgb": {
            r: 189,
            g: 195,
            b: 199
        },
        "hsl": {
            h: 204,
            s: 8,
            l: 76
        }
    }, {
        "id": 19,
        "hex": "#7F8C8D",
        "rgb": {
            r: 127,
            g: 140,
            b: 141
        },
        "hsl": {
            h: 184,
            s: 5,
            l: 52
        }
    }, {
        "hex": "#C9FFEB",
        "hsl": {
            h: 157,
            s: 100,
            l: 89
        },
        "id": 1634270657467,
        "rgb": {
            r: 201,
            g: 255,
            b: 235
        }
    }, {
        "hex": "#E1C9FF",
        "hsl": {
            h: 266,
            s: 100,
            l: 89
        },
        "id": 1634270689508,
        "rgb": {
            r: 225,
            g: 201,
            b: 255
        }
    }
]

export const getLocalStorage = (key : string, mode : number) => {
    const value = localStorage.getItem(key);
    let output = null;
    if (mode === 1) {

        const defaultColor = baseColors;

        if (value && JSON.parse(value)) {
            output = JSON.parse(value);
        } else {
            output = defaultColor;
            saveToLocalStorage(key, defaultColor);
        }
    } else if (mode === 2) {

        const defaultValue = baseColors;

        if (value && JSON.parse(value)) {
            output = JSON.parse(value);
        } else {
            output = defaultValue;
            saveToLocalStorage(key, defaultValue);
        }
    } else {
        const defaultFilter = {
            r: false,
            g: false,
            b: false,
            s: false
        };
        if (value && JSON.parse(value)) {
            output = JSON.parse(value);
        } else {
            output = defaultFilter;
            saveToLocalStorage(key, defaultFilter);
        }
    }
    return output;
};

export const getFilterFormLocalStorage = (key : string) => {};

export const saveToLocalStorage = (key : string, data : any) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const hexToRgb = (color : string) => {
    const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return hex
        ? {
            r: parseInt(hex[1], 16),
            g: parseInt(hex[2], 16),
            b: parseInt(hex[3], 16)
        }
        : null;
};

export const rgbToHex = (r : number, g : number, b : number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1);
};

export const rgbToHsl = (r : number, g : number, b : number) => {
    // (r /= 255), (g /= 255), (b /= 255);
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    // let h,s,l = (max + min) / 2;
    let h : number = (max + min) / 2;
    let s : number = (max + min) / 2;
    let l : number = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5
            ? d / (2 - max - min)
            : d / (max + min);

        switch (max) {
            case r:
                h = (g - b) / d + (g < b
                    ? 6
                    : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h /= 6;
    }

    return {
        h: Math.floor(h * 360),
        s: Math.floor(s * 100),
        l: Math.floor(l * 100)
    };
};

// filter color hex, filter r,g,b,s
export const filterColor = (colors : Array < data >, filters : Array < f >, type : string) => {

    // let val : String = "";
    let res : Array < data > = [];
    let keys : Array < String > = [];

    // loop filter key
    for (var k in filters) {
        if (filters.hasOwnProperty(k)) {
            //  console.log("Key is " + k + ", value is " + filters[k]);
            if (filters[k]) {
                // val = k;
                keys.push(k);

            }
        }
    }

    // loop colors
    colors.forEach((a : data, index : number) => {
        const hex = hexToRgb(a.hex);
        const r = hex
            ?.r || 0;
        const g = hex
            ?.g || 0;
        const b = hex
            ?.b || 0;
        const hsl = rgbToHsl(hex
            ?.r || 0, hex
            ?.g || 0, hex
            ?.b || 0);
        const s = hsl
            ?.s

        switch (type) {
            case "r":
                if (r > 127) {
                    res.push(a);

                }

                break;
            case "g":
                if (g > 127) {
                    res.push(a);

                }

                break;
            case "b":
                if (b > 127) {
                    res.push(a);

                }

                break;
            case "s":
                if (s > 50) {
                    res.push(a);

                }

                break;

            default:
                break;
        }

        // if ((keys.includes("r") && r > 127 && hex !== null) || (keys.includes("g") &&
        // g > 127 && hex !== null) || (keys.includes("b") && b > 127 && hex !== null)
        // || (keys.includes("s") && s > 50 && hex !== null)) {     res.push(a); }

    });

    if (keys.length === 0) {
        res = colors;

    }

    return res;
};

// sort order red > green > blue sortByColor(['rgb', 'r'],o,true);
export const sortByColor = (keys : any, arr : Array < data >, isReverse : boolean = false) => {
    return arr.sort((a, b, v = (c : any) => keys.reduce((o : any, k : any) => o[k] || '', c)) => (isReverse
        ? -1
        : 1) * sortByDataString(v(a), v(b)));

}

// chain sort filter false
export const isAnyTrue = (plotOptions : tplotOptions) => Object
    .keys(plotOptions)
    .every((k) => !plotOptions[k]);

// helpert sort
const isNumber = (n : any) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// String sorting function
const sortByDataString = (a : any, b : any) => {
    if (a === null) {
        return 1;
    }
    if (b === null) {
        return -1;
    }
    if (isNumber(a) && isNumber(b)) {
        if (parseInt(a, 10) === parseInt(b, 10)) {
            return 0;
        }
        return parseInt(a, 10) > parseInt(b, 10)
            ? 1
            : -1;
    }
    if (isNumber(a)) {
        return -1;
    }
    if (isNumber(b)) {
        return 1;
    }
    if (a === b) {
        return 0;
    }
    return a > b
        ? 1
        : -1;
}

// sort
export const sortRgb = (o : any) => {

    let arr = Object
        .keys(o)
        .map(function (k) {
            return {
                ...o[k],
                r: o[k].rgb.r,
                g: o[k].rgb.g,
                b: o[k].rgb.b
            }
        });

    /* console.log(array); */
    arr.sort(function (a,b) {
        return  a.r - b.r || a.g - b.g || a.b - b.b;
    }).reverse();

    return arr;

}
