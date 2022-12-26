function showType(obj) {
    if (typeof (obj) == "number") {
        console.log("Is a number");
    }
    if (typeof (obj) == "string") {
        console.log("Is a string");
    }
}
showType("teste");
