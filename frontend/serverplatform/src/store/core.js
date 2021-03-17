const users = [
    {
        id : 1,
        name : "Ndokong Randy",
        email : "ndokongrandy@yahoo.com",
        sex : "male",
        department : "IT",
        password : "health",
        passwordReset:false,
        phoneNumber : "665665665",
        address : "nsimeyong"
    },
    {
        id : 2,
        name : "Ndokong Basile Jnr",
        email : "ndokongbasilejnr@yahoo.com",
        sex : "male",
        department : "HR",
        password : "powerful",
        passwordReset: true,
        phoneNumber : "665665665",
        address : "nsimeyong"
    }
];

const flights = [
    {
        id  : 1,
        seatNumber : "10A",
        departureTime : "22/6/11998 09:am",
        arrivalTime : "24/6/11998 09:am",
        price : 582000,
        category : "Business",
        Booked : false,
        cname : "Ndokong Basile Jnr",
        dateCreated : "19/6/11998 09:am",
        cid : 2,
        cdept: "HR",
        planeName : "AIRMXY256",
        airport : "nsimalend",
        destination : "France"
    },
    {
        id  : 2,
        seatNumber : "256A",
        departureTime : "22/6/1998 09:am",
        arrivalTime : "24/6/1998 09:am",
        price : 582000,
        category : "Business",
        Booked : true,
        cname : "Ndokong Basile Jnr",
        dateCreated : "19/6/11998 09:am",
        cid : 2,
        cdept: "HR",
        planeName : "AIRMXY256",
        airport : "nsimalend",
        destination : "Libreville"
    },
    {
        id  : 3,
        seatNumber : "27A",
        departureTime : "22/6/2020 09:am",
        arrivalTime : "24/6/2020 09:am",
        price : 582000,
        category : "Economic",
        Booked : false,
        cname : "Ndokong Basile Jnr",
        dateCreated : "19/6/11998 09:am",
        cid : 2,
        cdept: "HR",
        planeName : "JYHD568JET",
        airport : "nsimalend",
        destination : "France"
    }
];

export {flights,users}