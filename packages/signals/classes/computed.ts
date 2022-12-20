import { Signal } from "./signal";
import { Connection } from "./connection";

export class Computed<T=any> extends Signal<T> {

  private signals: Set<Signal<any>> = new Set();
  private connections: Connection[] = [];
  private fn: (...args) => T;

  constructor(...signals: Signal<any>[]) {
    super(null);
    this.signals = new Set(signals);
    return this;
  }

  public compute(fn: (...args) => T): Computed<T> {
    // Check if there is a function already defined
    if (this.fn) throw new Error('Computed function already defined');

    // Set the function
    this.fn = fn;

    // Check if all signals are instances of Signal
    this.signals.forEach(signal => {
      if (!(signal instanceof Signal)) {
        throw new Error('Computed signals must be instances of Signal');
      }
    });

    // Set initial value by calling the function with the current values of the signals
    const initialValue = this.fn(...Array.from(this.signals).map(signal => signal.value));
    this.value = initialValue;

    // Connect to each signal and emit a new value when any of them emits a new value
    this.connectToSignals();

    return this;
  }

  private connectToSignals() {
    this.signals.forEach(signal => {
      this.connections.push(signal.connect(() => {
        // Call the function with the current values of the signals
        const value = this.fn(...Array.from(this.signals).map(signal => signal.value));
        this.emit(value);
      }));
    });
  }

  public close() {
    this.fn = null;
    super.close();
    this.signals.clear();
    this.connections.forEach(connection => connection.disconnect());
    this.connections = [];
  }

}
