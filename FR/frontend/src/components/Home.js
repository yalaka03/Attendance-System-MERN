import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useEffect, useState } from "react";
import { Country, State, City } from 'country-state-city';
import { TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
// const Home = () => {
//     const navigate = useNavigate();
//     const logout = useLogout();

//     const signOut = async () => {
//         await logout();
//         navigate('/linkpage');
//     }

//     return (
//         <section>
//             <h1>Home</h1>
//             <br />
//             <p>You are logged in!</p>
//             <br />
//             <Link to="/editor">Go to the Editor page</Link>
//             <br />
//             <Link to="/admin">Go to the Admin page</Link>
//             <br />
//             <Link to="/lounge">Go to the Lounge</Link>
//             <br />
//             <Link to="/linkpage">Go to the link page</Link>
//             <div className="flexGrow">
//                 <button onClick={signOut}>Sign Out</button>
//             </div>
//         </section>
//     )
// }
const Home = () => {
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [countrylist, setCountrylist] = useState([])
    const [statelist, setStatelist] = useState([])
    const [citylist, setCitylist] = useState([])
    const handleChangecountry = (event) => {
        setCountry(event.target.value);
    };
    const handleChangestate = (event) => {
        setState(event.target.value);
    };
    const handleChangecity = (event) => {
        setCity(event.target.value);
    };

    useEffect(() => {
        setCountrylist(Country.getAllCountries().map((element) => { return { value: element.isoCode, label: element.name }; }))
    }, [])
    useEffect(() => {
        setStatelist(State.getStatesOfCountry(country).map((element) => { return { value: element.isoCode, label: element.name }; }))
    }, [country])
    useEffect(() => {
        setCitylist(City.getCitiesOfState(country,state).map((element) => { return { value: element.name, label: element.name }; }))
    }, [country,state])


    return (
        <div>
        <div>
            <TextField
                id="country"
                select
                required
                label="Country"
                value={country}
                onChange={handleChangecountry}
                SelectProps={{native: true}}
                helperText="Please select your Country"
                InputLabelProps={{ shrink: true }}
            >
                <option key="0" value="0">Select</option>
                {countrylist.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
            </div>
            <div>
            <TextField
                id="state"
                select
                required
                label="State"
                value={state}
                onChange={handleChangestate}
                SelectProps={{native: true}}
                helperText="Please select your State"
                InputLabelProps={{ shrink: true }}
                disabled = {statelist.length ? false : true}
            >
                <option key="0" value="0">Select</option>
                {statelist.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
            </div>
            <div>
            <TextField
                id="city"
                select
                required
                label="City"
                value={city}
                onChange={handleChangecity}
                SelectProps={{native: true}}
                helperText="Please select your City"
                InputLabelProps={{ shrink: true }}
                disabled = {citylist.length ? false : true}
            >
                <option key="0" value="0">Select</option>
                {citylist.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
            </div>
        </div>
    );
}

export default Home
 //     <div>
    //     <CountryDropdown
    //       value={country}
    //       onChange={(val) => setCountry(val)} />
    //     <RegionDropdown
    //       country={country}
    //       value={state}
    //       onChange={(val) => this.setState(val)} />
    //   </div>

