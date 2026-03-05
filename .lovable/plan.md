

## Plan: Replace Logo with "< AV />" Text Badge

**What changes:**

Update `src/components/portfolio/Navigation.tsx` to replace the `<img>` logo with a styled text element `< AV />` inside a thick bordered rectangle, matching the "DEV" style from the reference image.

**Implementation:**

1. Remove the `<img>` tag and the `avLogo` import
2. Replace with a `<span>` containing `< AV />` styled with:
   - Thick border (3px solid) using the site's foreground/primary color
   - Bold, larger font weight
   - Padding to create the rectangular badge look
   - Green text in dark mode, dark text in light mode
   - The existing `pixel-box` utility class can be leveraged for the border + shadow

**Single file change:** `src/components/portfolio/Navigation.tsx`

