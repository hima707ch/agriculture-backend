import reader from "xlsx";
import {getJsDateFromExcel} from "excel-date-to-js";
import PriceData from "./model.js";

const file = reader.readFile("./PriceData.xlsx");

const sheet = file.SheetNames;

const saveDataToDB  = async ()=>{
    const excelData = reader.utils.sheet_to_json(file.Sheets[sheet[0]]);

    let i= 0;
    for(const ele of excelData){
        
        const result = await PriceData.findOne({commodity : ele.Commodity})

        const trend = {
            date : getJsDateFromExcel(ele.Date),
            price : ele["Price (per kg)"].toString()
        }

        const qualities = {
            quality : ele.Quality.toString(),
            location : ele.Location.toString(),
            trend : [trend]
        }

        if(!result){
            
            const res = await PriceData.create({
                commodity : ele.Commodity.toString(),
                qualities : [qualities]
            })

        }
        if(result){

            let isQualityExist = false;

            result.qualities.forEach( obj =>{
                if(obj.quality.toString() === ele.Quality.toString()){
                     isQualityExist = true;
                     obj.trend.push(trend);
                    }
            } )

            if(!isQualityExist){
                result.qualities.push(qualities);
            }

            const r = await result.save();
            

        }
        console.log(i);
        i++;
    } 

}

export default saveDataToDB;
