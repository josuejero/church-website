# Calendar Maintenance

Use the existing `/calendar` page as the public schedule hub.

## Update sources

- Google Calendar embed: use this for the live operational schedule. Add or edit worship services, ministry gatherings, outreach dates, and any confirmed timing changes here first.
- `web/src/data/annual-calendar.json`: keep this limited to major highlights such as seasonal worship moments, camp meeting, school-year milestones, and large church-wide events.
- `web/src/content/events/`: create a dated event page only when the public needs more detail than a calendar entry can carry, such as registration instructions, location details, or a fuller event summary.

## Editing rules

- Do not duplicate routine schedule edits in multiple places.
- If a date changes, update Google Calendar first.
- If a major highlight changes, update both Google Calendar and `annual-calendar.json`.
- If a detailed event page exists, keep its copy aligned with the calendar entry.

## Quick checks

- Confirm the embedded Google Calendar is still publicly visible.
- Confirm the `/calendar` page still shows the load button and annual highlights.
- Confirm upcoming highlights appear before past highlights after any annual calendar edit.
