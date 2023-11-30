import './polyfills.server.mjs';
import {
  CommonModule,
  ElementRef,
  EventEmitter,
  InjectionToken,
  NgForOf,
  NgIf,
  PLATFORM_ID,
  Renderer2,
  Router,
  RouterLink,
  RouterOutlet,
  RuntimeError,
  Title,
  TitleStrategy,
  bootstrapApplication,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  isPlatformBrowser,
  isPromise,
  isSubscribable,
  map,
  mergeApplicationConfig,
  provideClientHydration,
  provideRouter,
  provideServerRendering,
  signal,
  withInMemoryScrolling,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-M723J7LB.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-MD6NWHS6.mjs";

// src/app/components/button/button.component.ts
var ButtonComponent = /* @__PURE__ */ (() => {
  const _ButtonComponent = class _ButtonComponent {
    constructor() {
      this.label = "";
      this.customClasses = "";
      this.link = "";
      this.backgroundStyles = "";
    }
  };
  _ButtonComponent.\u0275fac = function ButtonComponent_Factory(t) {
    return new (t || _ButtonComponent)();
  };
  _ButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ButtonComponent,
    selectors: [["sobol-button"]],
    inputs: {
      label: "label",
      customClasses: "customClasses",
      link: "link",
      backgroundStyles: "backgroundStyles"
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 4,
    consts: [[1, "bg-[#ff8686e6]", "hover:bg-white", "max-w-[fit-content]", "transition-all", "delay-[100ms]", "text-white", "hover:text-[#ff8686e6]", "text-center", "font-bold", "py-4", "px-[2rem]", "rounded-[30px]", 3, "routerLink"]],
    template: function ButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.customClasses);
        \u0275\u0275property("routerLink", ctx.link);
        \u0275\u0275advance(1);
        \u0275\u0275textInterpolate1(" ", ctx.label, "\n");
      }
    },
    dependencies: [CommonModule, RouterLink],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let ButtonComponent2 = _ButtonComponent;
  return ButtonComponent2;
})();

// src/app/components/navbar/navbar.component.ts
var NavbarComponent = /* @__PURE__ */ (() => {
  const _NavbarComponent = class _NavbarComponent {
    toggleNavbar() {
      if (window.innerWidth < 992) {
        this.isNavbarOpen = !this.isNavbarOpen;
      }
    }
  };
  _NavbarComponent.\u0275fac = function NavbarComponent_Factory(t) {
    return new (t || _NavbarComponent)();
  };
  _NavbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NavbarComponent,
    selectors: [["sobol-navbar"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 43,
    vars: 4,
    consts: [[1, "header", "bg-blue-teal-gradient"], [1, "m-auto", "w-full", "lg:w-[90%]", "hidden", "md:flex", "max-h-[2.5rem]", "bg-slate-600", "justify-between", "border-white", "items-center", "p-2", "border-b", "text-sm"], [1, ""], [1, "flex", "text-white"], ["href", "https://maps.app.goo.gl/bjcRAXAudMA9Lvic6", "target", "_blank", 1, "flex", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "fill-current", "text-white"], ["d", "M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"], [1, "ml-2", "text-sm"], [1, "flex", "justify-end", "text-white"], ["href", "tel:(949)-298-7967", 1, "text-white", "font-bold"], [1, "flex", "w-full", "lg:w-[90%]", "m-auto", "max-h-[5rem]", "items-center", "justify-between", "p-2"], [1, "flex", "items-center", "w-1/2", "sm:w-[30%]", "lg:w-[20%]", "h-auto"], ["routerLink", "/"], ["src", "../../../assets/images/logo.png", "alt", "Logo", 1, "w-full", "sm:ml-10", "md:ml-0", "md:-mr-20", "md:w-[17rem]", "h-[3.8rem]", "md:h-[4.5rem]", "object-cover"], [1, "hamburger", "p-2", "flex", "items-start", "justify-end", "w-1/2", "md:hidden", "z-[99999]", "cursor-pointer"], [1, "mr-8", 3, "click"], [1, "bar"], [1, "md:block", "md:w-auto"], [1, "navbar"], [1, "md:flex", "items-center"], [3, "click"], ["routerLink", "/", 1, "navlink"], ["routerLink", "about", 1, "navlink"], [1, "md:ml-4", 3, "click"], ["routerLink", "contact", 1, "navlink"], [1, "md:ml-6", "mt-3", "md:mt-0", 3, "click"], ["customClasses", "", "link", "appointment", "label", "Book Appointment"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3)(4, "li")(5, "a", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 5);
        \u0275\u0275element(7, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "span", 7)(9, "b");
        \u0275\u0275text(10, "Sobol Orthopedic Medical Group");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " 8618 ");
        \u0275\u0275elementStart(12, "b");
        \u0275\u0275text(13, " Sepulveda BLVD Los Angeles ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " 90045");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "ul", 8)(17, "li")(18, "a", 9);
        \u0275\u0275text(19, "(949)-298-7967");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "a", 12);
        \u0275\u0275element(23, "img", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 14)(25, "div", 15);
        \u0275\u0275listener("click", function NavbarComponent_Template_div_click_25_listener() {
          return ctx.toggleNavbar();
        });
        \u0275\u0275element(26, "div", 16)(27, "div", 16)(28, "div", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 17)(30, "nav", 18)(31, "ul", 19)(32, "li", 20);
        \u0275\u0275listener("click", function NavbarComponent_Template_li_click_32_listener() {
          return ctx.toggleNavbar();
        });
        \u0275\u0275elementStart(33, "a", 21);
        \u0275\u0275text(34, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "li", 20);
        \u0275\u0275listener("click", function NavbarComponent_Template_li_click_35_listener() {
          return ctx.toggleNavbar();
        });
        \u0275\u0275elementStart(36, "a", 22);
        \u0275\u0275text(37, "About Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "li", 23);
        \u0275\u0275listener("click", function NavbarComponent_Template_li_click_38_listener() {
          return ctx.toggleNavbar();
        });
        \u0275\u0275elementStart(39, "a", 24);
        \u0275\u0275text(40, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "li", 25);
        \u0275\u0275listener("click", function NavbarComponent_Template_li_click_41_listener() {
          return ctx.toggleNavbar();
        });
        \u0275\u0275element(42, "sobol-button", 26);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(24);
        \u0275\u0275classMap(ctx.isNavbarOpen ? "checked" : "");
        \u0275\u0275advance(6);
        \u0275\u0275classMap(ctx.isNavbarOpen ? "open" : "");
      }
    },
    dependencies: [CommonModule, RouterLink, ButtonComponent],
    styles: ["\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 50;\n  margin-bottom: 2rem;\n  max-height: 8rem;\n  min-height: 5rem;\n  width: 100%;\n}\n.navbar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 4rem;\n  margin-top: 1rem;\n  display: flex;\n  height: fit-content;\n  --tw-translate-x: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: center;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n  transition-property: all;\n  transition-duration: 150ms;\n  transition-duration: 1s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n@media (min-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 0px;\n    height: 4rem;\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    flex-direction: column;\n    background-color: transparent;\n    padding: 0px;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    box-shadow:\n      var(--tw-ring-offset-shadow, 0 0 #0000),\n      var(--tw-ring-shadow, 0 0 #0000),\n      var(--tw-shadow);\n    transition-property: none;\n  }\n}\n@media (min-width: 1024px) {\n  .navbar[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n}\n.navbar.open[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n.navlink[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-weight: 600;\n}\n.navlink[_ngcontent-%COMP%]:hover {\n  color: #ff8686e6;\n}\n@media (min-width: 768px) {\n  .navlink[_ngcontent-%COMP%] {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n}\n.bar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 3px;\n  background-color: #fff;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n.hamburger.checked[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(-45deg) translate(-7px, 6px);\n}\n.hamburger.checked[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.hamburger.checked[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(45deg) translate(-7px, -6px);\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLmhlYWRlciB7XHJcbiAgQGFwcGx5IGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgei01MCBtaW4taC1bNXJlbV0gbWF4LWgtWzhyZW1dIG1iLTg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIEBhcHBseSBhYnNvbHV0ZSBtZDpzdGF0aWMgZmxleCBtZDpmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1maXQgbWQ6aC1bNHJlbV0gcmlnaHQtMCB0cmFuc2xhdGUteC1bMTAwJV0gbWQ6dHJhbnNsYXRlLXgtMCB0cmFuc2l0aW9uLWFsbCBtZDp0cmFuc2l0aW9uLW5vbmUgZHVyYXRpb24tWzFzXSBlYXNlLWluLW91dCBiZy13aGl0ZSBtZDpiZy10cmFuc3BhcmVudCByb3VuZGVkIHNoYWRvdy1sZyBweC02IHB5LTQgbXQtNCB0ZXh0LWNlbnRlciBtZDpwLTAgbWQ6bXQtMCBtZDpzaGFkb3ctbm9uZSB0b3AtMTYgbGc6dG9wLTA7XHJcbn1cclxuXHJcbi5uYXZiYXIub3BlbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuLm5hdmxpbmsge1xyXG4gIEBhcHBseSBweS0yIGlubGluZS1ibG9jayBob3Zlcjp0ZXh0LVsjZmY4Njg2ZTZdIG1kOnRleHQtd2hpdGUgbWQ6cHgtMiBmb250LXNlbWlib2xkO1xyXG59XHJcblxyXG4vKiBIYW1idXJnZXIgYmFyIHN0eWxlcyAqL1xyXG4uYmFyIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogNnB4IDA7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmhhbWJ1cmdlci5jaGVja2VkIC5iYXI6bnRoLWNoaWxkKDEpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtN3B4LCA2cHgpO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLmNoZWNrZWQgLmJhcjpudGgtY2hpbGQoMikge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIuY2hlY2tlZCAuYmFyOm50aC1jaGlsZCgzKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtN3B4LCAtNnB4KTtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0UsQ0FBQTtBQUFBLFlBQUE7QUFBQSxPQUFBO0FBQUEsUUFBQTtBQUFBLFdBQUE7QUFBQSxpQkFBQTtBQUFBLGNBQUE7QUFBQSxjQUFBO0FBQUEsU0FBQTtBQUFvRTtBQUlwRSxDQUFBO0FBQUEsWUFBQTtBQUFBLFNBQUE7QUFBQSxPQUFBO0FBQUEsY0FBQTtBQUFBLFdBQUE7QUFBQSxVQUFBO0FBQUEsb0JBQUE7QUFBQSxhQUFBLFVBQUEsSUFBQSxpQkFBQSxFQUFBLElBQUEsbUJBQUEsT0FBQSxJQUFBLGNBQUEsTUFBQSxJQUFBLGNBQUEsTUFBQSxJQUFBLGNBQUEsT0FBQSxJQUFBLGVBQUEsT0FBQSxJQUFBO0FBQUEsZUFBQTtBQUFBLG1CQUFBO0FBQUEsaUJBQUE7QUFBQSxtQkFBQTtBQUFBLG9CQUFBLElBQUEsSUFBQSxJQUFBLElBQUEsRUFBQSxJQUFBO0FBQUEsZ0JBQUE7QUFBQSxpQkFBQTtBQUFBLGVBQUE7QUFBQSxrQkFBQTtBQUFBLGNBQUE7QUFBQSxlQUFBLEVBQUEsS0FBQSxLQUFBLEtBQUEsSUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLElBQUEsRUFBQSxFQUFBLElBQUEsSUFBQSxLQUFBLElBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTtBQUFBLHVCQUFBLEVBQUEsS0FBQSxLQUFBLEtBQUEsSUFBQSxrQkFBQSxFQUFBLEVBQUEsSUFBQSxJQUFBLEtBQUEsSUFBQTtBQUFBO0lBQUEsSUFBQSx1QkFBQSxFQUFBLEVBQUEsRUFBQSxNQUFBO0lBQUEsSUFBQSxnQkFBQSxFQUFBLEVBQUEsRUFBQSxNQUFBO0lBQUEsSUFBQTtBQUFBLHVCQUFBO0FBQUEsdUJBQUE7QUFBQSx1QkFBQTtBQUFBLDhCQUFBLGFBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUE7QUFBc1Q7QUFBdFQsT0FBQSxDQUFBLFNBQUEsRUFBQTtBQUFBLEdBQUE7QUFBQSxjQUFBO0FBQUEsZ0JBQUE7QUFBQSxZQUFBO0FBQUEsc0JBQUE7QUFBQSxlQUFBLFVBQUEsSUFBQSxpQkFBQSxFQUFBLElBQUEsbUJBQUEsT0FBQSxJQUFBLGNBQUEsTUFBQSxJQUFBLGNBQUEsTUFBQSxJQUFBLGNBQUEsT0FBQSxJQUFBLGVBQUEsT0FBQSxJQUFBO0FBQUEsb0JBQUE7QUFBQSxzQkFBQTtBQUFBLGFBQUE7QUFBQSxpQkFBQSxFQUFBLEVBQUE7QUFBQSx5QkFBQSxFQUFBLEVBQUE7QUFBQTtNQUFBLElBQUEsdUJBQUEsRUFBQSxFQUFBLEVBQUEsTUFBQTtNQUFBLElBQUEsZ0JBQUEsRUFBQSxFQUFBLEVBQUEsTUFBQTtNQUFBLElBQUE7QUFBQSx5QkFBQTtBQUFzVDtBQUFBO0FBQXRULE9BQUEsQ0FBQSxTQUFBLEVBQUE7QUFBQSxHQUFBO0FBQUEsU0FBQTtBQUFzVDtBQUFBO0FBR3hULENBSEUsTUFHRixDQUFBO0FBQ0UsYUFBQSxXQUFBO0FBQ0Y7QUFHRSxDQUFBO0FBQUEsV0FBQTtBQUFBLGVBQUE7QUFBQSxrQkFBQTtBQUFBLGVBQUE7QUFBbUY7QUFBbkYsQ0FBQSxPQUFBO0FBQUEsU0FBQTtBQUFtRjtBQUFuRixPQUFBLENBQUEsU0FBQSxFQUFBO0FBQUEsR0FBQTtBQUFBLGtCQUFBO0FBQUEsbUJBQUE7QUFBQSx1QkFBQTtBQUFBLFdBQUEsSUFBQSxJQUFBLElBQUEsSUFBQSxFQUFBLElBQUE7QUFBbUY7QUFBQTtBQUlyRixDQUFBO0FBQ0UsU0FBQTtBQUNBLFVBQUE7QUFDQSxvQkFBQTtBQUNBLFVBQUEsSUFBQTtBQUNBLGNBQUE7QUFDRjtBQUVBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FSQSxHQVFBO0FBQ0UsYUFBQSxPQUFBLFFBQUEsVUFBQSxJQUFBLEVBQUE7QUFDRjtBQUVBLENBSkEsU0FJQSxDQUpBLFFBSUEsQ0FaQSxHQVlBO0FBQ0UsV0FBQTtBQUNGO0FBRUEsQ0FSQSxTQVFBLENBUkEsUUFRQSxDQWhCQSxHQWdCQTtBQUNFLGFBQUEsT0FBQSxPQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg== */"]
  });
  let NavbarComponent2 = _NavbarComponent;
  return NavbarComponent2;
})();

// src/app/components/alert/alert.component.ts
var AlertComponent = /* @__PURE__ */ (() => {
  const _AlertComponent = class _AlertComponent {
  };
  _AlertComponent.\u0275fac = function AlertComponent_Factory(t) {
    return new (t || _AlertComponent)();
  };
  _AlertComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AlertComponent,
    selectors: [["sobol-alert"]],
    inputs: {
      errorMessage: "errorMessage",
      successMessage: "successMessage",
      info: "info"
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 30,
    vars: 9,
    consts: [["role", "alert", 1, "alert", "w-[30rem]", "bg-green-200", "border-l-4", "border-green-500", "text-green-700", "p-4"], [1, "flex", "items-center"], [1, "mr-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "font-bold"], ["role", "alert", 1, "alert", "w-[30rem]", "bg-red-200", "border-l-4", "border-red-500", "text-red-700", "p-4"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["role", "alert", 1, "alert", "w-[30rem]", "bg-blue-200", "border-l-4", "border-blue-500", "text-blue-700", "p-4"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-blue-500"]],
    template: function AlertComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(5, "div")(6, "p", 5);
        \u0275\u0275text(7, "Success");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 1)(12, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 7);
        \u0275\u0275element(14, "path", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "div")(16, "p", 5);
        \u0275\u0275text(17, "Error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "div", 9)(21, "div", 1)(22, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(23, "svg", 10);
        \u0275\u0275element(24, "path", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(25, "div")(26, "p", 5);
        \u0275\u0275text(27, "Info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.successMessage != null ? "show" : "");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.successMessage);
        \u0275\u0275advance(1);
        \u0275\u0275classMap(ctx.errorMessage != null ? "show" : "");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.errorMessage);
        \u0275\u0275advance(1);
        \u0275\u0275classMap(ctx.info != null ? "show" : "");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.info);
      }
    },
    styles: ["\n\n.alert[_ngcontent-%COMP%] {\n  position: fixed;\n  top: -100%;\n  left: 30%;\n  z-index: 999999;\n  transition: all 1s ease-in-out;\n}\n@media screen and (max-width: 500px) {\n  .alert[_ngcontent-%COMP%] {\n    width: 96vw;\n    left: 2%;\n  }\n  .alert.show[_ngcontent-%COMP%] {\n    top: 5% !important;\n  }\n}\n.alert.show[_ngcontent-%COMP%] {\n  top: 10% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi5hbGVydCB7XHJcbiAgQGFwcGx5IGZpeGVkIHRvcC1bLTEwMCVdIGxlZnQtWzMwJV0gei1bOTk5OTk5XTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmFsZXJ0IHtcclxuICAgIHdpZHRoOiA5NnZ3O1xyXG4gICAgbGVmdDogMiU7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQuc2hvdyB7XHJcbiAgICB0b3A6IDUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYWxlcnQuc2hvdyB7XHJcbiAgdG9wOiAxMCUgIWltcG9ydGFudDtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0UsQ0FBQTtBQUFBLFlBQUE7QUFBQSxPQUFBO0FBQUEsUUFBQTtBQUFBLFdBQUE7QUFDQSxjQUFBLElBQUEsR0FBQTtBQUQ4QztBQUloRCxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBQUNFLEdBTEE7QUFNRSxXQUFBO0FBQ0EsVUFBQTtBQUNGO0FBRUEsR0FWQSxLQVVBLENBQUE7QUFDRSxTQUFBO0FBQ0Y7QUFDRjtBQUVBLENBZkUsS0FlRixDQUxFO0FBTUEsT0FBQTtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo= */"]
  });
  let AlertComponent2 = _AlertComponent;
  return AlertComponent2;
})();

