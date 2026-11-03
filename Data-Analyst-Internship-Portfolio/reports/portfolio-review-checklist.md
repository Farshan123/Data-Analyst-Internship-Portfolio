# Portfolio Review Checklist

Automated checks were run on the generated files (headless Chromium at desktop 1366px, tablet 820px and mobile 375px widths). Items marked "Owner" need you.

## Verified by testing
- [x] All four pages (index, about, projects, contact) load with no JavaScript or console errors.
- [x] No horizontal overflow at desktop, tablet and mobile widths.
- [x] All local images load (0 broken images); every image has descriptive alt text.
- [x] All internal links and anchors resolve; no duplicate element ids.
- [x] Mobile menu opens and closes; current page is highlighted in the navigation.
- [x] Project filter works (SQL shows 1 of 4 projects; All restores 4) and filters the detail sections too.
- [x] Back-to-top button appears after scrolling.
- [x] Skip link, keyboard focus outlines, `lang` attribute and reduced-motion support are present.
- [x] Page titles, meta descriptions, favicon and Open Graph tags are present.
- [x] All four project GitHub links use the URLs you supplied.

## Owner: complete before publishing
- [ ] Confirm the spelling of your name. Task 2 and Task 4 say "Mohammed Farshan"; Task 3 says "Mohamed Farshan". The site uses "Mohammed Farshan".
- [ ] Add your email and LinkedIn URL (search the files for `TODO-EMAIL` and `TODO-LINKEDIN`).
- [ ] Add education from your resume (search for `TODO-EDUCATION`). No resume was in the uploaded files.
- [ ] Add an approved resume PDF if you want a download button (`TODO-RESUME`).
- [ ] Confirm that Excel and Git/GitHub are skills you want listed (see technical-skills.md). MySQL was left out because no project used it.
- [ ] After enabling GitHub Pages, open the live URL, click every link, and then add the URL to README.md.
- [ ] The Open Graph URL assumes `https://farshan123.github.io/Data-Analyst-Internship-Portfolio/`. Correct it in the four HTML files if your repository name differs.
- [ ] Open each of the four task repositories on GitHub and confirm they are public and match the links.

## Issues found in the source projects (worth fixing in the task repositories)
- Task 1 `data_dictionary.csv` has "To be documented" in every Description cell.
- The Task 3 README says a `.pbix` file is included, but none was in the uploaded files; its dashboard image is a Python-rendered layout preview.
- Task 3 README has placeholders for the live dashboard and video links.
- The Task 4 README credits Task 1 with median age imputation and ORD100050 resolution, but in the files supplied this was done in Task 2 (Task 1 only standardised, trimmed and de-duplicated).
- The Task 4 README says the Q3 slump is "confirmed", but the two-sided test was not significant (p = 0.081); the website words it as directional.
- Task 2 and Task 4 READMEs still contain LinkedIn, GitHub and email placeholders.
