# Internship Summary

**Programme:** Data Analytics Internship, ApexPlanet Software Pvt. Ltd.
**Intern:** Mohammed Farshan

## Overview
The internship was delivered as four connected tasks that followed one retail sales dataset (1,000 transactions, 1 January 2025 to 1 January 2026, 8 cities, 5 categories, 6 products) through the full analytics workflow.

## Objectives
- Prepare raw data so it can be trusted.
- Explore the data and answer business questions with SQL.
- Define KPIs and design an interactive dashboard.
- Validate findings statistically and communicate them to decision makers.

## The four tasks
| Task | What I did | Repository |
|---|---|---|
| 1. Data cleaning | Audited the raw file (Age missing in 2.0% of rows, City in 1.3%, no exact duplicates), standardised column names, exported cleaned data and a reusable script. | [Task 1](https://github.com/Farshan123/Apexplanet-Task-1) |
| 2. EDA and SQL | Cleaned and enriched the data, loaded it into SQLite, ran seven business queries and built charts and a dashboard mock-up. | [Task 2](https://github.com/Farshan123/Apexplanet-Task-2) |
| 3. Power BI | Defined five KPIs, segmented orders into four value tiers, wrote DAX measures and documented a two-page dashboard. | [Task 3](https://github.com/Farshan123/Apexplanet-Task-3) |
| 4. Storytelling and statistics | Tested six hypotheses, reported p-values, confidence intervals and effect sizes, and built a 17-slide deck. | [Task 4](https://github.com/Farshan123/Apexplanet-task-4) |

## Technologies used
Python (pandas, NumPy, Matplotlib, Seaborn, SciPy, statsmodels), SQL on SQLite, Power BI and DAX, Excel, Jupyter, PowerPoint, Git and GitHub.

## Skills developed
Data quality auditing, cleaning, exploratory analysis, SQL querying, KPI design, segmentation, hypothesis testing, effect-size reporting and data storytelling.

## Key learning outcomes
- Documented data caveats make every later result more credible.
- Differences seen on charts need statistical testing before they become recommendations.
- Only one of the six Task 4 hypotheses was rejected: demand is not evenly spread across product categories. Differences in order value by gender, category and city were not significant.

## Challenges and solutions
| Challenge | How it was handled (from the project documents) |
|---|---|
| Order_ID ORD100050 appears 9 times with different customers, products and dates | Task 2 kept all nine records and gave them unique suffixes; Task 3 counted orders by row instead of by Order_ID. |
| 20 missing ages and 13 missing cities | Task 2 filled ages with the median (41) and added an audit flag, and labelled missing cities "Unknown". |
| January 2026 contains a single day, which would show a misleading -93% growth | Task 3 flagged it as a partial month and excluded it from growth calculations. |
| 52 Customer_IDs map to more than one name | Task 3 noted that the 5.5% repeat rate is an upper-bound indicator. |
| Q3 looked weak but the test was not significant (p = 0.081) | Task 4 reported the result as directional rather than proven. |

## Final reflection
See [learning-reflections.md](learning-reflections.md).
