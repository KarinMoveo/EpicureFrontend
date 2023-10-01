export function isRestaurantOpen(from: string, to: string): boolean {
    const timeFormatRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:mm format regex
  
    if (!timeFormatRegex.test(from) || !timeFormatRegex.test(to)) {
      return false;
    }
  
    const now = new Date();
    const [fromHour, fromMinute] = from.split(':').map(Number);
    const [toHour, toMinute] = to.split(':').map(Number);
  
    const fromTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), fromHour, fromMinute);
    const toTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), toHour, toMinute);
  
    return now >= fromTime && now <= toTime;
  }
  