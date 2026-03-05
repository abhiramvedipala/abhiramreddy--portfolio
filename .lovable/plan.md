

## Plan: Update Social Icons Style

Two changes:

1. **Hero section (`Hero.tsx`)**: Replace the large bordered button-style social links with small, clean icon-only links (no text labels, no `pixel-btn` box styling) — matching the minimal icon style in screenshot 2.

2. **Navigation bar (`Navigation.tsx`)**: Remove the social link icons (GitHub, LinkedIn, Instagram) entirely from the navbar. Keep only the nav links and the dark/light mode toggle button.

### Files to change

**`src/components/portfolio/Hero.tsx`**
- Remove the `pixel-btn bg-card p-3` box styling from social links
- Remove the text `<span>` labels
- Style icons as simple inline icons with `text-muted-foreground hover:text-foreground` transition
- Keep the same flex layout with appropriate gap

**`src/components/portfolio/Navigation.tsx`**
- Remove the social icons array and its rendering (lines 46-62)
- Remove unused `Github, Linkedin, Instagram` imports
- Keep the theme toggle button, move it to sit right after nav links with just a border-left separator

