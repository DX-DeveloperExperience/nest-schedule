import { NestDistributedSchedule } from './NestDistributedSchedule';

export class NestSchedule extends NestDistributedSchedule {
  async tryLock(method: string): Promise<any> {
    return false;
  }
  updateCron(cron: string) {
    this.cronJobs.forEach(c => {
      c.reschedule(cron);
    });
  }
}
