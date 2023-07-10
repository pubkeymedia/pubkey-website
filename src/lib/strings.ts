import { DateTime } from 'luxon';

export const formatIsoDate = (isoDate: string) =>
  DateTime.fromISO(isoDate).toFormat('ccc dd LLL yyyy h:mm a');
