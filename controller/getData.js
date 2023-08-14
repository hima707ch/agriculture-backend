import express from "express";
import PriceData from "../model.js";

const getCommodities = async (req,res)=>{
    try{
        const data = await PriceData.find().select("commodity");
        
        res.status(200).json({
            commodities : data
        })
    }
    catch(err){
        console.log(err)
    }
}

const getQuality = async (req,res)=>{
    try{
        const data = await PriceData.findOne({commodity : req.params.name});
        res.status(200).json({
            result : data
        })
    }
    catch(err){
        console.log(err)
    }
}

const getHomeData = async (req,res)=>{
    const data = await PriceData.find({})
}

export {getCommodities, getQuality}