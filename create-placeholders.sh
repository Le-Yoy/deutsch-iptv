#!/bin/bash

# List of images needed by HeroSection
images=(
  "public/assets/sports/football/germany/allianz-arena.webp"
  "public/assets/sports/football/germany/bayern-mobile.webp"
  "public/assets/hero/entertainment.webp"
  "public/assets/hero/entertainment-mobile.webp"
  "public/assets/sports/football/champions-league.webp"
  "public/assets/sports/football/champions-mobile.webp"
)

# Create placeholder images using ImageMagick (if available) or touch
for img in "${images[@]}"; do
  echo "Creating placeholder: $img"
  touch "$img"  # Creates empty file as placeholder
done

echo "Placeholder images created. Replace with real images."
