# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

### [0.1.8](https://github.com/aerotoad/xeito/compare/v0.1.7...v0.1.8) (2023-01-12)


### ⚠ BREAKING CHANGES

* onChanges() method replaced by onPropChange().
* Interface AttributeChanges renamed as PropChange.

* !refactor(props): Rename mehthod an interface for prop changes  ([bd1e241](https://github.com/aerotoad/xeito/commit/bd1e241b41e352d4a7382546190cc967d846145a))

### [0.1.7](https://github.com/aerotoad/xeito/compare/v0.1.6...v0.1.7) (2023-01-10)

### [0.1.6](https://github.com/aerotoad/xeito/compare/v0.0.6...v0.1.6) (2023-01-10)


### Features

* **actions:** Add action decorator ([668b21a](https://github.com/aerotoad/xeito/commit/668b21a4c6453e8340d89c58b371b859858dde46))
* Add .xeitorc to generated projects ([4c2b843](https://github.com/aerotoad/xeito/commit/4c2b84371ac68acad51612094c34baa6f0a039dc))
* Add base Xeito class ([da1bdd4](https://github.com/aerotoad/xeito/commit/da1bdd46e62fb3ef185aa0177fd1c3822dfaac81))
* Add component decorator ([21216bd](https://github.com/aerotoad/xeito/commit/21216bd8f27d348618d72c6774d309c86084b565))
* Add decorator to access global properties ([a70f0f2](https://github.com/aerotoad/xeito/commit/a70f0f2bd0ce6979374680132f9ca87dd449019d))
* Add event decorator ([aaa6ae7](https://github.com/aerotoad/xeito/commit/aaa6ae70993367475676a8192b8661195eb6ed78))
* Add new uhtml dependency ([33d3f2d](https://github.com/aerotoad/xeito/commit/33d3f2dc14f70e1348cb44df9d342925eed0b7e3))
* Add prop and emit decorators and functionality ([4e23c89](https://github.com/aerotoad/xeito/commit/4e23c89e5dc456f63a729ab107bcfe63534e1723))
* Add prop decorator ([ec4ac6a](https://github.com/aerotoad/xeito/commit/ec4ac6a86f29023617d72bbe17b56a16520a4d5b))
* Add Ref decorator ([9e69d00](https://github.com/aerotoad/xeito/commit/9e69d0073c2a91339a0705cfe362d113f362f1ad))
* Add State decorator ([7444b7d](https://github.com/aerotoad/xeito/commit/7444b7d3cec603e0bdaee0c9435254bda3516fc4))
* Add support for plugins and global actions ([1088d38](https://github.com/aerotoad/xeito/commit/1088d384428c1b6c866039c8ff8466ba6586c5e2))
* Add XeitoComponent base class and required interfaces ([37ed0ea](https://github.com/aerotoad/xeito/commit/37ed0eaf7fcfaee804615e4154dbe73b35be7743))
* **batching:** Add batched updates  ([d07ee05](https://github.com/aerotoad/xeito/commit/d07ee05b95bd0839c06116d468ae7650cf340013))
* Change lifecycle methods and update logic ([e913fe4](https://github.com/aerotoad/xeito/commit/e913fe411ba65130fe62902ae2b524a13b87c0b1))
* **component:** Handle component style injection ([d9de706](https://github.com/aerotoad/xeito/commit/d9de706ebd59e905f0d481155a785a62b2d30e11))
* **components:** Pass the component data as a custom object ([31bb30f](https://github.com/aerotoad/xeito/commit/31bb30f4d7b964dc10dda0c792663abb57d03373))
* **core:** Add component hooks ([b064953](https://github.com/aerotoad/xeito/commit/b064953d52f62da09b1fe989e8daf3ac0bc40dbf))
* **core:** Update exports ([233e6d3](https://github.com/aerotoad/xeito/commit/233e6d340ff420fd4e6582e156bfc315935c02c3))
* Export core interfaces as types ([d429751](https://github.com/aerotoad/xeito/commit/d42975112ff59418bedb4a574089d8a0e5a4fd32))
* **generators:** Update component generator to use new core structure ([23f45c4](https://github.com/aerotoad/xeito/commit/23f45c40bee3857e23f4070b43b799df814fce57))
* **global decorator:** Allow explicit key lookup ([080f62f](https://github.com/aerotoad/xeito/commit/080f62f9ecab69e6b84ebe66936705c6a5c1483a))
* Move logic away from decorator and separate state and props ([9bc5506](https://github.com/aerotoad/xeito/commit/9bc5506eb50f28ac924aec96aa2f2af7c71c6695))
* **pipe:** Cache and return previous value if no change is detected ([d072eb9](https://github.com/aerotoad/xeito/commit/d072eb96d06547603217ebebd8c7643b489ed895))
* **pipes:** Add support for global pipes ([0501c62](https://github.com/aerotoad/xeito/commit/0501c62a9f9a3436bc2f0798ed9a977e65875378))
* **pipes:** Add support for pipes ([97d822c](https://github.com/aerotoad/xeito/commit/97d822ca04fc93c22e5ef26d0ede40c01059af02))
* Prompt for name if not provided ([4b1c473](https://github.com/aerotoad/xeito/commit/4b1c473e4c442a12dd60c3ea0705a00ad936f981))
* **prop:** Cleanup prop code and avoid unnecessary updates ([fe58917](https://github.com/aerotoad/xeito/commit/fe58917f2f6f2ce438b730c129bdb0ec8d2faabd))
* **prop:** Update decorator to use new internal variable setters ([bb5c1b6](https://github.com/aerotoad/xeito/commit/bb5c1b662cc3c45086957c16497c714fb4358cb9))
* Redo the injection package to not use reflect-metadata ([94931c0](https://github.com/aerotoad/xeito/commit/94931c08152365890fa9b20f23bab5dca0d750f6))
* **refs:** Add support for refs ([0d92f4f](https://github.com/aerotoad/xeito/commit/0d92f4f442df33e4bf6ac458e123c347a1eb282f))
* **router:** Rewrite entire router with new architecture ([1a72539](https://github.com/aerotoad/xeito/commit/1a72539bf58bd6e2cf36dcd7d45e6fd7500c0bcb))
* Show error if running g in a non-xeito folder ([c902f94](https://github.com/aerotoad/xeito/commit/c902f9433210b6bfeab63ff3057745c1ebfaf087))
* **slotContent:** Handle text and comments nodes in slotContent ([2befa63](https://github.com/aerotoad/xeito/commit/2befa632fedc63e55fe0d344a11a0c55dba25e36))
* **slots:** Add support for slotted content without shadowDOM  ([eee846c](https://github.com/aerotoad/xeito/commit/eee846c4f46e69c55554812c1d0803336a0dc9dc))
* **state:** Use different refresh approach and better proxy ([6ba69d6](https://github.com/aerotoad/xeito/commit/6ba69d6ff054ba191f433471ca026ec5bb6e34ea))
* Track component instances to prevent reloads if not unmounted ([26f543f](https://github.com/aerotoad/xeito/commit/26f543f59c3e08980a9e3a103602f32c0ddae063))
* Update examples ([1f5af70](https://github.com/aerotoad/xeito/commit/1f5af700f90a91871562871aee267afaa49c82b1))
* Update examples ([2bde184](https://github.com/aerotoad/xeito/commit/2bde184762f050f6f508cd8243dd470194539e1f))
* Update examples ([aa2a64a](https://github.com/aerotoad/xeito/commit/aa2a64ad51d35d80d55433de83a90d143acba88f))
* Update examples ([7530845](https://github.com/aerotoad/xeito/commit/75308452f5ae6a0efa17f1f82691253368ba3a93))
* Use .xeitorc to generate files ([3d94594](https://github.com/aerotoad/xeito/commit/3d94594ab3ef4310a27dae16652cab38f2cbb279))
* Use new lifecycle events ([2a7b5ab](https://github.com/aerotoad/xeito/commit/2a7b5abaed68d4e2536315387ef8cd1649a89196))
* Use XeitoInternals interface and add space for imported services ([f0410b6](https://github.com/aerotoad/xeito/commit/f0410b64dc3f1adb2108f379f77e6cfebd8f3193))


### Bug Fixes

* Add missing export event ([45bf216](https://github.com/aerotoad/xeito/commit/45bf216d43e6249bc55e98bae7418eabbcb20f88))
* **emitter:** Export emitter as type ([e86272c](https://github.com/aerotoad/xeito/commit/e86272cf873e57ea5a60dab1c764edc399291214))
* Import reflect-metadata clean old imports ([b47e69c](https://github.com/aerotoad/xeito/commit/b47e69c55a223d58cb989469981742cb0edbbc63))
* Missing dependency ([3450c58](https://github.com/aerotoad/xeito/commit/3450c58ed473519ae822422e767c9ea637ec04b1))
* **plugin:** Wrong file name ([f9aba63](https://github.com/aerotoad/xeito/commit/f9aba63bec93f9aa3112669c22811bfe488c26bc))
* Props react only to binded properties ([607fc5c](https://github.com/aerotoad/xeito/commit/607fc5c4b2a0a2f316a4a19577577cea17062eb9))
* **ref:** Missing ref export ([a7a02b4](https://github.com/aerotoad/xeito/commit/a7a02b4ee64df5ca5f6268b58d482d462f974964))
* **routing:** Default redirects not loading child router views ([a158af5](https://github.com/aerotoad/xeito/commit/a158af544d65e896c6c047be50cb75e488ef585a))
* **slot:** Fix runtime errors when children are null ([b246f7f](https://github.com/aerotoad/xeito/commit/b246f7f436340b08029accf83d741a46111724db))
* **state:** Store state values in class object to prevent collisions ([4082458](https://github.com/aerotoad/xeito/commit/40824582227bb860b89713a6cca47c5e3e6ecbce))
* Update exports ([6f2597a](https://github.com/aerotoad/xeito/commit/6f2597a40863d13a944620e27a5aaaa82e2f8b51))
* Update exports ([f6aa4b9](https://github.com/aerotoad/xeito/commit/f6aa4b92899e138084fcffe4265e82a84e5f62df))
* Wrong hook call ([6e3d567](https://github.com/aerotoad/xeito/commit/6e3d56723830ae650ca66486c689482d0adc2e4f))
* Wrong property for children global assign ([597e53a](https://github.com/aerotoad/xeito/commit/597e53ab279689d8b9320e36ccfa506b51622063))