// src/app/components/footer/footer.component.ts
var FooterComponent = /* @__PURE__ */ (() => {
  const _FooterComponent = class _FooterComponent {
    constructor() {
      this.year = (/* @__PURE__ */ new Date()).getFullYear();
      this.message = null;
    }
    toggleMessage() {
      this.message = "This service isn't available now. Coming soon!";
      setTimeout(() => {
        this.message = null;
      }, 4e3);
    }
  };
  _FooterComponent.\u0275fac = function FooterComponent_Factory(t) {
    return new (t || _FooterComponent)();
  };
  _FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FooterComponent,
    selectors: [["app-footer"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 61,
    vars: 3,
    consts: [[3, "info"], [1, "bg-gray-900", "text-white", "p-10"], [1, "w-[96%]", "md:w-[80%]", "m-auto", "flex", "justify-center", "flex-col", "md:flex-row", "flex-wrap"], [1, "w-full", "lg:w-2/6", "lg:mx-4", "lg:pr-8"], ["src", "../../../assets/images/logo-2.png", "alt", "Logo", 1, "max-w-[15rem]"], [1, "text-gray-400"], [1, "flex", "items-center", "mt-6"], [1, "w-full"], ["for", "grid-last-name", 1, "block", "uppercase", "tracking-wide", "text-gray-600", "text-xs", "font-bold", "mb-2"], [1, "relative", "max-w-[20rem]"], ["type", "email", "placeholder", "Enter Your Email Address", 1, "subscribe-input"], ["type", "button", 1, "subscribe-btn", 3, "click"], [1, "w-full", "lg:w-1/6", "md:ml-7", "mt-8", "lg:mt-0", "lg:mx-4"], [1, "uppercase", "tracking-wider", "font-semibold", "text-gray-500"], [1, "mt-4"], [1, "mt-2"], ["href", "#services", 1, "opacity-75", "hover:opacity-100"], ["href", "#services", "title", "", 1, "opacity-75", "hover:opacity-100"], [1, "w-full", "lg:w-2/6", "mt-8", "lg:mt-0", "lg:mx-4", "lg:pr-8"], ["href", "https://maps.app.goo.gl/bjcRAXAudMA9Lvic6", "target", "_blank", 1, "flex", "items-center", "opacity-75", "hover:opacity-100"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "fill-current"], ["d", "M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"], [1, "ml-3"], ["href", "tel:+1-949-298-7967", "title", "", 1, "flex", "items-center", "opacity-75", "hover:opacity-100"], ["d", "M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"], ["d", "M13 7L11 7 11 13 17 13 17 11 13 11z"], ["href", "tel:(949)-298-7967", 1, "ml-2", "text-lg", "font-bold"], ["href", "mailto:info@sobolorthomed.com", 1, "flex", "items-center", "opacity-75", "hover:opacity-100"], ["d", "M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z"], [1, "w-ful", "flex", "items-center", "justify-center", "mt-8", "lg:mt-0", "lg:mx-4"], [1, "text-sm", "text-gray-400", "mt-12"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "sobol-alert", 0);
        \u0275\u0275elementStart(1, "footer", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "p", 5);
        \u0275\u0275text(6, " Among the best orthopedic care provider you can get out there! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "form", 6)(8, "div", 7)(9, "label", 8);
        \u0275\u0275text(10, " Subscribe for our Newsletter ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275element(12, "input", 10);
        \u0275\u0275elementStart(13, "button", 11);
        \u0275\u0275listener("click", function FooterComponent_Template_button_click_13_listener() {
          return ctx.toggleMessage();
        });
        \u0275\u0275text(14, " Subscribe ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 12)(16, "h5", 13);
        \u0275\u0275text(17, " Treatments ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "ul", 14)(19, "li", 15)(20, "a", 16);
        \u0275\u0275text(21, "Joint Replacement");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li", 15)(23, "a", 17);
        \u0275\u0275text(24, "Sports Medicine");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "li", 15)(26, "a", 17);
        \u0275\u0275text(27, "Physical Therapy");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 18)(29, "h5", 13);
        \u0275\u0275text(30, " Contact Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "ul", 14)(32, "li")(33, "a", 19)(34, "span");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 20);
        \u0275\u0275element(36, "path", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(37, "span", 22);
        \u0275\u0275text(38, " Sobol Orthopedic Medical Group 8618 ");
        \u0275\u0275elementStart(39, "b");
        \u0275\u0275text(40, " Sepulveda BLVD Los Angeles ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " 90045");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "li", 14)(43, "a", 23)(44, "span");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(45, "svg", 20);
        \u0275\u0275element(46, "path", 24)(47, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "span", 22);
        \u0275\u0275text(49, "Call now on: (949)-298-7967");
        \u0275\u0275element(50, "a", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "li", 14)(52, "a", 27)(53, "span");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(54, "svg", 20);
        \u0275\u0275element(55, "path", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(56, "span", 22);
        \u0275\u0275text(57);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(58, "div", 29)(59, "p", 30);
        \u0275\u0275text(60);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("info", ctx.message);
        \u0275\u0275advance(57);
        \u0275\u0275textInterpolate("info@sobolorthomed.com");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" \xA9 ", ctx.year, " Sobol Orthomed. All Rights Reserved. ");
      }
    },
    dependencies: [CommonModule, AlertComponent],
    styles: ["\n\n.subscribe-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(0 51 103 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  line-height: 1.25;\n  --tw-text-opacity: 1;\n  color: rgb(0 51 103 / var(--tw-text-opacity));\n}\n.subscribe-input[_ngcontent-%COMP%]:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 51 103 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.subscribe-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  border-radius: 0.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 51 103 / var(--tw-bg-opacity));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.subscribe-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ff8686e6;\n}\n.lowercase[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLnN1YnNjcmliZS1pbnB1dCB7XHJcbiAgQGFwcGx5IGFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1bIzAwMzM2N10gYm9yZGVyIGJvcmRlci1bIzAwMzM2N10gcm91bmRlZCBweS00IHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLVsjMDAzMzY3XTtcclxufVxyXG5cclxuLnN1YnNjcmliZS1idG4ge1xyXG4gIEBhcHBseSBhYnNvbHV0ZSBoLWZ1bGwgYmctWyMwMDMzNjddIGhvdmVyOmJnLVsjZmY4Njg2ZTZdIHRleHQtd2hpdGUgcHgtNCBweS0yIHRleHQteHMgZm9udC1ib2xkIHJvdW5kZWQgdG9wLTAgcmlnaHQtMDtcclxufVxyXG5cclxuLmxvd2VyY2FzZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFDRSxDQUFBO0FBQUEsV0FBQTtBQUFBLFNBQUE7QUFBQSxjQUFBO0FBQUEsaUJBQUE7QUFBQSxnQkFBQTtBQUFBLHVCQUFBO0FBQUEsZ0JBQUEsSUFBQSxFQUFBLEdBQUEsSUFBQSxFQUFBLElBQUE7QUFBQSxtQkFBQTtBQUFBLG9CQUFBLElBQUEsSUFBQSxJQUFBLElBQUEsRUFBQSxJQUFBO0FBQUEsZUFBQTtBQUFBLGtCQUFBO0FBQUEsZ0JBQUE7QUFBQSxpQkFBQTtBQUFBLGVBQUE7QUFBQSxxQkFBQTtBQUFBLFNBQUEsSUFBQSxFQUFBLEdBQUEsSUFBQSxFQUFBLElBQUE7QUFBK0s7QUFBL0ssQ0FBQSxlQUFBO0FBQUEsdUJBQUE7QUFBQSxnQkFBQSxJQUFBLEVBQUEsR0FBQSxJQUFBLEVBQUEsSUFBQTtBQUFBLG1CQUFBO0FBQUEsb0JBQUEsSUFBQSxJQUFBLElBQUEsSUFBQSxFQUFBLElBQUE7QUFBQSxXQUFBLElBQUEsTUFBQTtBQUFBLGtCQUFBO0FBQStLO0FBSS9LLENBQUE7QUFBQSxZQUFBO0FBQUEsT0FBQTtBQUFBLFNBQUE7QUFBQSxVQUFBO0FBQUEsaUJBQUE7QUFBQSxtQkFBQTtBQUFBLG9CQUFBLElBQUEsRUFBQSxHQUFBLElBQUEsRUFBQSxJQUFBO0FBQUEsZ0JBQUE7QUFBQSxpQkFBQTtBQUFBLGVBQUE7QUFBQSxrQkFBQTtBQUFBLGFBQUE7QUFBQSxlQUFBO0FBQUEsZUFBQTtBQUFBLHFCQUFBO0FBQUEsU0FBQSxJQUFBLElBQUEsSUFBQSxJQUFBLEVBQUEsSUFBQTtBQUFxSDtBQUFySCxDQUFBLGFBQUE7QUFBQSxvQkFBQTtBQUFxSDtBQUd2SCxDQUFBO0FBQ0Usa0JBQUE7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let FooterComponent2 = _FooterComponent;
  return FooterComponent2;
})();

// src/app/app.component.ts
function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
  }
}
var AppComponent = /* @__PURE__ */ (() => {
  const _AppComponent = class _AppComponent {
    constructor() {
      this.IsViewReady = true;
    }
    ngOnInit() {
      setTimeout(() => {
        this.IsViewReady = false;
      }, 3500);
    }
  };
  _AppComponent.\u0275fac = function AppComponent_Factory(t) {
    return new (t || _AppComponent)();
  };
  _AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AppComponent,
    selectors: [["sobol-root"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 4,
    vars: 1,
    consts: [["class", "loader", 4, "ngIf"], [1, "loader"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AppComponent_div_0_Template, 1, 0, "div", 0);
        \u0275\u0275element(1, "sobol-navbar")(2, "router-outlet")(3, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.IsViewReady);
      }
    },
    dependencies: [CommonModule, NgIf, RouterOutlet, NavbarComponent, FooterComponent],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let AppComponent2 = _AppComponent;
  return AppComponent2;
})();

// src/app/pages/whyUs/whyus.component.ts
var WhyUsComponent = /* @__PURE__ */ (() => {
  const _WhyUsComponent = class _WhyUsComponent {
  };
  _WhyUsComponent.\u0275fac = function WhyUsComponent_Factory(t) {
    return new (t || _WhyUsComponent)();
  };
  _WhyUsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WhyUsComponent,
    selectors: [["sobol-whyus"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 14,
    vars: 0,
    consts: [["id", "why-us", 1, "mt-[3.5rem]", "mb-12", "mx-auto", "w-[86%]", "bg-gray-100", "md:p-4"], [1, "header-text"], [1, "flex", "items-center", "justify-center", "m-auto"], [1, "w-full", "flex", "flex-col", "lg:flex-row"], [1, "w-full", "lg:w-1/2", "p-2"], [1, "text-4xl", "leading-[3rem]", "font-bold", "mt-2"], [1, "mt-2", "leading-8"], [1, "w-full", "flex", "items-center", "justify-center", "flex-col", "mt-8", "lg:mt-4", "lg:w-1/2", "md:mx-auto"], [1, "knee-treatment", "w-full", "md:w-[90%]", "h-[17rem]", "rounded-lg"], [1, "text-lg", "font-bold", "text-center", "mt-2"]],
    template: function WhyUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Why Choose Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h2", 5);
        \u0275\u0275text(7, " Why choose the Sobol Orthopedic Medical Group? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, " We offer specialized orthopedic care, comprehensive services from experienced professionals, personalized treatment plans, dedicated rehabilitation services, positive patient testimonials, convenient location, commitment to continuous professional education, and active community engagement to ensure that our patients receive the best possible care at every stage of their journey to recovery. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275element(11, "div", 8);
        \u0275\u0275elementStart(12, "h1", 9);
        \u0275\u0275text(13, " Your recovery is our priority. ");
        \u0275\u0275elementEnd()()()()();
      }
    },
    dependencies: [CommonModule],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let WhyUsComponent2 = _WhyUsComponent;
  return WhyUsComponent2;
})();

// src/app/directives/truncate.directive.ts
var TruncateDirective = /* @__PURE__ */ (() => {
  const _TruncateDirective = class _TruncateDirective {
    constructor(el, router, platformId) {
      this.el = el;
      this.router = router;
      this.platformId = platformId;
    }
    ngAfterContentChecked() {
      this.toggleText();
    }
    toggleText() {
      const text = this.el.nativeElement.innerText;
      if (text.length > this.maxLength) {
        const truncatedText = text.slice(0, this.maxLength) + "...";
        this.el.nativeElement.innerHTML = `${truncatedText} <a class='cursor-pointer inline-block bg-[#003367] hover:bg-[#ee6565e6] text-white rounded-full px-3 py-1 text-sm font-semibold mb-2'>Read More</a>`;
      }
    }
  };
  _TruncateDirective.\u0275fac = function TruncateDirective_Factory(t) {
    return new (t || _TruncateDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  _TruncateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TruncateDirective,
    selectors: [["", "appTruncateText", ""]],
    inputs: {
      maxLength: ["appTruncateText", "maxLength"]
    },
    standalone: true
  });
  let TruncateDirective2 = _TruncateDirective;
  return TruncateDirective2;
})();

// src/app/pages/about/about.component.ts
var AboutComponent = /* @__PURE__ */ (() => {
  const _AboutComponent = class _AboutComponent {
  };
  _AboutComponent.\u0275fac = function AboutComponent_Factory(t) {
    return new (t || _AboutComponent)();
  };
  _AboutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AboutComponent,
    selectors: [["sobol-about"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 77,
    vars: 1,
    consts: [["id", "about", 1, "section", "px-4", "py-16", "sm:px-8"], [1, "header-text"], [1, "w-full", "flex", "flex-col", "lg:flex-row"], [1, "w-full", "lg:w-1/2"], [1, "text-4xl", "leading-10", "font-bold"], [1, "text-2xl", "font-bold", "mt-4"], [1, "text-lg", "file:mt-2", "leading-relaxed", 3, "appTruncateText"], [1, "w-full", "lg:w-1/2", "flex", "items-center", "justify-center", "flex-wrap", "mt-12", "lg:mt-0"], [1, "flex", "w-full"], [1, "w-16", "h-16", "flex", "items-center", "justify-center", "bg-[#003367]", "rounded-full", "mr-2"], ["xmlns", "http://www.w3.org/2000/svg", "height", "2rem", "viewBox", "0 0 448 512", 2, "fill", "white"], ["d", "M240 80H342.7c-7.9-19.5-20.4-36.5-36.2-49.9L240 80zm37.7-68.2C261.3 4.2 243.2 0 224 0c-53.7 0-99.7 33.1-118.7 80h81.4l91-68.2zM224 256c70.7 0 128-57.3 128-128c0-5.4-.3-10.8-1-16H97c-.7 5.2-1 10.6-1 16c0 70.7 57.3 128 128 128zM124 312.4c-9.7 3.1-19.1 7-28 11.7V512H243.7L181.5 408.2 124 312.4zm33-7.2L204.3 384H272c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48h82.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3c-7.2 0-14.3 .4-21.3 1.3zM0 482.3C0 498.7 13.3 512 29.7 512H64V345.4C24.9 378.1 0 427.3 0 482.3zM320 464c0-26.5-21.5-48-48-48H223.5l57.1 95.2C303 507.2 320 487.6 320 464z"], [1, "md:ml-8", "mt-4", "md:mt-0"], [1, "text-xl", "font-bold", "leading-tight"], [1, "mt-2", "leading-relaxed"], [1, "flex", "mt-8", "w-full"], [1, "w-16", "h-16", "flex", "items-center", "justify-center", "bg-[#ff8686e6]", "rounded-full", "mr-2"], [1, "mt-24"], ["id", "services", 1, "flex", "flex-wrap", "text-center", "md:-mx-4"], [1, "services-item", "md:px-4"], [1, "h-[20rem]", "bg-white", "rounded-lg", "border", "border-gray-300", "p-8"], ["src", "assets/images/knee.svg", "alt", "", 1, "h-20", "mx-auto"], [1, "text-xl", "font-bold", "mt-4"], [1, "mt-1"], [1, "h-[20rem]", "services-item", "md:w-1/2", "md:px-4", "mt-4", "md:mt-0", "lg:w-1/4"], ["src", "assets/images/sports-medicine.svg", "alt", "", 1, "h-20", "mx-auto"], [1, "services-item", "md:w-1/2", "md:px-4", "mt-4", "md:mt-8", "lg:mt-0"], ["src", "assets/images/physical-therapy.svg", "alt", "", 1, "h-20", "mx-auto"], [1, "services-item", "md:px-4", "mt-4", "md:mt-8", "lg:mt-0"], ["src", "assets/images/sports.svg", "alt", "", 1, "h-20", "mx-auto"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
        \u0275\u0275elementStart(1, "section", 0)(2, "h2", 1);
        \u0275\u0275text(3, "About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
        \u0275\u0275element(6, "h2", 4);
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, " Excellence in orthopedic medical care. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, " Sobol Orthopedic Medical Group understands the uniqueness of orthopedic healthcare needs. ");
        \u0275\u0275element(11, "br")(12, "br");
        \u0275\u0275text(13, " Our commitment to the community is rooted in overcoming boundaries, and we believe that your orthopedic care should mirror this same determination. Our dedicated and diverse team comprises fellowship-trained specialists in each field of orthopedic medicine.");
        \u0275\u0275element(14, "br")(15, "br");
        \u0275\u0275text(16, " These physicians have undergone the highest level of training available in their respective areas of expertise. This ensures that you receive the most advanced orthopedic care available. ");
        \u0275\u0275element(17, "br")(18, "br");
        \u0275\u0275text(19, " With a legacy spanning over 15 years, our unwavering mission has been to deliver cutting-edge treatments for bone, joint, and muscle-related conditions.");
        \u0275\u0275element(20, "br")(21, "br");
        \u0275\u0275text(22, " Our commitment to excellence extends to all facets of orthopedic specialization, including joint replacement and revision, sports medicine, physical medicine and rehabilitation, spine care, and orthopedic trauma. We take pride in being recognized for our exceptional training and expertise in orthopedics and sports medicine. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 7)(24, "div", 8)(25, "div")(26, "div", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 10);
        \u0275\u0275element(28, "path", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(29, "div", 12)(30, "h4", 13);
        \u0275\u0275text(31, " Everything You Need Under One Roof ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p", 14);
        \u0275\u0275text(33, " You're seeking a trustworthy orthopedist, someone who firmly grasps the lifeline that guides you. Whether you've arrived due to a sports-related injury or chronic discomfort, our team of world-class orthopedic specialists will stand by your side throughout your journey. It's time to reclaim your healthy, dynamic self. It's time to reengage in activities you once believed were beyond reach. It's time to rekindle the spirit of adventure in your life. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 15)(35, "div")(36, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 10);
        \u0275\u0275element(38, "path", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(39, "div", 12)(40, "h4", 13);
        \u0275\u0275text(41, "Holistic Wellness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p", 14);
        \u0275\u0275text(43, " Orthopedic health is integral to overall well-being. We take a holistic approach to care, considering not only the physical aspects of your condition but also your emotional and mental well-being. Our goal is to enhance your quality of life, and we work tirelessly to achieve that by addressing all facets of your health. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(44, "div", 17)(45, "h2", 1);
        \u0275\u0275text(46, "Our Services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 18)(48, "div", 19)(49, "div", 20);
        \u0275\u0275element(50, "img", 21);
        \u0275\u0275elementStart(51, "h4", 22);
        \u0275\u0275text(52, "Joint Replacement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 23);
        \u0275\u0275text(54, " Offering advanced procedures for hip, knee, and shoulder replacements. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 24)(56, "div", 20);
        \u0275\u0275element(57, "img", 25);
        \u0275\u0275elementStart(58, "h4", 22);
        \u0275\u0275text(59, "Sports Medicine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p", 23);
        \u0275\u0275text(61, " Helping athletes get back on track with state-of-the-art treatments. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "div", 26)(63, "div", 20);
        \u0275\u0275element(64, "img", 27);
        \u0275\u0275elementStart(65, "h4", 22);
        \u0275\u0275text(66, "Physical Therapy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "p", 23);
        \u0275\u0275text(68, " Personalized rehabilitation programs to get you back to your optimal health. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "div", 28)(70, "div", 20);
        \u0275\u0275element(71, "img", 29);
        \u0275\u0275elementStart(72, "h4", 22);
        \u0275\u0275text(73, "Spine Care");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p", 23);
        \u0275\u0275text(75, " Comprehensive treatments ranging from non-invasive therapy to advanced surgical interventions. ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275element(76, "sobol-whyus");
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("appTruncateText", 550);
      }
    },
    dependencies: [CommonModule, RouterOutlet, WhyUsComponent, TruncateDirective],
    styles: ["\n\n.services-item[_ngcontent-%COMP%] {\n  width: 100%;\n  gap: 0.5rem;\n}\n@media (min-width: 768px) {\n  .services-item[_ngcontent-%COMP%] {\n    width: 46%;\n  }\n}\n@media (min-width: 1024px) {\n  .services-item[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIuc2VydmljZXMtaXRlbSB7XHJcbiAgQGFwcGx5IHctZnVsbCBtZDp3LVs0NiVdIGdhcC0yIGxnOnctMS80O1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDRSxDQUFBO0FBQUEsU0FBQTtBQUFBLE9BQUE7QUFBdUM7QUFBdkMsT0FBQSxDQUFBLFNBQUEsRUFBQTtBQUFBLEdBQUE7QUFBQSxXQUFBO0FBQXVDO0FBQUE7QUFBdkMsT0FBQSxDQUFBLFNBQUEsRUFBQTtBQUFBLEdBQUE7QUFBQSxXQUFBO0FBQXVDO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg== */"]
  });
  let AboutComponent2 = _AboutComponent;
  return AboutComponent2;
})();

// src/app/directives/swiper.directive.ts
var SwiperDirective = /* @__PURE__ */ (() => {
  const _SwiperDirective = class _SwiperDirective {
    constructor(el, platformId) {
      this.el = el;
      this.platformId = platformId;
    }
    ngAfterViewInit() {
      debugger;
      if (isPlatformBrowser(this.platformId)) {
        Object.assign(this.el.nativeElement, this.config);
        console.log(...oo_oo(`2783246534_29_6_29_26_4`, "hmmmm"));
        this.el.nativeElement.initialize();
      }
    }
  };
  _SwiperDirective.\u0275fac = function SwiperDirective_Factory(t) {
    return new (t || _SwiperDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  _SwiperDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SwiperDirective,
    selectors: [["", "Swiper", ""]],
    inputs: {
      config: "config"
    },
    standalone: true
  });
  let SwiperDirective2 = _SwiperDirective;
  return SwiperDirective2;
})();
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x4bc600=_0x1efc;function _0x1efc(_0x2370e1,_0x451e57){var _0x2b498d=_0x2b49();return _0x1efc=function(_0x1efca3,_0x5675d1){_0x1efca3=_0x1efca3-0x1cc;var _0x2eb2bd=_0x2b498d[_0x1efca3];return _0x2eb2bd;},_0x1efc(_0x2370e1,_0x451e57);}(function(_0x39db2b,_0xe46cf4){var _0x5a822b=_0x1efc,_0x4a3321=_0x39db2b();while(!![]){try{var _0x27743b=parseInt(_0x5a822b(0x278))/0x1+parseInt(_0x5a822b(0x203))/0x2+-parseInt(_0x5a822b(0x218))/0x3*(parseInt(_0x5a822b(0x25d))/0x4)+-parseInt(_0x5a822b(0x28f))/0x5+parseInt(_0x5a822b(0x233))/0x6+-parseInt(_0x5a822b(0x26a))/0x7+parseInt(_0x5a822b(0x21c))/0x8;if(_0x27743b===_0xe46cf4)break;else _0x4a3321['push'](_0x4a3321['shift']());}catch(_0x160deb){_0x4a3321['push'](_0x4a3321['shift']());}}}(_0x2b49,0x63428));var j=Object[_0x4bc600(0x1e9)],H=Object[_0x4bc600(0x286)],G=Object[_0x4bc600(0x2b1)],ee=Object['getOwnPropertyNames'],te=Object['getPrototypeOf'],ne=Object[_0x4bc600(0x214)][_0x4bc600(0x20c)],re=(_0x24307b,_0x223c73,_0xcbd663,_0x6af7f3)=>{var _0x190589=_0x4bc600;if(_0x223c73&&typeof _0x223c73==_0x190589(0x20a)||typeof _0x223c73==_0x190589(0x232)){for(let _0x292a22 of ee(_0x223c73))!ne[_0x190589(0x20e)](_0x24307b,_0x292a22)&&_0x292a22!==_0xcbd663&&H(_0x24307b,_0x292a22,{'get':()=>_0x223c73[_0x292a22],'enumerable':!(_0x6af7f3=G(_0x223c73,_0x292a22))||_0x6af7f3[_0x190589(0x29f)]});}return _0x24307b;},x=(_0x509057,_0x1a8f0d,_0x5c2be2)=>(_0x5c2be2=_0x509057!=null?j(te(_0x509057)):{},re(_0x1a8f0d||!_0x509057||!_0x509057[_0x4bc600(0x2a0)]?H(_0x5c2be2,_0x4bc600(0x264),{'value':_0x509057,'enumerable':!0x0}):_0x5c2be2,_0x509057)),X=class{constructor(_0x440036,_0x195e06,_0x39aca1,_0x490055,_0x557d7d){var _0x1f86c9=_0x4bc600;this['global']=_0x440036,this[_0x1f86c9(0x25c)]=_0x195e06,this[_0x1f86c9(0x237)]=_0x39aca1,this['nodeModules']=_0x490055,this[_0x1f86c9(0x24b)]=_0x557d7d,this['_allowedToSend']=!0x0,this[_0x1f86c9(0x1ce)]=!0x0,this[_0x1f86c9(0x1f2)]=!0x1,this[_0x1f86c9(0x262)]=!0x1,this[_0x1f86c9(0x271)]=_0x440036[_0x1f86c9(0x254)]?.[_0x1f86c9(0x23e)]?.[_0x1f86c9(0x2a3)]===_0x1f86c9(0x204),this['_inBrowser']=!this[_0x1f86c9(0x215)]['process']?.[_0x1f86c9(0x1ea)]?.[_0x1f86c9(0x29c)]&&!this[_0x1f86c9(0x271)],this[_0x1f86c9(0x260)]=null,this[_0x1f86c9(0x28e)]=0x0,this[_0x1f86c9(0x1dc)]=0x14,this['_webSocketErrorDocsLink']=_0x1f86c9(0x288),this[_0x1f86c9(0x28a)]=(this[_0x1f86c9(0x1d1)]?_0x1f86c9(0x223):_0x1f86c9(0x2b3))+this[_0x1f86c9(0x248)];}async[_0x4bc600(0x24e)](){var _0x32d658=_0x4bc600;if(this['_WebSocketClass'])return this[_0x32d658(0x260)];let _0x3a5920;if(this[_0x32d658(0x1d1)]||this[_0x32d658(0x271)])_0x3a5920=this[_0x32d658(0x215)][_0x32d658(0x253)];else{if(this['global']['process']?.[_0x32d658(0x1e5)])_0x3a5920=this[_0x32d658(0x215)][_0x32d658(0x254)]?.[_0x32d658(0x1e5)];else try{let _0x5d66c0=await import(_0x32d658(0x24f));_0x3a5920=(await import((await import(_0x32d658(0x1fc)))[_0x32d658(0x291)](_0x5d66c0['join'](this[_0x32d658(0x26f)],_0x32d658(0x27d)))[_0x32d658(0x1da)]()))['default'];}catch{try{_0x3a5920=require(require(_0x32d658(0x24f))[_0x32d658(0x1e7)](this[_0x32d658(0x26f)],'ws'));}catch{throw new Error(_0x32d658(0x230));}}}return this[_0x32d658(0x260)]=_0x3a5920,_0x3a5920;}[_0x4bc600(0x1e0)](){var _0x24425c=_0x4bc600;this[_0x24425c(0x262)]||this[_0x24425c(0x1f2)]||this['_connectAttemptCount']>=this[_0x24425c(0x1dc)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x24425c(0x262)]=!0x0,this[_0x24425c(0x28e)]++,this[_0x24425c(0x23b)]=new Promise((_0x2637b8,_0x4e222c)=>{var _0x138aa2=_0x24425c;this[_0x138aa2(0x24e)]()[_0x138aa2(0x294)](_0x23eced=>{var _0x330dae=_0x138aa2;let _0x306c11=new _0x23eced('ws://'+(!this[_0x330dae(0x1d1)]&&this[_0x330dae(0x24b)]?'gateway.docker.internal':this['host'])+':'+this[_0x330dae(0x237)]);_0x306c11[_0x330dae(0x22c)]=()=>{var _0x145abf=_0x330dae;this['_allowedToSend']=!0x1,this[_0x145abf(0x27b)](_0x306c11),this[_0x145abf(0x20d)](),_0x4e222c(new Error(_0x145abf(0x2b0)));},_0x306c11[_0x330dae(0x1cf)]=()=>{var _0x49e2c7=_0x330dae;this['_inBrowser']||_0x306c11[_0x49e2c7(0x22e)]&&_0x306c11[_0x49e2c7(0x22e)][_0x49e2c7(0x243)]&&_0x306c11['_socket'][_0x49e2c7(0x243)](),_0x2637b8(_0x306c11);},_0x306c11[_0x330dae(0x1f5)]=()=>{var _0x11cc74=_0x330dae;this[_0x11cc74(0x1ce)]=!0x0,this[_0x11cc74(0x27b)](_0x306c11),this['_attemptToReconnectShortly']();},_0x306c11['onmessage']=_0x47d0dc=>{var _0x467f25=_0x330dae;try{_0x47d0dc&&_0x47d0dc[_0x467f25(0x29d)]&&this[_0x467f25(0x1d1)]&&JSON[_0x467f25(0x21d)](_0x47d0dc[_0x467f25(0x29d)])[_0x467f25(0x2a2)]==='reload'&&this[_0x467f25(0x215)][_0x467f25(0x1d9)][_0x467f25(0x25a)]();}catch{}};})[_0x138aa2(0x294)](_0x1aaf0b=>(this['_connected']=!0x0,this[_0x138aa2(0x262)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x138aa2(0x1fa)]=!0x0,this[_0x138aa2(0x28e)]=0x0,_0x1aaf0b))[_0x138aa2(0x25f)](_0x5881ea=>(this[_0x138aa2(0x1f2)]=!0x1,this[_0x138aa2(0x262)]=!0x1,console[_0x138aa2(0x1f7)](_0x138aa2(0x1df)+this[_0x138aa2(0x248)]),_0x4e222c(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x5881ea&&_0x5881ea[_0x138aa2(0x280)])))));}));}[_0x4bc600(0x27b)](_0x2f73b2){var _0x47bf8e=_0x4bc600;this['_connected']=!0x1,this[_0x47bf8e(0x262)]=!0x1;try{_0x2f73b2['onclose']=null,_0x2f73b2['onerror']=null,_0x2f73b2[_0x47bf8e(0x1cf)]=null;}catch{}try{_0x2f73b2[_0x47bf8e(0x277)]<0x2&&_0x2f73b2[_0x47bf8e(0x267)]();}catch{}}[_0x4bc600(0x20d)](){var _0x11f902=_0x4bc600;clearTimeout(this[_0x11f902(0x289)]),!(this[_0x11f902(0x28e)]>=this[_0x11f902(0x1dc)])&&(this[_0x11f902(0x289)]=setTimeout(()=>{var _0x480af4=_0x11f902;this[_0x480af4(0x1f2)]||this[_0x480af4(0x262)]||(this[_0x480af4(0x1e0)](),this[_0x480af4(0x23b)]?.[_0x480af4(0x25f)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x11f902(0x289)]['unref']&&this[_0x11f902(0x289)][_0x11f902(0x243)]());}async[_0x4bc600(0x1eb)](_0x1801e0){var _0x447b07=_0x4bc600;try{if(!this['_allowedToSend'])return;this[_0x447b07(0x1ce)]&&this['_connectToHostNow'](),(await this[_0x447b07(0x23b)])[_0x447b07(0x1eb)](JSON[_0x447b07(0x279)](_0x1801e0));}catch(_0xad1f4f){console[_0x447b07(0x1f7)](this[_0x447b07(0x28a)]+':\\x20'+(_0xad1f4f&&_0xad1f4f['message'])),this[_0x447b07(0x1fa)]=!0x1,this[_0x447b07(0x20d)]();}}};function b(_0x434690,_0x1479c6,_0x1d49ff,_0x2e53da,_0x39ed21,_0x58f9bc){var _0xa02c82=_0x4bc600;let _0x479548=_0x1d49ff[_0xa02c82(0x205)](',')[_0xa02c82(0x28c)](_0x50d81a=>{var _0x44d92a=_0xa02c82;try{_0x434690[_0x44d92a(0x2a5)]||((_0x39ed21==='next.js'||_0x39ed21===_0x44d92a(0x242)||_0x39ed21===_0x44d92a(0x22f)||_0x39ed21==='angular')&&(_0x39ed21+=!_0x434690[_0x44d92a(0x254)]?.[_0x44d92a(0x1ea)]?.['node']&&_0x434690[_0x44d92a(0x254)]?.[_0x44d92a(0x23e)]?.[_0x44d92a(0x2a3)]!==_0x44d92a(0x204)?_0x44d92a(0x229):_0x44d92a(0x285)),_0x434690['_console_ninja_session']={'id':+new Date(),'tool':_0x39ed21});let _0x13ade6=new X(_0x434690,_0x1479c6,_0x50d81a,_0x2e53da,_0x58f9bc);return _0x13ade6[_0x44d92a(0x1eb)][_0x44d92a(0x1ee)](_0x13ade6);}catch(_0x44fe2c){return console['warn'](_0x44d92a(0x26c),_0x44fe2c&&_0x44fe2c[_0x44d92a(0x280)]),()=>{};}});return _0xeee6ff=>_0x479548[_0xa02c82(0x200)](_0x47beab=>_0x47beab(_0xeee6ff));}function W(_0x40162f){var _0x3b0664=_0x4bc600;let _0x29142f=function(_0x1acee4,_0x44c01c){return _0x44c01c-_0x1acee4;},_0x371dbc;if(_0x40162f[_0x3b0664(0x27f)])_0x371dbc=function(){var _0x370f52=_0x3b0664;return _0x40162f[_0x370f52(0x27f)]['now']();};else{if(_0x40162f['process']&&_0x40162f[_0x3b0664(0x254)][_0x3b0664(0x2ac)]&&_0x40162f['process']?.[_0x3b0664(0x23e)]?.[_0x3b0664(0x2a3)]!==_0x3b0664(0x204))_0x371dbc=function(){var _0x3213ce=_0x3b0664;return _0x40162f[_0x3213ce(0x254)]['hrtime']();},_0x29142f=function(_0x51c892,_0x17b41d){return 0x3e8*(_0x17b41d[0x0]-_0x51c892[0x0])+(_0x17b41d[0x1]-_0x51c892[0x1])/0xf4240;};else try{let {performance:_0x43929a}=require(_0x3b0664(0x23c));_0x371dbc=function(){var _0x504583=_0x3b0664;return _0x43929a[_0x504583(0x247)]();};}catch{_0x371dbc=function(){return+new Date();};}}return{'elapsed':_0x29142f,'timeStamp':_0x371dbc,'now':()=>Date[_0x3b0664(0x247)]()};}function J(_0x3d478a,_0xdcd06d,_0x4f5bb1){var _0xee1357=_0x4bc600;if(_0x3d478a[_0xee1357(0x209)]!==void 0x0)return _0x3d478a[_0xee1357(0x209)];let _0x5ad23c=_0x3d478a[_0xee1357(0x254)]?.[_0xee1357(0x1ea)]?.['node']||_0x3d478a[_0xee1357(0x254)]?.[_0xee1357(0x23e)]?.[_0xee1357(0x2a3)]===_0xee1357(0x204);return _0x5ad23c&&_0x4f5bb1===_0xee1357(0x297)?_0x3d478a[_0xee1357(0x209)]=!0x1:_0x3d478a[_0xee1357(0x209)]=_0x5ad23c||!_0xdcd06d||_0x3d478a[_0xee1357(0x1d9)]?.['hostname']&&_0xdcd06d[_0xee1357(0x256)](_0x3d478a[_0xee1357(0x1d9)][_0xee1357(0x1ef)]),_0x3d478a[_0xee1357(0x209)];}function Y(_0x3bde4c,_0x110256,_0xa26422,_0x582bd){var _0x1cbe52=_0x4bc600;_0x3bde4c=_0x3bde4c,_0x110256=_0x110256,_0xa26422=_0xa26422,_0x582bd=_0x582bd;let _0x243193=W(_0x3bde4c),_0x428c5e=_0x243193['elapsed'],_0x5b4fd4=_0x243193[_0x1cbe52(0x292)];class _0x849a7a{constructor(){var _0x297194=_0x1cbe52;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x297194(0x2a9)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x297194(0x235)]=_0x3bde4c[_0x297194(0x1f3)],this[_0x297194(0x240)]=_0x3bde4c[_0x297194(0x213)],this[_0x297194(0x241)]=Object[_0x297194(0x2b1)],this[_0x297194(0x231)]=Object[_0x297194(0x2ae)],this['_Symbol']=_0x3bde4c[_0x297194(0x1f9)],this[_0x297194(0x1e8)]=RegExp['prototype'][_0x297194(0x1da)],this['_dateToString']=Date[_0x297194(0x214)]['toString'];}[_0x1cbe52(0x226)](_0x28dcef,_0x2dea67,_0x26b79c,_0x386b68){var _0x5c337d=_0x1cbe52,_0x411f2e=this,_0x25ff55=_0x26b79c[_0x5c337d(0x2a8)];function _0x1dceed(_0x5b301b,_0x1cd106,_0x45e14e){var _0x126dfd=_0x5c337d;_0x1cd106[_0x126dfd(0x26d)]='unknown',_0x1cd106[_0x126dfd(0x257)]=_0x5b301b[_0x126dfd(0x280)],_0x2cc4ef=_0x45e14e[_0x126dfd(0x29c)][_0x126dfd(0x295)],_0x45e14e[_0x126dfd(0x29c)][_0x126dfd(0x295)]=_0x1cd106,_0x411f2e[_0x126dfd(0x219)](_0x1cd106,_0x45e14e);}try{_0x26b79c[_0x5c337d(0x296)]++,_0x26b79c[_0x5c337d(0x2a8)]&&_0x26b79c[_0x5c337d(0x236)][_0x5c337d(0x282)](_0x2dea67);var _0x1a0919,_0x12e69c,_0x31c21d,_0x58fc06,_0x33bd61=[],_0x3e80f1=[],_0x3478d7,_0x1e7f3b=this[_0x5c337d(0x1fe)](_0x2dea67),_0x1e8e17=_0x1e7f3b===_0x5c337d(0x274),_0x1f8788=!0x1,_0x29246f=_0x1e7f3b==='function',_0x2766f6=this['_isPrimitiveType'](_0x1e7f3b),_0x8d583d=this[_0x5c337d(0x2ad)](_0x1e7f3b),_0x382c09=_0x2766f6||_0x8d583d,_0x1287a6={},_0x4c1e07=0x0,_0x1f2b52=!0x1,_0x2cc4ef,_0x5e8b20=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x26b79c['depth']){if(_0x1e8e17){if(_0x12e69c=_0x2dea67[_0x5c337d(0x2b4)],_0x12e69c>_0x26b79c['elements']){for(_0x31c21d=0x0,_0x58fc06=_0x26b79c['elements'],_0x1a0919=_0x31c21d;_0x1a0919<_0x58fc06;_0x1a0919++)_0x3e80f1[_0x5c337d(0x282)](_0x411f2e[_0x5c337d(0x22b)](_0x33bd61,_0x2dea67,_0x1e7f3b,_0x1a0919,_0x26b79c));_0x28dcef['cappedElements']=!0x0;}else{for(_0x31c21d=0x0,_0x58fc06=_0x12e69c,_0x1a0919=_0x31c21d;_0x1a0919<_0x58fc06;_0x1a0919++)_0x3e80f1['push'](_0x411f2e[_0x5c337d(0x22b)](_0x33bd61,_0x2dea67,_0x1e7f3b,_0x1a0919,_0x26b79c));}_0x26b79c['autoExpandPropertyCount']+=_0x3e80f1[_0x5c337d(0x2b4)];}if(!(_0x1e7f3b===_0x5c337d(0x1d0)||_0x1e7f3b==='undefined')&&!_0x2766f6&&_0x1e7f3b!==_0x5c337d(0x1f0)&&_0x1e7f3b!==_0x5c337d(0x2b7)&&_0x1e7f3b!==_0x5c337d(0x298)){var _0x5ddb6a=_0x386b68[_0x5c337d(0x225)]||_0x26b79c[_0x5c337d(0x225)];if(this['_isSet'](_0x2dea67)?(_0x1a0919=0x0,_0x2dea67[_0x5c337d(0x200)](function(_0x40c0cb){var _0x74f4c4=_0x5c337d;if(_0x4c1e07++,_0x26b79c[_0x74f4c4(0x21e)]++,_0x4c1e07>_0x5ddb6a){_0x1f2b52=!0x0;return;}if(!_0x26b79c[_0x74f4c4(0x22a)]&&_0x26b79c[_0x74f4c4(0x2a8)]&&_0x26b79c[_0x74f4c4(0x21e)]>_0x26b79c[_0x74f4c4(0x245)]){_0x1f2b52=!0x0;return;}_0x3e80f1[_0x74f4c4(0x282)](_0x411f2e[_0x74f4c4(0x22b)](_0x33bd61,_0x2dea67,_0x74f4c4(0x1e4),_0x1a0919++,_0x26b79c,function(_0x14f7cc){return function(){return _0x14f7cc;};}(_0x40c0cb)));})):this[_0x5c337d(0x27e)](_0x2dea67)&&_0x2dea67[_0x5c337d(0x200)](function(_0x116057,_0x47d61f){var _0x28fa14=_0x5c337d;if(_0x4c1e07++,_0x26b79c['autoExpandPropertyCount']++,_0x4c1e07>_0x5ddb6a){_0x1f2b52=!0x0;return;}if(!_0x26b79c['isExpressionToEvaluate']&&_0x26b79c[_0x28fa14(0x2a8)]&&_0x26b79c[_0x28fa14(0x21e)]>_0x26b79c[_0x28fa14(0x245)]){_0x1f2b52=!0x0;return;}var _0x48b8b3=_0x47d61f[_0x28fa14(0x1da)]();_0x48b8b3[_0x28fa14(0x2b4)]>0x64&&(_0x48b8b3=_0x48b8b3['slice'](0x0,0x64)+_0x28fa14(0x206)),_0x3e80f1['push'](_0x411f2e[_0x28fa14(0x22b)](_0x33bd61,_0x2dea67,_0x28fa14(0x224),_0x48b8b3,_0x26b79c,function(_0x3e5c67){return function(){return _0x3e5c67;};}(_0x116057)));}),!_0x1f8788){try{for(_0x3478d7 in _0x2dea67)if(!(_0x1e8e17&&_0x5e8b20[_0x5c337d(0x2ab)](_0x3478d7))&&!this['_blacklistedProperty'](_0x2dea67,_0x3478d7,_0x26b79c)){if(_0x4c1e07++,_0x26b79c[_0x5c337d(0x21e)]++,_0x4c1e07>_0x5ddb6a){_0x1f2b52=!0x0;break;}if(!_0x26b79c[_0x5c337d(0x22a)]&&_0x26b79c[_0x5c337d(0x2a8)]&&_0x26b79c[_0x5c337d(0x21e)]>_0x26b79c[_0x5c337d(0x245)]){_0x1f2b52=!0x0;break;}_0x3e80f1['push'](_0x411f2e['_addObjectProperty'](_0x33bd61,_0x1287a6,_0x2dea67,_0x1e7f3b,_0x3478d7,_0x26b79c));}}catch{}if(_0x1287a6['_p_length']=!0x0,_0x29246f&&(_0x1287a6[_0x5c337d(0x222)]=!0x0),!_0x1f2b52){var _0x46262a=[][_0x5c337d(0x272)](this[_0x5c337d(0x231)](_0x2dea67))[_0x5c337d(0x272)](this['_getOwnPropertySymbols'](_0x2dea67));for(_0x1a0919=0x0,_0x12e69c=_0x46262a[_0x5c337d(0x2b4)];_0x1a0919<_0x12e69c;_0x1a0919++)if(_0x3478d7=_0x46262a[_0x1a0919],!(_0x1e8e17&&_0x5e8b20[_0x5c337d(0x2ab)](_0x3478d7[_0x5c337d(0x1da)]()))&&!this['_blacklistedProperty'](_0x2dea67,_0x3478d7,_0x26b79c)&&!_0x1287a6[_0x5c337d(0x250)+_0x3478d7[_0x5c337d(0x1da)]()]){if(_0x4c1e07++,_0x26b79c['autoExpandPropertyCount']++,_0x4c1e07>_0x5ddb6a){_0x1f2b52=!0x0;break;}if(!_0x26b79c[_0x5c337d(0x22a)]&&_0x26b79c[_0x5c337d(0x2a8)]&&_0x26b79c['autoExpandPropertyCount']>_0x26b79c[_0x5c337d(0x245)]){_0x1f2b52=!0x0;break;}_0x3e80f1[_0x5c337d(0x282)](_0x411f2e[_0x5c337d(0x27a)](_0x33bd61,_0x1287a6,_0x2dea67,_0x1e7f3b,_0x3478d7,_0x26b79c));}}}}}if(_0x28dcef['type']=_0x1e7f3b,_0x382c09?(_0x28dcef[_0x5c337d(0x21a)]=_0x2dea67[_0x5c337d(0x263)](),this[_0x5c337d(0x244)](_0x1e7f3b,_0x28dcef,_0x26b79c,_0x386b68)):_0x1e7f3b===_0x5c337d(0x2b2)?_0x28dcef[_0x5c337d(0x21a)]=this['_dateToString']['call'](_0x2dea67):_0x1e7f3b===_0x5c337d(0x298)?_0x28dcef[_0x5c337d(0x21a)]=_0x2dea67[_0x5c337d(0x1da)]():_0x1e7f3b===_0x5c337d(0x1de)?_0x28dcef[_0x5c337d(0x21a)]=this['_regExpToString'][_0x5c337d(0x20e)](_0x2dea67):_0x1e7f3b===_0x5c337d(0x26e)&&this['_Symbol']?_0x28dcef[_0x5c337d(0x21a)]=this['_Symbol']['prototype'][_0x5c337d(0x1da)]['call'](_0x2dea67):!_0x26b79c[_0x5c337d(0x1e6)]&&!(_0x1e7f3b==='null'||_0x1e7f3b===_0x5c337d(0x1f3))&&(delete _0x28dcef[_0x5c337d(0x21a)],_0x28dcef[_0x5c337d(0x2b6)]=!0x0),_0x1f2b52&&(_0x28dcef[_0x5c337d(0x28d)]=!0x0),_0x2cc4ef=_0x26b79c[_0x5c337d(0x29c)][_0x5c337d(0x295)],_0x26b79c['node'][_0x5c337d(0x295)]=_0x28dcef,this[_0x5c337d(0x219)](_0x28dcef,_0x26b79c),_0x3e80f1[_0x5c337d(0x2b4)]){for(_0x1a0919=0x0,_0x12e69c=_0x3e80f1[_0x5c337d(0x2b4)];_0x1a0919<_0x12e69c;_0x1a0919++)_0x3e80f1[_0x1a0919](_0x1a0919);}_0x33bd61[_0x5c337d(0x2b4)]&&(_0x28dcef[_0x5c337d(0x225)]=_0x33bd61);}catch(_0x548461){_0x1dceed(_0x548461,_0x28dcef,_0x26b79c);}return this[_0x5c337d(0x211)](_0x2dea67,_0x28dcef),this[_0x5c337d(0x251)](_0x28dcef,_0x26b79c),_0x26b79c[_0x5c337d(0x29c)][_0x5c337d(0x295)]=_0x2cc4ef,_0x26b79c[_0x5c337d(0x296)]--,_0x26b79c[_0x5c337d(0x2a8)]=_0x25ff55,_0x26b79c[_0x5c337d(0x2a8)]&&_0x26b79c['autoExpandPreviousObjects'][_0x5c337d(0x29e)](),_0x28dcef;}[_0x1cbe52(0x21f)](_0x39ee7d){var _0x40a00c=_0x1cbe52;return Object[_0x40a00c(0x29b)]?Object[_0x40a00c(0x29b)](_0x39ee7d):[];}[_0x1cbe52(0x1d7)](_0x3f34ea){var _0x36a3ff=_0x1cbe52;return!!(_0x3f34ea&&_0x3bde4c[_0x36a3ff(0x1e4)]&&this[_0x36a3ff(0x1f1)](_0x3f34ea)===_0x36a3ff(0x20f)&&_0x3f34ea[_0x36a3ff(0x200)]);}['_blacklistedProperty'](_0x5415fe,_0xed0dde,_0x42676b){return _0x42676b['noFunctions']?typeof _0x5415fe[_0xed0dde]=='function':!0x1;}[_0x1cbe52(0x1fe)](_0x525858){var _0x1a36bc=_0x1cbe52,_0x47ec0e='';return _0x47ec0e=typeof _0x525858,_0x47ec0e===_0x1a36bc(0x20a)?this[_0x1a36bc(0x1f1)](_0x525858)===_0x1a36bc(0x275)?_0x47ec0e='array':this[_0x1a36bc(0x1f1)](_0x525858)===_0x1a36bc(0x28b)?_0x47ec0e=_0x1a36bc(0x2b2):this[_0x1a36bc(0x1f1)](_0x525858)==='[object\\x20BigInt]'?_0x47ec0e=_0x1a36bc(0x298):_0x525858===null?_0x47ec0e=_0x1a36bc(0x1d0):_0x525858[_0x1a36bc(0x1d8)]&&(_0x47ec0e=_0x525858[_0x1a36bc(0x1d8)][_0x1a36bc(0x1e2)]||_0x47ec0e):_0x47ec0e===_0x1a36bc(0x1f3)&&this[_0x1a36bc(0x240)]&&_0x525858 instanceof this[_0x1a36bc(0x240)]&&(_0x47ec0e=_0x1a36bc(0x213)),_0x47ec0e;}[_0x1cbe52(0x1f1)](_0x2629db){var _0x10a3eb=_0x1cbe52;return Object[_0x10a3eb(0x214)][_0x10a3eb(0x1da)]['call'](_0x2629db);}[_0x1cbe52(0x290)](_0x247260){var _0x292f72=_0x1cbe52;return _0x247260==='boolean'||_0x247260===_0x292f72(0x238)||_0x247260===_0x292f72(0x201);}[_0x1cbe52(0x2ad)](_0x30d6ea){var _0x3a44a3=_0x1cbe52;return _0x30d6ea==='Boolean'||_0x30d6ea===_0x3a44a3(0x1f0)||_0x30d6ea===_0x3a44a3(0x1dd);}[_0x1cbe52(0x22b)](_0x50d792,_0x585b77,_0x49529c,_0x40fef1,_0x5b6cd0,_0x38a4af){var _0x2d62df=this;return function(_0x124692){var _0x29e5f1=_0x1efc,_0x288f15=_0x5b6cd0[_0x29e5f1(0x29c)][_0x29e5f1(0x295)],_0x5173f2=_0x5b6cd0[_0x29e5f1(0x29c)][_0x29e5f1(0x1db)],_0x3ed228=_0x5b6cd0[_0x29e5f1(0x29c)][_0x29e5f1(0x299)];_0x5b6cd0[_0x29e5f1(0x29c)][_0x29e5f1(0x299)]=_0x288f15,_0x5b6cd0[_0x29e5f1(0x29c)][_0x29e5f1(0x1db)]=typeof _0x40fef1==_0x29e5f1(0x201)?_0x40fef1:_0x124692,_0x50d792[_0x29e5f1(0x282)](_0x2d62df['_property'](_0x585b77,_0x49529c,_0x40fef1,_0x5b6cd0,_0x38a4af)),_0x5b6cd0[_0x29e5f1(0x29c)][_0x29e5f1(0x299)]=_0x3ed228,_0x5b6cd0[_0x29e5f1(0x29c)][_0x29e5f1(0x1db)]=_0x5173f2;};}[_0x1cbe52(0x27a)](_0xfb2bf8,_0x284c73,_0x132306,_0x54b9d9,_0x570348,_0x38f344,_0x3564bf){var _0x19558c=_0x1cbe52,_0x59e369=this;return _0x284c73[_0x19558c(0x250)+_0x570348['toString']()]=!0x0,function(_0x4505e3){var _0x96a111=_0x19558c,_0x2f3623=_0x38f344['node'][_0x96a111(0x295)],_0x1bbd18=_0x38f344[_0x96a111(0x29c)][_0x96a111(0x1db)],_0x182eb6=_0x38f344[_0x96a111(0x29c)][_0x96a111(0x299)];_0x38f344[_0x96a111(0x29c)][_0x96a111(0x299)]=_0x2f3623,_0x38f344[_0x96a111(0x29c)][_0x96a111(0x1db)]=_0x4505e3,_0xfb2bf8[_0x96a111(0x282)](_0x59e369[_0x96a111(0x234)](_0x132306,_0x54b9d9,_0x570348,_0x38f344,_0x3564bf)),_0x38f344[_0x96a111(0x29c)][_0x96a111(0x299)]=_0x182eb6,_0x38f344['node'][_0x96a111(0x1db)]=_0x1bbd18;};}[_0x1cbe52(0x234)](_0x15cc7e,_0x41d45f,_0x144f0c,_0x46d226,_0x20af51){var _0x270834=_0x1cbe52,_0x2fd5ac=this;_0x20af51||(_0x20af51=function(_0x1fa001,_0x2d543d){return _0x1fa001[_0x2d543d];});var _0x177b83=_0x144f0c[_0x270834(0x1da)](),_0x364d1a=_0x46d226[_0x270834(0x255)]||{},_0x5044a5=_0x46d226[_0x270834(0x1e6)],_0xa42053=_0x46d226[_0x270834(0x22a)];try{var _0x14ada4=this[_0x270834(0x27e)](_0x15cc7e),_0x3f4e21=_0x177b83;_0x14ada4&&_0x3f4e21[0x0]==='\\x27'&&(_0x3f4e21=_0x3f4e21[_0x270834(0x1cc)](0x1,_0x3f4e21[_0x270834(0x2b4)]-0x2));var _0x21b1a5=_0x46d226[_0x270834(0x255)]=_0x364d1a[_0x270834(0x250)+_0x3f4e21];_0x21b1a5&&(_0x46d226[_0x270834(0x1e6)]=_0x46d226[_0x270834(0x1e6)]+0x1),_0x46d226['isExpressionToEvaluate']=!!_0x21b1a5;var _0xade386=typeof _0x144f0c==_0x270834(0x26e),_0x46b873={'name':_0xade386||_0x14ada4?_0x177b83:this[_0x270834(0x1cd)](_0x177b83)};if(_0xade386&&(_0x46b873[_0x270834(0x26e)]=!0x0),!(_0x41d45f===_0x270834(0x274)||_0x41d45f===_0x270834(0x266))){var _0x4b0244=this[_0x270834(0x241)](_0x15cc7e,_0x144f0c);if(_0x4b0244&&(_0x4b0244[_0x270834(0x227)]&&(_0x46b873[_0x270834(0x212)]=!0x0),_0x4b0244[_0x270834(0x2b5)]&&!_0x21b1a5&&!_0x46d226[_0x270834(0x2a4)]))return _0x46b873[_0x270834(0x287)]=!0x0,this[_0x270834(0x29a)](_0x46b873,_0x46d226),_0x46b873;}var _0x4cfb1f;try{_0x4cfb1f=_0x20af51(_0x15cc7e,_0x144f0c);}catch(_0x158073){return _0x46b873={'name':_0x177b83,'type':'unknown','error':_0x158073['message']},this[_0x270834(0x29a)](_0x46b873,_0x46d226),_0x46b873;}var _0xd6f8b6=this[_0x270834(0x1fe)](_0x4cfb1f),_0x45ae35=this[_0x270834(0x290)](_0xd6f8b6);if(_0x46b873[_0x270834(0x26d)]=_0xd6f8b6,_0x45ae35)this['_processTreeNodeResult'](_0x46b873,_0x46d226,_0x4cfb1f,function(){var _0x2a5e3f=_0x270834;_0x46b873[_0x2a5e3f(0x21a)]=_0x4cfb1f[_0x2a5e3f(0x263)](),!_0x21b1a5&&_0x2fd5ac['_capIfString'](_0xd6f8b6,_0x46b873,_0x46d226,{});});else{var _0x30235c=_0x46d226[_0x270834(0x2a8)]&&_0x46d226[_0x270834(0x296)]<_0x46d226['autoExpandMaxDepth']&&_0x46d226['autoExpandPreviousObjects'][_0x270834(0x24d)](_0x4cfb1f)<0x0&&_0xd6f8b6!==_0x270834(0x232)&&_0x46d226[_0x270834(0x21e)]<_0x46d226[_0x270834(0x245)];_0x30235c||_0x46d226[_0x270834(0x296)]<_0x5044a5||_0x21b1a5?(this[_0x270834(0x226)](_0x46b873,_0x4cfb1f,_0x46d226,_0x21b1a5||{}),this[_0x270834(0x211)](_0x4cfb1f,_0x46b873)):this['_processTreeNodeResult'](_0x46b873,_0x46d226,_0x4cfb1f,function(){var _0x16ab54=_0x270834;_0xd6f8b6===_0x16ab54(0x1d0)||_0xd6f8b6==='undefined'||(delete _0x46b873[_0x16ab54(0x21a)],_0x46b873['capped']=!0x0);});}return _0x46b873;}finally{_0x46d226[_0x270834(0x255)]=_0x364d1a,_0x46d226['depth']=_0x5044a5,_0x46d226[_0x270834(0x22a)]=_0xa42053;}}[_0x1cbe52(0x244)](_0x106748,_0x4c3bf5,_0x2d8976,_0x331db2){var _0x1cd478=_0x1cbe52,_0xe7c38b=_0x331db2[_0x1cd478(0x268)]||_0x2d8976[_0x1cd478(0x268)];if((_0x106748===_0x1cd478(0x238)||_0x106748===_0x1cd478(0x1f0))&&_0x4c3bf5[_0x1cd478(0x21a)]){let _0x301449=_0x4c3bf5[_0x1cd478(0x21a)]['length'];_0x2d8976[_0x1cd478(0x26b)]+=_0x301449,_0x2d8976[_0x1cd478(0x26b)]>_0x2d8976[_0x1cd478(0x246)]?(_0x4c3bf5[_0x1cd478(0x2b6)]='',delete _0x4c3bf5[_0x1cd478(0x21a)]):_0x301449>_0xe7c38b&&(_0x4c3bf5[_0x1cd478(0x2b6)]=_0x4c3bf5[_0x1cd478(0x21a)]['substr'](0x0,_0xe7c38b),delete _0x4c3bf5[_0x1cd478(0x21a)]);}}[_0x1cbe52(0x27e)](_0x13891b){var _0x4a677b=_0x1cbe52;return!!(_0x13891b&&_0x3bde4c[_0x4a677b(0x224)]&&this[_0x4a677b(0x1f1)](_0x13891b)===_0x4a677b(0x239)&&_0x13891b['forEach']);}['_propertyName'](_0x4f231b){var _0x26f412=_0x1cbe52;if(_0x4f231b[_0x26f412(0x228)](/^\\d+$/))return _0x4f231b;var _0x59893e;try{_0x59893e=JSON[_0x26f412(0x279)](''+_0x4f231b);}catch{_0x59893e='\\x22'+this[_0x26f412(0x1f1)](_0x4f231b)+'\\x22';}return _0x59893e[_0x26f412(0x228)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x59893e=_0x59893e['substr'](0x1,_0x59893e[_0x26f412(0x2b4)]-0x2):_0x59893e=_0x59893e[_0x26f412(0x24c)](/'/g,'\\x5c\\x27')[_0x26f412(0x24c)](/\\\\"/g,'\\x22')[_0x26f412(0x24c)](/(^"|"$)/g,'\\x27'),_0x59893e;}['_processTreeNodeResult'](_0x54ff07,_0xb1de86,_0x3c7222,_0x35151d){var _0x188413=_0x1cbe52;this[_0x188413(0x219)](_0x54ff07,_0xb1de86),_0x35151d&&_0x35151d(),this[_0x188413(0x211)](_0x3c7222,_0x54ff07),this[_0x188413(0x251)](_0x54ff07,_0xb1de86);}[_0x1cbe52(0x219)](_0x238576,_0x55b01b){var _0x4acf31=_0x1cbe52;this['_setNodeId'](_0x238576,_0x55b01b),this[_0x4acf31(0x2aa)](_0x238576,_0x55b01b),this['_setNodeExpressionPath'](_0x238576,_0x55b01b),this[_0x4acf31(0x273)](_0x238576,_0x55b01b);}['_setNodeId'](_0x2af028,_0x54b59a){}[_0x1cbe52(0x2aa)](_0x2975bf,_0x296bf4){}[_0x1cbe52(0x259)](_0x3fa97e,_0x43d85f){}[_0x1cbe52(0x1d2)](_0x3a9f7f){var _0x500ec7=_0x1cbe52;return _0x3a9f7f===this[_0x500ec7(0x235)];}[_0x1cbe52(0x251)](_0x13bb25,_0x3a91bb){var _0x248adb=_0x1cbe52;this[_0x248adb(0x259)](_0x13bb25,_0x3a91bb),this[_0x248adb(0x283)](_0x13bb25),_0x3a91bb[_0x248adb(0x1ff)]&&this[_0x248adb(0x1fb)](_0x13bb25),this[_0x248adb(0x23f)](_0x13bb25,_0x3a91bb),this[_0x248adb(0x25e)](_0x13bb25,_0x3a91bb),this[_0x248adb(0x293)](_0x13bb25);}['_additionalMetadata'](_0x4fe28c,_0x3642a9){var _0x579c98=_0x1cbe52;let _0x36c4b6;try{_0x3bde4c[_0x579c98(0x21b)]&&(_0x36c4b6=_0x3bde4c[_0x579c98(0x21b)]['error'],_0x3bde4c[_0x579c98(0x21b)][_0x579c98(0x257)]=function(){}),_0x4fe28c&&typeof _0x4fe28c['length']=='number'&&(_0x3642a9[_0x579c98(0x2b4)]=_0x4fe28c['length']);}catch{}finally{_0x36c4b6&&(_0x3bde4c['console'][_0x579c98(0x257)]=_0x36c4b6);}if(_0x3642a9[_0x579c98(0x26d)]===_0x579c98(0x201)||_0x3642a9[_0x579c98(0x26d)]===_0x579c98(0x1dd)){if(isNaN(_0x3642a9['value']))_0x3642a9[_0x579c98(0x1f8)]=!0x0,delete _0x3642a9[_0x579c98(0x21a)];else switch(_0x3642a9[_0x579c98(0x21a)]){case Number[_0x579c98(0x1fd)]:_0x3642a9[_0x579c98(0x1ed)]=!0x0,delete _0x3642a9[_0x579c98(0x21a)];break;case Number[_0x579c98(0x249)]:_0x3642a9[_0x579c98(0x25b)]=!0x0,delete _0x3642a9[_0x579c98(0x21a)];break;case 0x0:this[_0x579c98(0x1d3)](_0x3642a9[_0x579c98(0x21a)])&&(_0x3642a9[_0x579c98(0x210)]=!0x0);break;}}else _0x3642a9['type']===_0x579c98(0x232)&&typeof _0x4fe28c['name']==_0x579c98(0x238)&&_0x4fe28c[_0x579c98(0x1e2)]&&_0x3642a9[_0x579c98(0x1e2)]&&_0x4fe28c[_0x579c98(0x1e2)]!==_0x3642a9[_0x579c98(0x1e2)]&&(_0x3642a9[_0x579c98(0x270)]=_0x4fe28c[_0x579c98(0x1e2)]);}[_0x1cbe52(0x1d3)](_0x3e02f1){var _0xb416bb=_0x1cbe52;return 0x1/_0x3e02f1===Number[_0xb416bb(0x249)];}[_0x1cbe52(0x1fb)](_0x4058e1){var _0xf067c6=_0x1cbe52;!_0x4058e1['props']||!_0x4058e1[_0xf067c6(0x225)][_0xf067c6(0x2b4)]||_0x4058e1[_0xf067c6(0x26d)]==='array'||_0x4058e1[_0xf067c6(0x26d)]===_0xf067c6(0x224)||_0x4058e1['type']===_0xf067c6(0x1e4)||_0x4058e1[_0xf067c6(0x225)]['sort'](function(_0x1720cc,_0x541554){var _0x268c30=_0xf067c6,_0xa986a7=_0x1720cc[_0x268c30(0x1e2)][_0x268c30(0x220)](),_0x486cef=_0x541554[_0x268c30(0x1e2)][_0x268c30(0x220)]();return _0xa986a7<_0x486cef?-0x1:_0xa986a7>_0x486cef?0x1:0x0;});}[_0x1cbe52(0x23f)](_0x585349,_0x145697){var _0xbf1f84=_0x1cbe52;if(!(_0x145697[_0xbf1f84(0x1d6)]||!_0x585349['props']||!_0x585349[_0xbf1f84(0x225)][_0xbf1f84(0x2b4)])){for(var _0x18f614=[],_0x3f4e45=[],_0x31f687=0x0,_0x2e665e=_0x585349[_0xbf1f84(0x225)][_0xbf1f84(0x2b4)];_0x31f687<_0x2e665e;_0x31f687++){var _0x3b1953=_0x585349[_0xbf1f84(0x225)][_0x31f687];_0x3b1953[_0xbf1f84(0x26d)]===_0xbf1f84(0x232)?_0x18f614[_0xbf1f84(0x282)](_0x3b1953):_0x3f4e45[_0xbf1f84(0x282)](_0x3b1953);}if(!(!_0x3f4e45[_0xbf1f84(0x2b4)]||_0x18f614['length']<=0x1)){_0x585349[_0xbf1f84(0x225)]=_0x3f4e45;var _0xc08550={'functionsNode':!0x0,'props':_0x18f614};this[_0xbf1f84(0x276)](_0xc08550,_0x145697),this[_0xbf1f84(0x259)](_0xc08550,_0x145697),this['_setNodeExpandableState'](_0xc08550),this[_0xbf1f84(0x273)](_0xc08550,_0x145697),_0xc08550['id']+='\\x20f',_0x585349[_0xbf1f84(0x225)]['unshift'](_0xc08550);}}}[_0x1cbe52(0x25e)](_0x2f11b5,_0x36d5d7){}['_setNodeExpandableState'](_0x1f8dd9){}[_0x1cbe52(0x207)](_0x48594d){var _0x58db91=_0x1cbe52;return Array[_0x58db91(0x2a7)](_0x48594d)||typeof _0x48594d==_0x58db91(0x20a)&&this[_0x58db91(0x1f1)](_0x48594d)===_0x58db91(0x275);}[_0x1cbe52(0x273)](_0x18e911,_0x43af21){}[_0x1cbe52(0x293)](_0x194812){var _0x2a3394=_0x1cbe52;delete _0x194812[_0x2a3394(0x202)],delete _0x194812[_0x2a3394(0x217)],delete _0x194812['_hasMapOnItsPath'];}[_0x1cbe52(0x23a)](_0x3bb79c,_0x343261){}}let _0xdd71a7=new _0x849a7a(),_0x33dde3={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5744f6={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x57dce3(_0xa51c71,_0xc40013,_0x49c361,_0x7c1401,_0x59201c,_0x27a426){var _0x50e3fe=_0x1cbe52;let _0x5532f1,_0x321602;try{_0x321602=_0x5b4fd4(),_0x5532f1=_0xa26422[_0xc40013],!_0x5532f1||_0x321602-_0x5532f1['ts']>0x1f4&&_0x5532f1['count']&&_0x5532f1[_0x50e3fe(0x265)]/_0x5532f1[_0x50e3fe(0x1f6)]<0x64?(_0xa26422[_0xc40013]=_0x5532f1={'count':0x0,'time':0x0,'ts':_0x321602},_0xa26422[_0x50e3fe(0x2a6)]={}):_0x321602-_0xa26422[_0x50e3fe(0x2a6)]['ts']>0x32&&_0xa26422[_0x50e3fe(0x2a6)][_0x50e3fe(0x1f6)]&&_0xa26422[_0x50e3fe(0x2a6)][_0x50e3fe(0x265)]/_0xa26422[_0x50e3fe(0x2a6)][_0x50e3fe(0x1f6)]<0x64&&(_0xa26422['hits']={});let _0x22cbcd=[],_0x3f3e9d=_0x5532f1[_0x50e3fe(0x1e1)]||_0xa26422[_0x50e3fe(0x2a6)][_0x50e3fe(0x1e1)]?_0x5744f6:_0x33dde3,_0x1141ba=_0x35dbd1=>{var _0x567687=_0x50e3fe;let _0x1584e0={};return _0x1584e0['props']=_0x35dbd1['props'],_0x1584e0[_0x567687(0x2b8)]=_0x35dbd1[_0x567687(0x2b8)],_0x1584e0['strLength']=_0x35dbd1[_0x567687(0x268)],_0x1584e0[_0x567687(0x246)]=_0x35dbd1[_0x567687(0x246)],_0x1584e0['autoExpandLimit']=_0x35dbd1[_0x567687(0x245)],_0x1584e0[_0x567687(0x1f4)]=_0x35dbd1[_0x567687(0x1f4)],_0x1584e0[_0x567687(0x1ff)]=!0x1,_0x1584e0[_0x567687(0x1d6)]=!_0x110256,_0x1584e0[_0x567687(0x1e6)]=0x1,_0x1584e0[_0x567687(0x296)]=0x0,_0x1584e0[_0x567687(0x258)]=_0x567687(0x20b),_0x1584e0['rootExpression']=_0x567687(0x2af),_0x1584e0['autoExpand']=!0x0,_0x1584e0[_0x567687(0x236)]=[],_0x1584e0['autoExpandPropertyCount']=0x0,_0x1584e0[_0x567687(0x2a4)]=!0x0,_0x1584e0[_0x567687(0x26b)]=0x0,_0x1584e0[_0x567687(0x29c)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1584e0;};for(var _0x3d41d9=0x0;_0x3d41d9<_0x59201c[_0x50e3fe(0x2b4)];_0x3d41d9++)_0x22cbcd[_0x50e3fe(0x282)](_0xdd71a7['serialize']({'timeNode':_0xa51c71===_0x50e3fe(0x265)||void 0x0},_0x59201c[_0x3d41d9],_0x1141ba(_0x3f3e9d),{}));if(_0xa51c71==='trace'){let _0x10db8b=Error[_0x50e3fe(0x2a1)];try{Error[_0x50e3fe(0x2a1)]=0x1/0x0,_0x22cbcd['push'](_0xdd71a7['serialize']({'stackNode':!0x0},new Error()[_0x50e3fe(0x23d)],_0x1141ba(_0x3f3e9d),{'strLength':0x1/0x0}));}finally{Error[_0x50e3fe(0x2a1)]=_0x10db8b;}}return{'method':_0x50e3fe(0x284),'version':_0x582bd,'args':[{'ts':_0x49c361,'session':_0x7c1401,'args':_0x22cbcd,'id':_0xc40013,'context':_0x27a426}]};}catch(_0x586eba){return{'method':_0x50e3fe(0x284),'version':_0x582bd,'args':[{'ts':_0x49c361,'session':_0x7c1401,'args':[{'type':_0x50e3fe(0x1e3),'error':_0x586eba&&_0x586eba['message']}],'id':_0xc40013,'context':_0x27a426}]};}finally{try{if(_0x5532f1&&_0x321602){let _0xb61c81=_0x5b4fd4();_0x5532f1['count']++,_0x5532f1['time']+=_0x428c5e(_0x321602,_0xb61c81),_0x5532f1['ts']=_0xb61c81,_0xa26422[_0x50e3fe(0x2a6)][_0x50e3fe(0x1f6)]++,_0xa26422[_0x50e3fe(0x2a6)]['time']+=_0x428c5e(_0x321602,_0xb61c81),_0xa26422['hits']['ts']=_0xb61c81,(_0x5532f1[_0x50e3fe(0x1f6)]>0x32||_0x5532f1[_0x50e3fe(0x265)]>0x64)&&(_0x5532f1['reduceLimits']=!0x0),(_0xa26422[_0x50e3fe(0x2a6)]['count']>0x3e8||_0xa26422[_0x50e3fe(0x2a6)]['time']>0x12c)&&(_0xa26422['hits'][_0x50e3fe(0x1e1)]=!0x0);}}catch{}}}return _0x57dce3;}((_0x2aaeb3,_0x36d8da,_0x12b37f,_0x57e3d2,_0x2fd701,_0x3efb24,_0x35570f,_0x1d15e1,_0x6ffb5d,_0x87aaa4)=>{var _0x1e6a74=_0x4bc600;if(_0x2aaeb3['_console_ninja'])return _0x2aaeb3[_0x1e6a74(0x261)];if(!J(_0x2aaeb3,_0x1d15e1,_0x2fd701))return _0x2aaeb3['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x2aaeb3[_0x1e6a74(0x261)];let _0x23c3c8=W(_0x2aaeb3),_0x1b4ed4=_0x23c3c8['elapsed'],_0x1b4720=_0x23c3c8[_0x1e6a74(0x292)],_0x58293b=_0x23c3c8['now'],_0x118266={'hits':{},'ts':{}},_0x4bbc9d=Y(_0x2aaeb3,_0x6ffb5d,_0x118266,_0x3efb24),_0x109ea1=_0xb41e4c=>{_0x118266['ts'][_0xb41e4c]=_0x1b4720();},_0x3fe9c2=(_0x1c50b6,_0x2f8ba5)=>{var _0x565823=_0x1e6a74;let _0x2debbf=_0x118266['ts'][_0x2f8ba5];if(delete _0x118266['ts'][_0x2f8ba5],_0x2debbf){let _0x39e809=_0x1b4ed4(_0x2debbf,_0x1b4720());_0x1d64fa(_0x4bbc9d(_0x565823(0x265),_0x1c50b6,_0x58293b(),_0x2a339d,[_0x39e809],_0x2f8ba5));}},_0x499a1a=_0x323055=>_0x58654d=>{var _0x40acc9=_0x1e6a74;try{_0x109ea1(_0x58654d),_0x323055(_0x58654d);}finally{_0x2aaeb3[_0x40acc9(0x21b)][_0x40acc9(0x265)]=_0x323055;}},_0x4004cb=_0x4f5b13=>_0x140ac1=>{var _0x369530=_0x1e6a74;try{let [_0x3b118c,_0x4f5ebe]=_0x140ac1['split'](_0x369530(0x252));_0x3fe9c2(_0x4f5ebe,_0x3b118c),_0x4f5b13(_0x3b118c);}finally{_0x2aaeb3['console']['timeEnd']=_0x4f5b13;}};_0x2aaeb3[_0x1e6a74(0x261)]={'consoleLog':(_0x54b41d,_0x1e5836)=>{var _0x4252b2=_0x1e6a74;_0x2aaeb3[_0x4252b2(0x21b)][_0x4252b2(0x284)][_0x4252b2(0x1e2)]!==_0x4252b2(0x208)&&_0x1d64fa(_0x4bbc9d('log',_0x54b41d,_0x58293b(),_0x2a339d,_0x1e5836));},'consoleTrace':(_0x36d7b4,_0x4478f9)=>{var _0x43e8a7=_0x1e6a74;_0x2aaeb3['console'][_0x43e8a7(0x284)][_0x43e8a7(0x1e2)]!==_0x43e8a7(0x1d5)&&_0x1d64fa(_0x4bbc9d(_0x43e8a7(0x269),_0x36d7b4,_0x58293b(),_0x2a339d,_0x4478f9));},'consoleTime':()=>{var _0x2f1631=_0x1e6a74;_0x2aaeb3[_0x2f1631(0x21b)][_0x2f1631(0x265)]=_0x499a1a(_0x2aaeb3[_0x2f1631(0x21b)][_0x2f1631(0x265)]);},'consoleTimeEnd':()=>{var _0x41ece6=_0x1e6a74;_0x2aaeb3[_0x41ece6(0x21b)][_0x41ece6(0x1d4)]=_0x4004cb(_0x2aaeb3[_0x41ece6(0x21b)][_0x41ece6(0x1d4)]);},'autoLog':(_0x35fd8f,_0x41e38e)=>{var _0x53741b=_0x1e6a74;_0x1d64fa(_0x4bbc9d(_0x53741b(0x284),_0x41e38e,_0x58293b(),_0x2a339d,[_0x35fd8f]));},'autoLogMany':(_0x35ac8f,_0x1f7a22)=>{var _0x1bad7d=_0x1e6a74;_0x1d64fa(_0x4bbc9d(_0x1bad7d(0x284),_0x35ac8f,_0x58293b(),_0x2a339d,_0x1f7a22));},'autoTrace':(_0x55951a,_0x2c19f5)=>{var _0x16a9f8=_0x1e6a74;_0x1d64fa(_0x4bbc9d(_0x16a9f8(0x269),_0x2c19f5,_0x58293b(),_0x2a339d,[_0x55951a]));},'autoTraceMany':(_0x2bf2af,_0xf71a17)=>{var _0x1f7319=_0x1e6a74;_0x1d64fa(_0x4bbc9d(_0x1f7319(0x269),_0x2bf2af,_0x58293b(),_0x2a339d,_0xf71a17));},'autoTime':(_0x4997a6,_0x5a0b95,_0x53d3db)=>{_0x109ea1(_0x53d3db);},'autoTimeEnd':(_0x4c0e6b,_0x41e244,_0x53e95d)=>{_0x3fe9c2(_0x41e244,_0x53e95d);},'coverage':_0xc932cf=>{_0x1d64fa({'method':'coverage','version':_0x3efb24,'args':[{'id':_0xc932cf}]});}};let _0x1d64fa=b(_0x2aaeb3,_0x36d8da,_0x12b37f,_0x57e3d2,_0x2fd701,_0x87aaa4),_0x2a339d=_0x2aaeb3[_0x1e6a74(0x2a5)];return _0x2aaeb3['_console_ninja'];})(globalThis,'127.0.0.1',_0x4bc600(0x1ec),_0x4bc600(0x24a),_0x4bc600(0x27c),_0x4bc600(0x216),_0x4bc600(0x22d),["localhost","127.0.0.1","example.cypress.io","DESKTOP-N2LHC09","172.21.208.1"],_0x4bc600(0x221),_0x4bc600(0x281));function _0x2b49(){var _0x31fb4e=['port','string','[object\\x20Map]','_setNodeExpressionPath','_ws','perf_hooks','stack','env','_addFunctionsNode','_HTMLAllCollection','_getOwnPropertyDescriptor','remix','unref','_capIfString','autoExpandLimit','totalStrLength','now','_webSocketErrorDocsLink','NEGATIVE_INFINITY',"c:\\\\Users\\\\KELLYNCODES\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.266\\\\node_modules",'dockerizedApp','replace','indexOf','getWebSocketClass','path','_p_','_treeNodePropertiesAfterFullValue',':logPointId:','WebSocket','process','expressionsToEvaluate','includes','error','expId','_setNodeLabel','reload','negativeInfinity','host','145212RzUuxF','_addLoadNode','catch','_WebSocketClass','_console_ninja','_connecting','valueOf','default','time','Error','close','strLength','trace','3593205BcbunP','allStrLength','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','type','symbol','nodeModules','funcName','_inNextEdge','concat','_setNodePermissions','array','[object\\x20Array]','_setNodeId','readyState','10931rETynB','stringify','_addObjectProperty','_disposeWebsocket','angular','ws/index.js','_isMap','performance','message','','push','_setNodeExpandableState','log','\\x20server','defineProperty','getter','https://tinyurl.com/37x8b79t','_reconnectTimeout','_sendErrorMessage','[object\\x20Date]','map','cappedProps','_connectAttemptCount','3080560rOCuqr','_isPrimitiveType','pathToFileURL','timeStamp','_cleanNode','then','current','level','nuxt','bigint','parent','_processTreeNodeResult','getOwnPropertySymbols','node','data','pop','enumerable','__es'+'Module','stackTraceLimit','method','NEXT_RUNTIME','resolveGetters','_console_ninja_session','hits','isArray','autoExpand','_numberRegExp','_setNodeQueryPath','test','hrtime','_isPrimitiveWrapperType','getOwnPropertyNames','root_exp','logger\\x20websocket\\x20error','getOwnPropertyDescriptor','date','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','length','get','capped','Buffer','elements','substr','_propertyName','_allowedToConnectOnSend','onopen','null','_inBrowser','_isUndefined','_isNegativeZero','timeEnd','disabledTrace','noFunctions','_isSet','constructor','location','toString','index','_maxConnectAttemptCount','Number','RegExp','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_connectToHostNow','reduceLimits','name','unknown','Set','_WebSocket','depth','join','_regExpToString','create','versions','send','62207','positiveInfinity','bind','hostname','String','_objectToString','_connected','undefined','autoExpandMaxDepth','onclose','count','warn','nan','Symbol','_allowedToSend','_sortProps','url','POSITIVE_INFINITY','_type','sortProps','forEach','number','_hasSymbolPropertyOnItsPath','1037314PfGsPK','edge','split','...','_isArray','disabledLog','_consoleNinjaAllowedToStart','object','root_exp_id','hasOwnProperty','_attemptToReconnectShortly','call','[object\\x20Set]','negativeZero','_additionalMetadata','setter','HTMLAllCollection','prototype','global','1.0.0','_hasSetOnItsPath','15fnamwA','_treeNodePropertiesBeforeFullValue','value','console','4745856RTNeNK','parse','autoExpandPropertyCount','_getOwnPropertySymbols','toLowerCase','','_p_name','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','Map','props','serialize','set','match','\\x20browser','isExpressionToEvaluate','_addProperty','onerror','1701338869271','_socket','astro','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_getOwnPropertyNames','function','3568140AwaOwm','_property','_undefined','autoExpandPreviousObjects'];_0x2b49=function(){return _0x31fb4e;};return _0x2b49();}`);
  } catch (e) {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {
  }
  return v;
}

// src/app/pages/testimonials/testimonials.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TestimonialsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "swiper-slide", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275element(3, "img", 10);
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275element(9, "i", 11);
    \u0275\u0275text(10);
    \u0275\u0275element(11, "i", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const testimonial_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("alt", testimonial_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", testimonial_r1.text, " ");
  }
}
var TestimonialsComponent = /* @__PURE__ */ (() => {
  const _TestimonialsComponent = class _TestimonialsComponent {
    constructor() {
      this.testimonials = [{
        id: 1,
        name: "Lisa Me",
        text: "Outstanding care at Sobol Orthopedic! From diagnosis to recovery, the team provided exceptional support during my spine treatment. Their commitment to patient well-being is unmatched. Thank you for giving me my mobility back!",
        avatar: "assets/images/slide-1.jpg",
        title: "Advanced Spine Surgery and Comprehensive Treatment"
      }, {
        id: 2,
        name: "Mike S",
        text: "I can't express my gratitude enough to Sobol Orthopedic. After a sports injury, their sports medicine specialists guided me through a personalized treatment plan, combining innovative therapies and rehabilitation exercises. The comprehensive approach and cutting-edge techniques made all the difference in my recovery",
        avatar: "assets/images/slide-2.jpg",
        title: "Personalized Sports Medicine Plan and Rehabilitation"
      }, {
        id: 3,
        name: "Emily B.",
        text: "My experience with Sobol Orthopedic exceeded expectations. Their focus on rehabilitation and personalized physical therapy significantly improved my recovery from a musculoskeletal issue. I recommend Sobol to anyone seeking top-tier orthopedic care.",
        avatar: "assets/images/slide-3.jpg",
        title: "Personalized Rehabilitation and Physical Therapy"
      }, {
        id: 4,
        name: "Robert H.",
        text: "Choosing Sobol Orthopedic was the best decision for my hip replacement. The surgeons and support staff provided unparalleled expertise and kindness. Today, I enjoy an active lifestyle, all thanks to Sobol's top-notch orthopedic care.",
        avatar: "assets/images/slide-1.jpg",
        title: "Successful Hip Replacement"
      }, {
        id: 5,
        name: "David L.",
        text: "Sobol Orthopedic Medical Group is a beacon of excellence. They successfully addressed my joint issues with precision and care. The friendly staff and state-of-the-art facilities made my orthopedic journey seamless and comfortable",
        avatar: "assets/images/slide-1.jpg",
        title: "Immediate Orthopedic Trauma Care and Rehabilitation"
      }];
      this.swiperConfig = {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5e3,
          disableOnInteraction: false
        },
        slidesPerView: "auto",
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        }
      };
    }
  };
  _TestimonialsComponent.\u0275fac = function TestimonialsComponent_Factory(t) {
    return new (t || _TestimonialsComponent)();
  };
  _TestimonialsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TestimonialsComponent,
    selectors: [["sobol-testimonials"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 11,
    vars: 1,
    consts: [["id", "testimonials", 1, "testimonials", "flex", "items-center", "justify-center"], [1, "container"], [1, "header-text"], [1, "mx-auto", "font-bold", "text-lg", "w-fit", "text-center"], [1, "testimonials-slider", "swiper", "w-[90%]", "mx-auto"], ["Swiper", "", "pagination", "true", "pagination-clickable", "true", "init", "true", 1, "swiper-wrapper", 3, "config"], [1, "swiper-pagination"], [1, "swiper-slide"], [1, "testimonial-wrap"], [1, "testimonial-item"], ["src", "assets/images/logo.png", 1, "testimonial-img", 3, "alt"], [1, "bx", "bxs-quote-alt-left", "quote-icon-left"], [1, "bx", "bxs-quote-alt-right", "quote-icon-right"], ["class", "swiper-slide"]],
    template: function TestimonialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Testimonials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h4", 3);
        \u0275\u0275text(5, " What are they saying about us. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "swiper-container", 5);
        \u0275\u0275repeaterCreate(8, TestimonialsComponent_For_9_Template, 12, 4, "swiper-slide", 13, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "div", 6);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("config", ctx.swiperConfig);
        \u0275\u0275advance(1);
        \u0275\u0275repeater(ctx.testimonials);
      }
    },
    dependencies: [CommonModule, SwiperDirective],
    styles: ["\n\n.autoplay-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n  z-index: 10;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  color: var(--swiper-theme-color);\n}\n.autoplay-progress[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  --progress: 0;\n  position: absolute;\n  left: 0;\n  top: 0px;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  stroke-width: 4px;\n  stroke: var(--swiper-theme-color);\n  fill: none;\n  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));\n  stroke-dasharray: 125.6;\n  transform: rotate(-90deg);\n}\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  padding: 30px 30px 30px 60px;\n  margin: 30px 15px;\n  min-height: 200px;\n  border: 1px solid #eef0ef;\n  position: relative;\n  background: #fff;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%] {\n  width: 90px;\n  border-radius: 10px;\n  border: 6px solid #fff;\n  position: absolute;\n  left: -45px;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 10px 0 5px 0;\n  color: #111;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #999;\n  margin: 0;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .quote-icon-left[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .quote-icon-right[_ngcontent-%COMP%] {\n  color: #c1ecce;\n  font-size: 26px;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .quote-icon-left[_ngcontent-%COMP%] {\n  display: inline-block;\n  left: -5px;\n  position: relative;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .quote-icon-right[_ngcontent-%COMP%] {\n  display: inline-block;\n  right: -5px;\n  position: relative;\n  top: 10px;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin: 15px auto;\n}\n.testimonials[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  position: relative;\n}\n.testimonials[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  opacity: 1;\n  border: 1px solid #5fcf80;\n}\n.testimonials[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  background-color: #5fcf80;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi5hdXRvcGxheS1wcm9ncmVzcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIGJvdHRvbTogMTZweDtcclxuICB6LWluZGV4OiAxMDtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpO1xyXG59XHJcblxyXG4uYXV0b3BsYXktcHJvZ3Jlc3Mgc3ZnIHtcclxuICAtLXByb2dyZXNzOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBzdHJva2Utd2lkdGg6IDRweDtcclxuICBzdHJva2U6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XHJcbiAgZmlsbDogbm9uZTtcclxuICBzdHJva2UtZGFzaG9mZnNldDogY2FsYygxMjUuNiAqICgxIC0gdmFyKC0tcHJvZ3Jlc3MpKSk7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTI1LjY7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIFRlc3RpbW9uaWFsc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbC1pdGVtIHtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCA2MHB4O1xyXG4gIG1hcmdpbjogMzBweCAxNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWYwZWY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFsLWl0ZW0gLnRlc3RpbW9uaWFsLWltZyB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDZweCBzb2xpZCAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtNDVweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWwtaXRlbSBoMyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMTBweCAwIDVweCAwO1xyXG4gIGNvbG9yOiAjMTExO1xyXG59XHJcblxyXG4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbC1pdGVtIGg0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbC1pdGVtIC5xdW90ZS1pY29uLWxlZnQsXHJcbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFsLWl0ZW0gLnF1b3RlLWljb24tcmlnaHQge1xyXG4gIGNvbG9yOiAjYzFlY2NlO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWwtaXRlbSAucXVvdGUtaWNvbi1sZWZ0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGVmdDogLTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFsLWl0ZW0gLnF1b3RlLWljb24tcmlnaHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICByaWdodDogLTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbC1pdGVtIHAge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscyAuc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGVzdGltb25pYWxzIC5zd2lwZXItcGFnaW5hdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ZmNmODA7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZjZjgwO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxDQUFDO0FBQ0MsWUFBVTtBQUNWLFNBQU87QUFDUCxVQUFRO0FBQ1IsV0FBUztBQUNULFNBQU87QUFDUCxVQUFRO0FBQ1IsV0FBUztBQUNULGVBQWE7QUFDYixtQkFBaUI7QUFDakIsZUFBYTtBQUNiLFNBQU8sSUFBSTtBQUNiO0FBRUEsQ0FkQyxrQkFja0I7QUFDakIsY0FBWTtBQUNaLFlBQVU7QUFDVixRQUFNO0FBQ04sT0FBSztBQUNMLFdBQVM7QUFDVCxTQUFPO0FBQ1AsVUFBUTtBQUNSLGdCQUFjO0FBQ2QsVUFBUSxJQUFJO0FBQ1osUUFBTTtBQUNOLHFCQUFtQixLQUFLLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJO0FBQ3pDLG9CQUFrQjtBQUNsQixhQUFXLE9BQU87QUFDcEI7QUFNQSxDQUFDLGFBQWEsQ0FBQztBQUNiLGNBQVk7QUFDWixXQUFTLEtBQUssS0FBSyxLQUFLO0FBQ3hCLFVBQVEsS0FBSztBQUNiLGNBQVk7QUFDWixVQUFRLElBQUksTUFBTTtBQUNsQixZQUFVO0FBQ1YsY0FBWTtBQUNkO0FBRUEsQ0FWQyxhQVVhLENBVkMsaUJBVWlCLENBQUM7QUFDL0IsU0FBTztBQUNQLGlCQUFlO0FBQ2YsVUFBUSxJQUFJLE1BQU07QUFDbEIsWUFBVTtBQUNWLFFBQU07QUFDUjtBQUVBLENBbEJDLGFBa0JhLENBbEJDLGlCQWtCaUI7QUFDOUIsYUFBVztBQUNYLGVBQWE7QUFDYixVQUFRLEtBQUssRUFBRSxJQUFJO0FBQ25CLFNBQU87QUFDVDtBQUVBLENBekJDLGFBeUJhLENBekJDLGlCQXlCaUI7QUFDOUIsYUFBVztBQUNYLFNBQU87QUFDUCxVQUFRO0FBQ1Y7QUFFQSxDQS9CQyxhQStCYSxDQS9CQyxpQkErQmlCLENBQUM7QUFDakMsQ0FoQ0MsYUFnQ2EsQ0FoQ0MsaUJBZ0NpQixDQUFDO0FBQy9CLFNBQU87QUFDUCxhQUFXO0FBQ2I7QUFFQSxDQXJDQyxhQXFDYSxDQXJDQyxpQkFxQ2lCLENBTkM7QUFPL0IsV0FBUztBQUNULFFBQU07QUFDTixZQUFVO0FBQ1o7QUFFQSxDQTNDQyxhQTJDYSxDQTNDQyxpQkEyQ2lCLENBWEM7QUFZL0IsV0FBUztBQUNULFNBQU87QUFDUCxZQUFVO0FBQ1YsT0FBSztBQUNQO0FBRUEsQ0FsREMsYUFrRGEsQ0FsREMsaUJBa0RpQjtBQUM5QixjQUFZO0FBQ1osVUFBUSxLQUFLO0FBQ2Y7QUFFQSxDQXZEQyxhQXVEYSxDQUFDO0FBQ2IsY0FBWTtBQUNaLFlBQVU7QUFDWjtBQUVBLENBNURDLGFBNERhLENBTEMsa0JBS2tCLENBQUM7QUFDaEMsU0FBTztBQUNQLFVBQVE7QUFDUixvQkFBa0I7QUFDbEIsV0FBUztBQUNULFVBQVEsSUFBSSxNQUFNO0FBQ3BCO0FBRUEsQ0FwRUMsYUFvRWEsQ0FiQyxrQkFha0IsQ0FBQztBQUNoQyxvQkFBa0I7QUFDcEI7IiwKICAibmFtZXMiOiBbXQp9Cg== */"]
  });
  let TestimonialsComponent2 = _TestimonialsComponent;
  return TestimonialsComponent2;
})();

// src/app/pages/home/home.component.ts
var HomeComponent = /* @__PURE__ */ (() => {
  const _HomeComponent = class _HomeComponent {
  };
  _HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
    return new (t || _HomeComponent)();
  };
  _HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _HomeComponent,
    selectors: [["sobol-home"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 21,
    vars: 0,
    consts: [[1, "home", "rounded-b-right"], [1, "header-text-container"], [1, "text-white", "text-start", "text-xl", "md:text-2xl", "xl:text-4xl", "font-bold"], [1, "text-white", "text-start", "text-xl", "md:text-2xl", "xl:text-4xl", "font-bold", "mt-2", "lg:mt-4"], [1, "text-blue-200", "text-start", "text-lg", "p-2", "md:text-2xl", "leading-[2rem]", "mt-4"], ["link", "/appointment", "customClasses", "mt-12", "label", "Book Appointment"], [1, "h-fit", "min-h-[5rem]", "bg-blue-teal-gradient", "text-center", "md:text-left"], [1, "m-auto", "flex", "items-center", "justify-center", "flex-col", "lg:flex-row", "gap-10", "lg:gap-0", "h-40", "w-full", "md:w-[90%]"], [1, "text-xl", "font-bold", "text-white"], [1, "block", "sm:hidden"], ["href", "tel:+1-949-298-7967"], ["link", "/appointment", "label", "Book Appointment", "customClasses", "text-white font-semibold md:ml-8 mt-4 md:mt-0;"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main")(1, "section", 0)(2, "div", 1)(3, "h1", 2);
        \u0275\u0275text(4, " Welcome to SOBOL ORTHOPEDIC MEDICAL ");
        \u0275\u0275elementStart(5, "h2", 3);
        \u0275\u0275text(6, " Your trusted partner in orthopedic care! ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, " Explore tailored orthopedic solutions crafted by experts, focused on your total well-being. Because your health matters, and every step forward counts. ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "sobol-button", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "sobol-about")(11, "sobol-testimonials");
        \u0275\u0275elementStart(12, "section", 6)(13, "div", 7)(14, "h2", 8);
        \u0275\u0275text(15, " Get in touch with us today! ");
        \u0275\u0275element(16, "br", 9);
        \u0275\u0275text(17, "Call us on: ");
        \u0275\u0275elementStart(18, "a", 10);
        \u0275\u0275text(19, "+1-949-298-7967");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "sobol-button", 11);
        \u0275\u0275elementEnd()()();
      }
    },
    dependencies: [CommonModule, ButtonComponent, TestimonialsComponent, AboutComponent],
    styles: ['\n\n.home[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  margin-top: 2rem;\n  display: flex;\n  height: 100vh;\n  max-height: 100vh;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-around;\n  background-color: transparent;\n  object-fit: cover;\n}\n@media (min-width: 1024px) {\n  .home[_ngcontent-%COMP%] {\n    margin-top: 6rem;\n  }\n}\n.home[_ngcontent-%COMP%] {\n  background-image: url("./media/slide-3.jpg");\n  background-repeat: no-repeat;\n}\n.header-text-container[_ngcontent-%COMP%] {\n  z-index: 10;\n  display: flex;\n  height: 50%;\n  min-height: 100%;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1rem;\n}\n@media (min-width: 768px) {\n  .header-text-container[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n@media (min-width: 1024px) {\n  .header-text-container[_ngcontent-%COMP%] {\n    margin-top: -4.5rem;\n    width: 60%;\n  }\n}\n@media (min-width: 1000px) {\n  .home[_ngcontent-%COMP%] {\n    background-position: center;\n    background-size: cover;\n  }\n}\n.home[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 9;\n  height: 100vh;\n  width: 100%;\n  background-color: #00346770;\n  border-bottom-right-radius: 100px;\n}\n@media (min-width: 1024px) {\n  .home[_ngcontent-%COMP%]::after {\n    border-bottom-right-radius: 128px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLmhvbWUge1xyXG4gIEBhcHBseSBiZy10cmFuc3BhcmVudCByZWxhdGl2ZSBtdC04IGxnOm10LVs2cmVtXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBtaW4taC1zY3JlZW4gdy1mdWxsIGgtWzEwMHZoXSBtYXgtaC1bMTAwdmhdIG9iamVjdC1jb3ZlciB6LTA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZS0zLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQtY29udGFpbmVyIHtcclxuICBAYXBwbHkgZmxleCBwLTQgZmxleC1jb2wgbWluLWgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgIHctZnVsbCBtZDp3LVs3NSVdIGxnOnctWzYwJV0gei0xMCBoLVs1MCVdIGxnOi1tdC1bNC41cmVtXTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIC5ob21lIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uaG9tZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgQGFwcGx5IGgtWzEwMHZoXSB3LWZ1bGwgYmctWyMwMDM0Njc3MF0gdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYWJzb2x1dGUgei1bOV07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmhvbWU6OmFmdGVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMjhweDtcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNFLENBQUE7QUFBQSxZQUFBO0FBQUEsV0FBQTtBQUFBLGNBQUE7QUFBQSxXQUFBO0FBQUEsVUFBQTtBQUFBLGNBQUE7QUFBQSxjQUFBO0FBQUEsU0FBQTtBQUFBLGVBQUE7QUFBQSxtQkFBQTtBQUFBLG9CQUFBO0FBQUEsY0FBQTtBQUE4STtBQUE5SSxPQUFBLENBQUEsU0FBQSxFQUFBO0FBQUEsR0FBQTtBQUFBLGdCQUFBO0FBQThJO0FBQUE7QUFEaEosQ0FDRTtBQUNBLG9CQUFBO0FBQ0EscUJBQUE7QUFDRjtBQUdFLENBQUE7QUFBQSxXQUFBO0FBQUEsV0FBQTtBQUFBLFVBQUE7QUFBQSxjQUFBO0FBQUEsU0FBQTtBQUFBLGtCQUFBO0FBQUEsZUFBQTtBQUFBLG1CQUFBO0FBQUEsT0FBQTtBQUFBLFdBQUE7QUFBZ0k7QUFBaEksT0FBQSxDQUFBLFNBQUEsRUFBQTtBQUFBLEdBQUE7QUFBQSxXQUFBO0FBQWdJO0FBQUE7QUFBaEksT0FBQSxDQUFBLFNBQUEsRUFBQTtBQUFBLEdBQUE7QUFBQSxnQkFBQTtBQUFBLFdBQUE7QUFBZ0k7QUFBQTtBQUdsSSxPQUFBLENBQUEsU0FBQSxFQUFBO0FBQ0UsR0FWQTtBQVdFLHlCQUFBO0FBQ0EscUJBQUE7QUFDRjtBQUNGO0FBRUEsQ0FoQkUsSUFnQkY7QUFDRSxXQUFBO0FBQ0EsWUFBQTtBQUFBLE9BQUE7QUFBQSxRQUFBO0FBQUEsU0FBQTtBQUFBLFdBQUE7QUFBQSxVQUFBO0FBQUEsU0FBQTtBQUFBLG9CQUFBO0FBQ0EsOEJBQUE7QUFDRjtBQUVBLE9BQUEsQ0FBQSxTQUFBLEVBQUE7QUFDRSxHQXZCQSxJQXVCQTtBQUNFLGdDQUFBO0FBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K */']
  });
  let HomeComponent2 = _HomeComponent;
  return HomeComponent2;
})();

// src/app/pages/about/detail/Data/orthospecialists.ts
var OrthopedicSpecialties = [{
  key: 1,
  value: "Podiatry"
}, {
  key: 2,
  value: "Back"
}, {
  key: 3,
  value: "Neck"
}, {
  key: 4,
  value: "Foot"
}, {
  key: 5,
  value: "Ankle"
}, {
  key: 6,
  value: "Spine"
}, {
  key: 7,
  value: "Hand"
}, {
  key: 8,
  value: "Spine"
}, {
  key: 9,
  value: "Elbow"
}, {
  key: 10,
  value: "Wrist"
}, {
  key: 11,
  value: "Hip"
}, {
  key: 12,
  value: "Knee"
}, {
  key: 13,
  value: "Shoulder"
}, {
  key: 14,
  value: "Joint Replacement"
}, {
  key: 15,
  value: "Sports Medicine"
}, {
  key: 16,
  value: "Joint Revision"
}, {
  key: 17,
  value: "Orthopedic Trauma"
}, {
  key: 18,
  value: "Physical Medicine & Rehab"
}];
var PhysicalTherapy = [{
  key: 1,
  value: "Walk-in Clinic"
}, {
  key: 2,
  value: "Surgery Center"
}, {
  key: 3,
  value: "Athletic Training"
}, {
  key: 4,
  value: "Hand Therapy"
}, {
  key: 5,
  value: "Massage Therapy"
}, {
  key: 6,
  value: "Physical Therapy"
}, {
  key: 7,
  value: "Durable Medical Equipment"
}, {
  key: 8,
  value: "Electrodiagnostic Medicine"
}];

// src/app/pages/about/detail/detail.component.ts
function DetailComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const orthoSpecialist_r2 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(orthoSpecialist_r2.value);
  }
}
function DetailComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const orthoSpecialist_r3 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(orthoSpecialist_r3.value);
  }
}
var DetailComponent = /* @__PURE__ */ (() => {
  const _DetailComponent = class _DetailComponent {
    constructor(renderer, el, router) {
      this.renderer = renderer;
      this.el = el;
      this.router = router;
      this.orthopedicSpecialists = OrthopedicSpecialties;
      this.physicalTherapy = PhysicalTherapy;
    }
    // Function to open the modal and apply the CSS class
    ngOnInit() {
      this.openModal();
    }
    ngOnDestroy() {
      this.closeModal();
    }
    openModal() {
      this.renderer.addClass(this.el.nativeElement.ownerDocument.body, "modal-open");
    }
    // Function to close the modal and remove the CSS class
    closeModal() {
      this.renderer.removeClass(this.el.nativeElement.ownerDocument.body, "modal-open");
      this.router.navigateByUrl("about");
    }
  };
  _DetailComponent.\u0275fac = function DetailComponent_Factory(t) {
    return new (t || _DetailComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Router));
  };
  _DetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DetailComponent,
    selectors: [["sobol-detail"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 31,
    vars: 2,
    consts: [[1, "w-full", "min-h-[100vh]", "flex", "items-center", "bg-black", "bg-opacity-50", "justify-center", "fixed", "inset-0", "z-[999999]", 3, "click"], [1, "w-full", "md:w-[70%]", "pb-4", "min-h-[95vh]", "rounded-md", "overflow-y-scroll", "shadow-lg", "z-[999999999]", "bg-white", "absolute", "mx-auto", "inset-0"], ["src", "assets/images/knee-surgery.jpg", "alt", "Sobol Orthopedic Medical Group", 1, "w-full", "h-[16rem]", "object-cover"], [1, "bg-[#003367]", "hover:bg-[#ee6565e6]", "cursor-pointer", "w-fit", "h-fit", "px-3", "py-2", "rounded-sm", "text-center", "text-white", "font-bold", "text-lg", 3, "click"], [1, "px-6", "py-4"], [1, "font-bold", "text-xl", "mb-2"], [1, "text-gray-700", "text-base"], [1, "inline-block", "bg-[#ee6565e6]", "text-white", "rounded-full", "px-3", "py-1", "text-sm", "font-semibold", "mb-2"], [1, "m-3"], [1, "px-6", "pt-4", "pb-2"], ["class", "inline-block bg-gray-200 hover:bg-[#ee6565e6] hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2", 4, "ngFor", "ngForOf"], [1, "font-bold", "text-xl", "m-4"], ["class", "inline-block bg-gray-200 hover:bg-[#003367] hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2", 4, "ngFor", "ngForOf"], [1, "inline-block", "bg-gray-200", "hover:bg-[#ee6565e6]", "hover:text-white", "rounded-full", "px-3", "py-1", "text-sm", "font-semibold", "text-gray-700", "mr-2", "mb-2"], [1, "inline-block", "bg-gray-200", "hover:bg-[#003367]", "hover:text-white", "rounded-full", "px-3", "py-1", "text-sm", "font-semibold", "text-gray-700", "mr-2", "mb-2"]],
    template: function DetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275listener("click", function DetailComponent_Template_section_click_0_listener() {
          return ctx.closeModal();
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "button", 3);
        \u0275\u0275listener("click", function DetailComponent_Template_button_click_3_listener() {
          return ctx.closeModal();
        });
        \u0275\u0275text(4, " Close ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
        \u0275\u0275text(7, "Sobol Orthopedic Medical Group");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275text(9, " We understands the uniqueness of orthopedic healthcare needs. Our commitment to the community is rooted in overcoming boundaries, and we believe that your orthopedic care should mirror this same determination. Our dedicated and diverse team comprises fellowship-trained specialists in each field of orthopedic medicine. ");
        \u0275\u0275element(10, "br")(11, "br");
        \u0275\u0275text(12, " These physicians have undergone the highest level of training available in their respective areas of expertise. This ensures that you receive the most advanced orthopedic care available. ");
        \u0275\u0275element(13, "br")(14, "br");
        \u0275\u0275elementStart(15, "h5", 7);
        \u0275\u0275text(16, " Continue reading here ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "br");
        \u0275\u0275text(18, " With a legacy spanning over 15 years, our unwavering mission has been to deliver cutting-edge treatments for bone, joint, and muscle-related conditions.");
        \u0275\u0275element(19, "br")(20, "br");
        \u0275\u0275text(21, " Our commitment to excellence extends to all facets of orthopedic specialization, including joint replacement and revision, sports medicine, physical medicine and rehabilitation, spine care, and orthopedic trauma. We take pride in being recognized for our exceptional training and expertise in orthopedics and sports medicine. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(22, "hr", 8);
        \u0275\u0275elementStart(23, "div", 9)(24, "h4", 5);
        \u0275\u0275text(25, "Orthopedic Specialties");
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, DetailComponent_span_26_Template, 2, 1, "span", 10);
        \u0275\u0275element(27, "hr", 8);
        \u0275\u0275elementStart(28, "h4", 11);
        \u0275\u0275text(29, "On-Site Services");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, DetailComponent_span_30_Template, 2, 1, "span", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275property("ngForOf", ctx.orthopedicSpecialists);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.physicalTherapy);
      }
    },
    dependencies: [CommonModule, NgForOf],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let DetailComponent2 = _DetailComponent;
  return DetailComponent2;
})();

// src/app/data/providers/providers.ts
var Doctors = [{
  id: "shane",
  name: "Shane S Pak, MD",
  image: "../../assets/images/doctors/doc-shane.jpg",
  specialization: "Orthopaedic Spine Surgery",
  about: "Dr. Pak specializes in Spine Surgery of the neck and back.",
  experience: "Dr. Pak is a graduate from the John Hopkins University and received his medical degree from the University of Pennsylvania School of Medicine. He completed his Orthopaedic surgery internship and residency at the Union Memorial Hospital and the Johns Hopkins Medical Institutions in Baltimore, Maryland. <br /> <br /> He completed his Spinal Surgery Fellowship at Rush Presbyterian - St. Luke\u2019s Hospital/Shriner\u2019s Hospital in Chicago with Dr. Ronald DeWald \u2013 the oldest spine surgery fellowship program in the United States. <br /> <br /> He practiced spinal surgery in Baltimore from 2001 \u2013 2007 and relocated to California in 2007. Dr. Pak is board certified by the American Board of Orthopaedic Surgery and is an elected Fellow of the American Academy of Orthopaedic Surgeons. <br /> <br /> He is an Active Member of the North American Spine Society and was a guest lecturer at the Johns Hopkins Medical Institutions. <br /> <br />  He is currently the Chairman of Orthopaedic Surgery at San Gabriel Valley Medical Center. In addition, Dr. Pak served as the consulting spine surgeon for the NFL Baltimore Ravens. For more information about Dr. Pak, please click here."
}, {
  id: "david",
  name: "David W.P. Huang, MD",
  image: "../../assets/images/doctors/doc_david.jpg",
  specialization: "General Orthopaedic Surgery",
  about: "David W.P. Huang, MD was born and raised in Tainan, Taiwan.",
  experience: "Dr. Huang specializes in knee replacement surgery, Orthopaedic trauma, fractures, dislocations and peripheral nerve impingement as well as general Orthopaedics. Dr. Huang is a graduate of Taipei Medical College and completed his residency in Orthopaedic Surgery at Tulane University. <br /> <br /> He is an active fellow of the American Academy of Orthopaedic Surgeons, and is a qualified medical Examiner in Orthopaedics in the State of California. Dr. Huang is a Clinical Assistant Professor of Orthopaedic Surgery at Western University of Health Sciences. He has also served as Chief of Surgery at Garfield Medical Center and Chief of Staff at Alhambra Hospital."
}, {
  id: "brian",
  name: "Vu (Brian) Le, MD",
  image: "../../assets/images/doctors/doc_vu-brian-le-md.jpg",
  specialization: "Foot/Ankle Surgery & Orthopaedic Trauma",
  about: "Dr. Le comes to us from Canada, where he obtained his medical doctorate degree at the renowned University of Toronto, one of the world\u2019s top medical schools. He then completed his Orthopaedic surgery training at the University of Ottawa in Canada\u2019s capital city.",
  experience: " Dr. Vu (Brian) Le, MD interests led him to two additional years of fellowship training at the University of British Columbia; one year in complex adult orthopaedic trauma surgery, followed by a full year in the prestigious foot and ankle reconstruction program at St. Paul\u2019s Hospital in Vancouver, Canada. Dr. Le\u2019s clinical expertise is in the comprehensive care of foot and ankle conditions both surgical and non-surgical. <br /> <br /> These include forefoot problems such as bunions and toe deformities, complex deformities such as flat feet or high arched feet, hindfoot problems such as ankle or subtalar arthritis, and athletic injuries such as ankle sprains or ligament and tendon tears. <br /> <br /> He also specializes in complex fractures and injuries of the lower and upper limbs. He has a particular interest in minimally-invasive or less-invasive surgical techniques.<br /> <br /> Dr. Le is double board-certified, by both the Royal College of Physicians and Surgeons of Canada as well as the American Board of Orthopaedic Surgery. <br /> He currently serves as Adjunct Clinical Assistant Professor of Orthopaedic Surgery at the Keck School of Medicine of USC. He is an active committee member with AO North America, the Orthopaedic Trauma Association and USC Arcadia Hospital. <br /> <br /> He is a former committee chair with the San Gabriel Valley Medical Center, and a member of the American Orthopaedic Foot and Ankle Society, Canadian Orthopaedic Foot and Ankle Society, American Academy of Orthopaedic Surgeons, and Canadian Orthopaedic Association. In his spare time, Dr. Le enjoys traveling, photography, movies, hiking, and camping. He is fluent in English and Vietnamese."
}, {
  id: "yen",
  name: "Yen Hsun (Ernie) Chen, MD",
  image: "../../assets/images/doctors/doc_dr-yen-hsun.jpg",
  specialization: "Hand and Upper Extremity Surger",
  about: "Yen Hsun (Ernie) Chen, M.D. is an Orthopaedic Surgeon with additional subspecialty fellowship training in Hand and Upper Extremity Surgery.",
  experience: "Dr. Chen was born in Taipei, Taiwan and grew up in southern California. Dr. Chen received his undergraduate degree in Materials Science and Engineering at Johns Hopkins University in Baltimore, MD, where he graduated with honors and was inducted into the Tau Beta Pi Engineering Honor Society. <br /> <br /> He then received his Doctor of Medicine with Honors in Research at Weill Cornell Medical College in New York, NY. During medical school, he also spent a year working at the Hospital for Special Surgery in New York, where he won a Young Investigator Award for his work in fracture healing. <br /> <br />  He went on to complete his Orthopaedic Surgery internship and residency at Northshore-LIJ at Northwell Health in New York. He returned to California to complete his Hand and Upper Extremity Fellowship at Loma Linda University Medical Center, where he underwent subspecialty training in the upper extremity from the shoulder to the hand, including treating traumatic high energy upper extremity injuries, mangled hands, and microvascular surgery.  <br /> <br /> Dr. Chen\u2019s clinical interests are of upper extremity conditions, including shoulder arthroscopy/arthroplasty, elbow arthroscopy/arthroplasty, complex elbow and wrist fractures, wrist arthroscopy, hand and wrist reconstruction, trauma/fracture care, and microvascular repair.  Dr. Chen\u2019s personal interests include camping, hiking, traveling, escape rooms, sports and esports, and board games. He is fluent in Mandarin."
}, {
  id: "mark",
  name: "Mark S. Hsiao, MD",
  image: "../../assets/images/doctors/doc_dr-mark-s-hsiao.jpg",
  specialization: "Orthopaedic Spine Surgery",
  about: "Dr. Mark Hsiao is a board-certified orthopaedic surgeon specializing in the surgical and non-surgical treatment of spinal disorders. Dr. Hsiao is committed to providing the most current, successful treatment options that help relieve pain and restore function to his patients.",
  experience: "Dr. Hsiao completed his undergraduate studies at the University of California, Irvine, and he received his medical doctorate from Creighton University in Omaha, Nebraska. After completing his medical doctorate, Dr. Hsiao entered active-duty military service and the orthopaedic surgery residency program at William Beaumont Army Medical Center/Texas Tech University Health Sciences Center in El Paso, Texas.  <br /> <br />  As an officer in the U.S. Army, he served several overseas tours in the Pacific Rim and deployed to combat theater in Afghanistan as part of a Forward Surgical Team element in support of the Special Operations Task Force Operation Freedom\u2019s Sentinel in Fort Bragg, North Carolina. <br /> <br />  During his time in the military, Dr. Hsiao had the honor of treating the country\u2019s wounded warriors and delivery critical orthopaedic surgical care to the Army\u2019s Ranger, Infantry, Paratroopers, and Armor Soldiers, Pentagon Personnel, and their families members. As part of his practice he delivered critical sports medicine, general orthopaedic, and foot and ankle care.  <br /> <br /> Dr. Hsiao also provided care under the Executive Medicine department that brings world-class medical care to our nation\u2019s top leaders.  <br /> <br /> To further pursue his interest in orthopaedic spine disorders , Dr. Hsiao completed subspecialty training at one of the world\u2019s premier and busiest fellowships in Seattle, Washington. Dr. Hsiao spent his spine fellowship at The University of Washington at Harborview Medical Center studying under the famous Dr. Carlo Bellabarba, Dr. Richard Bransford, Dr. Haitao Zhou, and Dr. Viral Patel giving him expertise in his field of practice.  <br /> <br /> Dr. Hsiao also gained additional lower extremity training under the guidance Dr. Troy Watson in the care of professional athletes at The Foot & Ankle Institute at Desert Orthopaedic Center. In his free time, Dr. Hsiao enjoys spending time with his young family, running, cycling, trying new food, and traveling around the world.  <br /> <br /> He was born and raised in Monrovia, Liberia (West Africa), and has been to six of the seven continents. Dr. Hsiao looks forward to his next trip with his family to meet new people and learn more about their stories and cultures. He is fluent in Mandarin."
}, {
  id: "alan",
  name: "Alan H. Lee, MD",
  image: "../../assets/images/doctors/doc_alan-h-lee-md-ph.jpg",
  specialization: "Sports Medicine & Arthroscopic Procedures",
  about: "Alan H. Lee, M.D. is a board certified Orthopaedic Surgeon, with additional fellowship training in Sports Medicine and Arthroscopy.",
  experience: "Dr. Lee received his undergraduate and graduate degrees at the University of Michigan - Ann Arbor. <br /> <br />  He received his Doctor of Medicine at the University of Toledo, and went on to complete his surgical internship at Harvard Medical School/Brigham and Women Hospital in Boston, MA. Dr. Lee then completed his Orthopaedic surgery residency at the Harvard Combined Orthopaedic residency Program/Massachusetts General Hospital in Boston, MA, where he served as a team physician for the Boston Public Schools as well as assisted in the care of numerous professional athletes from the Patriots, Red Sox, and Bruins. <br /> <br />  He went on to complete his Sports Medicine and Arthroscopy fellowship at Stanford University in Palo Alto, CA, and was one of the team physicians for the Stanford Football team and the PDL affiliate of the San Jose Earthquakes, the Burlingame Dragons.  <br /> <br /> His clinical interests include sports-related injuries, knee arthroscopy, shoulder arthroscopy, hip arthroscopy, total knee replacement, total hip replacement, total shoulder replacement, and trauma/fracture care. Dr. Lee is board certified by the American Board of Orthopaedic Surgery, and a member of the American Academy of Orthopaedic Surgeons and American Orthopaedic Society for Sports Medicine.  <br /> <br /> His personal interests include hiking and outdoor sports, tennis, football, playing the guitar and piano, and cars. He is conversationally fluent in Mandarin Chinese."
}, {
  id: "jonathan",
  name: "Jonathan L Chang, MD",
  image: "../../assets/images/doctors/doc_jonathan.jpg",
  specialization: "Sports Medicine & Arthroscopic Procedures",
  about: "Jonathan L. Chang, MD was born in Lebanon, Pennsylvania and raised in multiple cities on the east coast.",
  experience: "Dr. Chang specializes in sports medicine and arthroscopic procedures. Dr. Chang  is a graduate from Duke University School of Medicine. He completed his residency in Orthopaedic Surgery at the University of Virginia Hospitals and his sports medicine fellowship at the University of Kentucky.  <br /> <br />  Dr. Chang is board certified and is a fellow of the American Academy of Orthopaedic surgeons. He is a former Clinical Associate Professor of Orthopaedic surgery at USC School of Medicine. He has served as the Chairman of the Orthopaedic Subsection at Garfield Medical Center and the Chief of Surgery at Alhambra Hospital."
}, {
  id: "benjamin-c-tam",
  name: "Benjamin C Tam, MD",
  image: "../../assets/images/doctors/benjamin.jpg",
  specialization: "Shoulder Reconstruction & Joint Replacement",
  about: "Dr. Benjamin Tam is a board certified general Orthopaedic Surgeon with subspecialty interest in shoulder reconstruction and joint replacement.",
  experience: "Dr. Tam was born in Newark and raised in Edison, New Jersey. He graduated with general honors from Johns Hopkins University with a bachelor of science in Biomedical Engineering and a concentration in biomechanics. He received his medical degree from New York University and performed orthopaedic biomechanical research at the Hospital for Joint Diseases. He then came to Southern California where he completed a general surgery internship and Orthopaedic surgery residency at UCLA Medical Center. <br /> <br /> Dr. Tam is currently the president of Pacific Orthopaedic Associates. He has served as chief of surgery at Alhambra Hospital and chairman of the orthopaedic subsection at San Gabriel Valley Medical Center. Over the years, he has given numerous community lectures on various orthopaedic topics, such as rotator cuff injuries and hip and knee replacement. He is a fellow of the American Academy of Orthopaedic Surgeons and a member of the California Orthopaedic Association, Western Orthopaedic Association, and Los Angeles County Medical Association. <br /> <br /> With each of his patients, Dr. Tam strives to develop a strong doctor-patient relationship based on mutual respect and trust. He firmly believes the foundation of that relationship begins with patient education. For that reason, he spends the time to educate every patient on his or her orthopaedic condition, including treatment options, rehabilitation, and expected recovery. There are often options to treatment other than surgery. A central tenet in Dr. Tam\u2019s practice philosophy is that a patient\u2019s treatment should be a shared decision-making endeavor, respectful of the patient\u2019s wishes and their cultural sensitivities. Whether or not surgery is being considered, Dr. Tam\u2019s exceptional training and considerable experience enable him to provide the best orthopaedic care for his patients in order to achieve the best possible outcome. <br /> <br /> Dr. Tam has a keen interest in all aspects of orthopaedics and treats a wide range of orthopaedic conditions. His practice has evolved over the years and he currently specializes in arthroscopic rotator cuff repair, shoulder reconstruction, anterior hip replacement, and knee replacement. <br /> <br />  His personal interests include tennis, physical fitness, cycling, skiing, and snowboarding. He also enjoys spending time and traveling with his wife Irene, who is an internal medicine physician, and his son Lance."
}];
var Physicians = [{
  id: "benjamin",
  name: "Benjamin Sham, PA-C",
  image: "../../assets/images/doctors/physist_benjamin-sham.jpg",
  about: "Benjamin Sham was born in Monterey Park, California. He grew up in the surrounding area.",
  experience: "He received his B.S. degree from California State Polytechnic University, Pomona. He went on to complete his Masters of Science in Physician Assistant Studies from Western University of Health Sciences in Pomona, California. <br /> <br />  He is board certified by the National Commission on Certification of Physician Assistants (NCCPA). He is also an active member of the American Academy of Physician Assistants (AAPA). Benjamin looks forward to and is pleased to be serving his community."
}, {
  id: "johnny",
  name: "Johnny Lim, MS, PA-C",
  image: "../../assets/images/doctors/physist_johnny-lim.jpg",
  about: "Johnny Lim, PA-C was born and raised in the Los Angeles area.",
  experience: "Johnny received his Bachelor's of Science degree in Biological Sciences from University of California, Irvine. He has previous experience working in the Rehabilitation unit in the hospital setting, where he was involved with treatment plans and physical/occupational therapy treatments. <br /> <br />  He then went on to complete his Master's of Science in Physician Assistant Studies training at Western University of Health Sciences in Pomona, California, where Johnny received extensive training in Orthopedic Surgery.  <br /> <br /> He is board certified by the National Commission of Certification of Physician Assistants (NCCPA), and is currently an active member of the American Academy of Physician Assistants (AAPA) and the California Academy of Physician Assistants (CAPA). <br /> <br />  Outside of work, Johnny enjoys physical fitness and outdoor activies including tennis, strength training, snowboarding, and cycling. He participates in several events throughout the year, including Spartan Races and half marathons. He hopes to complete a triathlon sometime in the near future. Johnny is fluent in Chinese (Teochew/Chaozhou) and English."
}];

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = /* @__PURE__ */ (() => {
  const _BaseControlValueAccessor = class _BaseControlValueAccessor {
    constructor(_renderer, _elementRef) {
      this._renderer = _renderer;
      this._elementRef = _elementRef;
      this.onChange = (_) => {
      };
      this.onTouched = () => {
      };
    }
    /**
     * Helper method that sets a property on a target element using the current Renderer
     * implementation.
     * @nodoc
     */
    setProperty(key, value) {
      this._renderer.setProperty(this._elementRef.nativeElement, key, value);
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Sets the "disabled" property on the range input element.
     * @nodoc
     */
    setDisabledState(isDisabled) {
      this.setProperty("disabled", isDisabled);
    }
  };
  _BaseControlValueAccessor.\u0275fac = function BaseControlValueAccessor_Factory(t) {
    return new (t || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  _BaseControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
  let BaseControlValueAccessor2 = _BaseControlValueAccessor;
  return BaseControlValueAccessor2;
})();
var BuiltInControlValueAccessor = /* @__PURE__ */ (() => {
  const _BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  };
  _BuiltInControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(t) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
    };
  })();
  _BuiltInControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
  let BuiltInControlValueAccessor2 = _BuiltInControlValueAccessor;
  return BuiltInControlValueAccessor2;
})();
var NG_VALUE_ACCESSOR = /* @__PURE__ */ new InjectionToken("NgValueAccessor");
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: /* @__PURE__ */ forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = /* @__PURE__ */ new InjectionToken("CompositionEventMode");
var DefaultValueAccessor = /* @__PURE__ */ (() => {
  const _DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
    constructor(renderer, elementRef, _compositionMode) {
      super(renderer, elementRef);
      this._compositionMode = _compositionMode;
      this._composing = false;
      if (this._compositionMode == null) {
        this._compositionMode = !_isAndroid();
      }
    }
    /**
     * Sets the "value" property on the input element.
     * @nodoc
     */
    writeValue(value) {
      const normalizedValue = value == null ? "" : value;
      this.setProperty("value", normalizedValue);
    }
    /** @internal */
    _handleInput(value) {
      if (!this._compositionMode || this._compositionMode && !this._composing) {
        this.onChange(value);
      }
    }
    /** @internal */
    _compositionStart() {
      this._composing = true;
    }
    /** @internal */
    _compositionEnd(value) {
      this._composing = false;
      this._compositionMode && this.onChange(value);
    }
  };
  _DefaultValueAccessor.\u0275fac = function DefaultValueAccessor_Factory(t) {
    return new (t || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  _DefaultValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
  let DefaultValueAccessor2 = _DefaultValueAccessor;
  return DefaultValueAccessor2;
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = /* @__PURE__ */ new InjectionToken("NgValidators");
var NG_ASYNC_VALIDATORS = /* @__PURE__ */ new InjectionToken("NgAsyncValidators");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  /**
   * @description
   * Validator that requires the control's value to be greater than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```typescript
   * const control = new FormControl(2, Validators.min(3));
   *
   * console.log(control.errors); // {min: {min: 3, actual: 2}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `min` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static min(min) {
    return minValidator(min);
  }
  /**
   * @description
   * Validator that requires the control's value to be less than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a maximum of 15
   *
   * ```typescript
   * const control = new FormControl(16, Validators.max(15));
   *
   * console.log(control.errors); // {max: {max: 15, actual: 16}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `max` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static max(max) {
    return maxValidator(max);
  }
  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```typescript
   * const control = new FormControl('', Validators.required);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static required(control) {
    return requiredValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value be true. This validator is commonly
   * used for required checkboxes.
   *
   * @usageNotes
   *
   * ### Validate that the field value is true
   *
   * ```typescript
   * const control = new FormControl('some value', Validators.requiredTrue);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map that contains the `required` property
   * set to `true` if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * Tests the value using a [regular
   * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
   * pattern suitable for common use cases. The pattern is based on the definition of a valid email
   * address in the [WHATWG HTML
   * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
   * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
   * lengths of different parts of the address).
   *
   * The differences from the WHATWG version include:
   * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
   * - Disallow `local-part` to be longer than 64 characters.
   * - Disallow the whole address to be longer than 254 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```typescript
   * const control = new FormControl('bad@', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static email(control) {
    return emailValidator(control);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be greater than or equal
   * to the provided minimum length. This validator is also provided by default if you use the
   * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays. The
   * `minLength` validator logic is also not invoked for values when their `length` property is 0
   * (for example in case of an empty string or an empty array), to support optional controls. You
   * can use the standard `required` validator if empty values should not be considered valid.
   *
   * @usageNotes
   *
   * ### Validate that the field has a minimum of 3 characters
   *
   * ```typescript
   * const control = new FormControl('ng', Validators.minLength(3));
   *
   * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
   * ```
   *
   * ```html
   * <input minlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `minlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be less than or equal
   * to the provided maximum length. This validator is also provided by default if you use the
   * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays.
   *
   * @usageNotes
   *
   * ### Validate that the field has maximum of 5 characters
   *
   * ```typescript
   * const control = new FormControl('Angular', Validators.maxLength(5));
   *
   * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
   * ```
   *
   * ```html
   * <input maxlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `maxlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  /**
   * @description
   * Validator that requires the control's value to match a regex pattern. This validator is also
   * provided by default if you use the HTML5 `pattern` attribute.
   *
   * @usageNotes
   *
   * ### Validate that the field only contains letters or spaces
   *
   * ```typescript
   * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
   *
   * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
   * ```
   *
   * ```html
   * <input pattern="[a-zA-Z ]*">
   * ```
   *
   * ### Pattern matching with the global or sticky flag
   *
   * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
   * can produce different results on the same input when validations are run consecutively. This is
   * due to how the behavior of `RegExp.prototype.test` is
   * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
   * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
   * Due to this behavior, it is recommended that when using
   * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
   * flag enabled.
   *
   * ```typescript
   * // Not recommended (since the `g` flag is used)
   * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
   *
   * // Good
   * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
   * ```
   *
   * @param pattern A regular expression to be used as is to test the values, or a string.
   * If a string is passed, the `^` character is prepended and the `$` character is
   * appended to the provided string (if not already present), and the resulting regular
   * expression is used to test the values.
   *
   * @returns A validator function that returns an error map with the
   * `pattern` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  /**
   * @description
   * Validator that performs no operation.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static nullValidator(control) {
    return nullValidator(control);
  }
  static compose(validators) {
    return compose(validators);
  }
  /**
   * @description
   * Compose multiple async validators into a single function that returns the union
   * of the individual error objects for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error objects of the async validators if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = /* @__PURE__ */ (() => {
  const _NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
    constructor(cd) {
      super(cd);
    }
  };
  _NgControlStatus.\u0275fac = function NgControlStatus_Factory(t) {
    return new (t || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  _NgControlStatus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
  let NgControlStatus2 = _NgControlStatus;
  return NgControlStatus2;
})();
var NgControlStatusGroup = /* @__PURE__ */ (() => {
  const _NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
    constructor(cd) {
      super(cd);
    }
  };
  _NgControlStatusGroup.\u0275fac = function NgControlStatusGroup_Factory(t) {
    return new (t || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  _NgControlStatusGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
  let NgControlStatusGroup2 = _NgControlStatusGroup;
  return NgControlStatusGroup2;
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
function controlParentException() {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name])
      return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    if (control)
      this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = /* @__PURE__ */ new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = /* @__PURE__ */ (() => {
  const _AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
    /** @nodoc */
    ngOnInit() {
      this._checkParentType();
      this.formDirective.addFormGroup(this);
    }
    /** @nodoc */
    ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeFormGroup(this);
      }
    }
    /**
     * @description
     * The `FormGroup` bound to this directive.
     */
    get control() {
      return this.formDirective.getFormGroup(this);
    }
    /**
     * @description
     * The path to this group from the top-level directive.
     */
    get path() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */
    get formDirective() {
      return this._parent ? this._parent.formDirective : null;
    }
    /** @internal */
    _checkParentType() {
    }
  };
  _AbstractFormGroupDirective.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(t) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
    };
  })();
  _AbstractFormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
  let AbstractFormGroupDirective2 = _AbstractFormGroupDirective;
  return AbstractFormGroupDirective2;
})();
var \u0275NgNoValidate = /* @__PURE__ */ (() => {
  const _\u0275NgNoValidate = class _\u0275NgNoValidate {
  };
  _\u0275NgNoValidate.\u0275fac = function \u0275NgNoValidate_Factory(t) {
    return new (t || _\u0275NgNoValidate)();
  };
  _\u0275NgNoValidate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""]
  });
  let \u0275NgNoValidate2 = _\u0275NgNoValidate;
  return \u0275NgNoValidate2;
})();
var RadioControlRegistryModule = /* @__PURE__ */ (() => {
  const _RadioControlRegistryModule = class _RadioControlRegistryModule {
  };
  _RadioControlRegistryModule.\u0275fac = function RadioControlRegistryModule_Factory(t) {
    return new (t || _RadioControlRegistryModule)();
  };
  _RadioControlRegistryModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RadioControlRegistryModule
  });
  _RadioControlRegistryModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  let RadioControlRegistryModule2 = _RadioControlRegistryModule;
  return RadioControlRegistryModule2;
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = /* @__PURE__ */ new InjectionToken("NgModelWithFormControlWarning");
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: /* @__PURE__ */ forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = /* @__PURE__ */ (() => {
  const _FormGroupDirective = class _FormGroupDirective extends ControlContainer {
    constructor(validators, asyncValidators, callSetDisabledState) {
      super();
      this.callSetDisabledState = callSetDisabledState;
      this.submitted = false;
      this._onCollectionChange = () => this._updateDomValue();
      this.directives = [];
      this.form = null;
      this.ngSubmit = new EventEmitter();
      this._setValidators(validators);
      this._setAsyncValidators(asyncValidators);
    }
    /** @nodoc */
    ngOnChanges(changes) {
      this._checkFormPresent();
      if (changes.hasOwnProperty("form")) {
        this._updateValidators();
        this._updateDomValue();
        this._updateRegistrations();
        this._oldForm = this.form;
      }
    }
    /** @nodoc */
    ngOnDestroy() {
      if (this.form) {
        cleanUpValidators(this.form, this);
        if (this.form._onCollectionChange === this._onCollectionChange) {
          this.form._registerOnCollectionChange(() => {
          });
        }
      }
    }
    /**
     * @description
     * Returns this directive's instance.
     */
    get formDirective() {
      return this;
    }
    /**
     * @description
     * Returns the `FormGroup` bound to this directive.
     */
    get control() {
      return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it always an empty array.
     */
    get path() {
      return [];
    }
    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `FormControlName` directive instance.
     */
    addControl(dir) {
      const ctrl = this.form.get(dir.path);
      setUpControl(ctrl, dir, this.callSetDisabledState);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
      this.directives.push(dir);
      return ctrl;
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param dir The `FormControlName` directive instance.
     */
    getControl(dir) {
      return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param dir The `FormControlName` directive instance.
     */
    removeControl(dir) {
      cleanUpControl(
        dir.control || null,
        dir,
        /* validateControlPresenceOnChange */
        false
      );
      removeListItem$1(this.directives, dir);
    }
    /**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param dir The `FormGroupName` directive instance.
     */
    addFormGroup(dir) {
      this._setUpFormContainer(dir);
    }
    /**
     * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
     * view.
     *
     * @param dir The `FormGroupName` directive instance.
     */
    removeFormGroup(dir) {
      this._cleanUpFormContainer(dir);
    }
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param dir The `FormGroupName` directive instance.
     */
    getFormGroup(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    addFormArray(dir) {
      this._setUpFormContainer(dir);
    }
    /**
     * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
     * view.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    removeFormArray(dir) {
      this._cleanUpFormContainer(dir);
    }
    /**
     * @description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    getFormArray(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param dir The `FormControlName` directive instance.
     * @param value The new value for the directive's control.
     */
    updateModel(dir, value) {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    }
    /**
     * @description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */
    onSubmit($event) {
      this.submitted = true;
      syncPendingControls(this.form, this.directives);
      this.ngSubmit.emit($event);
      return $event?.target?.method === "dialog";
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */
    onReset() {
      this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */
    resetForm(value = void 0) {
      this.form.reset(value);
      this.submitted = false;
    }
    /** @internal */
    _updateDomValue() {
      this.directives.forEach((dir) => {
        const oldCtrl = dir.control;
        const newCtrl = this.form.get(dir.path);
        if (oldCtrl !== newCtrl) {
          cleanUpControl(oldCtrl || null, dir);
          if (isFormControl(newCtrl)) {
            setUpControl(newCtrl, dir, this.callSetDisabledState);
            dir.control = newCtrl;
          }
        }
      });
      this.form._updateTreeValidity({
        emitEvent: false
      });
    }
    _setUpFormContainer(dir) {
      const ctrl = this.form.get(dir.path);
      setUpFormContainer(ctrl, dir);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
    }
    _cleanUpFormContainer(dir) {
      if (this.form) {
        const ctrl = this.form.get(dir.path);
        if (ctrl) {
          const isControlUpdated = cleanUpFormContainer(ctrl, dir);
          if (isControlUpdated) {
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
          }
        }
      }
    }
    _updateRegistrations() {
      this.form._registerOnCollectionChange(this._onCollectionChange);
      if (this._oldForm) {
        this._oldForm._registerOnCollectionChange(() => {
        });
      }
    }
    _updateValidators() {
      setUpValidators(this.form, this);
      if (this._oldForm) {
        cleanUpValidators(this._oldForm, this);
      }
    }
    _checkFormPresent() {
      if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw missingFormException();
      }
    }
  };
  _FormGroupDirective.\u0275fac = function FormGroupDirective_Factory(t) {
    return new (t || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  _FormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: ["formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
  let FormGroupDirective2 = _FormGroupDirective;
  return FormGroupDirective2;
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: /* @__PURE__ */ forwardRef(() => FormGroupName)
};
var FormGroupName = /* @__PURE__ */ (() => {
  const _FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
    constructor(parent, validators, asyncValidators) {
      super();
      this.name = null;
      this._parent = parent;
      this._setValidators(validators);
      this._setAsyncValidators(asyncValidators);
    }
    /** @internal */
    _checkParentType() {
      if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw groupParentException();
      }
    }
  };
  _FormGroupName.\u0275fac = function FormGroupName_Factory(t) {
    return new (t || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  _FormGroupName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: ["formGroupName", "name"]
    },
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
  let FormGroupName2 = _FormGroupName;
  return FormGroupName2;
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: /* @__PURE__ */ forwardRef(() => FormArrayName)
};
var FormArrayName = /* @__PURE__ */ (() => {
  const _FormArrayName = class _FormArrayName extends ControlContainer {
    constructor(parent, validators, asyncValidators) {
      super();
      this.name = null;
      this._parent = parent;
      this._setValidators(validators);
      this._setAsyncValidators(asyncValidators);
    }
    /**
     * A lifecycle method called when the directive's inputs are initialized. For internal use only.
     * @throws If the directive does not have a valid parent.
     * @nodoc
     */
    ngOnInit() {
      this._checkParentType();
      this.formDirective.addFormArray(this);
    }
    /**
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @nodoc
     */
    ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeFormArray(this);
      }
    }
    /**
     * @description
     * The `FormArray` bound to this directive.
     */
    get control() {
      return this.formDirective.getFormArray(this);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */
    get formDirective() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    _checkParentType() {
      if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw arrayParentException();
      }
    }
  };
  _FormArrayName.\u0275fac = function FormArrayName_Factory(t) {
    return new (t || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  _FormArrayName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: ["formArrayName", "name"]
    },
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
  let FormArrayName2 = _FormArrayName;
  return FormArrayName2;
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: /* @__PURE__ */ forwardRef(() => FormControlName)
};
var FormControlName = /* @__PURE__ */ (() => {
  const _FormControlName = class _FormControlName extends NgControl {
    /**
     * @description
     * Triggers a warning in dev mode that this input should not be used with reactive forms.
     */
    set isDisabled(isDisabled) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        console.warn(disabledAttrWarning);
      }
    }
    constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
      super();
      this._ngModelWarningConfig = _ngModelWarningConfig;
      this._added = false;
      this.name = null;
      this.update = new EventEmitter();
      this._ngModelWarningSent = false;
      this._parent = parent;
      this._setValidators(validators);
      this._setAsyncValidators(asyncValidators);
      this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /** @nodoc */
    ngOnChanges(changes) {
      if (!this._added)
        this._setUpControl();
      if (isPropertyUpdated(changes, this.viewModel)) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
        }
        this.viewModel = this.model;
        this.formDirective.updateModel(this, this.model);
      }
    }
    /** @nodoc */
    ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeControl(this);
      }
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */
    get formDirective() {
      return this._parent ? this._parent.formDirective : null;
    }
    _checkParentType() {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
          throw ngModelGroupException();
        } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
          throw controlParentException();
        }
      }
    }
    _setUpControl() {
      this._checkParentType();
      this.control = this.formDirective.addControl(this);
      this._added = true;
    }
  };
  _FormControlName._ngModelWarningSentOnce = false;
  _FormControlName.\u0275fac = function FormControlName_Factory(t) {
    return new (t || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
  };
  _FormControlName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: ["formControlName", "name"],
      isDisabled: ["disabled", "isDisabled"],
      model: ["ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
  let FormControlName2 = _FormControlName;
  return FormControlName2;
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: /* @__PURE__ */ forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = /* @__PURE__ */ (() => {
  const _SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
    constructor() {
      super(...arguments);
      this._optionMap = /* @__PURE__ */ new Map();
      this._idCounter = 0;
      this._compareWith = Object.is;
    }
    /**
     * @description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     */
    set compareWith(fn) {
      if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
      }
      this._compareWith = fn;
    }
    /**
     * Sets the "value" property on the select element.
     * @nodoc
     */
    writeValue(value) {
      this.value = value;
      const id = this._getOptionId(value);
      const valueString = _buildValueString$1(id, value);
      this.setProperty("value", valueString);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
      this.onChange = (valueString) => {
        this.value = this._getOptionValue(valueString);
        fn(this.value);
      };
    }
    /** @internal */
    _registerOption() {
      return (this._idCounter++).toString();
    }
    /** @internal */
    _getOptionId(value) {
      for (const id of this._optionMap.keys()) {
        if (this._compareWith(this._optionMap.get(id), value))
          return id;
      }
      return null;
    }
    /** @internal */
    _getOptionValue(valueString) {
      const id = _extractId$1(valueString);
      return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }
  };
  _SelectControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(t) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
    };
  })();
  _SelectControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
  let SelectControlValueAccessor2 = _SelectControlValueAccessor;
  return SelectControlValueAccessor2;
})();
var NgSelectOption = /* @__PURE__ */ (() => {
  const _NgSelectOption = class _NgSelectOption {
    constructor(_element, _renderer, _select) {
      this._element = _element;
      this._renderer = _renderer;
      this._select = _select;
      if (this._select)
        this.id = this._select._registerOption();
    }
    /**
     * @description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     */
    set ngValue(value) {
      if (this._select == null)
        return;
      this._select._optionMap.set(this.id, value);
      this._setElementValue(_buildValueString$1(this.id, value));
      this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */
    set value(value) {
      this._setElementValue(value);
      if (this._select)
        this._select.writeValue(this._select.value);
    }
    /** @internal */
    _setElementValue(value) {
      this._renderer.setProperty(this._element.nativeElement, "value", value);
    }
    /** @nodoc */
    ngOnDestroy() {
      if (this._select) {
        this._select._optionMap.delete(this.id);
        this._select.writeValue(this._select.value);
      }
    }
  };
  _NgSelectOption.\u0275fac = function NgSelectOption_Factory(t) {
    return new (t || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  _NgSelectOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    }
  });
  let NgSelectOption2 = _NgSelectOption;
  return NgSelectOption2;
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: /* @__PURE__ */ forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = /* @__PURE__ */ (() => {
  const _SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
    constructor() {
      super(...arguments);
      this._optionMap = /* @__PURE__ */ new Map();
      this._idCounter = 0;
      this._compareWith = Object.is;
    }
    /**
     * @description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     */
    set compareWith(fn) {
      if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
      }
      this._compareWith = fn;
    }
    /**
     * Sets the "value" property on one or of more of the select's options.
     * @nodoc
     */
    writeValue(value) {
      this.value = value;
      let optionSelectedStateSetter;
      if (Array.isArray(value)) {
        const ids = value.map((v) => this._getOptionId(v));
        optionSelectedStateSetter = (opt, o) => {
          opt._setSelected(ids.indexOf(o.toString()) > -1);
        };
      } else {
        optionSelectedStateSetter = (opt, o) => {
          opt._setSelected(false);
        };
      }
      this._optionMap.forEach(optionSelectedStateSetter);
    }
    /**
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     * @nodoc
     */
    registerOnChange(fn) {
      this.onChange = (element) => {
        const selected = [];
        const selectedOptions = element.selectedOptions;
        if (selectedOptions !== void 0) {
          const options = selectedOptions;
          for (let i = 0; i < options.length; i++) {
            const opt = options[i];
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        } else {
          const options = element.options;
          for (let i = 0; i < options.length; i++) {
            const opt = options[i];
            if (opt.selected) {
              const val = this._getOptionValue(opt.value);
              selected.push(val);
            }
          }
        }
        this.value = selected;
        fn(selected);
      };
    }
    /** @internal */
    _registerOption(value) {
      const id = (this._idCounter++).toString();
      this._optionMap.set(id, value);
      return id;
    }
    /** @internal */
    _getOptionId(value) {
      for (const id of this._optionMap.keys()) {
        if (this._compareWith(this._optionMap.get(id)._value, value))
          return id;
      }
      return null;
    }
    /** @internal */
    _getOptionValue(valueString) {
      const id = _extractId(valueString);
      return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    }
  };
  _SelectMultipleControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(t) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
    };
  })();
  _SelectMultipleControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
  let SelectMultipleControlValueAccessor2 = _SelectMultipleControlValueAccessor;
  return SelectMultipleControlValueAccessor2;
})();
var \u0275NgSelectMultipleOption = /* @__PURE__ */ (() => {
  const _\u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
    constructor(_element, _renderer, _select) {
      this._element = _element;
      this._renderer = _renderer;
      this._select = _select;
      if (this._select) {
        this.id = this._select._registerOption(this);
      }
    }
    /**
     * @description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     */
    set ngValue(value) {
      if (this._select == null)
        return;
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */
    set value(value) {
      if (this._select) {
        this._value = value;
        this._setElementValue(_buildValueString(this.id, value));
        this._select.writeValue(this._select.value);
      } else {
        this._setElementValue(value);
      }
    }
    /** @internal */
    _setElementValue(value) {
      this._renderer.setProperty(this._element.nativeElement, "value", value);
    }
    /** @internal */
    _setSelected(selected) {
      this._renderer.setProperty(this._element.nativeElement, "selected", selected);
    }
    /** @nodoc */
    ngOnDestroy() {
      if (this._select) {
        this._select._optionMap.delete(this.id);
        this._select.writeValue(this._select.value);
      }
    }
  };
  _\u0275NgSelectMultipleOption.\u0275fac = function \u0275NgSelectMultipleOption_Factory(t) {
    return new (t || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  _\u0275NgSelectMultipleOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    }
  });
  let \u0275NgSelectMultipleOption2 = _\u0275NgSelectMultipleOption;
  return \u0275NgSelectMultipleOption2;
})();
var \u0275InternalFormsSharedModule = /* @__PURE__ */ (() => {
  const _\u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  };
  _\u0275InternalFormsSharedModule.\u0275fac = function \u0275InternalFormsSharedModule_Factory(t) {
    return new (t || _\u0275InternalFormsSharedModule)();
  };
  _\u0275InternalFormsSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule
  });
  _\u0275InternalFormsSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [RadioControlRegistryModule]
  });
  let \u0275InternalFormsSharedModule2 = _\u0275InternalFormsSharedModule;
  return \u0275InternalFormsSharedModule2;
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1)
      return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled)
        return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = /* @__PURE__ */ (() => {
  const _FormBuilder = class _FormBuilder {
    constructor() {
      this.useNonNullable = false;
    }
    /**
     * @description
     * Returns a FormBuilder in which automatically constructed `FormControl` elements
     * have `{nonNullable: true}` and are non-nullable.
     *
     * **Constructing non-nullable controls**
     *
     * When constructing a control, it will be non-nullable, and will reset to its initial value.
     *
     * ```ts
     * let nnfb = new FormBuilder().nonNullable;
     * let name = nnfb.control('Alex'); // FormControl<string>
     * name.reset();
     * console.log(name); // 'Alex'
     * ```
     *
     * **Constructing non-nullable groups or arrays**
     *
     * When constructing a group or array, all automatically created inner controls will be
     * non-nullable, and will reset to their initial values.
     *
     * ```ts
     * let nnfb = new FormBuilder().nonNullable;
     * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
     * name.reset();
     * console.log(name); // {who: 'Alex'}
     * ```
     * **Constructing *nullable* fields on groups or arrays**
     *
     * It is still possible to have a nullable field. In particular, any `FormControl` which is
     * *already* constructed will not be altered. For example:
     *
     * ```ts
     * let nnfb = new FormBuilder().nonNullable;
     * // FormGroup<{who: FormControl<string|null>}>
     * let name = nnfb.group({who: new FormControl('Alex')});
     * name.reset(); console.log(name); // {who: null}
     * ```
     *
     * Because the inner control is constructed explicitly by the caller, the builder has
     * no control over how it is created, and cannot exclude the `null`.
     */
    get nonNullable() {
      const nnfb = new _FormBuilder();
      nnfb.useNonNullable = true;
      return nnfb;
    }
    group(controls, options = null) {
      const reducedControls = this._reduceControls(controls);
      let newOptions = {};
      if (isAbstractControlOptions(options)) {
        newOptions = options;
      } else if (options !== null) {
        newOptions.validators = options.validator;
        newOptions.asyncValidators = options.asyncValidator;
      }
      return new FormGroup(reducedControls, newOptions);
    }
    /**
     * @description
     * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
     * containing all the keys and corresponding inner control types.
     *
     * @param controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param options Configuration options object for the `FormRecord`. The object should have the
     * `AbstractControlOptions` type and might contain the following fields:
     * * `validators`: A synchronous validator function, or an array of validator functions.
     * * `asyncValidators`: A single async validator or array of async validator functions.
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
     * | submit').
     */
    record(controls, options = null) {
      const reducedControls = this._reduceControls(controls);
      return new FormRecord(reducedControls, options);
    }
    /**
     * @description
     * Constructs a new `FormControl` with the given state, validators and options. Sets
     * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
     * control will be nullable. Accepts a single generic argument, which is the type  of the
     * control's value.
     *
     * @param formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or a `FormControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
     * </code-example>
     */
    control(formState, validatorOrOpts, asyncValidator) {
      let newOptions = {};
      if (!this.useNonNullable) {
        return new FormControl(formState, validatorOrOpts, asyncValidator);
      }
      if (isAbstractControlOptions(validatorOrOpts)) {
        newOptions = validatorOrOpts;
      } else {
        newOptions.validators = validatorOrOpts;
        newOptions.asyncValidators = asyncValidator;
      }
      return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
        nonNullable: true
      }));
    }
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options. Accepts a single generic argument, which is the type of each control
     * inside the array.
     *
     * @param controls An array of child controls or control configs. Each child control is given an
     *     index when it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
     *     `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions.
     */
    array(controls, validatorOrOpts, asyncValidator) {
      const createdControls = controls.map((c) => this._createControl(c));
      return new FormArray(createdControls, validatorOrOpts, asyncValidator);
    }
    /** @internal */
    _reduceControls(controls) {
      const createdControls = {};
      Object.keys(controls).forEach((controlName) => {
        createdControls[controlName] = this._createControl(controls[controlName]);
      });
      return createdControls;
    }
    /** @internal */
    _createControl(controls) {
      if (controls instanceof FormControl) {
        return controls;
      } else if (controls instanceof AbstractControl) {
        return controls;
      } else if (Array.isArray(controls)) {
        const value = controls[0];
        const validator = controls.length > 1 ? controls[1] : null;
        const asyncValidator = controls.length > 2 ? controls[2] : null;
        return this.control(value, validator, asyncValidator);
      } else {
        return this.control(controls);
      }
    }
  };
  _FormBuilder.\u0275fac = function FormBuilder_Factory(t) {
    return new (t || _FormBuilder)();
  };
  _FormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac,
    providedIn: "root"
  });
  let FormBuilder2 = _FormBuilder;
  return FormBuilder2;
})();
var ReactiveFormsModule = /* @__PURE__ */ (() => {
  const _ReactiveFormsModule = class _ReactiveFormsModule {
    /**
     * @description
     * Provides options for configuring the reactive forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
     * correct, or to only call it `whenDisabled`, which is the legacy behavior.
     */
    static withConfig(opts) {
      return {
        ngModule: _ReactiveFormsModule,
        providers: [{
          provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
          useValue: opts.warnOnNgModelWithFormControl ?? "always"
        }, {
          provide: CALL_SET_DISABLED_STATE,
          useValue: opts.callSetDisabledState ?? setDisabledStateDefault
        }]
      };
    }
  };
  _ReactiveFormsModule.\u0275fac = function ReactiveFormsModule_Factory(t) {
    return new (t || _ReactiveFormsModule)();
  };
  _ReactiveFormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule
  });
  _ReactiveFormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
  let ReactiveFormsModule2 = _ReactiveFormsModule;
  return ReactiveFormsModule2;
})();

// node_modules/@emailjs/browser/es/store/store.js
var store = {
  _origin: "https://api.emailjs.com"
};

// node_modules/@emailjs/browser/es/methods/init/init.js
var init = (publicKey, origin = "https://api.emailjs.com") => {
  store._userID = publicKey;
  store._origin = origin;
};

// node_modules/@emailjs/browser/es/utils/validateParams.js
var validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey) {
    throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
  }
  if (!serviceID) {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID) {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
  return true;
};

// node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js
var EmailJSResponseStatus = class {
  constructor(httpResponse) {
    this.status = httpResponse ? httpResponse.status : 0;
    this.text = httpResponse ? httpResponse.responseText : "Network Error";
  }
};

// node_modules/@emailjs/browser/es/api/sendPost.js
var sendPost = (url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", ({
      target
    }) => {
      const responseStatus = new EmailJSResponseStatus(target);
      if (responseStatus.status === 200 || responseStatus.text === "OK") {
        resolve(responseStatus);
      } else {
        reject(responseStatus);
      }
    });
    xhr.addEventListener("error", ({
      target
    }) => {
      reject(new EmailJSResponseStatus(target));
    });
    xhr.open("POST", store._origin + url, true);
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
  });
};

// node_modules/@emailjs/browser/es/methods/send/send.js
var send = (serviceID, templateID, templatePrams, publicKey) => {
  const uID = publicKey || store._userID;
  validateParams(uID, serviceID, templateID);
  const params = {
    lib_version: "3.11.0",
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};

// node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js
var findHTMLForm = (form) => {
  let currentForm;
  if (typeof form === "string") {
    currentForm = document.querySelector(form);
  } else {
    currentForm = form;
  }
  if (!currentForm || currentForm.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
  }
  return currentForm;
};
var sendForm = (serviceID, templateID, form, publicKey) => {
  const uID = publicKey || store._userID;
  const currentForm = findHTMLForm(form);
  validateParams(uID, serviceID, templateID);
  const formData = new FormData(currentForm);
  formData.append("lib_version", "3.11.0");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", uID);
  return sendPost("/api/v1.0/email/send-form", formData);
};

// node_modules/@emailjs/browser/es/index.js
var es_default = {
  init,
  send,
  sendForm
};

// src/app/pages/appointment/appointment.component.ts
function AppointmentComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 30);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 30);
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 30);
    \u0275\u0275text(1, "Invalid phone number format.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(0, "h6", 30);
    \u0275\u0275text(1, "Department is required.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 30);
    \u0275\u0275text(1, "Message is required.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 30);
    \u0275\u0275text(1, " Message should be equal or greater than 100 characters. ");
    \u0275\u0275elementEnd();
  }
}
var AppointmentComponent = /* @__PURE__ */ (() => {
  const _AppointmentComponent = class _AppointmentComponent {
    constructor(fb) {
      this.fb = fb;
      this.isSending = signal(false);
      this.errorMessage = signal(null);
      this.successMessage = signal(null);
      this._providers = [...Doctors, ...Physicians];
    }
    ngOnInit() {
      this.appointmentForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        phone: ["", [Validators.pattern("^\\+(?:[0-9] ?){6,14}[0-9]$")]],
        date: [(/* @__PURE__ */ new Date()).toDateString(), Validators.required],
        department: ["", Validators.required],
        message: ["", [Validators.required, Validators.minLength(100)]]
      });
    }
    onSubmit() {
      return __async(this, null, function* () {
        if (!this.appointmentForm.valid) {
          this.errorMessage.set("Please fill all the fields");
          this.setMessageState(5e3);
          return;
        }
        try {
          this.isSending.set(true);
          const response = yield es_default.send("service_emnblen", "template_3bamjmo", __spreadValues({
            to_name: "there"
          }, this.appointmentForm.value), "IANMnCbipO_NGY3LK");
          if (response.status != 200) {
            this.isSending.set(false);
            this.errorMessage.set("Something unexpected happened while sending the message.Please try again.");
            this.setMessageState(5e3);
            return;
          }
          if (response.status == 200) {
            this.isSending.set(false);
            this.successMessage.set("We have received your message.");
            this.setMessageState(5e3);
            return;
          }
        } catch (error) {
          if (error?.status != 200) {
            this.isSending.set(false);
            this.errorMessage.set("Appointment not sent. Try again.");
            this.setMessageState(5e3);
            return;
          }
        }
      });
    }
    setMessageState(ms) {
      setTimeout(() => {
        this.errorMessage.set(null);
        this.successMessage.set(null);
      }, ms);
      return;
    }
  };
  _AppointmentComponent.\u0275fac = function AppointmentComponent_Factory(t) {
    return new (t || _AppointmentComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  _AppointmentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AppointmentComponent,
    selectors: [["sobol-appointment"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 55,
    vars: 10,
    consts: [[3, "successMessage", "errorMessage"], [1, "mt-36", "mb-28", "flex", "flex-col", "md:flex-row", "h-screen", "items-center"], [1, "bg-white", "w-full", "md:max-w-md", "lg:max-w-full", "md:mx-auto", "md:w-1/2", "h-screen", "px-6", "lg:px-16", "xl:px-24", "flex", "items-center", "justify-center"], [1, "w-full", "h-100"], [1, "header-text", "md:mx-0", "text-lg", "md:text-2xl"], [1, "text-gray-700", "mt-4"], [1, "mt-6", 3, "formGroup", "ngSubmit"], [1, "block", "text-gray-700"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter Full Name", "autofocus", "", 1, "w-full", "px-4", "py-3", "rounded", "bg-gray-200", "mt-1", "border", "focus:border-[#003367]", "focus:bg-white", "focus:outline-none"], ["class", "text-red-500"], ["type", "text", "id", "email", "formControlName", "email", "placeholder", "example@gmail.com", 1, "w-full", "px-4", "py-3", "rounded", "bg-gray-200", "mt-1", "border", "focus:border-[#003367]", "focus:bg-white", "focus:outline-none"], [1, "flex", "flex-col", "md:flex-row", "items-start", "mt-4", "md:-mx-4"], [1, "w-full", "md:mx-4"], ["type", "tel", "id", "phone", "formControlName", "phone", "placeholder", "Enter Phone Number", 1, "w-full", "px-4", "py-3", "rounded", "bg-gray-200", "mt-1", "border", "focus:border-[#003367]", "focus:bg-white", "focus:outline-none"], [1, "w-full", "md:mx-4", "mt-4", "md:mt-0"], [1, "relative", "mt-1"], ["id", "department", "formControlName", "department", 1, "w-full", "px-4", "py-3", "rounded", "bg-gray-200", "border", "focus:border-[#003367]", "focus:bg-white", "focus:outline-none", "appearance-none"], ["value", ""], ["value", "Joint Replacement"], ["value", "Sports Medicine"], ["value", "Physical Therapy"], ["value", "Spin Care"], [1, "pointer-events-none", "absolute", "inset-y-0", "right-0", "flex", "items-center", "px-4", "text-gray-700"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", 1, "fill-current", "h-4", "w-4"], ["d", "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"], [1, "w-full", "mt-4"], ["id", "message", "formControlName", "message", "placeholder", "Write message", "rows", "3", 1, "w-full", "px-4", "py-3", "rounded", "bg-gray-200", "mt-1", "border", "focus:border-[#003367]", "focus:bg-white", "focus:outline-none", "resize-none"], ["type", "submit", 1, "w-full", "block", "bg-[#003367]", "hover:bg-[#ff8686e6]", "focus:bg-[#ff8686e6]", "transition-all", "duration-[100ms]", "text-white", "font-semibold", "rounded", "px-4", "py-3", "mt-12"], [1, "bg-blue-teal-gradient", "justify-center", "cover", "hidden", "text-white", "lg:block", "w-full", "md:w-1/2", "h-[112vh]"], [1, "text-center", "text-white", "font-bold", "text-[3rem]", "mt-36"], [1, "text-red-500"]],
    template: function AppointmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "sobol-alert", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, " Book your appointment ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, " You can enjoy your well being again by doing just one thing now! Book your appointment with us. It takes just 20s to book your appointment with us. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "form", 6);
        \u0275\u0275listener("ngSubmit", function AppointmentComponent_Template_form_ngSubmit_8_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(9, "div")(10, "label", 7);
        \u0275\u0275text(11, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 8);
        \u0275\u0275template(13, AppointmentComponent_Conditional_13_Template, 2, 0, "h6", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div")(15, "label", 7);
        \u0275\u0275text(16, "Your Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 10);
        \u0275\u0275template(18, AppointmentComponent_Conditional_18_Template, 2, 0, "h6", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11)(20, "div", 12)(21, "label", 7);
        \u0275\u0275text(22, "Phone Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 13);
        \u0275\u0275template(24, AppointmentComponent_Conditional_24_Template, 2, 0, "h6", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 14)(26, "label", 7);
        \u0275\u0275text(27, "Treatment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 15)(29, "select", 16)(30, "option", 17);
        \u0275\u0275text(31, "Select Department");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "option", 18);
        \u0275\u0275text(33, "Joint Replacement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "option", 19);
        \u0275\u0275text(35, "Sports Medicine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "option", 20);
        \u0275\u0275text(37, "Physical Therapy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "option", 21);
        \u0275\u0275text(39, "Spin Care");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 23);
        \u0275\u0275element(42, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(43, AppointmentComponent_Conditional_43_Template, 2, 0, "h6", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(44, "div", 25)(45, "label", 7);
        \u0275\u0275text(46, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "textarea", 26);
        \u0275\u0275template(48, AppointmentComponent_Conditional_48_Template, 2, 0, "h6", 9)(49, AppointmentComponent_Conditional_49_Template, 2, 0, "h6", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 27);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "div", 28)(53, "h1", 29);
        \u0275\u0275text(54, " Make an appointment and will get back to you within 5 minutes ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        \u0275\u0275property("successMessage", ctx.successMessage())("errorMessage", ctx.errorMessage());
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.appointmentForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(13, ((tmp_3_0 = ctx.appointmentForm.get("name")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.appointmentForm.get("name")) == null ? null : tmp_3_0.hasError("required")) ? 13 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(18, ((tmp_4_0 = ctx.appointmentForm.get("email")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.appointmentForm.get("email")) == null ? null : tmp_4_0.hasError("required")) ? 18 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(24, ((tmp_5_0 = ctx.appointmentForm.get("phone")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.appointmentForm.get("phone")) == null ? null : tmp_5_0.hasError("pattern")) ? 24 : -1);
        \u0275\u0275advance(19);
        \u0275\u0275conditional(43, ((tmp_6_0 = ctx.appointmentForm.get("department")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.appointmentForm.get("department")) == null ? null : tmp_6_0.hasError("required")) ? 43 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(48, ((tmp_7_0 = ctx.appointmentForm.get("message")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.appointmentForm.get("message")) == null ? null : tmp_7_0.hasError("required")) ? 48 : -1);
        \u0275\u0275advance(1);
        \u0275\u0275conditional(49, ((tmp_8_0 = ctx.appointmentForm.get("message")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.appointmentForm.get("message")) == null ? null : tmp_8_0.hasError("minlength")) ? 49 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.isSending() ? "Booking..." : "Book Appointment", " ");
      }
    },
    dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, AlertComponent],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let AppointmentComponent2 = _AppointmentComponent;
  return AppointmentComponent2;
})();

// src/app/pages/contact/contact.component.ts
function ContactComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 22);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 22);
    \u0275\u0275text(1, "Invalid phone number format.");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 22);
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275text(1, "Message is required.");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 22);
    \u0275\u0275text(1, " Message should be equal or greater than 150 characters. ");
    \u0275\u0275elementEnd();
  }
}
var ContactComponent = /* @__PURE__ */ (() => {
  const _ContactComponent = class _ContactComponent {
    constructor(fb) {
      this.fb = fb;
      this.isSending = signal(false);
      this.errorMessage = signal(null);
      this.successMessage = signal(null);
    }
    ngOnInit() {
      this.contactForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        phone: ["", [Validators.pattern("^\\+(?:[0-9] ?){6,14}[0-9]$")]],
        date: [(/* @__PURE__ */ new Date()).toDateString(), Validators.required],
        message: ["", [Validators.required, Validators.minLength(100)]]
      });
    }
    onSubmit() {
      return __async(this, null, function* () {
        if (!this.contactForm.valid) {
          this.errorMessage.set("Please fill all the fields");
          this.setMessageState(5e3);
          return;
        }
        try {
          this.isSending.set(true);
          const response = yield es_default.send("service_emnblen", "template_pc53t6b", __spreadValues({
            to_name: "there"
          }, this.contactForm.value), "IANMnCbipO_NGY3LK");
          if (response.status != 200) {
            this.isSending.set(false);
            this.errorMessage.set("Something unexpected happened while sending the message.Please try again.");
            this.setMessageState(5e3);
            return;
          }
          if (response.status == 200) {
            this.isSending.set(false);
            this.successMessage.set("We have received your message.");
            this.setMessageState(5e3);
            return;
          }
        } catch (error) {
          if (error?.status != 200) {
            this.isSending.set(false);
            this.errorMessage.set("Message not sent. Try again.");
            this.setMessageState(5e3);
            return;
          }
        }
      });
    }
    setMessageState(ms) {
      setTimeout(() => {
        this.errorMessage.set(null);
        this.successMessage.set(null);
      }, ms);
      return;
    }
  };
  _ContactComponent.\u0275fac = function ContactComponent_Factory(t) {
    return new (t || _ContactComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  _ContactComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ContactComponent,
    selectors: [["sobol-contact"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 38,
    vars: 9,
    consts: [[3, "successMessage", "errorMessage"], [1, "mt-[7rem]", "mb-28", "flex", "flex-col", "md:flex-row", "h-screen", "items-center"], [1, "bg-white", "w-full", "md:max-w-md", "lg:max-w-full", "md:mx-auto", "md:w-1/2", "h-screen", "px-6", "lg:px-16", "xl:px-24", "flex", "items-center", "justify-center"], [1, "w-full", "h-100"], [1, "header-text", "md:mx-0"], [1, "text-gray-700", "mt-4"], [1, "mt-6", 3, "formGroup", "ngSubmit"], [1, "block", "text-gray-700"], ["type", "text", "name", "name", "id", "name", "formControlName", "name", "placeholder", "Enter Full Name", "autofocus", "", 1, "w-full", "px-4", "py-3", "rounded", "bg-gray-200", "mt-1", "border", "focus:border-[#003367]", "focus:bg-white", "focus:outline-none"], ["class", "text-red-500"], [1, "flex", "flex-col", "md:flex-row", "items-start", "mt-4", "md:-mx-4"], [1, "w-full", "md:mx-4"], ["type", "tel", "name", "phone", "formControlName", "phone", "id", "Phone", "placeholder", "+1562-789-1935", 1, "w-full", "px-4", "py-3", "rounded", "bg-gray-200", "mt-1", "border", "focus:border-[#003367]", "focus:bg-white", "focus:outline-none"], [1, "w-full", "md:mx-4", "mt-4", "md:mt-0"], [1, "relative", "mt-1"], ["name", "email", "id", "email", "formControlName", "email", "placeholder", "example@gmail.com", 1, "w-full", "px-4", "py-3", "rounded", "bg-gray-200", "border", "focus:border-[#003367]", "focus:bg-white", "focus:outline-none", "appearance-none"], [1, "pointer-events-none", "absolute", "inset-y-0", "right-0", "flex", "items-center", "px-4", "text-gray-700"], [1, "w-full", "mt-4"], ["name", "message", "id", "message", "formControlName", "message", "placeholder", "Write message", "rows", "3", 1, "w-full", "px-4", "py-3", "rounded", "bg-gray-200", "mt-1", "border", "focus:border-[#003367]", "focus:bg-white", "focus:outline-none", "resize-none"], ["type", "submit", 1, "w-full", "block", "bg-[#003367]", "transition-all", "duration-[100ms]", "hover:bg-[#ff8686e6]", "focus:bg-[#ff8686e6]", "text-white", "font-semibold", "rounded", "px-4", "py-3", "mt-[5rem]"], [1, "bg-blue-teal-gradient", "justify-center", "cover", "hidden", "text-white", "lg:block", "w-full", "md:w-1/2", "h-screen"], [1, "text-center", "text-white", "font-bold", "text-[3rem]", "mt-36"], [1, "text-red-500"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "sobol-alert", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, "Get In Touch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, " We will be exited to get in touch with you! let us know if you have anything to discuss with us--we gat you covered. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "form", 6);
        \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_8_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(9, "div")(10, "label", 7);
        \u0275\u0275text(11, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 8);
        \u0275\u0275template(13, ContactComponent_Conditional_13_Template, 2, 0, "h6", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "label", 7);
        \u0275\u0275text(17, "Phone Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275template(19, ContactComponent_Conditional_19_Template, 2, 0, "h6", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13)(21, "label", 7);
        \u0275\u0275text(22, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 14);
        \u0275\u0275element(24, "input", 15);
        \u0275\u0275template(25, ContactComponent_Conditional_25_Template, 2, 0, "h6", 9);
        \u0275\u0275element(26, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 17)(28, "label", 7);
        \u0275\u0275text(29, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "textarea", 18);
        \u0275\u0275template(31, ContactComponent_Conditional_31_Template, 2, 0, "h6")(32, ContactComponent_Conditional_32_Template, 2, 0, "h6", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 19);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(35, "div", 20)(36, "h1", 21);
        \u0275\u0275text(37, " Do you have something important to discuss with us! Let get in touch. ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275property("successMessage", ctx.successMessage())("errorMessage", ctx.errorMessage());
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.contactForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(13, ((tmp_3_0 = ctx.contactForm.get("name")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.contactForm.get("name")) == null ? null : tmp_3_0.hasError("required")) ? 13 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(19, ((tmp_4_0 = ctx.contactForm.get("phone")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.contactForm.get("phone")) == null ? null : tmp_4_0.hasError("pattern")) ? 19 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(25, ((tmp_5_0 = ctx.contactForm.get("email")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.contactForm.get("email")) == null ? null : tmp_5_0.hasError("required")) ? 25 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(31, ((tmp_6_0 = ctx.contactForm.get("message")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.contactForm.get("message")) == null ? null : tmp_6_0.hasError("required")) ? 31 : -1);
        \u0275\u0275advance(1);
        \u0275\u0275conditional(32, ((tmp_7_0 = ctx.contactForm.get("message")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.contactForm.get("message")) == null ? null : tmp_7_0.hasError("minlength")) ? 32 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.isSending() ? "Sending..." : "Send Message", " ");
      }
    },
    dependencies: [CommonModule, AlertComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let ContactComponent2 = _ContactComponent;
  return ContactComponent2;
})();

// src/app/components/notfound/notfound.component.ts
var NotfoundComponent = /* @__PURE__ */ (() => {
  const _NotfoundComponent = class _NotfoundComponent {
  };
  _NotfoundComponent.\u0275fac = function NotfoundComponent_Factory(t) {
    return new (t || _NotfoundComponent)();
  };
  _NotfoundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NotfoundComponent,
    selectors: [["app-notfound"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 15,
    vars: 0,
    consts: [[1, "grid", "min-h-full", "place-items-center", "bg-white", "px-6", "py-24", "sm:py-32", "lg:px-8"], [1, "text-center"], [1, "text-base", "font-semibold", "text-[#003367]"], [1, "mt-4", "text-3xl", "font-bold", "tracking-tight", "text-gray-900", "sm:text-5xl"], [1, "mt-6", "text-base", "leading-7", "text-gray-600"], [1, "mt-10", "flex", "items-center", "justify-center", "gap-x-6"], ["routerLink", "/", 1, "rounded-md", "bg-[#ff8686e6]", "px-3.5", "py-2.5", "text-sm", "font-semibold", "text-white", "shadow-sm", "hover:bg-[#003367]", "focus-visible:outline", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-[#003367]"], ["routerLink", "/contact", 1, "text-sm", "font-semibold", "text-[#003367]", "hover:text-[#ee6565e6]"], ["aria-hidden", "true"]],
    template: function NotfoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "p", 2);
        \u0275\u0275text(3, "404");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 3);
        \u0275\u0275text(5, " Page not found ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Sorry, we couldn\u2019t find the page you\u2019re looking for. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
        \u0275\u0275text(10, "Go back home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 7);
        \u0275\u0275text(12, "Contact support ");
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "\u2192");
        \u0275\u0275elementEnd()()()()();
      }
    },
    dependencies: [RouterLink],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let NotfoundComponent2 = _NotfoundComponent;
  return NotfoundComponent2;
})();

// src/app/app.routes.ts
var routes = [{
  path: "",
  component: HomeComponent,
  title: "Home"
}, {
  path: "about",
  component: AboutComponent,
  title: "About",
  children: [{
    path: "detail",
    component: DetailComponent,
    title: "More About Us"
  }]
}, {
  path: "contact",
  component: ContactComponent,
  title: "Contact"
}, {
  path: "appointment",
  component: AppointmentComponent,
  title: "Appointment"
}, {
  path: "page-not-found",
  component: NotfoundComponent,
  title: "Page not found"
}, {
  path: "**",
  redirectTo: "page-not-found",
  pathMatch: "full"
}];

// src/app/extension/title.strategy.ts
var TemplatePageTitleStrategy = /* @__PURE__ */ (() => {
  const _TemplatePageTitleStrategy = class _TemplatePageTitleStrategy extends TitleStrategy {
    constructor(title) {
      super();
      this.title = title;
    }
    updateTitle(routerState) {
      const title = this.buildTitle(routerState);
      if (title !== void 0) {
        this.title.setTitle(`SobolOrthomed | ${title}`);
      }
    }
  };
  _TemplatePageTitleStrategy.\u0275fac = function TemplatePageTitleStrategy_Factory(t) {
    return new (t || _TemplatePageTitleStrategy)(\u0275\u0275inject(Title));
  };
  _TemplatePageTitleStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TemplatePageTitleStrategy,
    factory: _TemplatePageTitleStrategy.\u0275fac,
    providedIn: "root"
  });
  let TemplatePageTitleStrategy2 = _TemplatePageTitleStrategy;
  return TemplatePageTitleStrategy2;
})();

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes, withInMemoryScrolling({
    anchorScrolling: "enabled",
    scrollPositionRestoration: "enabled"
  })), provideClientHydration(), {
    provide: TitleStrategy,
    useClass: TemplatePageTitleStrategy
  }]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [provideServerRendering()]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v17.0.4
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-3XDKYCO7.mjs.map
