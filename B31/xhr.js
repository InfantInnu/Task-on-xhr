// const getCountries = () => {
//     console.log("getting countries");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET" , "https://restcountries.com/v3.1/all");
//     xhr.send();
//     xhr.responseType = "json";
//     xhr.onload = () => {
//         const countries = xhr.response;
//         console.log("Full data" , countries);
//     };
// };
// getCountries();

//  print only name of the country

const getCountries = () => {
    console.log("getting countries");
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const countries = xhr.response;
        const countryNames = countries.map((country) => country.name.common);
        const countrylanguages = countries.filter((country) => country.spanish); 
        const population = countries.filter((country) => country.population >= 10000000);
        console.log("Full data" , countries , countryNames , countrylanguages , population);
    };
};
getCountries();

