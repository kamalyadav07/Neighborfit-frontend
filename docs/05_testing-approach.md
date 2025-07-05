# Testing & Validation Approach

## Matching Accuracy

- Manually tested different preference combinations
- Verified expected results (e.g., affordability weight = 3 should return cheapest areas)

## Functional Testing

- Used Postman to test `/api/match` with various inputs
- Checked edge cases (e.g., all weights = 0)

## UI Testing

- Form sliders tested at min/max values
- Mobile layout tested in browser responsive mode

## Future Testing

- Plan to add unit tests for `matcher.js`
- Plan to test with real user feedback for rankings
