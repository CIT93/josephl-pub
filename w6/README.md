# Personal Decision Making App - Step 1: UI Setup, Basic Input Handling & Modular Output

## Description
The Garden Guide app is designed to help users make informed decisions about planting vegetables, herbs, or flowers in their garden. It collects user inputs about plant preferences, gardening experience, and planting season, then provides tailored recommendations to guide planting choices. 

This first step sets up the CSS for the look of the app, gets the input decisions and displays the decision through the console and on the page!


## My Decision Focus
This app is specifically designed to help me decide which plants to grow in my garden, depending on the type and season. It will be used to filter plants by specified input data. Eventually, I want to have plant information, difficulty level and fun facts. I want this information to be used as a guide for others to start their own garden!

## Decision Logic
My decision logic was to gray out plants from a list on click of season of year radios and output a message depending on season of year, plant type and plant from list.

### decidePlantListed Logic
- **Purpose**: Confirms the plant selected from the dropdown and returns its name.
- **How it works**:
  - When the selected plant is “Corn”, then “Corn” is returned.
  - When the selected plant is “Lavender”, then “Lavender” is returned.
  - When the selected plant is “Basil”, then “Basil” is returned.
  - (And so on for all 25 plants: Lettuce, Peas, Radishes, Tomatoes, Zucchini, Broccoli, Spinach, Kale, Garlic, Parsley, Cilantro, Chives, Sage, Thyme, Rosemary, Tulips, Daffodils, Sunflowers, Chrysanthemums, Asters, Pansies, Winter Jasmine.)
  - When the selected plant is not recognized, then “Invalid” is returned.

### decideIsFirstTimer Logic
- **Purpose**: Provides advice based on whether the user is a first-time gardener.
- **How it works**:
  - When the first-timer checkbox is checked, then “Welcome, new gardener! Start with easy plants like Basil.” is returned.
  - When the first-timer checkbox is not checked, then “Experienced gardener, try advanced crops like corn!” is returned.

### decideSeasonOfYear Logic
- **Purpose**: Confirms the selected season from radio buttons.
- **How it works**:
  - When the season is “Spring”, then “Spring” is returned.
  - When the season is “Summer”, then “Summer” is returned.
  - When the season is “Fall”, then “Fall” is returned.
  - When the season is “Winter”, then “Winter” is returned.
  - When the season is not recognized, then “Invalid” is returned.

### decidePlantType Logic
- **Purpose**: Determines the plant type (Vegetables, Herbs, or Flowers) based on the selected plant.
- **How it works**:
  - When the selected plant is Corn, Lettuce, Peas, Radishes, Tomatoes, Zucchini, Broccoli, Spinach, Kale, or Garlic, then “Vegetables” is returned.
  - When the selected plant is Basil, Parsley, Cilantro, Chives, Sage, Thyme, or Rosemary, then “Herbs” is returned.
  - When the selected plant is Tulips, Daffodils, Sunflowers, Chrysanthemums, Asters, Lavender, Pansies, or Winter Jasmine, then “Flowers” is returned.
  - When the plant is not recognized, then “Invalid” is returned.

### decidePlantTypeAndSeason Logic
- **Purpose**: Returns a list of plants available for a given plant type and season.
- **How it works**:
  - When the plant type is “Vegetables” and the season is “Spring”, then [“Lettuce”, “Peas”, “Radishes”] is returned.
  - When the plant type is “Herbs” and the season is “Summer”, then [“Basil”, “Cilantro”] is returned.
  - When the plant type is “Flowers” and the season is “Winter”, then [“Pansies”, “Winter Jasmine”] is returned.
  - (And so on for all combinations of plant types and seasons as defined in the `plantOptions` object.)
  - When the plant type or season is invalid, then an empty list `[]` is returned.
  
### toggleGroup Logic
- **Purpose**: Controls which plants appear in the dropdown menu based on the selected season.
- **How it works**:
  - When no season is selected or the season is invalid, then the dropdown is disabled, and all plant options are disabled.
  - When the season is Spring, then the dropdown is enabled, and options for Lettuce, Peas, Radishes, Parsley, Cilantro, Tulips, and Daffodils are enabled; all other options are disabled.
  - When the season is Summer, then the dropdown is enabled, and options for Corn, Tomatoes, Zucchini, Basil, Cilantro, Lavender, and Sunflowers are enabled; all other options are disabled.
  - When the season is Fall, then the dropdown is enabled, and options for Broccoli, Spinach, Chives, Sage, Chrysanthemums, and Asters are enabled; all other options are disabled.
  - When the season is Winter, then the dropdown is enabled, and options for Kale, Garlic, Thyme, Rosemary, Pansies, and Winter Jasmine are enabled; all other options are disabled.

