"use client";

import { useEffect, useState } from "react";
import {
  format,
  subDays,
  subMonths,
  subYears,
  startOfMonth,
  startOfYear,
  endOfDay,
  endOfMonth,
  endOfYear,
} from "date-fns";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, CalendarIcon } from "lucide-react";

export const DateRangeEnum = {
  LAST_30_DAYS: "30days",
  LAST_MONTH: "lastMonth",
  LAST_3_MONTHS: "last3Months",
  LAST_YEAR: "lastYear",
  THIS_MONTH: "thisMonth",
  THIS_YEAR: "thisYear",
  ALL_TIME: "allTime",
  CUSTOM: "custom",
} as const;

export type DateRangeEnumType = (typeof DateRangeEnum)[keyof typeof DateRangeEnum];

export type DateRangeType = {
  from: Date | null;
  to: Date | null;
  value?: string;
  label: string;
} | null;

type DateRangePreset = {
  label: string;
  value: string;
  getRange: () => DateRangeType;
};

interface DateRangeSelectProps {
  dateRange: DateRangeType;
  setDateRange: (range: DateRangeType) => void;
  defaultRange?: DateRangeEnumType;
  showCustomOption?: boolean;
}

const now = new Date();
const today = endOfDay(now);

const presets: DateRangePreset[] = [
  {
    label: "Last 30 Days",
    value: DateRangeEnum.LAST_30_DAYS,
    getRange: () => ({
      from: subDays(today, 29),
      to: today,
      value: DateRangeEnum.LAST_30_DAYS,
      label: "for Past 30 Days",
    }),
  },
  {
    label: "Last Month",
    value: DateRangeEnum.LAST_MONTH,
    getRange: () => {
      const lastMonth = subMonths(today, 1);
      return {
        from: startOfMonth(lastMonth),
        to: endOfMonth(lastMonth),
        value: DateRangeEnum.LAST_MONTH,
        label: "for Last Month",
      };
    },
  },
  {
    label: "Last 3 Months",
    value: DateRangeEnum.LAST_3_MONTHS,
    getRange: () => ({
      from: startOfMonth(subMonths(today, 2)),
      to: today,
      value: DateRangeEnum.LAST_3_MONTHS,
      label: "for Past 3 Months",
    }),
  },
  {
    label: "Last Year",
    value: DateRangeEnum.LAST_YEAR,
    getRange: () => {
      const lastYear = subYears(today, 1);
      return {
        from: startOfYear(lastYear),
        to: endOfYear(lastYear),
        value: DateRangeEnum.LAST_YEAR,
        label: "for Past Year",
      };
    },
  },
  {
    label: "This Month",
    value: DateRangeEnum.THIS_MONTH,
    getRange: () => ({
      from: startOfMonth(today),
      to: today,
      value: DateRangeEnum.THIS_MONTH,
      label: "for This Month",
    }),
  },
  {
    label: "This Year",
    value: DateRangeEnum.THIS_YEAR,
    getRange: () => ({
      from: startOfYear(today),
      to: today,
      value: DateRangeEnum.THIS_YEAR,
      label: "for This Year",
    }),
  },
  {
    label: "All Time",
    value: DateRangeEnum.ALL_TIME,
    getRange: () => ({
      from: null,
      to: null,
      value: DateRangeEnum.ALL_TIME,
      label: "across All Time",
    }),
  },
];

export const DateRangeSelect = ({
  dateRange,
  setDateRange,
  defaultRange = DateRangeEnum.LAST_30_DAYS,
  showCustomOption = true,
}: DateRangeSelectProps) => {
  const [open, setOpen] = useState(false);
  const [showCustomCalendar, setShowCustomCalendar] = useState(false);
  const [tempRange, setTempRange] = useState<{ from?: Date; to?: Date }>({});

  const displayText = dateRange
    ? presets.find((p) => p.value === dateRange.value)?.label ||
      (dateRange.from && dateRange.to
        ? `${format(dateRange.from, "MMM dd, y")} - ${format(dateRange.to, "MMM dd, y")}`
        : dateRange.from
        ? `${format(dateRange.from, "MMM dd, y")} - Present`
        : "Select a duration")
    : "Select a duration";

  useEffect(() => {
    if (!dateRange) {
      const defaultPreset = presets.find((p) => p.value === defaultRange);
      if (defaultPreset) {
        console.log("Setting default date range:", defaultPreset.value);
        setDateRange(defaultPreset.getRange());
      }
    }
  }, [dateRange, defaultRange, setDateRange]);

  const handlePresetClick = (preset: DateRangePreset) => {
    console.log("Preset clicked:", preset.label);
    setDateRange(preset.getRange());
    setShowCustomCalendar(false);
    setOpen(false);
  };

  const handleCustomClick = () => {
    console.log("Switching to custom range mode");
    setShowCustomCalendar(true);
    setTempRange({
      from: dateRange?.from || undefined,
      to: dateRange?.to || undefined,
    });
  };

  const handleCustomRangeSelect = (range: { from?: Date; to?: Date } | undefined) => {
    console.log("Custom range selected:", range);
    if (range) {
      setTempRange(range);
    }
  };

  const applyCustomRange = () => {
    console.log("Applying custom range:", tempRange);
    if (tempRange.from) {
      setDateRange({
        from: tempRange.from,
        to: tempRange.to || tempRange.from,
        value: DateRangeEnum.CUSTOM,
        label: "Custom Range",
      });
      setShowCustomCalendar(false);
      setOpen(false);
    }
  };

  const cancelCustomRange = () => {
    console.log("Canceled custom range selection");
    setShowCustomCalendar(false);
    setTempRange({});
  };

  return (
    <Popover
      open={open}
      onOpenChange={(o) => {
        console.log("Popover open state:", o);
        setOpen(o);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[200px] flex items-center justify-between text-left font-normal !bg-[var(--secondary-dark-color)] border-gray-700 !text-white !cursor-pointer",
            !dateRange && "text-muted-foreground"
          )}
        >
          {displayText}
          <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {!showCustomCalendar ? (
          <div className="grid py-1">
            {presets.map((preset) => (
              <Button
                key={preset.value}
                variant="ghost"
                className={cn(
                  "justify-start text-left",
                  dateRange?.value === preset.value && "bg-accent"
                )}
                onClick={() => handlePresetClick(preset)}
              >
                {preset.label}
              </Button>
            ))}
            {showCustomOption && (
              <Button
                variant="ghost"
                className="justify-start text-left"
                onClick={handleCustomClick}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Custom Range
              </Button>
            )}
          </div>
        ) : (
          <div className="p-3">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={tempRange.from}
              selected={{ from: tempRange.from, to: tempRange.to }}
              onSelect={handleCustomRangeSelect}
              numberOfMonths={2}
              className="rounded-md border"
            />
            <div className="flex justify-between mt-3 pt-3 border-t">
              <Button variant="outline" size="sm" onClick={cancelCustomRange}>
                Cancel
              </Button>
              <Button 
                size="sm" 
                onClick={applyCustomRange}
                disabled={!tempRange.from}
              >
                Apply
              </Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
