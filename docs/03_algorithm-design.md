# Matching Algorithm Design

## Goal

Compute a personalized match score for each neighborhood based on user-weighted preferences.

## Criteria Used

- Affordability (lower = better)
- Transit access (higher = better)
- Proximity to college (lower = better)
- Lifestyle (cafes, groceries nearby — higher = better)
- Safety (lower crime = better)

## Normalization Strategy

Each value is normalized to a 0–1 scale using:

```js
(value - min) / (max - min)


finalScore =
  (w1 * affordabilityScore) +
  (w2 * transitScore) +
  (w3 * proximityScore) +
  (w4 * lifestyleScore) +
  (w5 * safetyScore)
