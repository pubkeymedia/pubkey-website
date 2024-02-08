import { DateTime } from 'luxon';

export const formatIsoDate = (isoDate: string) =>
  DateTime.fromISO(isoDate).setZone('America/New_York').toFormat('ccc dd LLL yyyy h:mm a');
