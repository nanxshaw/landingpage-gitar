// function ================================================================================================== 
function getTimeOfDay() {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12)
        return "Pagi";
    else if (hour >= 12 && hour < 17)
        return "Siang";
    else if (hour >= 17 && hour < 20)
        return "Sore";
    else
        return "Malam";    
}

function getCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('id-ID', options);
}

// showing  ==================================================================================================
const timeOfDay = getTimeOfDay();
document.getElementById('waktu').innerText = `Selamat ${timeOfDay}!`;
document.getElementById('date').innerText = getCurrentDate();




