import { Connection } from "./connection";

export class Signal<T> {
  
  public value: T;                                          // The current value of the signal
  public closed: boolean = false;                           // Whether the signal has been closed
  private listeners: Set<(value: T) => void> = new Set();   // The listeners that are connected to the signal
  private closeListeners: Set<() => void> = new Set();      // The listeners that are connected to the signal's close event
  private emitOnConnect: boolean;                           // Whether to emit the current value when a listener is connected

  /**
   * Creates a new signal with an optional initial value and emitOnConnect option
   * @param value The initial value of the signal
   * @param emitOnConnect Whether to emit the current value when a listener is connected
   */
  constructor(value?: T, emitOnConnect: boolean = false) {
    this.value = value;
    this.emitOnConnect = emitOnConnect;
  }

  /**
   * Connects a listener to the signal
   * @param listener The listener to connect to the signal 
   * @returns A connection object that can be used to disconnect the listener or to execute other actions
   */
  public connect(listener: (value: T) => void): Connection<T> {
    this.listeners.add(listener);

    if (this.emitOnConnect) {
      listener(this.value);
    }
    
    return new Connection<T>(this, listener);
  }

  /**
   * Emits a value to the signal and calls all listeners with the value
   * @param value The value to emit to the signal
   */
  public emit(value?: T) {
    this.value = value;
    this.listeners.forEach(listener => listener(value));
  }

  /**
   * Disconnects a listener from the signal
   * @param listener The listener to disconnect from the signal
   */
  public disconnect(listener: (value: T) => void) {
    this.listeners.delete(listener);
  }

  /**
   * Closes the signal and removes all listeners
   * Then calls all close listeners before removing them
   */
  public close() {
    this.listeners.clear();
    this.closed = true;
    this.closeListeners.forEach(listener => listener());
    this.closeListeners.clear();
  }

  /**
   * Adds a new listener to the signal's close event
   * @param listener Listener to call when the signal is closed
   */
  public connectOnClose(listener: () => void) {
    this.closeListeners.add(listener);
  }
}
