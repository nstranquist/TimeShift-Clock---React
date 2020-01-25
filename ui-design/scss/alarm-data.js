const alarmData = [
    {
        'name': 'Alarm 1',
        'time': '6:00pm',
        //'schedule': [ //array of days active ]
        'active': 'true',
        'timeshift': 1,  //can choose between 1-5 for presets
    },
    {
        'name': 'Alarm 2',
        'time': '8:00am',
        'active': 'true',
        'timeshift': 2,
    },
    {
        'name': 'Lunch Meeting',
        'time': '2:00pm',
        'active': 'false',
        'timeshift': 0, // 0 is "off", maybe can change to null
    },
    {
        'name': 'Date Night',
        'time': '10:00pm',
        'active': 'false',
        'timeshift': 4,
    },
]

module.exports = alarmData;