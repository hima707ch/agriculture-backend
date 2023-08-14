import mongoose, { mongo } from "mongoose";

/*mongoose.connect("mongodb://localhost:27017/Agriculture",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((data) => {
    console.log(`mongodb connected to ${data.connection.host}`)
})
*/

mongoose.connect("mongodb+srv://hima707ch:7073928944@himanshu.rdk9j5d.mongodb.net/Agriculture?retryWrites=true&w=majority",{useNewUrlParser : true});

const priceSchema = new mongoose.Schema({
    commodity : {
        type : String,
        required : true,
        unique : true,
    },
    qualities : [
        {
            quality : String,
            location : String,
            trend : [
                {
                    date : Date,
                    price : String
                }
            ]
        }
    ]
});

const PriceData = mongoose.model("PriceData", priceSchema);

export default PriceData;