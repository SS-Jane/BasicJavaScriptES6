function timeConversion(s) {
    const match = s.match(/^(\d{2}):(\d{2}):(\d{2})(AM|PM)$/i);
    
    // console.log(match)
    if (!match) {
        return 'Format is wrong!!'
    }

    const [, hours, minutes, seconds, period] = match; 
    
    let intHours = parseInt(hours, 10);

    // console.log('period:', period)

    if (period === 'PM') {
        intHours = (intHours === 12) ? 12 : intHours + 12;
    } else {
        intHours = (intHours === 12) ? 0 : intHours;
    }
    
    const formattedHours = intHours.toString().padStart(2, '0');


    return `${formattedHours}:${minutes}:${seconds}`;

}

const s = "07:05:45PM";
const result = timeConversion(s);
console.log(result); // Output: 19:05:45