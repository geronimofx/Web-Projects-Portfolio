function displayTime() {

    const date = new Date()
    console.log(date)

    let hours = ("0" + date.getHours()).slice(-2);
    let minutes = ("0" + date.getMinutes()).slice(-2);
    let seconds = ("0" + date.getSeconds()).slice(-2);

    // Array to set the day of the week to apear in the screen
    let weekDay = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"
    ]
    let dayOfWeek = weekDay[date.getDay()]

    // Array to set the day of the week to apear in the screen
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    let month = months[date.getMonth()]
    
    let actualYear = date.getFullYear()

    // 
    var turno
    if (hours < 12 && hours >= 0) {
        var turno = 'AM'
    } else {
        var turno = 'PM'
    }

    document.getElementById('day').innerHTML = dayOfWeek
    document.getElementById('hour').innerHTML = hours
    document.getElementById('minute').innerHTML = minutes
    document.getElementById('second').innerHTML = seconds
    document.getElementById('season').innerHTML = month + '/' + actualYear
    document.getElementById('schedule').innerHTML = turno

}

setInterval(displayTime, 1000)

displayTime()
