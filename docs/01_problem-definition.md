# Problem Definition – NeighborFit (Student Edition)

## 🎯 User Persona

**Target User**: University student relocating to a new city.

**Goals**:
- Find a safe and affordable place to live.
- Stay close to college/university campus.
- Easily commute using public transport.
- Access groceries, cafes, and libraries nearby.

**Challenges**:
- Unfamiliarity with city/neighborhoods.
- Limited time and budget to explore options.
- No personalized guidance from rental platforms.

---

## ❓ Core Problem

> “How can we help students identify the best-fit neighborhoods based on their unique lifestyle needs and constraints?”

Most real estate platforms only filter by rent or property size. They **don’t consider lifestyle preferences** like transit, walkability, or nearby colleges — key factors for students.

---

## ✅ Matching Criteria

| Factor         | Description                                                  |
|----------------|--------------------------------------------------------------|
| Affordability  | Monthly rent / cost of living                                |
| Transit Access | Availability of buses/trains to college or main hubs         |
| Proximity      | Distance to major college campuses                           |
| Lifestyle      | Cafes, groceries, libraries nearby                           |
| Safety         | Neighborhood crime rates                                     |

---

## 🎯 Hypothesis

If a student can input their lifestyle preferences and budget, then a matching algorithm can recommend the top 3–5 most suitable neighborhoods using public data sources.

---

## 📦 Scope & Constraints

- **Zero Budget**: Only free-tier APIs and open data sources.
- **2-Week Timeline**: MVP only; no login system or property listings.
- **Real Data**: Pull from APIs (Google, OSM, Numbeo, etc.)

---

## 📈 Success Metrics

- A functional matching tool that returns meaningful neighborhood matches
- Real-world data integration
- Ability to support different student personas

