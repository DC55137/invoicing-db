import { format, getTime, formatDistanceToNow } from "date-fns";

// ----------------------------------------------------------------------

export function fDate(
  date: Date | string | number,
  newFormat?: string
): string {
  const fm = newFormat || "dd MMM yyyy";
  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(
  date: Date | string | number,
  newFormat?: string
): string {
  const fm = newFormat || "dd MMM yyyy p";
  return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date: Date | string | number): number {
  return date ? getTime(new Date(date)) : 0;
}

export function fDateTimeSuffix(date: Date) {
  return format(new Date(date), "dd/MM/yyyy p");
}

export function fToNow(date: Date | string | number): string {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : "";
}
