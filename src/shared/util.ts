export function isRestaurantOpen(from: string, to: string): boolean {
    const now = new Date();
    const [fromHour, fromMinute] = from.split(':').map(Number);
    const [toHour, toMinute] = to.split(':').map(Number);

    const fromTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), fromHour, fromMinute);
    const toTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), toHour, toMinute);

    return now >= fromTime && now <= toTime;
}