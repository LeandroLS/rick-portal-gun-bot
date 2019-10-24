module.exports = {
    thisStatusExists(value){
        if(value == "unknown" || value == "alive" || value == "dead"){
            return true;
        } else {
            return false;
        }
    }
}