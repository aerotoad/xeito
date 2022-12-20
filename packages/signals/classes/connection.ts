import { Signal } from "./signal";

export class Connection<T=any> {

  public signal: Signal<T>;
  private listener: any;

  /**
   * Connection created by Signal.connect()
   * @param signal The signal that created this connection
   * @param listener The listener that was passed to Signal.connect()
   */
  constructor(signal: Signal<T>, listener: (value: T) => void) {
    this.signal = signal;
    this.listener = listener;
  }

  /**
   * Disconnects the connection
   * @returns void
   */
  public disconnect() {
    this.signal.disconnect(this.listener);
    this.signal = null;
    this.listener = null;
  }

  /**
   * Disconnects the connection after it has been called once
   */
  public once() {
    const connection = this.signal.connect(() => {
      this.disconnect();
      connection.disconnect();
    });
  }

  /**
   * Disconnects the connection after the signal has been closed
   * The listener will be called once with the last value of the signal
   */
  public last() {
    this.signal.disconnect(this.listener);
    this.signal.connectOnClose(() => {
      this.listener(this.signal.value);
    })
  }

  /**
   * Executes the given function on each value emitted by the signal
   * Disconnects the connection when the function returns falsy value
   * @param fn The function to call on each value emitted by the signal
   */
  public while(fn: (value: T) => any) {
    const connection = this.signal.connect((value: T) => {
      if (!fn(value)) {
        this.disconnect();
        connection.disconnect();
      }
    });
  }

  /**
   * Disconnects the connection when the given signal emits a value
   * @param signal The signal to listen to
   */
  public until(signal: Signal<any>) {
    const connection = signal.connect(() => {
      this.disconnect();
      connection.disconnect();
    });
  }

  /**
   * Disconnects the connection when the given signal is closed
   * @param signal The signal to listen to (defaults to the signal that created this connection)
   */
  public untilClose(signal?: Signal<any>) {
    if (signal) {
      signal.connectOnClose(() => {
        this.disconnect();
      });
    } else {
      this.signal.connectOnClose(() => {
        this.disconnect();
      });
    }
  }

}
