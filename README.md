Image Slider Project - README


📌 Overview

This project is a responsive, interactive image slider with auto-play, navigation controls, and smooth transitions. It's built with HTML, CSS, and JavaScript and works on both desktop and mobile devices.

🚀 Features

✅ 8-image slider with smooth fade animations
✅ Navigation controls (Previous/Next buttons + dot indicators)
✅ Auto-play with adjustable interval (1-10 seconds)
✅ Keyboard support (Arrow keys for navigation)
✅ Touch swipe support (For mobile devices)
✅ Responsive design (Works on all screen sizes)
✅ Toggle auto-play (Enable/disable automatic sliding)
✅ Clean UI with visual feedback

🛠️ Setup & Installation

1. Download the Project
Clone this repository or download the ZIP file.
Extract the files into a folder.

2. Folder Structure text
image-slider/
│── index.html          # Main HTML file
│── css/
│   └── style.css       # Stylesheet
│── js/
│   └── script.js       # JavaScript logic
│── images/             # Folder for slider images
│   ├── image1.jpg
│   ├── image2.jpg
│   ├── ...
│   └── image8.jpg

3. Add Your Images
Replace the placeholder images (image1.jpg to image8.jpg) in the images/ folder with your own images.
Ensure images are properly sized (recommended: 800x400px for best results).

4. Run the Project
Open index.html in any modern browser (Chrome, Firefox, Edge, Safari).

No server required—works locally.

🎮 How to Use:

1. Basic Navigation
Next Button (→) : Moves to the next slide.
Previous Button (←) : Moves to the previous slide.
Dot Indicators : Click any dot to jump to a specific slide.

2. Auto-Play Controls
Toggle Auto-Play : Check/uncheck the "Auto-play" checkbox.
Adjust Interval : Change the interval (in seconds) for auto-sliding (default: 3s).

3. Keyboard Shortcuts
← (Left Arrow) : Previous slide.
→ (Right Arrow) : Next slide.

4. Mobile Touch Support
Swipe Left : Next slide.
Swipe Right : Previous slide.

⚙️ Customization

1. Changing Images
Modify the images array in js/script.js:

javascript
const images = [
    'images/your-image1.jpg',
    'images/your-image2.jpg',
    // Add more images as needed
];

2. Adjusting Auto-Play Speed
Change the default interval in js/script.js:

javascript
let autoplayDelay = 3000; // 3 seconds (3000ms)

3. Styling (CSS)
Edit css/style.css to change colors, sizes, or animations:

// css
.slide {
    transition: opacity 0.5s ease-in-out; /* Adjust animation speed */
}

📜 Documentation

Key JavaScript Functions

Function                                    Description
	                               
initSlider()	                            Initializes the slider, creates slides & dots
goToSlide(index)	                        Moves to a specific slide
nextSlide()	                                Advances to the next slide
prevSlide()	                                Goes back to the previous slide
startAutoplay()	                            Starts auto-sliding
stopAutoplay()	                            Stops auto-sliding

Event Listeners

Click Events (Buttons & Dots)
Keyboard Events (Arrow Keys)
Touch Events (Mobile Swipe)
Auto-Play Toggle (Checkbox Change)

📱 Responsive Design

Works on desktops, tablets, and mobile phones.
Adjusts layout for smaller screens (e.g., stacks navigation buttons vertically).

🔧 Troubleshooting

Images Not Loading?

1.Ensure image paths in js/script.js are correct.
2.Check filenames (case-sensitive).

Auto-Play Not Working?

1.Verify autoplayToggle.checked is true in script.js.

Slider Not Smooth?

1.Adjust CSS transition timing:
// css
.slide {
    transition: opacity 0.5s ease-in-out; /* Make faster/slower */
}

📂 Project Structure Summary

File	                             Purpose

index.html	                         HTML structure for the slider
css/style.css	                     Styling for slider & controls
js/script.js	                     Slider logic & interactivity
images/	                             Folder for slider images

🎉 Conclusion

This image slider is easy to set up, customize, and use. It provides a smooth user experience with multiple navigation options.

Need more features? Feel free to extend it with:

1.Thumbnail previews
2.Video support
3.Zoom effects
4.API integration (dynamic image loading)

Enjoy using the slider! 🚀

Credits: [Khushi verma]
Contact: [skhushiv0753@gmail.com]

📥 Download & Start Sliding!

👉 [GitHub Repo Link]