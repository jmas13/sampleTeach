## Learning Objectives:
	Introduce higher-order functions
	Introduce higher-order functions used in array traversal
	Why use higher-order functions? (abstract over action, not just value)
	Using higher-order functions to solve common problems (filter/pluck)

## Assessment:
- What activity and/or homework will you use to check student progress?
- Describe, briefly, what students will do to show you that they have mastered (or made progress toward) the objective.
- How will students practice what they have learned? What method will you use to give them feedback?
- Optional: Attach your assessment with an exemplary student response that illustrates the expected level of rigor.

Beginning with an array of people with names and ages, and return an array of names of people who are a certain age or older, now for an arbitrary test condition, now abstract that into a function.

## Open Framing:
### What is about to happen, why, and how?
- How will you communicate what is about to happen, how it will happen, and its importance?
- How will you communicate connections to previous lessons?
- How will you engage students and capture their interest?

Introduction to higher-order functions. Using higher-order functions leads to code that is easy to read and think about. We will use array traversal, first using a for loop, then write `forEach(array, callback)`, writing `map(array, callback)`, and then students will write `filter(array, callback)`

## I do:
Introduce new material, explaining the topic and modeling what you want students to do.
- How will you explain/demonstrate all knowledge/skills required of the objective?
- Which potential misunderstandings do you anticipate? How will you proactively mitigate them?
- How/when will you check student understanding? How will you address misunderstandings?

	I write a loop logging each element of the array to console

## We do:
Guide student practice by working on activity together with students.
- How will students practice all knowledge/skills required of the objective, with your support?
- How will students have multiple opportunities to practice, with exercises scaffolded from easy to hard?
- How/when will you monitor performance to check for understanding? How will you address misunderstandings?

1. We write a function logging each element of the array to console
2. We write a function taking a callback and evoking it with each element of the array
	
    *Works for side-effects or using external collections but how to encapsulate that?*

3. We write map


## You do:
### Student independent (not group) practice time in class.
- How will students independently practice the knowledge and skills required of the objective, such that they solidify their internalization of the key points prior to the lesson assessment?
- When and how would you intervene to support this practice?
- How will you provide opportunities for remediation and extension?

	You write filter

## Closing Framing:
### Wrap up, recap the lesson, and transition to students’ next steps.
- How will students summarize and state the significance of what they learned?
- How does the lesson relate to the task they’ll be asked to do? How will you preview the homework assignment?

	Using map and filter, given an array of objects (people), filter the array by an attribute (age) and return an array of another attribute (name) along with the original array. 