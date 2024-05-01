/**
 *  Filename: script.js
 *  Project: Phone Number Validator
 *  Live Demo: https://jeremy-gammill.github.io/phone-number-validator
 *
 *  Author: Jeremy Gammill | github.com/jeremy-gammill
 *  Date Created: April 26, 2024
 *  Last Modified: May 1, 2024
 *  License: MIT
 *
 *  Description:
 *    Developed for the freeCodeCamp JavaScript Algorithms and Data Structures certification.
 *
 *    Key Features:
 *    - Supports validation for a variety of common US phone number formats.
 *    - Displays an appropriate feedback message to the user when receiving invalid input.
 *    - Utilizes a custom regular expression (regex) for validation.
 */

"use strict";

const inputEl = document.getElementById("user-input");
const outputEl = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

checkBtn.addEventListener("click", validatePhoneNumber);
clearBtn.addEventListener("click", clearForm);
inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        validatePhoneNumber();
    }
});

function validatePhoneNumber() {
    const phoneNumber = inputEl.value;
    const phoneNumberRegex = /^\s*1?\s?(\d{3}|\(\d{3}\))(-?|\s?)\d{3}(-?|\s?)\d{4}\s*$/;
    const p = document.createElement("p");

    outputEl.innerHTML = "";
    outputEl.classList.remove('invalid-phone-number');

    if (!phoneNumber) {
        alert("Please provide a phone number.");
    } else {
        p.classList.add("phone-number");
        _validate(phoneNumber);
    }

    function _validate(phoneNumber) {
        const isValid = phoneNumberRegex.test(phoneNumber);
        p.innerHTML = (isValid ? "Valid US number: " : "Invalid US number: ") + phoneNumber;
        outputEl.appendChild(p);
        if (!isValid) {
            outputEl.classList.add('invalid-phone-number');
        }
    }

    updateOutputVisibility();
}

function updateOutputVisibility() {
    if (!outputEl.innerHTML && !outputEl.classList.contains('hidden')) {
        outputEl.classList.add('hidden');
    } else if (outputEl.innerHTML) {
        outputEl.classList.remove('hidden');
    }
}

function clearForm() {
    inputEl.value = "";
    outputEl.innerHTML = "";
    updateOutputVisibility();
}


/**
 * Potential Improvements:
 * 
 * - This application currently validates US telephone numbers.  However, it does not
 *   support telephone number formats from other countries.  The application could be
 *   improved to include support for additional countries.  For example, the United Kingdom,
 *   Australia, Germany, France, etc.
 * 
 * - To accomplish support for additional country formats, it may be possible to build out a
 *   single, robust regex to accomplish this.  However, it also may be more practical to include a
 *   dropdown in which the user would first select their country.  Then, specific regex patterns could
 *   be implemented for each supported country.
 * 
 * - Another idea for improvement would be to incorporate additional error messages and feedback
 *   based upon specific issues with invalid patterns.  Examples of expanded error messages:
 *   -- Incorrect number of digits (e.g. missing or extra digits)
 *   -- Invalid characters (e.g. all aside from numbers, parenthesis, space, and hyphen)
 *   -- Unmatched parenthesis
 *   -- Incorrect international dialing code / country prefix based on the user's selected country
 * 
 */