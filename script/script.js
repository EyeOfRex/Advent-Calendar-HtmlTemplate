// Get today's date
const today = new Date().getDate();

// Select all calendar boxes
const days = document.querySelectorAll('.day');

// Define specific actions for each day
const actions = {
    1: () => alert("🎉 Happy Day 1!"),
    2: () => alert("🎉 Happy Day 2!"),
    3: () => alert("🎉 Happy Day 3!"),
    4: () => alert("🎉 Happy Day 4!"),
    5: () => alert("🎉 Happy Day 5!"),
    6: () => alert("🎉 Happy Day 6!"),
    7: () => alert("🎉 Happy Day 7!"),
    8: () => alert("🎉 Happy Day 8!"),
    9: () => alert("🎉 Happy Day 9!"),
    10: () => alert("🎉 Happy Day 10!"),
    11: () => alert("🎉 Happy Day 11!"),
    12: () => alert("🎉 Happy Day 12!"),
    13: () => alert("🎉 Happy Day 13!"),
    14: () => alert("🎉 Happy Day 14!"),
    15: () => alert("🎉 Happy Day 15!"),
    16: () => alert("🎉 Happy Day 16!"),
    17: () => alert("🎉 Happy Day 17!"),
    18: () => alert("🎉 Happy Day 18!"),
    19: () => alert("🎉 Happy Day 19!"),
    20: () => alert("🎉 Happy Day 20!"),
    21: () => alert("🎉 Happy Day 21!"),
    22: () => alert("🎉 Happy Day 22!"),
    23: () => alert("🎉 Happy Day 23!"),
    24: () => alert("🎉 Merry Christmas!")
};

// Block or unblock boxes based on the date
days.forEach(day => {
    // Get the day number from the data attribute
    const dayNumber = parseInt(day.dataset.day, 10);

    // Skip the box if it doesn't have a valid day number
    if (isNaN(dayNumber)) return;

    // Lock the box if it's for a future date
    if (dayNumber > today) {
        day.classList.add('locked');
    }

    // Add a click event listener to the box
    day.addEventListener('click', () => {
        // Check if the box is locked or already opened
        if (day.classList.contains('locked')) {
            alert("You cannot open this box yet! ⏳");
            return;
        }
        if (day.classList.contains('open')) {
            alert(`The box for day ${dayNumber} is already opened.`);
            return;
        }

        // Mark the box as opened
        day.classList.add('open');

        // Execute the action for this specific day
        if (actions[dayNumber]) {
            actions[dayNumber]();
        } else {
            alert(`No action defined for box ${dayNumber}.`);
        }
    });
});


