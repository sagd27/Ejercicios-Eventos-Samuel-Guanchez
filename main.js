// Ejercici 1: calculo de masa corporal
// document.addEventListener('DOMContentLoaded', function() {
    
//     const calculateBtn = document.getElementById('calculateBtn');
    
//     calculateBtn.addEventListener('click', function() {
   
//         const peso = document.getElementById('peso').value;
//         const altura = document.getElementById('altura').value;

       
//         if (peso > 0 && altura > 0) {
        
//             const alturaEnMetros = altura / 100;


//             const bmi = peso / (alturaEnMetros * alturaEnMetros);

//             const roundedBmi = bmi.toFixed(2);

      
//             document.getElementById('bmiResult').value = roundedBmi;
//         } else {
           
//             alert('Por favor, ingrese valores válidos para el peso y la altura.');
//         }
//     });
// });

// Ejercicio 2: conversion de divisas

document.addEventListener('DOMContentLoaded', function() {
    
        const usdInput = document.getElementById('usd');
        const mxnInput = document.getElementById('mxn');
        
        const exchangeRate = 140; // 1 USD = 140 MXN
    
      
        function convertUsdToMxn() {
            const usdValue = parseFloat(usdInput.value);
            const mxnValue = (usdValue * exchangeRate).toFixed(2);
            mxnInput.value = mxnValue;
        }
    
        function convertMxnToUsd() {
            const mxnValue = parseFloat(mxnInput.value);
            const usdValue = (mxnValue / exchangeRate).toFixed(2);
            usdInput.value = usdValue;
        }
    
        usdInput.addEventListener('input', convertUsdToMxn);
        mxnInput.addEventListener('input', convertMxnToUsd);
    
    
        convertUsdToMxn();
});                                                                                                                                                                                                                             