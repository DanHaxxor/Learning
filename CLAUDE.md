# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page web app that guides users through a questionnaire to recommend the best Zoho ecosystem product for their needs. No build tools, frameworks, or dependencies — everything is in one self-contained HTML file.

## Development

Open `index.html` directly in a browser. No build step, no server required.

## Architecture

`index.html` contains all HTML, CSS, and JavaScript inline:

- **Quiz engine**: A `questions` array defines each step (id, question text, options). The engine tracks `currentStep` and `answers`, rendering one question at a time with back/next navigation and a progress bar.
- **Recommendation logic**: `getRecommendation()` maps the `primary_need` answer to a product from the `products` object, then adjusts based on `team_size`, `budget`, `experience`, and `integration` answer combinations (e.g., solo+free+CRM → Zoho Bigin instead of Zoho CRM). Returns a primary recommendation plus alternatives.
- **Result display**: `showResults()` renders the recommendation card, optionally suggests Zoho One for larger teams, and lists alternative products.

To add a new question, append to the `questions` array. To add new product recommendations or adjust logic, modify the `products` object and conditionals in `getRecommendation()`.
