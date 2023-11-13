
const express = require('express');

function asyncHandler(routeHandler) {
    return async (req,res,nxt)=>{
    try {
      await routeHandler(req,res,nxt) 
      
    } catch (error) {
      nxt(error);      
    }
  }
  
}

module.exports = asyncHandler;