import React from "react";
import { Card, Image } from "react-bootstrap";

// Create a function to generate the pet adoption form HTML
function generateAdoptionForm() {
  const AdoptionForm = `
    <h2>Pet Adoption Application</h2>
    <p>Please follow these instructions:</p>
    <ol>
      <li>Print this page.</li>
      <li>Complete the questionnaire.</li>
      <li>Take a picture or scan the completed form.</li>
      <li>Email the completed form and  picture/scan to <a href="mailto:Admin@pawfinder.com">admin@pawfinder.com</a>.</li>
    </ol>
    <form>
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required><br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br>

      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" required><br>

      <label for="petPreference">Preferred Pet:</label>
      <select id="petPreference" name="petPreference" required>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select><br>

      <label for="experience">Pet Ownership Experience:</label><br>
      <input type="radio" id="experience-beginner" name="experience" value="beginner">
      <label for="experience-beginner">Beginner</label><br>

      <input type="radio" id="experience-intermediate" name="experience" value="intermediate">
      <label for="experience-intermediate">Intermediate</label><br>

      <input type="radio" id="experience-advanced" name="experience" value="advanced">
      <label for="experience-advanced">Advanced</label><br>

      <label for="message">Why do you want to adopt a pet?</label><br>
      <textarea id="message" name="message" rows="4" required></textarea><br>

      <input type="submit" value="Submit Application">
    </form>
  `;

  return AdoptionForm;
}


// Function to display the pet adoption form on the web page
function displayAdoptionForm() {
  const AdoptionFormContainer = document.getElementById("AdoptionFormContainer");
  AdoptionFormContainer.innerHTML = generateAdoptionForm();
}

// Call the displayAdoptionForm function to display the form
displayAdoptionForm();

export default AdoptionForm