### decideGardenData Logic
- **Purpose**: Combines all helper functions to provide a complete planting recommendation.
- **How it works**:
  - Takes inputs: `plantListed` (the selected plant), `isFirstTimer` (checkbox status), and `seasonOfYear` (selected season).
  - Calls `decidePlantListed` to confirm the plant name.
  - Calls `decideIsFirstTimer` to get advice based on experience.
  - Calls `decideSeasonOfYear` to confirm the season.
  - Calls `decidePlantType` to determine the plant type based on the selected plant.
  - Calls `decidePlantTypeAndSeason` to get the list of plants for the plant type and season.
  - Creates an array (`plantingInfoDisplay`) with the results of all helper functions.
  - **Special Conditions**:
    - If the user is a first-time gardener (`isFirstTimer` is true), the message emphasizes easy plants (e.g., “Start with easy plants like Basil”).
    - If the plant or season is invalid, the function returns “Invalid” for those outputs, and the `plantTypeAndSeason` list is empty.
  - **Default/Fallback**:
    - If any input is invalid (e.g., unrecognized plant or season), the output includes “Invalid” for that part, and the app may display a message like “Please select a valid plant and season.”
  - Returns an object with:
    - `plantingInfo`: An array of all results for display.
    - Individual outputs: `plantListedOutput`, `isFirstTimerOutput`, `seasonOfYearOutput`, `plantTypeOutput`, `plantTypeAndSeason`.

## Example Outputs

### Example 1: First-Time Gardener in Spring
- **Inputs**:
  - Season: Spring
  - Plant: Basil
  - First-Time Gardener: Checked (true)
- **Output**:
  - Planting Info: ["Basil", "Welcome, new gardener! Start with easy plants like Basil.", "Spring", "Herbs", ["Parsley", "Cilantro"]]
  - Message: You selected Basil, an Herb, for Spring. Welcome, new gardener! Start with easy plants like Basil. Other Herbs for Spring: Parsley, Cilantro.

### Example 2: Experienced Gardener in Summer
- **Inputs**:
  - Season: Summer
  - Plant: Corn
  - First-Time Gardener: Unchecked (false)
- **Output**:
  - Planting Info: ["Corn", "Experienced gardener, try advanced crops like corn!", "Summer", "Vegetables", ["Corn", "Tomatoes", "Zucchini"]]
  - Message: You selected Corn, a Vegetable, for Summer. Experienced gardener, try advanced crops like corn! Other Vegetables for Summer: Corn, Tomatoes, Zucchini.

### Example 3: Invalid Plant Selection
- **Inputs**:
  - Season: Fall
  - Plant: Kale
  - First-Time Gardener: Unchecked (false)
- **Output**:
  - Message: You selected Kale, a Vegetable, for Winter. Experienced gardener, try advanced crops like corn! Other Vegetables for Winter: Kale, Garlic.

## Input Types Used
# Radio buttons for `plantType`:
Allows selection of plant category (Vegetables, Herbs, Flowers). This categorizes the user’s preference to narrow down plant options.
# Radio buttons for `seasonOfYear`:
Specifies the planting season (Spring, Summer, Fall, Winter). This ensures recommendations align with seasonal planting constraints.
# Dropdown `plantListed`: 
Allows users to select a specific plant from list. This input is critical for identifying the exact plant to provide specific growing advice.
# Checkbox for `isFirstTimer`:
Indicates whether the user is a first-time gardener. This helps tailor recommendations

These inputs are relevant because they collectively define the user’s gardening context, enabling the app to provide personalized planting advice.


## Color Palette
The Garden Guide app uses a nature-inspired color palette that evokes the serene and vibrant essence of a garden. The design blends earthy greens, and warm accents to create a calming, user-friendly interface. The main colors include:
# Light Green (#E8F5E9): 
A soft, pale green used as the page background, evoking fresh grass and new growth.
# Forest Green (#2E7D32): 
A deep green for body text and input borders, symbolizing lush vegetation and grounding the design.
# Sage Green (#6B9080, #84A98C): 
Muted greens for headings, labels, and list items, providing an earthy, sophisticated tone.
# Dark Teal (#52796F): 
A deep teal for paragraph text, adding depth and a natural complement to the greens.
# Light Cream (#FFF8E1): 
A warm cream for input field backgrounds, introducing subtle warmth like sunlight on soil.
# Daffodil Yellow (#FFEE58): 
A vibrant yellow for input focus states, symbolizing sunlight and drawing attention to active fields.
# Mint Green (#C7F9CC):
A fresh mint green for radio buttons and focused input borders, enhancing the garden-inspired vibrancy.