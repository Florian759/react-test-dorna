const shortOptions: Intl.DateTimeFormatOptions = {
    day: "numeric", month: "short"
};

const longOptions: Intl.DateTimeFormatOptions = {
    day: "numeric", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit"
};


export function dateShortFormat(date: Date | undefined): string {
    return (date) ? date.toLocaleDateString("en-GB", shortOptions) : '';
}

export function dateLongFormat(date: Date | undefined): string {
    return (date) ? date.toLocaleDateString("en-GB", longOptions) : '';
}