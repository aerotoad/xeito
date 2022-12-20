import { Connection } from "./connection";
import { Signal } from "./signal";

export class ConnectionContainer extends Signal<any> {
  private connections: Connection[] = [];
  private internalConnections: Connection[] = [];

  constructor() {
    super();
  }

  public add(connection: Connection) {
    this.connections.push(connection);
    this.internalConnections.push(connection.signal.connect(this.emitInternal.bind(this)));
  }

  private emitInternal(value: any) {
    this.emit(value);
  }

  public close() {
    this.connections.forEach(connection => connection.disconnect());
    this.internalConnections.forEach(connection => connection.disconnect());
    this.connections = [];
  }
}
