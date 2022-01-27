'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">food-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-d212aa8ebd333e29cdf4afec60de916020c9c01ce844d7f073498743a413569fccbb856e1266b8a76269901491b5a2f4de3353ba0c9b129543aedefbe656f7d8"' : 'data-target="#xs-controllers-links-module-AppModule-d212aa8ebd333e29cdf4afec60de916020c9c01ce844d7f073498743a413569fccbb856e1266b8a76269901491b5a2f4de3353ba0c9b129543aedefbe656f7d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d212aa8ebd333e29cdf4afec60de916020c9c01ce844d7f073498743a413569fccbb856e1266b8a76269901491b5a2f4de3353ba0c9b129543aedefbe656f7d8"' :
                                            'id="xs-controllers-links-module-AppModule-d212aa8ebd333e29cdf4afec60de916020c9c01ce844d7f073498743a413569fccbb856e1266b8a76269901491b5a2f4de3353ba0c9b129543aedefbe656f7d8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d212aa8ebd333e29cdf4afec60de916020c9c01ce844d7f073498743a413569fccbb856e1266b8a76269901491b5a2f4de3353ba0c9b129543aedefbe656f7d8"' : 'data-target="#xs-injectables-links-module-AppModule-d212aa8ebd333e29cdf4afec60de916020c9c01ce844d7f073498743a413569fccbb856e1266b8a76269901491b5a2f4de3353ba0c9b129543aedefbe656f7d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d212aa8ebd333e29cdf4afec60de916020c9c01ce844d7f073498743a413569fccbb856e1266b8a76269901491b5a2f4de3353ba0c9b129543aedefbe656f7d8"' :
                                        'id="xs-injectables-links-module-AppModule-d212aa8ebd333e29cdf4afec60de916020c9c01ce844d7f073498743a413569fccbb856e1266b8a76269901491b5a2f4de3353ba0c9b129543aedefbe656f7d8"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CartModule-26da8fa64c4a5ba706ea702a6e487f7d2f48fc1b7ae87344ad9baaddbe20169c73ed33f639171f32cace4ebb9095a2809ade14fbbf7910bbc8b1ce192ea60f4a"' : 'data-target="#xs-controllers-links-module-CartModule-26da8fa64c4a5ba706ea702a6e487f7d2f48fc1b7ae87344ad9baaddbe20169c73ed33f639171f32cace4ebb9095a2809ade14fbbf7910bbc8b1ce192ea60f4a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartModule-26da8fa64c4a5ba706ea702a6e487f7d2f48fc1b7ae87344ad9baaddbe20169c73ed33f639171f32cace4ebb9095a2809ade14fbbf7910bbc8b1ce192ea60f4a"' :
                                            'id="xs-controllers-links-module-CartModule-26da8fa64c4a5ba706ea702a6e487f7d2f48fc1b7ae87344ad9baaddbe20169c73ed33f639171f32cace4ebb9095a2809ade14fbbf7910bbc8b1ce192ea60f4a"' }>
                                            <li class="link">
                                                <a href="controllers/CartController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartModule-26da8fa64c4a5ba706ea702a6e487f7d2f48fc1b7ae87344ad9baaddbe20169c73ed33f639171f32cace4ebb9095a2809ade14fbbf7910bbc8b1ce192ea60f4a"' : 'data-target="#xs-injectables-links-module-CartModule-26da8fa64c4a5ba706ea702a6e487f7d2f48fc1b7ae87344ad9baaddbe20169c73ed33f639171f32cace4ebb9095a2809ade14fbbf7910bbc8b1ce192ea60f4a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartModule-26da8fa64c4a5ba706ea702a6e487f7d2f48fc1b7ae87344ad9baaddbe20169c73ed33f639171f32cace4ebb9095a2809ade14fbbf7910bbc8b1ce192ea60f4a"' :
                                        'id="xs-injectables-links-module-CartModule-26da8fa64c4a5ba706ea702a6e487f7d2f48fc1b7ae87344ad9baaddbe20169c73ed33f639171f32cace4ebb9095a2809ade14fbbf7910bbc8b1ce192ea60f4a"' }>
                                        <li class="link">
                                            <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RestaurentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestaurentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PaymentModule-fe23b5a485fd0001bc2876305d55e9a50b6a808cfbb4325f0be6156e1beead3b326ff519090a099cef51329b5736f8f728086585db4dbbc975c61a6bc91748af"' : 'data-target="#xs-controllers-links-module-PaymentModule-fe23b5a485fd0001bc2876305d55e9a50b6a808cfbb4325f0be6156e1beead3b326ff519090a099cef51329b5736f8f728086585db4dbbc975c61a6bc91748af"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentModule-fe23b5a485fd0001bc2876305d55e9a50b6a808cfbb4325f0be6156e1beead3b326ff519090a099cef51329b5736f8f728086585db4dbbc975c61a6bc91748af"' :
                                            'id="xs-controllers-links-module-PaymentModule-fe23b5a485fd0001bc2876305d55e9a50b6a808cfbb4325f0be6156e1beead3b326ff519090a099cef51329b5736f8f728086585db4dbbc975c61a6bc91748af"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PaymentModule-fe23b5a485fd0001bc2876305d55e9a50b6a808cfbb4325f0be6156e1beead3b326ff519090a099cef51329b5736f8f728086585db4dbbc975c61a6bc91748af"' : 'data-target="#xs-injectables-links-module-PaymentModule-fe23b5a485fd0001bc2876305d55e9a50b6a808cfbb4325f0be6156e1beead3b326ff519090a099cef51329b5736f8f728086585db4dbbc975c61a6bc91748af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-fe23b5a485fd0001bc2876305d55e9a50b6a808cfbb4325f0be6156e1beead3b326ff519090a099cef51329b5736f8f728086585db4dbbc975c61a6bc91748af"' :
                                        'id="xs-injectables-links-module-PaymentModule-fe23b5a485fd0001bc2876305d55e9a50b6a808cfbb4325f0be6156e1beead3b326ff519090a099cef51329b5736f8f728086585db4dbbc975c61a6bc91748af"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RestaurentModule.html" data-type="entity-link" >RestaurentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RestaurentModule-9357acf5985272a3811dfb63bbcdc3b2d9ea57491b436716bb73dac9a386ece72f732e8b8e1f6186d1be7991ac0d3953ea5fe60f8189c07c1f12a2cd7cc98f7e"' : 'data-target="#xs-controllers-links-module-RestaurentModule-9357acf5985272a3811dfb63bbcdc3b2d9ea57491b436716bb73dac9a386ece72f732e8b8e1f6186d1be7991ac0d3953ea5fe60f8189c07c1f12a2cd7cc98f7e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RestaurentModule-9357acf5985272a3811dfb63bbcdc3b2d9ea57491b436716bb73dac9a386ece72f732e8b8e1f6186d1be7991ac0d3953ea5fe60f8189c07c1f12a2cd7cc98f7e"' :
                                            'id="xs-controllers-links-module-RestaurentModule-9357acf5985272a3811dfb63bbcdc3b2d9ea57491b436716bb73dac9a386ece72f732e8b8e1f6186d1be7991ac0d3953ea5fe60f8189c07c1f12a2cd7cc98f7e"' }>
                                            <li class="link">
                                                <a href="controllers/RestaurentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestaurentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RestaurentModule-9357acf5985272a3811dfb63bbcdc3b2d9ea57491b436716bb73dac9a386ece72f732e8b8e1f6186d1be7991ac0d3953ea5fe60f8189c07c1f12a2cd7cc98f7e"' : 'data-target="#xs-injectables-links-module-RestaurentModule-9357acf5985272a3811dfb63bbcdc3b2d9ea57491b436716bb73dac9a386ece72f732e8b8e1f6186d1be7991ac0d3953ea5fe60f8189c07c1f12a2cd7cc98f7e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RestaurentModule-9357acf5985272a3811dfb63bbcdc3b2d9ea57491b436716bb73dac9a386ece72f732e8b8e1f6186d1be7991ac0d3953ea5fe60f8189c07c1f12a2cd7cc98f7e"' :
                                        'id="xs-injectables-links-module-RestaurentModule-9357acf5985272a3811dfb63bbcdc3b2d9ea57491b436716bb73dac9a386ece72f732e8b8e1f6186d1be7991ac0d3953ea5fe60f8189c07c1f12a2cd7cc98f7e"' }>
                                        <li class="link">
                                            <a href="injectables/RestaurentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestaurentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-defbba31e2def9ee8bb15097c10f029bdeb9ad61109c0183625b26d20fae8764e99f4c7d7d6605665c409dff852f2ea921c403b09ffdfb38efd2ce9d281fdd45"' : 'data-target="#xs-controllers-links-module-UserModule-defbba31e2def9ee8bb15097c10f029bdeb9ad61109c0183625b26d20fae8764e99f4c7d7d6605665c409dff852f2ea921c403b09ffdfb38efd2ce9d281fdd45"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-defbba31e2def9ee8bb15097c10f029bdeb9ad61109c0183625b26d20fae8764e99f4c7d7d6605665c409dff852f2ea921c403b09ffdfb38efd2ce9d281fdd45"' :
                                            'id="xs-controllers-links-module-UserModule-defbba31e2def9ee8bb15097c10f029bdeb9ad61109c0183625b26d20fae8764e99f4c7d7d6605665c409dff852f2ea921c403b09ffdfb38efd2ce9d281fdd45"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-defbba31e2def9ee8bb15097c10f029bdeb9ad61109c0183625b26d20fae8764e99f4c7d7d6605665c409dff852f2ea921c403b09ffdfb38efd2ce9d281fdd45"' : 'data-target="#xs-injectables-links-module-UserModule-defbba31e2def9ee8bb15097c10f029bdeb9ad61109c0183625b26d20fae8764e99f4c7d7d6605665c409dff852f2ea921c403b09ffdfb38efd2ce9d281fdd45"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-defbba31e2def9ee8bb15097c10f029bdeb9ad61109c0183625b26d20fae8764e99f4c7d7d6605665c409dff852f2ea921c403b09ffdfb38efd2ce9d281fdd45"' :
                                        'id="xs-injectables-links-module-UserModule-defbba31e2def9ee8bb15097c10f029bdeb9ad61109c0183625b26d20fae8764e99f4c7d7d6605665c409dff852f2ea921c403b09ffdfb38efd2ce9d281fdd45"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CartController.html" data-type="entity-link" >CartController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PaymentController.html" data-type="entity-link" >PaymentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RestaurentController.html" data-type="entity-link" >RestaurentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Address.html" data-type="entity-link" >Address</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Cart.html" data-type="entity-link" >Cart</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Menu.html" data-type="entity-link" >Menu</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Restaurent.html" data-type="entity-link" >Restaurent</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtServiceClass.html" data-type="entity-link" >JwtServiceClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Maintenance.html" data-type="entity-link" >Maintenance</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeOrmInterface.html" data-type="entity-link" >TypeOrmInterface</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link" >PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestaurentService.html" data-type="entity-link" >RestaurentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SwaggerConfig.html" data-type="entity-link" >SwaggerConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});