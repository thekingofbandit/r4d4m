import React, {useState, useEffect} from "react";
import "./styles/global.scss";
import {Box} from "./components";
import {getLocalStorage, hexToRgb, rgbToHsl, saveToLocalStorage, filterColor} from "./utils";

const App = () => {

    interface data {
        id : number;
        hex : string;
        rgb : Array < c >;
        hsl : Array < d >;
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

    const [prevColors,
        setPrevColors] = useState(getLocalStorage("prevColors", 2));
    const [colors,
        setColors] = useState(getLocalStorage("data", 1));
    const [value,
        setValue] = useState("");
    const [filter,
        setFilter] = useState(getLocalStorage("filter", 3));

    // const tmp = () => {}; listen localstorage
    useEffect(() => {

        // console.log(filter)

        window.addEventListener('storage', () => {
            // console.log('colors') When local storage changes, dump the list to the
            // console.  setCart(JSON.parse(localStorage.getItem('myCart')) || [])
        });

    }, [filter])

    const filterRed = (e : React.FormEvent < HTMLElement >) => {
        const data = {
            ...filter,
            r: !filter.r
        };
        setFilter(data);
        saveToLocalStorage("filter", data);

        // set filtered colors
        const res = filterColor(prevColors, data)
        setColors(res);

        // saveToLocalStorage("data", obj);
        saveToLocalStorage("data", res);

    };

    const filterGreen = (e : React.FormEvent < HTMLElement >) => {
        const data = {
            ...filter,
            g: !filter.g
        };
        setFilter(data);
        saveToLocalStorage("filter", data);
        const res = filterColor(prevColors, data)
        setColors(res);
        saveToLocalStorage("data", res);
    };

    const filterBlue = (e : React.FormEvent < HTMLElement >) => {
        const data = {
            ...filter,
            b: !filter.b
        };
        setFilter(data);
        saveToLocalStorage("filter", data);
        const res = filterColor(prevColors, data)
        setColors(res);
        saveToLocalStorage("data", res);

    };

    const filterSaturation = (e : React.FormEvent < HTMLElement >) => {
        const data = {
            ...filter,
            s: !filter.s
        };
        setFilter(data);
        saveToLocalStorage("filter", data);
        const res = filterColor(prevColors, data)
        setColors(res);
        saveToLocalStorage("data", res);

    };

    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        if (value.length !== 7) 
            return alert("Length must 7");
        if (value.substring(0, 1) !== "#") 
            return alert("First character must #");
        const check = colors.filter((color : data) => color.hex === value.toUpperCase());
        if (check.length > 0) 
            return alert("Color already exist");
        
        const hex = hexToRgb(value);
        const hsl = rgbToHsl(hex
            ?.r || 0, hex
            ?.g || 0, hex
            ?.b || 0);

        let draftState = {
            id: Date.now(),
            hex: value.toUpperCase(),
            rgb: hex,
            hsl: hsl
        }
        const newColors = [
            ...prevColors,
            draftState
        ];
        saveToLocalStorage("data", newColors);
        saveToLocalStorage("prevColors", newColors);
        setColors(newColors);
        setPrevColors(newColors);
        setValue("");
    };

    const toDelete = (item : number) => {
        const newColors = prevColors.filter((color : data, index : number) => color.id !== item);
        saveToLocalStorage("data", newColors);
        saveToLocalStorage("prevColors", newColors);
        setColors(newColors);
        setPrevColors(newColors);

    };

    return (
        <div className='row between-xs'>

            <div className="app col-xs-12 col-sm-8 col-md-12 col-lg-4">
                <h1>Gallery of colored squares</h1>
                <form className="tw-input-box" onSubmit={(e) => onSubmit(e)}>
                    <label>Add new color:</label>
                    <input
                        type="text"
                        name="color"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Example #333333"
                        required></input>
                    <button type="submit">Add</button>
                </form>
                <hr className="solid"></hr>
                <div className="tw-filter">
                    <input type="checkbox" checked={filter.r} onChange={(e) => filterRed(e)}></input>
                    <label>{"Red >50%"}</label>
                    <input type="checkbox" checked={filter.g} onChange={(e) => filterGreen(e)}></input>
                    <label>{"Green >50%"}</label>
                    <input type="checkbox" checked={filter.b} onChange={(e) => filterBlue(e)}></input>
                    <label>{"Blue >50%"}</label>
                    <input type="checkbox" checked={filter.s} onChange={(e) => filterSaturation(e)}></input>
                    <label>{"Saturation >50%"}</label>
                </div>
                <hr className="solid"></hr>
                <div className="tw-container">
                    {colors.map((a : data, i : number) => (<Box
                        key={a.id}
                        color={a.hex}
                        rgb={a.rgb}
                        hsl={a.hsl}
                        index={a.id}
                        toDelete={toDelete}
                        showButton={a.id > 19}/>))}
                </div>
            </div>

        </div>

    );
};

export default App;
