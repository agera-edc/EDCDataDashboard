import {Observer} from "rxjs";
import {NotificationService} from "./notification.service";

export class AsyncOperationSubscriber {
  private readonly errorText: string;
  private readonly successText?: string;
  private readonly onNext?: (value: string) => void;

  constructor(private notificationService: NotificationService,
              errorText: string, successText?: string, onNext?: (value: string) => void) {
    this.errorText = errorText;
    this.successText = successText;
    this.onNext = onNext;
  }

  complete(): void {
    if (this.successText) {
      this.notificationService.showInfo(this.successText)
    }
  }

  error(err: any): void {
    console.error(err)
    this.notificationService.showError(this.errorText)
  }

  next(value: string): void {
    if (this.onNext)
      this.onNext(value);
  }

}
