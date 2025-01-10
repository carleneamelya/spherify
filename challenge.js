// Function to generate random challenges based on user input
function generateChallenge() {
  const userName = document.getElementById("name").value;
  const userInterest = document.getElementById("interest").value;

  if (!userName || !userInterest) {
    alert("Please fill in all fields!");
    return;
  }

  // Show the loading spinner and hide the button
  document.getElementById("generate-btn").style.display = "none"; // Hide the button
  document.getElementById("loading-spinner").style.display = "inline-block"; // Show the spinner

  // Simulate a delay before generating the challenge (using setTimeout)
  setTimeout(function () {
    // Challenge and SDG data with multiple options per interest
    const challenges = {
      1: [
        {
          text: "Meal Prep with Local & Seasonal Ingredients.",
          sdgs: [
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 13 (Climate Action)",
          ],
        },
        {
          text: "Reduce Food Waste",
          sdgs: [
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 13 (Climate Action)",
          ],
        },
        {
          text: "Use Eco-Friendly Cookware",
          sdgs: ["SDG 12 (Responsible Consumption and Production)"],
        },
      ],
      2: [
        {
          text: "Start a Small Indoor Garden",
          sdgs: [
            "SDG 2 (Zero Hunger)",
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 13 (Climate Action)",
          ],
        },
        {
          text: "Compost Kitchen Scraps",
          sdgs: [
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 13 (Climate Action)",
          ],
        },
        {
          text: "Use Natural Fertilizers",
          sdgs: [
            "SDG 2 (Zero Hunger)",
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 13 (Climate Action)",
          ],
        },
      ],
      3: [
        {
          text: "Repurpose Items at Home",
          sdgs: [
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 13 (Climate Action)",
          ],
        },
        {
          text: "Make Homemade Cleaning Products",
          sdgs: ["SDG 12 (Responsible Consumption and Production)"],
        },
        {
          text: "Create Reusable Household Items",
          sdgs: ["SDG 12 (Responsible Consumption and Production)"],
        },
      ],
      4: [
        {
          text: "Buy Less, Choose Wisely",
          sdgs: [
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 13 (Climate Action)",
          ],
        },
        {
          text: "Support Sustainable Brands",
          sdgs: [
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 8 (Decent Work and Economic Growth)",
          ],
        },
        {
          text: "Upcycle and Repair Clothes",
          sdgs: ["SDG 12 (Responsible Consumption and Production)"],
        },
      ],
      5: [
        {
          text: "Reduce Single-Use Plastics",
          sdgs: [
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 14 (Life Below Water)",
            "SDG 15 (Life on Land)",
          ],
        },
        {
          text: "Start a Zero-Waste Bathroom Routine",
          sdgs: ["SDG 12 (Responsible Consumption and Production)"],
        },
        {
          text: "Compost Food Scraps",
          sdgs: [
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 13 (Climate Action)",
          ],
        },
      ],
      6: [
        {
          text: "Volunteer for Local Clean-Up Events",
          sdgs: [
            "SDG 11 (Sustainable Cities and Communities)",
            "SDG 12 (Responsible Consumption and Production)",
            "SDG 14 (Life Below Water)",
            "SDG 15 (Life on Land)",
          ],
        },
        {
          text: "Join Local Environmental Organizations",
          sdgs: [
            "SDG 13 (Climate Action)",
            "SDG 17 (Partnerships for the Goals)",
          ],
        },
        {
          text: "Help Plant Trees or Create Urban Gardens",
          sdgs: [
            "SDG 11 (Sustainable Cities and Communities)",
            "SDG 13 (Climate Action)",
            "SDG 15 (Life on Land)",
          ],
        },
      ],
    };

    // Select random challenge from the selected interest
    const randomChallenge =
      challenges[userInterest][
        Math.floor(Math.random() * challenges[userInterest].length)
      ];

    // Populate the result in the modal
    document.getElementById("user-name").textContent = userName;
    document.getElementById("challenge-text").textContent =
      randomChallenge.text;
    document.getElementById("sdgs").textContent =
      randomChallenge.sdgs.join(", ");

    // Hide the loading spinner and show the modal
    document.getElementById("loading-spinner").style.display = "none"; // Hide spinner
    document.getElementById("modal-overlay").style.display = "block"; // Show modal overlay
    document.getElementById("modal").style.display = "block"; // Show modal
  }, 2000); // Simulate a 2-second delay before showing the challenge
}

// Close the modal and reset the form
function closeModal() {
  // Hide modal
  document.getElementById("modal-overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";

  // Reset form
  document.getElementById("challenge-form").reset();

  // Show the "Generate Challenge" button again
  document.getElementById("generate-btn").style.display = "inline-block";

  // Hide the loading spinner
  document.getElementById("loading-spinner").style.display = "none";
}
