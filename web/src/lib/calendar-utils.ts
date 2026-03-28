export type AnnualEventInput = {
  title: string;
  start: string;
  end?: string;
  summary: string;
  location: string;
  category?: string;
  highlight?: boolean;
  closureNote?: string;
  notes?: string;
};

export type EnrichedAnnualEvent = AnnualEventInput & {
  startDate: Date;
  endDate: Date;
};

export type CalendarFormatters = {
  monthFormatter: Intl.DateTimeFormat;
  monthDayFormatter: Intl.DateTimeFormat;
  yearFormatter: Intl.DateTimeFormat;
};

export type SplitCalendarEvents = {
  upcomingEvents: EnrichedAnnualEvent[];
  pastEvents: EnrichedAnnualEvent[];
};

export const categoryLabels: Record<string, string> = {
  worship: "Worship + praise",
  camp: "Camp meeting",
  community: "Community",
};

const isValidDate = (value: Date) => !Number.isNaN(value.valueOf());

function parseCalendarDate(value: string) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return new Date(`${value}T12:00:00Z`);
  }

  return new Date(value);
}

export function formatDateRange(
  start: Date,
  end: Date | undefined,
  formatters: CalendarFormatters,
): string {
  if (!start || !isValidDate(start)) {
    return "";
  }

  const actualEnd = end && isValidDate(end) ? end : start;
  const startYear = formatters.yearFormatter.format(start);
  const endYear = formatters.yearFormatter.format(actualEnd);

  if (start.valueOf() === actualEnd.valueOf()) {
    return `${formatters.monthDayFormatter.format(start)}, ${startYear}`;
  }

  if (startYear === endYear) {
    if (start.getMonth() === actualEnd.getMonth()) {
      const monthName = formatters.monthFormatter.format(start);
      return `${monthName} ${start.getDate()}–${actualEnd.getDate()}, ${startYear}`;
    }
    return `${formatters.monthDayFormatter.format(start)} – ${formatters.monthDayFormatter.format(actualEnd)}, ${startYear}`;
  }

  return `${formatters.monthDayFormatter.format(start)}, ${startYear} – ${formatters.monthDayFormatter.format(actualEnd)}, ${endYear}`;
}

export function sortCalendarEvents(events: AnnualEventInput[]): EnrichedAnnualEvent[] {
  return events
    .map((event) => {
      const startDate = parseCalendarDate(event.start);
      if (!isValidDate(startDate)) {
        return null;
      }
      const endDate = event.end ? parseCalendarDate(event.end) : startDate;
      return {
        ...event,
        startDate,
        endDate,
      };
    })
    .filter((item): item is EnrichedAnnualEvent => Boolean(item))
    .sort((a, b) => a.startDate.valueOf() - b.startDate.valueOf());
}

export function getHighlightEvent(events: EnrichedAnnualEvent[]) {
  return events.find((entry) => entry.highlight);
}

export function splitCalendarEventsByRecency(
  events: AnnualEventInput[],
  now = new Date(),
): SplitCalendarEvents {
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const sortedEvents = sortCalendarEvents(events);

  return sortedEvents.reduce<SplitCalendarEvents>(
    (groups, event) => {
      if (event.endDate >= startOfToday) {
        groups.upcomingEvents.push(event);
      } else {
        groups.pastEvents.unshift(event);
      }

      return groups;
    },
    { upcomingEvents: [], pastEvents: [] },
  );
}
