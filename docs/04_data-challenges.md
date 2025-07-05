# Data Challenges & Solutions

## Challenges

- No centralized source for neighborhood lifestyle data
- Paid APIs (WalkScore, Google Maps, Numbeo) with limited free quotas
- Crime and affordability data varies city-to-city

## Solutions

- Created a `neighborhoods.json` mock dataset with realistic values
- Used assumptions to simulate real data (transit score, crime rate, etc.)
- Designed data model to easily swap in API-based results later

## Future Plan

- Integrate OpenStreetMap or Google Places API for lifestyle data
- Use UGC from platforms like Reddit or JustDial to estimate safety
