import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";
/**
 * Buat slice untuk generate action dan reducer
 * menerima param object: name, initialState, reducers
 */

const covidSlice = createSlice({
    name: "Covid Slice",
    initialState: {
        provinces: data.provinces,
    },
    reducers: {

            updateProvinsi(state, action){
                const {provinces} = state;
                const {provinsi, status, jumlah} = action.payload;
    
                const index = provinces.findIndex((item)=> item.kota === provinsi);
    
                provinces[index][status] = parseInt(provinces[index][status]) + parseInt(jumlah);
            }, 
        },
    },
});

// generate action dan reducers
const covidReducer = covidSlice.reducer;
const {updateProvinsi}= covidSlice.actions;

// export action dan reducer    
export default covidReducer;
export {updateProvinsi};
