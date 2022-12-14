import { XeitoPlugin } from '@xeito/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { createBrowserHistory, createHashHistory, createMemoryHistory, History, Update } from 'history';
import { RouterOptions } from "../interfaces/router-options";
import { XeitoRouter } from '../interfaces/xeito-router';
import { RouterInternal } from '../interfaces/router-internal';
import { Route } from '../interfaces/route';
import { RouterSlot } from '../components/router-slot';
import { RouterLink } from '../components/router-link';

export class XeitoRouterPlugin extends XeitoPlugin {

  // Global history instance
  private history: History;

  // Observable that emits the route update
  private routeUpdate$: Subject<Update> = new Subject();

  // Observable that emits the current route params
  private params$: Subject<any> = new Subject();

  // Array of routes to be used by the router
  private routes: Route[];

  /**
   * Install the router plugin
   * This method is called by the Xeito framework when the plugin is registered
   * @param options The router options
   */
  install(options: RouterOptions) {
    if (!options) throw new Error('Router options are required');

    // Store the routes
    this.routes = options.routes;

    // Initialize the history instance based on the strategy
    this.initializeHistory(options.strategy || 'browser');

    // Register the router global property    
    this.registerGlobalProperty('router', this.getRouterInstance());

    // Register the router internal global property
    this.registerGlobalProperty('routerInternal', this.getRouterInternalInstance());

    // Register the router slot component
    this.registerGlobalComponent(RouterSlot);

    // Register the router link component
    this.registerGlobalComponent(RouterLink);

    // Register the components for the routes as global components
    this.registerRouteComponentsAsGlobal(this.routes);
  }

  /**
   * Create the history instance based on the strategy supplied by the user
   * @param strategy The strategy to use
   */
  initializeHistory(strategy: 'hash' | 'browser' | 'memory') {
    // Initialize the history instance based on the strategy
    if (strategy === 'hash') this.history = createHashHistory();
    else if (strategy === 'memory') this.history = createMemoryHistory();
    else this.history = createBrowserHistory();

    // Notify the route update observable when the history changes
    // and store the active update
    this.history.listen((update: Update) => {
      this.routeUpdate$.next(update);
    });
  }

  /**
   * Return the router instance
   * This is exposed to the user and can be used to navigate between routes
   * It can be used in the components using the '@Global' decorator
   * eg: @Global() router: XeitoRouter;
   * @returns The router instance
   */
  getRouterInstance(): XeitoRouter {
    return {
      routeUpdate: this.routeUpdate$.asObservable(),
      params: this.params$.asObservable(),
      location: () => this.history.location,
      push: (path: string, state?: any) => this.history.push(path, state),
      replace: (path: string, state?: any) => this.history.replace(path, state),
      go: (delta: number) => this.history.go(delta),
      back: () => this.history.back(),
      forward: () => this.history.forward(),
      createHref: (path: string) => this.history.createHref(path),
    };
  }

  /**
   * Router internal instance used in the router-slot component to render the active route
   * This is not exposed to the user and is only used internally
   * @returns The router internal instance
   */
  getRouterInternalInstance(): RouterInternal {
    return {
      routes: this.routes,
      params: this.params$,
      previousRoute: new BehaviorSubject({children: this.routes} as Route),
      pathAccumulator: new BehaviorSubject(''),
    };
  }

  /**
   * Register the components for the routes as global components
   * This is done to allow components declared in the routes to use the '@Global' decorator
   * @param routes List of routes
   */
  registerRouteComponentsAsGlobal(routes: Route[]) {
    routes.forEach(route => {
      if (route.component) this.registerGlobalComponent(route.component);
      if (route.children) this.registerRouteComponentsAsGlobal(route.children);
    });
  }
  
}