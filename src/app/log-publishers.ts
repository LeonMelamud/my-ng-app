import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { LogEntry } from './log.service';

export abstract class LogPublisher {
    location: string;
    abstract log(record: LogEntry): Observable<Boolean>;
    abstract clear(): Observable<boolean>;
}
export class LogConsole extends LogPublisher {
    log(entry: LogEntry): Observable<boolean> {
        // Log to console
        console.log(entry.buildLogString());
        return of(true);
    }
    clear(): Observable<boolean> {
        console.clear();
        return of(true);
    }
}
/* export class LogLocalStorage
    extends LogPublisher {
    constructor() {
        // Must call super() from derived classes
        super();
        // Set location
        this.location = "logging";
    }

    // Append log entry to local storage
    log(entry: LogEntry): Observable<boolean> {
        let ret: boolean = false;
        let values: LogEntry[];

        try {
            // Get previous values from local storage
            values = JSON.parse(
                localStorage.getItem(this.location))
                || [];
            // Add new log entry to array
            values.push(entry);
            // Store array into local storage
            localStorage.setItem(this.location,
                JSON.stringify(values));

            // Set return value
            ret = true;
        } catch (ex) {
            // Display error in console
            console.log(ex);
        }

        return Observable.of(ret);
    }

    // Clear all log entries from local storage
    clear(): Observable<boolean> {
        localStorage.removeItem(this.location);
        return Observable.of(true);
    }
    } */
